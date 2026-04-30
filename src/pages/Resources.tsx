import { motion } from 'motion/react';
import { BookOpen, Map, Award, Github, ExternalLink, PlayCircle, FileText, ArrowRight } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

const ROADMAP = [
  { title: 'Cloud Fundamentals',      desc: 'Understand what cloud computing is, deployment models, and service models (IaaS, PaaS, SaaS).',       accent: '#FF9900' },
  { title: 'AWS Core Services',       desc: 'Learn EC2 (Compute), S3 (Storage), RDS (Database), and VPC (Networking).',                             accent: '#38BDF8' },
  { title: 'Security & Identity',     desc: 'Master IAM (Identity and Access Management) and basic cloud security principles.',                       accent: '#22C55E' },
  { title: 'Serverless & Arch.',      desc: 'Explore Lambda, API Gateway, DynamoDB, and well-architected framework.',                                  accent: '#A855F7' },
  { title: 'Hands-on Projects',       desc: 'Build and deploy real applications to solidify your knowledge.',                                          accent: '#EC4899' },
];

const TUTORIALS = [
  { title: 'Deploying a React App on S3 & CloudFront', type: 'Video',   icon: PlayCircle, accent: '#38BDF8' },
  { title: 'Building a Serverless API with Lambda',    type: 'Article', icon: FileText,   accent: '#FF9900' },
  { title: 'Setting up a VPC from Scratch',            type: 'Guide',   icon: BookOpen,   accent: '#22C55E' },
  { title: 'Introduction to DynamoDB',                 type: 'Video',   icon: PlayCircle, accent: '#A855F7' },
];

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.07 } }) };

export default function Resources() {
  return (
    <PageTransition className="w-full">

      {/* ── PAGE HEADER ── */}
      <section className="pt-32 pb-20 bg-grid-animated" style={{ background: '#0B1220' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <div className="section-label">Knowledge Base</div>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-4 leading-tight">
              Learning<br /><span style={{ color: '#FF9900' }}>Resources</span>
            </h1>
            <div className="section-line" />
            <p className="text-text-secondary max-w-xl mt-6 leading-relaxed">
              Curated materials, roadmaps, and guides to help you master AWS and cloud computing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── ROADMAP ── */}
      <section className="py-20" style={{ background: '#111827', borderTop: '1px solid #1E2A3A', borderBottom: '1px solid #1E2A3A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <div className="section-label">Roadmap</div>
            <h2 className="text-3xl font-heading font-bold text-white flex items-center gap-3">
              <Map className="w-6 h-6" style={{ color: '#A855F7' }} />
              Cloud Beginner Roadmap
            </h2>
            <div className="section-line section-line-purple mt-4" />
          </motion.div>

          {/* Timeline */}
          <div className="relative ml-4">
            <div className="absolute left-0 top-0 bottom-0 w-px" style={{ background: '#1E2A3A' }} />
            <div className="space-y-4">
              {ROADMAP.map((step, idx) => (
                <motion.div
                  key={idx}
                  custom={idx} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  whileHover={{ x: 4 }}
                  className="relative ml-8 dev-card card-shine p-5 group"
                  style={{ borderLeftColor: step.accent, borderLeftWidth: 3 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-10 top-5 w-4 h-4 flex items-center justify-center"
                    style={{ background: step.accent, borderRadius: 2 }}>
                    <span className="font-mono text-xs font-bold text-black">{idx + 1}</span>
                  </div>
                  <h3 className="font-heading font-bold text-white mb-1 group-hover:text-aws-orange transition-colors duration-200">
                    Step {idx + 1}: {step.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TUTORIALS & CERTIFICATION ── */}
      <section className="py-20 bg-grid-dense" style={{ background: '#0B1220' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Tutorials */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
                <div className="section-label">Tutorials</div>
                <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-aws-orange" /> Tutorials & Guides
                </h2>
                <div className="section-line mt-4" />
              </motion.div>

              <div className="space-y-3">
                {TUTORIALS.map((tut, idx) => (
                  <motion.div
                    key={idx}
                    custom={idx} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    whileHover={{ x: 4 }}
                    className="dev-card card-shine flex items-center justify-between p-4 group cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="icon-box" style={{ borderColor: tut.accent + '44' }}>
                        <tut.icon className="w-4 h-4" style={{ color: tut.accent }} />
                      </div>
                      <div>
                        <p className="font-heading font-semibold text-white text-sm group-hover:text-aws-orange transition-colors duration-200">{tut.title}</p>
                        <span className="font-mono text-xs text-text-secondary">{tut.type}</span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-text-secondary group-hover:text-aws-orange transition-colors duration-200 flex-shrink-0" />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certification + GitHub */}
            <div className="space-y-6">
              {/* Certification */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="section-label">Certification</div>
                <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-3 mb-4">
                  <Award className="w-5 h-5 text-aws-orange" /> Certification Guide
                </h2>
                <div className="dev-card p-6">
                  <div className="section-line mb-4" />
                  <h3 className="font-heading font-bold text-white mb-3">AWS Certified Cloud Practitioner</h3>
                  <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                    The perfect starting point. We provide study materials, practice exams, and peer support.
                  </p>
                  <button className="pixel-button-secondary px-6 py-2.5 text-xs flex items-center gap-2">
                    View Study Guide <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>

              {/* GitHub */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
                <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-3 mb-4">
                  <Github className="w-5 h-5 text-aws-orange" /> GitHub Resources
                </h2>
                <div className="dev-card p-6 bl-purple">
                  <p className="text-text-secondary text-sm mb-5 leading-relaxed">
                    Access our open-source repositories containing lab instructions, sample code, and project templates.
                  </p>
                  <a href="#" className="flex items-center gap-2 font-mono text-sm text-arcade-purple hover:text-aws-orange transition-colors duration-200">
                    <Github className="w-4 h-4" />
                    github.com/awscloudclub-gcoek
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
