import { motion } from 'motion/react';
import { MessageSquare, Linkedin, Instagram, Send, Users } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

const CHANNELS = [
  { href: 'https://www.meetup.com/aws-cloud-club-at-gcoe-kolhapur/', icon: Users,        label: 'Meetup Group',      sub: 'Join our events and meet the community.',             color: '#EC4899' },
  { href: 'https://chat.whatsapp.com/KFima5xdcxW2dQsZN0C5SP',        icon: MessageSquare, label: 'WhatsApp Community', sub: 'Get instant updates and announcements.',             color: '#22C55E' },
  { href: 'https://www.linkedin.com/company/aws-cloud-club-gcoe-kolhapur/', icon: Linkedin, label: 'LinkedIn Page',    sub: 'Follow our professional journey and achievements.', color: '#38BDF8' },
  { href: 'https://www.instagram.com/awscc.gcoe.kolhapur?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', icon: Instagram, label: 'Instagram', sub: 'Event photos and behind-the-scenes.', color: '#A855F7' },
];

export default function Join() {
  return (
    <PageTransition className="w-full">

      {/* ── PAGE HEADER ── */}
      <section className="pt-32 pb-20 bg-grid-animated" style={{ background: '#0B1220' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <div className="section-label">Get Involved</div>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-4 leading-tight">
              Join The<br /><span style={{ color: '#FF9900' }}>Builder Group</span>
            </h1>
            <div className="section-line" />
            <p className="text-text-secondary max-w-xl mt-6 leading-relaxed">
              Become a part of GCOEK's fastest-growing tech community. Learn, build, and grow with us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-20" style={{ background: '#111827', borderTop: '1px solid #1E2A3A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Google Form */}
            <motion.div
              id="application-form"
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45, delay: 0.1 }}
              className="dev-card overflow-hidden"
            >
              <div className="flex items-center gap-3 px-6 py-4" style={{ borderBottom: '1px solid #1E2A3A', background: '#0B1220' }}>
                <Send className="w-4 h-4" style={{ color: '#FF9900' }} />
                <span className="font-heading font-bold text-white">Membership Application</span>
                <span className="terminal-tag ml-auto">Google Forms</span>
              </div>
              <div style={{ height: 820, overflowY: 'hidden' }}>
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSddwOHTiDieyXOiyQhxKXd-BgFoHbBRiPkDL6X8kntx4nGtUw/viewform?embedded=true"
                  width="100%"
                  height="820"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  style={{ display: 'block', minHeight: 820 }}
                >
                  Loading…
                </iframe>
              </div>
            </motion.div>

            {/* Community links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45, delay: 0.2 }}
            >
              <div className="section-label">Community</div>
              <h2 className="text-3xl font-heading font-bold text-white mb-2">Connect With Us</h2>
              <div className="section-line mb-8" />
              <p className="text-text-secondary mb-8 leading-relaxed">
                Can't wait to get started? Join our community channels to stay updated on the latest events, resources, and discussions.
              </p>

              <div className="space-y-4">
                {CHANNELS.map(({ href, icon: Icon, label, sub, color }, i) => (
                  <motion.a
                    key={i}
                    href={href} target="_blank" rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.07 }}
                    whileHover={{ x: -4 }}
                    className="dev-card card-shine flex items-center gap-5 p-5 group"
                    style={{ borderLeftColor: color, borderLeftWidth: 3 }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = color)}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#1E2A3A'; e.currentTarget.style.borderLeftColor = color; }}
                  >
                    <div className="icon-box flex-shrink-0" style={{ borderColor: color + '44', background: color + '15' }}>
                      <Icon className="w-5 h-5" style={{ color }} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-white text-base group-hover:text-aws-orange transition-colors duration-200">{label}</h3>
                      <p className="text-text-secondary text-sm mt-0.5">{sub}</p>
                    </div>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <span className="font-mono text-xs" style={{ color }}>→</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </PageTransition>
  );
}
