import { motion, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { Cloud, Server, Code, Terminal, Database, ChevronRight, Github, Linkedin, Calendar, Mail, ArrowUpRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { PageTransition } from '../components/PageTransition';
import { eventsData } from '../data/events';

const StatCounter = ({ end, label }: { end: number; label: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const inc = end / (1600 / 16);
    const t = setInterval(() => {
      start += inc;
      if (start >= end) { setCount(end); clearInterval(t); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(t);
  }, [inView, end]);
  return (
    <div ref={ref} className="flex flex-col items-center justify-center py-8 px-4 border-r border-border-color last:border-r-0">
      <span className="text-4xl md:text-5xl font-heading font-bold text-aws-orange mb-1 tabular-nums tracking-tight">{count}+</span>
      <span className="text-xs font-mono text-text-secondary uppercase tracking-widest">{label}</span>
    </div>
  );
};

const cv = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const iv = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 20 } } };

export default function Home() {
  const upcomingEvents = eventsData.filter(e => e.status === 'upcoming').slice(0, 3);

  return (
    <PageTransition className="w-full">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(255,153,0,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_80%,rgba(56,189,248,0.06),transparent)]" />

        {/* Floating orbs */}
        <motion.div animate={{ y: [0, -30, 0] }} transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-[8%] w-72 h-72 rounded-full bg-aws-orange/5 blur-[80px] pointer-events-none" />
        <motion.div animate={{ y: [0, 24, 0] }} transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute bottom-1/4 right-[10%] w-64 h-64 rounded-full bg-cloud-blue/5 blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <motion.div variants={cv} initial="hidden" animate="visible">

            {/* Pill badge */}
            <motion.div variants={iv} className="inline-flex items-center gap-2.5 mb-10">
              <div className="flex items-center gap-2 bg-cloud-secondary/80 border border-border-color rounded-full px-4 py-1.5 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-aws-orange animate-pulse" />
                <span className="text-[11px] font-mono text-text-secondary tracking-widest uppercase">Now accepting new members</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={iv} className="text-[clamp(3rem,10vw,7rem)] font-heading font-bold mb-6 tracking-[-0.03em] leading-[0.92]">
              <span className="block text-text-primary">AWS Cloud Club</span>
              <span className="block text-gradient-orange mt-1">GCOE Kolhapur</span>
            </motion.h1>

            {/* Sub */}
            <motion.p variants={iv} className="text-base md:text-lg text-text-secondary mb-12 max-w-lg mx-auto leading-relaxed font-light">
              Empowering students to{' '}
              <span className="text-cloud-blue font-normal">learn</span>,{' '}
              <span className="text-arcade-purple font-normal">build</span>, and{' '}
              <span className="text-aws-orange font-normal">launch</span> their cloud careers.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={iv} className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="https://www.meetup.com/aws-cloud-club-at-gcoe-kolhapur/" target="_blank" rel="noopener noreferrer"
                className="pixel-button px-8 py-3.5 w-full sm:w-auto text-center">
                Join the Club
              </a>
              <Link to="/events" className="pixel-button-secondary px-8 py-3.5 w-full sm:w-auto text-center">
                Explore Events
              </Link>
            </motion.div>

          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-cloud-navy to-transparent pointer-events-none" />
      </section>

      {/* ── STATS STRIP ── */}
      <div className="luxury-divider" />
      <section className="bg-cloud-secondary/20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border-color">
            <StatCounter end={400} label="Members" />
            <StatCounter end={2}   label="Events" />
            <StatCounter end={1}   label="Projects" />
            <StatCounter end={1}   label="Workshops" />
          </div>
        </div>
      </section>
      <div className="luxury-divider" />

      {/* ── WHAT WE DO ── */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-20">
            <p className="eyebrow mb-5">What we do</p>
            <h2 className="text-4xl md:text-6xl font-heading font-bold max-w-xl">
              Building Cloud Skills,<br />
              <span className="text-text-secondary font-light">Together.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Cloud,    title: 'Cloud Workshops',        desc: 'Hands-on AWS learning sessions and deep dives into core services.',  span: 'lg:col-span-2', accent: 'group-hover:text-cloud-blue' },
              { icon: Server,   title: 'Hands-on Labs',          desc: 'Deploy real applications on AWS infrastructure.',                    span: 'lg:col-span-1', accent: 'group-hover:text-aws-orange' },
              { icon: Code,     title: 'Student Projects',       desc: 'Build real-world cloud solutions collaboratively.',                  span: 'lg:col-span-1', accent: 'group-hover:text-arcade-purple' },
              { icon: Terminal, title: 'Certification Guidance', desc: 'Prepare for AWS certifications with structured peer support.',       span: 'lg:col-span-2', accent: 'group-hover:text-aws-orange' },
            ].map((f, idx) => (
              <motion.div key={idx}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.07 }}
                whileHover={{ y: -4 }}
                className={`glass-panel pixel-border p-8 group cursor-default ${f.span}`}
              >
                <div className="w-10 h-10 rounded-xl bg-cloud-secondary/80 flex items-center justify-center mb-6 border border-border-color">
                  <f.icon className={`w-5 h-5 text-text-secondary transition-colors duration-300 ${f.accent}`} />
                </div>
                <h3 className={`text-lg font-heading font-semibold mb-2 transition-colors duration-300 ${f.accent}`}>{f.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UPCOMING EVENTS ── */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(56,189,248,0.04),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex justify-between items-end mb-16">
            <div>
              <p className="eyebrow mb-5" style={{ color: 'var(--color-cloud-blue)' }}>
                What's coming
              </p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold">Upcoming Events</h2>
            </div>
            <Link to="/events" className="hidden md:flex items-center gap-1.5 text-text-secondary hover:text-aws-orange transition-colors font-mono text-xs uppercase tracking-widest group">
              View All <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {upcomingEvents.map((event, idx) => (
                <motion.div key={idx}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass-panel pixel-border flex flex-col h-full group overflow-hidden"
                >
                  {event.image && (
                    <div className="h-40 overflow-hidden relative shrink-0">
                      <img src={event.image} alt={event.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" loading="lazy" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-gradient-to-t from-cloud-navy via-cloud-navy/20 to-transparent" />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-4">
                      <span className="badge-upcoming">{event.type}</span>
                      <span className="flex items-center gap-1.5 text-[11px] font-mono text-text-secondary">
                        <Calendar className="w-3 h-3" />{event.date}
                      </span>
                    </div>
                    <h3 className="text-base font-heading font-semibold mb-2 group-hover:text-aws-orange transition-colors leading-snug">{event.title}</h3>
                    <p className="text-text-secondary text-sm mb-6 flex-grow line-clamp-2 leading-relaxed">{event.desc}</p>
                    <Link to={`/events/${event.id}`} className="pixel-button-secondary py-2.5 w-full text-[11px] text-center mt-auto">
                      View Details
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 glass-panel pixel-border rounded-2xl">
              <p className="text-text-secondary text-sm mb-5">No upcoming events right now.</p>
              <Link to="/events" className="pixel-button-secondary px-6 py-2.5 text-xs">See Past Events</Link>
            </div>
          )}

          <div className="mt-6 text-center md:hidden">
            <Link to="/events" className="text-text-secondary font-mono text-xs uppercase tracking-widest hover:text-aws-orange transition-colors">View All Events →</Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_50%,rgba(168,85,247,0.04),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
            <p className="eyebrow mb-5" style={{ color: 'var(--color-arcade-purple)' }}>What we build</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Featured Projects</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: 'Serverless Attendance System', desc: 'Facial recognition based attendance using Rekognition and Lambda.', tech: ['Lambda', 'DynamoDB', 'Rekognition'] },
              { title: 'IoT Health Dashboard',         desc: 'Real-time health monitoring using AWS IoT Core and React.',       tech: ['IoT Core', 'Amplify', 'React'] },
              { title: 'Cloud File Storage',           desc: 'Secure file sharing platform built on S3 and Cognito.',           tech: ['S3', 'Cognito', 'API Gateway'] },
            ].map((project, idx) => (
              <motion.div key={idx}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-panel pixel-border p-7 group flex flex-col"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-2.5 bg-cloud-secondary/80 rounded-xl border border-border-color">
                    <Database className="w-4 h-4 text-text-secondary group-hover:text-aws-orange transition-colors" />
                  </div>
                  <a href="#" className="p-2 text-text-muted hover:text-text-secondary transition-colors rounded-lg">
                    <Github className="w-4 h-4" />
                  </a>
                </div>
                <h3 className="text-base font-heading font-semibold mb-2 group-hover:text-aws-orange transition-colors">{project.title}</h3>
                <p className="text-text-secondary text-sm mb-5 flex-grow leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tech.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/projects" className="pixel-button-secondary px-8 py-3">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* ── TEAM PREVIEW ── */}
      <section className="py-32 relative">
        <div className="luxury-divider mb-0" />
        <div className="absolute inset-0 bg-cloud-secondary/10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative pt-32">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
            <p className="eyebrow mb-5">The people</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Meet The Team</h2>
          </motion.div>

          <div className="flex flex-col gap-5">
            {/* Top 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto w-full">
              {[
                { id: 'varsha-gaikwad',  name: 'Dr. Varsha Gaikwad', role: 'Faculty Coordinator', image: 'https://i.ibb.co/xqY0bSS3/Varsha-maam.jpg', linkedin: '', email: '' },
                { id: 'shardul-kolekar', name: 'Shardul Kolekar',     role: 'Captain (President)', image: 'https://i.ibb.co/vCkgggZW/Whats-App-Image-2026-03-15-at-4-00-18-PM.jpg', linkedin: 'https://www.linkedin.com/in/shardulkolekar', email: 'mailto:kolekarshardul23@gmail.com' },
              ].map((m, idx) => (
                <motion.div key={idx}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="glass-panel pixel-border p-6 flex flex-col items-center text-center group"
                >
                  <Link to={`/team/${m.id}`} className="w-full flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden border border-border-color mb-4 group-hover:border-aws-orange/40 transition-colors duration-300">
                      <img src={m.image} alt={m.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="lazy" />
                    </div>
                    <h3 className="text-sm font-heading font-semibold group-hover:text-aws-orange transition-colors">{m.name}</h3>
                    <p className="text-aws-orange font-mono text-[10px] mt-1 mb-4 uppercase tracking-widest">{m.role}</p>
                  </Link>
                  {m.linkedin && (
                    <div className="flex gap-3">
                      <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-cloud-blue transition-colors"><Linkedin className="w-3.5 h-3.5" /></a>
                      <a href={m.email} className="text-text-muted hover:text-text-secondary transition-colors"><Mail className="w-3.5 h-3.5" /></a>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Next 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto w-full">
              {[
                { id: 'vidula',  name: 'Vidula Powar',    role: 'General Secretary', image: 'https://i.ibb.co/5W0h4c8y/Whats-App-Image-2026-03-17-at-9-01-47-AM.jpg',                             linkedin: 'https://www.linkedin.com/in/vidula-p-372734294',         email: 'mailto:powarvidula11@gmail.com' },
                { id: 'gopal',   name: 'Gopal Lakwal',    role: 'Joint Secretary',   image: 'https://i.ibb.co/4wBwTHtx/file-000000002ef871fab1e8c53a2708be68-Gopal-lakwal.png',        linkedin: 'https://www.linkedin.com/in/gopal-lakwal-461467383',     email: 'mailto:gopallakwal526@gmail.com' },
                { id: 'shubham', name: 'Shubham Sonwane', role: 'Joint Secretary',   image: 'https://i.ibb.co/LDDfM6hn/Gemini-Generated-Image-nbpxu8nbpxu8nbpx-Shubham-Sonwane.png', linkedin: 'https://www.linkedin.com/in/shubham-sonwane-b9b056312', email: 'mailto:sonwaneshubham38@gmail.com' },
              ].map((m, idx) => (
                <motion.div key={idx}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: (idx + 2) * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="glass-panel pixel-border p-5 flex flex-col items-center text-center group"
                >
                  <Link to={`/team/${m.id}`} className="w-full flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full overflow-hidden border border-border-color mb-3 group-hover:border-aws-orange/40 transition-colors duration-300">
                      <img src={m.image} alt={m.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="lazy" />
                    </div>
                    <h3 className="text-xs font-heading font-semibold group-hover:text-aws-orange transition-colors">{m.name}</h3>
                    <p className="text-aws-orange font-mono text-[9px] mt-0.5 mb-3 uppercase tracking-widest">{m.role}</p>
                  </Link>
                  <div className="flex gap-2.5">
                    <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-cloud-blue transition-colors"><Linkedin className="w-3 h-3" /></a>
                    <a href={m.email} className="text-text-muted hover:text-text-secondary transition-colors"><Mail className="w-3 h-3" /></a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link to="/team" className="pixel-button-secondary px-8 py-3">View Full Team</Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 relative overflow-hidden">
        <div className="luxury-divider mb-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_100%,rgba(255,153,0,0.07),transparent)] pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto px-6 lg:px-8 text-center relative z-10 pt-32"
        >
          <p className="eyebrow justify-center mb-6">Ready to start?</p>
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-5 leading-tight">
            Start Your Cloud<br />
            <span className="text-text-secondary font-light">Journey Today</span>
          </h2>
          <p className="text-text-secondary text-sm mb-10 max-w-md mx-auto leading-relaxed">
            Join the AWS Cloud Club and learn cloud computing through workshops, projects, and community learning.
          </p>
          <a href="https://www.meetup.com/aws-cloud-club-at-gcoe-kolhapur/" target="_blank" rel="noopener noreferrer"
            className="pixel-button px-12 py-4 inline-flex items-center gap-2">
            Join the Club <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </section>

    </PageTransition>
  );
}
