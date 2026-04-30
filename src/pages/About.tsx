import { motion } from 'motion/react';
import { Target, Eye, Zap, Shield, Globe } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function About() {
  return (
    <PageTransition className="w-full">

      {/* ── PAGE HEADER ── */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-grid-pattern">
        {/* Subtle accent block */}
        <div className="absolute top-10 right-10 w-20 h-20 rounded-lg pointer-events-none"
          style={{ background: '#7c3aed', opacity: 0.6 }} />
        <div className="absolute top-28 right-28 w-10 h-10 rounded-lg pointer-events-none"
          style={{ background: '#67e8f9', opacity: 0.4 }} />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <motion.div {...fade()}>
            <p className="section-label">Who we are</p>
            <h1 className="font-heading font-black text-white mb-6"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', letterSpacing: '-0.03em', lineHeight: 1.08 }}>
              About the Group
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
              AWS Student Builder Group at Government College of Engineering Kolhapur is a
              student-led community focused on exploring cloud technologies and helping
              students build real-world technical skills.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="py-20" style={{ borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {[
              {
                icon: Target,
                color: '#8b5cf6',
                label: 'Mission',
                title: 'Our Mission',
                body: 'Empower students with practical cloud computing knowledge through hands-on workshops, real-world projects, and peer-to-peer learning. We bridge the gap between academic curriculum and industry requirements in cloud technologies.',
              },
              {
                icon: Eye,
                color: '#67e8f9',
                label: 'Vision',
                title: 'Our Vision',
                body: 'Build a strong, self-sustaining cloud developer community where students collaborate, innovate, and launch successful careers as cloud engineers, architects, and developers.',
              },
            ].map((item, idx) => (
              <motion.div key={idx} {...fade(idx * 0.15)}
                className="pixel-border hover:pixel-border-hover p-10 group">
                <div className="icon-box mb-6">
                  <item.icon className="w-5 h-5" style={{ color: item.color }} />
                </div>
                <p className="section-label mb-2">{item.label}</p>
                <h2 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-arcade-purple transition-colors duration-200">
                  {item.title}
                </h2>
                <p className="text-zinc-400 leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CLOUD MATTERS ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div {...fade()} className="mb-14">
            <p className="section-label">The bigger picture</p>
            <h2 className="font-heading font-black text-white"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.025em' }}>
              Why Cloud Computing Matters
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Zap,    color: '#a78bfa', title: 'Scalability & Speed',    body: 'Cloud allows businesses to scale resources instantly and deploy applications globally in minutes.' },
              { icon: Shield, color: '#67e8f9', title: 'Security & Reliability', body: 'Enterprise-grade security, automated backups, and high availability across multiple regions.' },
              { icon: Globe,  color: '#4ade80', title: 'Industry Demand',        body: 'Cloud computing is the backbone of modern tech, making cloud skills highly sought after by employers.' },
            ].map((item, idx) => (
              <motion.div key={idx} {...fade(idx * 0.12)}
                className="pixel-border hover:pixel-border-hover p-8 group text-center">
                <div className="icon-box mx-auto mb-5">
                  <item.icon className="w-5 h-5" style={{ color: item.color }} />
                </div>
                <h3 className="font-heading font-bold text-white text-lg mb-3 group-hover:text-arcade-purple transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </PageTransition>
  );
}
