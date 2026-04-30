import { motion } from 'motion/react';
import { Target, Eye, Zap, Shield, Globe } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } };

export default function About() {
  return (
    <PageTransition className="w-full">

      {/* ── PAGE HEADER ── */}
      <section className="pt-32 pb-20 bg-grid-animated" style={{ background: '#0B1220' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="section-label">About Us</div>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-4 leading-tight">
              About the<br /><span style={{ color: '#FF9900' }}>Builder Group</span>
            </h1>
            <div className="section-line" />
            <p className="text-text-secondary max-w-2xl mt-6 leading-relaxed">
              AWS Student Builder Group at Government College of Engineering Kolhapur is a student-led community focused on cloud technologies and helping students build real-world technical skills.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="py-20" style={{ background: '#111827', borderTop: '1px solid #1E2A3A', borderBottom: '1px solid #1E2A3A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Target, title: 'Our Mission', accent: '#A855F7', text: 'Empower students with practical cloud computing knowledge through hands-on workshops, real-world projects, and peer-to-peer learning. We aim to bridge the gap between academic curriculum and industry requirements in cloud technologies.' },
              { icon: Eye,    title: 'Our Vision',  accent: '#38BDF8', text: 'Build a strong, self-sustaining cloud developer community in the college where students can collaborate, innovate, and launch successful careers as cloud engineers, architects, and developers.' },
            ].map(({ icon: Icon, title, accent, text }, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.1 } } }}
                whileHover={{ y: -4 }}
                className="dev-card card-shine p-8 group"
                style={{ borderLeftColor: accent, borderLeftWidth: 3 }}
              >
                <div className="icon-box mb-6" style={{ borderColor: accent + '44' }}>
                  <Icon className="w-5 h-5" style={{ color: accent }} />
                </div>
                <h2 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-aws-orange transition-colors duration-200">{title}</h2>
                <p className="text-text-secondary leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CLOUD COMPUTING ── */}
      <section className="py-20 bg-grid-dense" style={{ background: '#0B1220' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
            <div className="section-label">Why It Matters</div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">Why Cloud Computing Matters</h2>
            <div className="section-line section-line-purple mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: Zap,    title: 'Scalability & Speed',    accent: '#FF9900', text: 'Cloud allows businesses to scale resources instantly and deploy applications globally in minutes.' },
              { icon: Shield, title: 'Security & Reliability', accent: '#22C55E', text: 'Enterprise-grade security, automated backups, and high availability across multiple regions.' },
              { icon: Globe,  title: 'Industry Demand',        accent: '#38BDF8', text: 'Cloud computing is the backbone of modern tech, making cloud skills highly sought after by employers.' },
            ].map(({ icon: Icon, title, accent, text }, idx) => (
              <motion.div
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: idx * 0.1 } } }}
                whileHover={{ y: -4 }}
                className="dev-card card-shine p-6 group"
              >
                <div className="icon-box mb-5" style={{ borderColor: accent + '44' }}>
                  <Icon className="w-5 h-5" style={{ color: accent }} />
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-2 group-hover:text-aws-orange transition-colors duration-200">{title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </PageTransition>
  );
}
