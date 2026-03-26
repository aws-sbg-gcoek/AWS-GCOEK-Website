import { motion } from 'motion/react';
import { Target, Eye, Cloud, Zap, Shield, Globe } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

export default function About() {
  return (
    <PageTransition className="w-full">
      {/* Header */}
      <section className="pt-32 pb-24 relative overflow-hidden bg-grid-pattern">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-aws-orange/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cloud-blue/10 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 text-gradient-orange">
              About the Club
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed font-mono">
              AWS Cloud Club at Government College of Engineering Kolhapur is a student-led community focused on exploring cloud technologies and helping students build real-world technical skills.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-cloud-secondary/20 border-y border-border-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel p-10 pixel-border hover:pixel-border-hover transition-all duration-500 group"
            >
              <div className="w-14 h-14 bg-cloud-secondary rounded-2xl flex items-center justify-center mb-8 border border-border-color group-hover:border-aws-orange/50 transition-colors">
                <Target className="w-7 h-7 text-aws-orange" />
              </div>
              <h2 className="text-3xl font-heading font-bold mb-6 text-text-primary group-hover:text-aws-orange transition-colors">Our Mission</h2>
              <p className="text-text-secondary leading-relaxed text-lg">
                Empower students with practical cloud computing knowledge through hands-on workshops, real-world projects, and peer-to-peer learning. We aim to bridge the gap between academic curriculum and industry requirements in cloud technologies.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-panel p-10 pixel-border hover:pixel-border-hover transition-all duration-500 group"
            >
              <div className="w-14 h-14 bg-cloud-secondary rounded-2xl flex items-center justify-center mb-8 border border-border-color group-hover:border-cloud-blue/50 transition-colors">
                <Eye className="w-7 h-7 text-cloud-blue" />
              </div>
              <h2 className="text-3xl font-heading font-bold mb-6 text-text-primary group-hover:text-cloud-blue transition-colors">Our Vision</h2>
              <p className="text-text-secondary leading-relaxed text-lg">
                Build a strong, self-sustaining cloud developer community in the college where students can collaborate, innovate, and launch successful careers as cloud engineers, architects, and developers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Cloud Computing Matters */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-text-primary">Why Cloud Computing Matters</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-aws-orange to-cloud-blue mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: 'Scalability & Speed', desc: 'Cloud allows businesses to scale resources instantly and deploy applications globally in minutes.' },
              { icon: Shield, title: 'Security & Reliability', desc: 'Enterprise-grade security, automated backups, and high availability across multiple regions.' },
              { icon: Globe, title: 'Industry Demand', desc: 'Cloud computing is the backbone of modern tech, making cloud skills highly sought after by employers.' }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-8 pixel-border hover:pixel-border-hover transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-cloud-secondary flex items-center justify-center mb-6 border border-border-color group-hover:border-aws-orange/50 transition-colors">
                  <item.icon className="w-8 h-8 text-aws-orange" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4 text-text-primary group-hover:text-aws-orange transition-colors">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
