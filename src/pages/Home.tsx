import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Cloud, Server, Code, Users, Terminal, Database, ChevronRight, Github, Linkedin, Calendar, MapPin, Mail, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';
import { PageTransition } from '../components/PageTransition';
import { eventsData } from '../data/events';
import { HeroTerminal } from '../components/HeroTerminal';
import { TechTicker } from '../components/TechTicker';

/* ─── Pixel block cluster decoration ─── */
const BLOCK_COLORS = ['#FF9900','#A855F7','#38BDF8','#EC4899','#22C55E','#FF9900','#38BDF8','#A855F7','#22C55E','#EC4899'];
const GRID_COLS = 6;
const GRID_ROWS = 5;

function BlockCluster({ opacity = 0.7, size = 10, gap = 5 }: { opacity?: number; size?: number; gap?: number }) {
  const dots = Array.from({ length: GRID_COLS * GRID_ROWS });
  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${GRID_COLS}, ${size}px)`, gap }}>
      {dots.map((_, i) => {
        const show = Math.random() > 0.4;
        return (
          <div
            key={i}
            style={{
              width: size, height: size, borderRadius: 1,
              background: show ? BLOCK_COLORS[i % BLOCK_COLORS.length] : 'transparent',
              opacity: show ? opacity : 0,
            }}
          />
        );
      })}
    </div>
  );
}

/* ─── Animated stat counter ─── */
const StatCounter = ({ end, label, accent = '#FF9900' }: { end: number; label: string; accent?: string }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const inc = end / (duration / 16);
    const timer = setInterval(() => {
      start += inc;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else { setCount(Math.floor(start)); }
    }, 16);
    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="stat-block" style={{ borderLeftColor: accent }}>
      <span className="block text-3xl md:text-4xl font-mono font-bold mb-1" style={{ color: accent }}>
        {count}+
      </span>
      <span className="text-xs font-mono text-text-secondary uppercase tracking-widest">{label}</span>
    </div>
  );
};

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } } };

export default function Home() {
  const featuredEvent = eventsData.find(e => e.isFeatured) || eventsData[0];
  const upcomingEvents = eventsData.filter(e => e.status === 'upcoming').slice(0, 3);

  const FEATURES = [
    { icon: Cloud,    title: 'Cloud Workshops',        desc: 'Hands-on AWS learning sessions and deep dives into cloud services.',         accent: '#FF9900', border: 'bl-orange' },
    { icon: Server,   title: 'Hands-on Labs',           desc: 'Deploy real applications on AWS infrastructure with guided labs.',            accent: '#38BDF8', border: 'bl-blue'   },
    { icon: Code,     title: 'Student Projects',        desc: 'Build real-world cloud solutions collaboratively with peers.',               accent: '#A855F7', border: 'bl-purple' },
    { icon: Terminal, title: 'Certification Guidance',  desc: 'Prepare for AWS certifications with structured peer support.',               accent: '#22C55E', border: 'bl-green'  },
    { icon: Users,    title: 'Community Events',        desc: 'Networking events, hackathons, and speaker sessions.',                       accent: '#EC4899', border: 'bl-pink'   },
    { icon: Database, title: 'Resource Library',        desc: 'Curated learning materials, cheat sheets, and project templates.',          accent: '#38BDF8', border: 'bl-blue'   },
  ];

  return (
    <PageTransition className="w-full">

      {/* ═══ HERO ═══════════════════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden" style={{ background: '#0B1220' }}>
        {/* Animated scrolling grid */}
        <div className="absolute inset-0 bg-grid-animated opacity-100 pointer-events-none" />

        {/* Corner block clusters */}
        <div className="absolute top-16 left-0 opacity-30 pointer-events-none hidden xl:block">
          <BlockCluster opacity={0.8} size={10} gap={5} />
        </div>
        <div className="absolute bottom-12 right-4 opacity-25 float-slow pointer-events-none hidden lg:block">
          <BlockCluster opacity={0.6} size={8} gap={4} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* ── Left: Text content ── */}
            <motion.div variants={stagger} initial="hidden" animate="visible" className="flex-1 min-w-0">

              {/* Status badge */}
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
                <span className="terminal-tag glow-pulse-blue" style={{ color: '#22C55E', borderColor: '#22C55E55' }}>● LIVE</span>
                <span className="font-mono text-xs text-text-secondary tracking-widest uppercase">Now accepting new members</span>
              </motion.div>

              {/* Heading */}
              <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-heading font-black mb-4 leading-[1.05] tracking-tight">
                <span className="text-white">AWS Student</span><br />
                <span className="text-white">Builder Group</span><br />
                <span style={{ color: '#FF9900' }}>GCOE Kolhapur</span>
              </motion.h1>

              {/* Accent line */}
              <motion.div variants={fadeUp} className="section-line my-6" />

              {/* Sub */}
              <motion.p variants={fadeUp} className="text-base text-text-secondary mb-10 max-w-lg leading-relaxed">
                Empowering students to{' '}
                <span style={{ color: '#38BDF8' }} className="font-semibold">learn</span>,{' '}
                <span style={{ color: '#A855F7' }} className="font-semibold">build</span>, and{' '}
                <span style={{ color: '#FF9900' }} className="font-semibold">launch</span>{' '}
                their cloud careers through hands-on AWS experiences.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <a href="https://www.meetup.com/aws-cloud-club-at-gcoe-kolhapur/" target="_blank" rel="noopener noreferrer"
                   className="pixel-button px-8 py-3.5 text-sm">
                  Join the Group
                </a>
                <button onClick={() => document.getElementById('upcoming-events')?.scrollIntoView({ behavior: 'smooth' })}
                        className="pixel-button-secondary px-8 py-3.5 text-sm">
                  Explore Events
                </button>
              </motion.div>
            </motion.div>

            {/* ── Right: Terminal window ── */}
            <div className="flex-shrink-0 hidden lg:flex flex-col items-end gap-6">
              <HeroTerminal />
              {/* Mini block cluster decoration under terminal */}
              <div className="self-end opacity-50 float-medium">
                <BlockCluster opacity={1} size={9} gap={4} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TECH TICKER ════════════════════════════════════════════════ */}
      <TechTicker />

      {/* ═══ STATS ══════════════════════════════════════════════════════ */}
      <section className="py-14" style={{ background: '#080E1A', borderBottom: '1px solid #1E2A3A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCounter end={700} label="Members Joined"    accent="#FF9900" />
            <StatCounter end={3}   label="Events Conducted"  accent="#38BDF8" />
            <StatCounter end={3}   label="Projects Built"    accent="#A855F7" />
            <StatCounter end={1}   label="Workshops Hosted"  accent="#22C55E" />
          </div>
        </div>
      </section>

      {/* ═══ FEATURED EVENT ══════════════════════════════════════════════ */}
      {featuredEvent?.isFeatured && (
        <section className="py-20 bg-grid-dense" style={{ background: '#0B1220' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5 }}
                className="lg:w-1/2 w-full"
              >
                <div className="relative overflow-hidden" style={{ border: '1px solid #1E2A3A', borderRadius: 3 }}>
                  <img
                    src={featuredEvent.image || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072'}
                    alt={featuredEvent.title}
                    className="w-full aspect-[4/3] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="terminal-tag" style={{ color: '#FF9900', borderColor: '#FF9900' }}>
                      ★ Featured {featuredEvent.type}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}
                className="lg:w-1/2 w-full"
              >
                <div className="section-label">Featured Event</div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2 leading-tight">{featuredEvent.title}</h2>
                <div className="section-line mb-6" />
                <p className="text-text-secondary mb-8 leading-relaxed">{featuredEvent.desc}</p>

                <div className="space-y-3 mb-8">
                  {[
                    { icon: Calendar, text: featuredEvent.date },
                    { icon: Clock,    text: featuredEvent.time },
                    { icon: MapPin,   text: featuredEvent.location },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="icon-box">
                        <item.icon className="w-4 h-4" style={{ color: '#FF9900' }} />
                      </div>
                      <span className="font-mono text-sm text-text-secondary">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {featuredEvent.link && (
                    <a href={featuredEvent.link} target="_blank" rel="noopener noreferrer" className="pixel-button px-7 py-3 text-sm">
                      Register Now
                    </a>
                  )}
                  <Link to={`/events/${featuredEvent.id}`} className="pixel-button-secondary px-7 py-3 text-sm">
                    View Details
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* ═══ WHAT WE DO ══════════════════════════════════════════════════ */}
      <section className="py-20" style={{ background: '#111827' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Left-aligned header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.4 }}
            className="mb-12"
          >
            <div className="section-label">What We Do</div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Our Activities</h2>
            <div className="section-line mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((f, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.07 }}
                whileHover={{ y: -4 }}
                className={`dev-card card-shine p-6 ${f.border} group`}
              >
                <div className="icon-box mb-5" style={{ borderColor: f.accent + '44' }}>
                  <f.icon className="w-5 h-5" style={{ color: f.accent }} />
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-2 group-hover:text-aws-orange transition-colors duration-200">{f.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ UPCOMING EVENTS ═════════════════════════════════════════════ */}
      <section id="upcoming-events" className="py-20 bg-grid-pattern" style={{ background: '#0B1220' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.4 }}
            className="flex justify-between items-end mb-12"
          >
            <div>
              <div className="section-label">Events</div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Upcoming Events</h2>
              <div className="section-line section-line-blue mt-4" />
            </div>
            <Link to="/events" className="hidden md:flex items-center gap-1 font-mono text-xs text-cloud-blue hover:text-aws-orange transition-colors duration-200 uppercase tracking-widest">
              View All <ChevronRight className="w-3 h-3" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {upcomingEvents.length > 0 ? (
              upcomingEvents.map((event, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="dev-card card-shine bl-blue p-6 flex flex-col h-full"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="w-3.5 h-3.5 text-cloud-blue" />
                    <span className="font-mono text-xs text-cloud-blue tracking-wider">{event.date}</span>
                  </div>
                  <h3 className="text-base font-heading font-bold text-white mb-3">{event.title}</h3>
                  <p className="text-text-secondary text-sm mb-6 flex-grow line-clamp-3">{event.desc}</p>
                  <Link to={`/events/${event.id}`} className="pixel-button-secondary py-2 w-full text-xs text-center">
                    View Details
                  </Link>
                </motion.div>
              ))
            ) : (
              <div className="col-span-3 text-center py-12 dev-card">
                <p className="text-text-secondary text-sm">No upcoming events. Check back soon!</p>
              </div>
            )}
          </div>

          <div className="mt-6 text-center md:hidden">
            <Link to="/events" className="font-mono text-xs text-cloud-blue tracking-widest uppercase">View All Events →</Link>
          </div>
        </div>
      </section>

      {/* ═══ FEATURED PROJECTS ══════════════════════════════════════════ */}
      <section className="py-20" style={{ background: '#111827' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.4 }}
            className="mb-12"
          >
            <div className="section-label">Projects</div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Featured Projects</h2>
            <div className="section-line section-line-purple mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Serverless Attendance System', desc: 'Facial recognition based attendance using Rekognition and Lambda.', tech: ['Lambda','DynamoDB','Rekognition'], accent: '#FF9900' },
              { title: 'IoT Health Dashboard',          desc: 'Real-time health monitoring using AWS IoT Core and React.',         tech: ['IoT Core','Amplify','React'],     accent: '#38BDF8' },
              { title: 'Cloud File Storage',            desc: 'Secure file sharing platform built on S3 and Cognito.',             tech: ['S3','Cognito','API Gateway'],     accent: '#A855F7' },
            ].map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="dev-card card-shine p-6 group"
                style={{ borderLeftColor: project.accent, borderLeftWidth: 3 }}
              >
                <div className="flex justify-between items-start mb-5">
                  <div className="icon-box" style={{ borderColor: project.accent + '44' }}>
                    <Database className="w-4 h-4" style={{ color: project.accent }} />
                  </div>
                  <a href="#" className="text-text-secondary hover:text-white transition-colors duration-200">
                    <Github className="w-4 h-4" />
                  </a>
                </div>
                <h3 className="text-base font-heading font-bold text-white mb-2 group-hover:text-aws-orange transition-colors duration-200">{project.title}</h3>
                <p className="text-text-secondary text-sm mb-5 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="font-mono text-xs px-2 py-0.5" style={{ background: '#111827', border: '1px solid #1E2A3A', color: '#9CA3AF', borderRadius: 2 }}>
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex justify-start">
            <Link to="/projects" className="pixel-button-secondary px-6 py-2.5 text-xs">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* ═══ TEAM PREVIEW ═══════════════════════════════════════════════ */}
      <section className="py-20 bg-grid-dense" style={{ background: '#0B1220', borderTop: '1px solid #1E2A3A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.4 }}
            className="mb-12"
          >
            <div className="section-label">Team</div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Meet the Team</h2>
            <div className="section-line mt-4" />
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { id: 'varsha-gaikwad',   name: 'Dr. Varsha Gaikwad', role: 'Faculty Coordinator', image: 'https://i.ibb.co/xqY0bSS3/Varsha-maam.jpg' },
              { id: 'shardul-kolekar',  name: 'Shardul Kolekar',    role: 'Captain (President)',  image: 'https://i.ibb.co/vCkgggZW/Whats-App-Image-2026-03-15-at-4-00-18-PM.jpg',   linkedin: 'https://www.linkedin.com/in/shardulkolekar', email: 'mailto:kolekarshardul23@gmail.com' },
              { id: 'vidula',           name: 'Vidula Powar',       role: 'General Secretary',   image: 'https://i.ibb.co/5W0h4c8y/Whats-App-Image-2026-03-17-at-9-01-47-AM.jpg',  linkedin: 'https://www.linkedin.com/in/vidula-p-372734294', email: 'mailto:powarvidula11@gmail.com' },
              { id: 'gopal',            name: 'Gopal Lakwal',       role: 'Joint Secretary',     image: 'https://i.ibb.co/4wBwTHtx/file-000000002ef871fab1e8c53a2708be68-Gopal-lakwal.png', linkedin: 'https://www.linkedin.com/in/gopal-lakwal-461467383', email: 'mailto:gopallakwal526@gmail.com' },
              { id: 'shubham',          name: 'Shubham Sonwane',    role: 'Joint Secretary',     image: 'https://i.ibb.co/LDDfM6hn/Gemini-Generated-Image-nbpxu8nbpxu8nbpx-Shubham-Sonwane.png', linkedin: 'https://www.linkedin.com/in/shubham-sonwane-b9b056312', email: 'mailto:sonwaneshubham38@gmail.com' },
            ].map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.07 }}
                whileHover={{ y: -4 }}
                className="dev-card group overflow-hidden"
              >
                <Link to={`/team/${member.id}`}>
                  {/* Square photo */}
                  <div className="aspect-square overflow-hidden" style={{ borderBottom: '1px solid #1E2A3A' }}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-heading font-bold text-white leading-tight mb-1">{member.name}</h3>
                    <p className="font-mono text-xs text-aws-orange">{member.role}</p>
                  </div>
                </Link>
                <div className="px-4 pb-4 flex gap-2">
                  {(member as any).linkedin && (
                    <a href={(member as any).linkedin} target="_blank" rel="noopener noreferrer"
                       className="icon-box w-7 h-7 hover:border-cloud-blue transition-colors duration-200">
                      <Linkedin className="w-3 h-3 text-text-secondary" />
                    </a>
                  )}
                  {(member as any).email && (
                    <a href={(member as any).email}
                       className="icon-box w-7 h-7 hover:border-aws-orange transition-colors duration-200">
                      <Mail className="w-3 h-3 text-text-secondary" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8">
            <Link to="/team" className="pixel-button-secondary px-6 py-2.5 text-xs">View Full Team</Link>
          </div>
        </div>
      </section>

      {/* ═══ CTA ════════════════════════════════════════════════════════ */}
      <section className="py-20 relative overflow-hidden" style={{ background: '#111827', borderTop: '1px solid #1E2A3A' }}>
        {/* Decorative blocks */}
        <div className="absolute right-0 top-0 bottom-0 w-64 overflow-hidden opacity-20 pointer-events-none hidden lg:block">
          <div className="float-slow mt-8 ml-8"><BlockCluster opacity={1} size={14} gap={7} /></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.4 }}
            className="max-w-2xl"
          >
            <div className="section-label">Get Started</div>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-4 leading-tight">
              Start Your Cloud<br />Journey Today
            </h2>
            <div className="section-line mb-6" />
            <p className="text-text-secondary mb-8 leading-relaxed">
              Join the AWS Student Builder Group and learn cloud computing through workshops, projects, and community learning.
            </p>
            <Link
              to="/join"
              onClick={() => setTimeout(() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' }), 300)}
              className="pixel-button px-10 py-4 text-sm"
            >
              Join the Group
            </Link>
          </motion.div>
        </div>
      </section>

    </PageTransition>
  );
}
