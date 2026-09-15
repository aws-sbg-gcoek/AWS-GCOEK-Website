/**
 * Netlify Serverless Function: meetup-members
 *
 * Fetches the live member count for the AWS GCOEK Meetup group using
 * Meetup.com's GraphQL API (OAuth2 client credentials grant).
 *
 * Required environment variables (set in Netlify → Site Settings → Environment Variables):
 *   MEETUP_CLIENT_KEY    — your Meetup OAuth app's Client Key (Client ID)
 *   MEETUP_CLIENT_SECRET — your Meetup OAuth app's Client Secret
 *
 * Create an OAuth app at: https://www.meetup.com/api/oauth/list/
 *
 * Endpoint (when deployed): /.netlify/functions/meetup-members
 * Cache TTL: 1 hour (in-memory, per function instance)
 */

'use strict';

const GROUP_URLNAME = 'aws-sbg-at-government-college-of-engineering-kolhapur';
const FALLBACK_COUNT = 960; // Kept in sync with src/data/stats.ts
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

// Simple in-memory cache — survives across warm invocations of the same instance
let _cache = null;

// ── OAuth2 token fetch ───────────────────────────────────────────────────────
async function fetchOAuthToken(clientId, clientSecret) {
  const res = await fetch('https://secure.meetup.com/oauth2/access', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: 'client_credentials',
    }).toString(),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`OAuth token error ${res.status}: ${text}`);
  }
  const json = await res.json();
  if (!json.access_token) throw new Error('No access_token in OAuth response');
  return json.access_token;
}

// ── Meetup GraphQL query ─────────────────────────────────────────────────────
async function fetchMemberCount(token) {
  const query = `
    query {
      groupByUrlname(urlname: "${GROUP_URLNAME}") {
        memberships {
          count
        }
      }
    }
  `;
  const res = await fetch('https://api.meetup.com/gql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query }),
  });
  if (!res.ok) throw new Error(`Meetup GraphQL error: ${res.status}`);
  const json = await res.json();
  const count = json?.data?.groupByUrlname?.memberships?.count;
  if (typeof count !== 'number') {
    throw new Error(`Unexpected API response shape: ${JSON.stringify(json).slice(0, 200)}`);
  }
  return count;
}

// ── Handler ──────────────────────────────────────────────────────────────────
exports.handler = async () => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'public, max-age=3600, s-maxage=3600',
  };

  // Serve from cache if still fresh
  if (_cache && Date.now() - _cache.ts < CACHE_TTL_MS) {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ members: _cache.members, source: 'cache' }),
    };
  }

  const clientId = process.env.MEETUP_CLIENT_KEY;
  const clientSecret = process.env.MEETUP_CLIENT_SECRET;

  // No credentials — return hardcoded fallback (safe for local dev & first deploy)
  if (!clientId || !clientSecret) {
    console.warn('[meetup-members] Env vars not set — returning hardcoded fallback');
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ members: FALLBACK_COUNT, source: 'fallback' }),
    };
  }

  try {
    const token = await fetchOAuthToken(clientId, clientSecret);
    const members = await fetchMemberCount(token);
    _cache = { members, ts: Date.now() };
    console.log(`[meetup-members] Fetched live count: ${members}`);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ members, source: 'live' }),
    };
  } catch (err) {
    // Always return 200 with fallback — the UI should never break
    console.error('[meetup-members] API error:', err.message);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ members: FALLBACK_COUNT, source: 'fallback', error: err.message }),
    };
  }
};
