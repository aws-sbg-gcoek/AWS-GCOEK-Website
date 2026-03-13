import { motion } from 'motion/react';
import { Target, Eye, Cloud, Zap, Shield, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <Cloud className="w-64 h-64 absolute -top-10 -right-10 text-aws-orange" />
          <Cloud className="w-48 h-48 absolute top-40 -left-20 text-cloud-blue" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">About the Club</h1>
            <div className="w-24 h-1 bg-aws-orange mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              AWS Cloud Club at Government College of Engineering Kolhapur is a student-led community focused on exploring cloud technologies and helping students build real-world technical skills.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-cloud-secondary/20 border-y border-border-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              whileHover={{ y: -5 }}
              className="glass-panel p-8 pixel-border hover:pixel-border-hover transition-all duration-300"
            >
              <div className="w-16 h-16 bg-cloud-secondary rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-aws-orange" />
              </div>
              <h2 className="text-2xl font-heading font-bold mb-4">Our Mission</h2>
              <p className="text-text-secondary leading-relaxed">
                Empower students with practical cloud computing knowledge through hands-on workshops, real-world projects, and peer-to-peer learning. We aim to bridge the gap between academic curriculum and industry requirements in cloud technologies.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="glass-panel p-8 pixel-border hover:pixel-border-hover transition-all duration-300"
            >
              <div className="w-16 h-16 bg-cloud-secondary rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-cloud-blue" />
              </div>
              <h2 className="text-2xl font-heading font-bold mb-4">Our Vision</h2>
              <p className="text-text-secondary leading-relaxed">
                Build a strong, self-sustaining cloud developer community in the college where students can collaborate, innovate, and launch successful careers as cloud engineers, architects, and developers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Cloud Computing Matters */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Why Cloud Computing Matters</h2>
            <div className="w-24 h-1 bg-arcade-purple mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: 'Scalability & Speed', desc: 'Cloud allows businesses to scale resources instantly and deploy applications globally in minutes.' },
              { icon: Shield, title: 'Security & Reliability', desc: 'Enterprise-grade security, automated backups, and high availability across multiple regions.' },
              { icon: Globe, title: 'Industry Demand', desc: 'Cloud computing is the backbone of modern tech, making cloud skills highly sought after by employers.' }
            ].map((item, idx) => (
              <div key={idx} className="glass-panel p-6 pixel-border flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-cloud-secondary flex items-center justify-center mb-4 border border-border-color">
                  <item.icon className="w-6 h-6 text-arcade-purple" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{item.title}</h3>
                <p className="text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
