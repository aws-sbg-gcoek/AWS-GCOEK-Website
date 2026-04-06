import { motion } from 'motion/react';
import { Target, Eye, Zap, Shield, Globe } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

export default function About() {
  return (
    <PageTransition className="w-full">

      {/* Header */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-grid-pattern">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-aws-orange/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cloud-blue/8 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
            <p className="text-xs font-mono text-aws-orange uppercase tracking-widest mb-4">Who we are</p>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-gradient-orange">About the Club</h1>
            <p className="text-base text-text-secondary max-w-2xl mx-auto leading-relaxed">
              AWS Cloud Club at Government College of Engineering Kolhapur is a student-led community focused on exploring cloud technologies and helping students build real-world technical skills.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-cloud-secondary/20 border-y border-border-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Target, color: 'text-aws-orange', borderHover: 'group-hover:border-aws-orange/40',
                title: 'Our Mission',
                body: 'Empower students with practical cloud computing knowledge through hands-on workshops, real-world projects, and peer-to-peer learning. We aim to bridge the gap between academic curriculum and industry requirements in cloud technologies.'
              },
              {
                icon: Eye, color: 'text-cloud-blue', borderHover: 'group-hover:border-cloud-blue/40',
                title: 'Our Vision',
                body: 'Build a strong, self-sustaining cloud developer community in the college where students can collaborate, innovate, and launch successful careers as cloud engineers, architects, and developers.'
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="glass-panel p-10 pixel-border group"
              >
                <div className={`w-12 h-12 bg-cloud-secondary rounded-xl flex items-center justify-center mb-6 border border-border-color ${item.borderHover} transition-colors`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h2 className={`text-2xl font-heading font-bold mb-4 group-hover:${item.color} transition-colors`}>{item.title}</h2>
                <p className="text-text-secondary leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Cloud Computing */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-16">
            <p className="text-xs font-mono text-cloud-blue uppercase tracking-widest mb-3">The bigger picture</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Why Cloud Computing Matters</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Zap,    color: 'text-aws-orange',    title: 'Scalability & Speed',  desc: 'Cloud allows businesses to scale resources instantly and deploy applications globally in minutes.' },
              { icon: Shield, color: 'text-cloud-blue',    title: 'Security & Reliability', desc: 'Enterprise-grade security, automated backups, and high availability across multiple regions.' },
              { icon: Globe,  color: 'text-arcade-purple', title: 'Industry Demand',       desc: 'Cloud computing is the backbone of modern tech, making cloud skills highly sought after by employers.' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.45, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-panel p-8 pixel-border group text-center"
              >
                <div className={`w-14 h-14 rounded-2xl bg-cloud-secondary flex items-center justify-center mb-6 mx-auto border border-border-color group-hover:border-current transition-colors ${item.color}`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className={`text-xl font-heading font-bold mb-3 group-hover:${item.color} transition-colors`}>{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-16 bg-cloud-secondary/20 border-y border-border-color">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '400+', label: 'Members' },
              { value: '2',    label: 'Events Hosted' },
              { value: '6+',   label: 'Departments' },
              { value: '1',    label: 'Year Running' },
            ].map((s, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.08 }}>
                <p className="text-4xl font-mono font-bold text-aws-orange mb-1">{s.value}</p>
                <p className="text-xs font-mono text-text-secondary uppercase tracking-widest">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </PageTransition>
  );
}
