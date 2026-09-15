import { useState, useEffect } from 'react';
import { eventsData } from '../data/events';
import { MEETUP_MEMBERS } from '../data/stats';

export interface LiveStats {
  /** Live member count from Meetup.com (or hardcoded fallback) */
  members: number;
  /** Total events in events.ts */
  totalEvents: number;
  /** Past events used as a proxy for "projects built" */
  totalProjects: number;
  /** Workshops + Seminars from events.ts */
  totalWorkshops: number;
  /** True when members count was fetched live from the Netlify function */
  isLive: boolean;
  /** True while the initial fetch is in flight */
  isLoading: boolean;
}

/**
 * Fetches live member count from the Netlify serverless function
 * (/.netlify/functions/meetup-members) and derives other stats from events.ts.
 *
 * Falls back gracefully to the hardcoded MEETUP_MEMBERS value when:
 *  - Running in local dev (function endpoint not available)
 *  - Netlify env vars (MEETUP_CLIENT_KEY / MEETUP_CLIENT_SECRET) not configured
 *  - Any network / API error occurs
 */
export function useLiveStats(): LiveStats {
  const [members, setMembers] = useState<number>(MEETUP_MEMBERS);
  const [isLive, setIsLive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Always derived from the local events data — no API needed
  const totalEvents = eventsData.length;
  const totalWorkshops = eventsData.filter(
    (e) => e.type === 'Workshop' || e.type === 'Seminar'
  ).length;
  const totalProjects = eventsData.filter((e) => e.status === 'past').length;

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const res = await fetch('/.netlify/functions/meetup-members', {
          signal: AbortSignal.timeout(5000), // 5 s timeout
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: { members: number; source: string } = await res.json();

        if (!cancelled && typeof data.members === 'number') {
          setMembers(data.members);
          setIsLive(data.source === 'live');
        }
      } catch {
        // Silently fall back — hardcoded value already set as initial state
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return { members, totalEvents, totalProjects, totalWorkshops, isLive, isLoading };
}
