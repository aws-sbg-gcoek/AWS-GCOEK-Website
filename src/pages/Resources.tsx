import { motion } from 'motion/react';
import { BookOpen, Map, Award, Github, ExternalLink, PlayCircle, FileText, ArrowRight } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

export default function Resources() {
  const roadmapSteps = [
    { title: 'Cloud Fundamentals',      desc: 'Understand what cloud computing is, deployment models, and service models (IaaS, PaaS, SaaS).' },
    { title: 'AWS Core Services',       desc: 'Learn EC2 (Compute), S3 (Storage), RDS (Database), and VPC (Networking).' },
    { title: 'Security & Identity',     desc: 'Master IAM (Identity and Access Management) and basic cloud security principles.' },
    { title: 'Serverless & Architecture', desc: 'Explore Lambda, API Gateway, DynamoDB, and the well-architected framework.' },
    { title: 'Hands-on Projects',       desc: 'Build and deploy real applications to solidify your knowledge.' },
  ];

  const tutorials = [
    { title: 'Deploying a React App on S3 & CloudFront', type: 'Video',   icon: PlayCircle },
    { title: 'Building a Serverless API with Lambda',    type: 'Article', icon: FileText },
    { title: 'Setting up a VPC from Scratch',            type: 'Guide',   icon: BookOpen },
    { title: 'Introduction to DynamoDB',                 type: 'Video',   icon: PlayCircle },
  ];

  return (
    <PageTransition className="w-full">

      {/* Header */}
      <section className="pt-32 pb-20 bg-grid-pattern relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-cloud-blue/8 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-mono text-aws-orange uppercase tracking-widest mb-4">Learn</p>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-gradient-orange">Learning Resources</h1>
            <p className="text-base text-text-secondary max-w-xl mx-auto leading-relaxed">
              Curated materials, roadmaps, and guides to help you master AWS and cloud computing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24 bg-cloud-secondary/15 border-y border-border-color">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-14">
            <div className="p-2.5 bg-cloud-secondary rounded-xl border border-border-color">
              <Map className="w-6 h-6 text-aws-orange" />
            </div>
            <div>
              <p className="text-xs font-mono text-aws-orange uppercase tracking-widest mb-0.5">Start here</p>
              <h2 className="text-3xl font-heading font-bold">Cloud Beginner Roadmap</h2>
            </div>
          </div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            className="relative border-l-2 border-border-color ml-4"
          >
            {roadmapSteps.map((step, idx) => (
              <motion.div
                key={idx}
                variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0, transition: { duration: 0.45 } } }}
                className="mb-10 ml-8 relative group last:mb-0"
              >
                {/* dot */}
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-cloud-navy border-2 border-aws-orange flex items-center justify-center shadow-[0_0_12px_rgba(255,153,0,0.4)]">
                  <span className="text-[9px] font-mono font-bold text-aws-orange">{idx + 1}</span>
                </div>
                <div className="glass-panel p-6 pixel-border group-hover:border-aws-orange/30 transition-colors">
                  <h3 className="text-lg font-heading font-bold mb-2 group-hover:text-aws-orange transition-colors">{step.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tutorials + Certs + GitHub */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Tutorials */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 bg-cloud-secondary rounded-xl border border-border-color">
                  <BookOpen className="w-5 h-5 text-text-primary" />
                </div>
                <h2 className="text-2xl font-heading font-bold">Tutorials & Guides</h2>
              </div>
              <div className="space-y-3">
                {tutorials.map((tut, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.35, delay: idx * 0.07 }}
                    whileHover={{ x: 4 }}
                    className="glass-panel p-4 pixel-border flex items-center justify-between group cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-cloud-secondary rounded-lg border border-border-color group-hover:border-aws-orange/40 transition-colors">
                        <tut.icon className="w-4 h-4 text-text-secondary group-hover:text-aws-orange transition-colors" />
                      </div>
                      <div>
                        <p className="text-sm font-heading font-semibold group-hover:text-aws-orange transition-colors">{tut.title}</p>
                        <p className="text-xs font-mono text-text-secondary">{tut.type}</p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-text-secondary group-hover:text-aws-orange transition-colors shrink-0" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Cert + GitHub */}
            <div className="space-y-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-cloud-secondary rounded-xl border border-border-color">
                    <Award className="w-5 h-5 text-text-primary" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold">Certification Guide</h2>
                </div>
                <div className="glass-panel p-7 pixel-border">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="px-2.5 py-1 bg-aws-orange/10 text-aws-orange border border-aws-orange/20 rounded-lg text-xs font-mono font-bold">CLF-C02</span>
                    <h3 className="text-lg font-heading font-bold leading-snug">AWS Certified Cloud Practitioner</h3>
                  </div>
                  <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                    The perfect starting point for anyone looking to understand the fundamentals of the AWS Cloud. We provide study materials, practice exams, and peer support.
                  </p>
                  <button className="pixel-button-secondary px-6 py-2.5 text-xs flex items-center gap-2">
                    View Study Guide <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-cloud-secondary rounded-xl border border-border-color">
                    <Github className="w-5 h-5 text-text-primary" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold">GitHub Resources</h2>
                </div>
                <div className="glass-panel p-7 pixel-border">
                  <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                    Access our open-source repositories containing lab instructions, sample code, and project templates.
                  </p>
                  <a href="https://github.com/AWSCloudClubGCOE" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 text-text-primary hover:text-aws-orange transition-colors font-mono text-sm group">
                    <Github className="w-5 h-5" />
                    github.com/AWSCloudClubGCOE
                    <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    </PageTransition>
  );
}
