import { motion } from 'motion/react';
import { BookOpen, Map, Award, Github, ExternalLink, PlayCircle, FileText, ArrowRight } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

export default function Resources() {
  const roadmapSteps = [
    { title: 'Cloud Fundamentals', desc: 'Understand what cloud computing is, deployment models, and service models (IaaS, PaaS, SaaS).' },
    { title: 'AWS Core Services', desc: 'Learn EC2 (Compute), S3 (Storage), RDS (Database), and VPC (Networking).' },
    { title: 'Security & Identity', desc: 'Master IAM (Identity and Access Management) and basic cloud security principles.' },
    { title: 'Serverless & Architecture', desc: 'Explore Lambda, API Gateway, DynamoDB, and well-architected framework.' },
    { title: 'Hands-on Projects', desc: 'Build and deploy real applications to solidify your knowledge.' }
  ];

  const tutorials = [
    { title: 'Deploying a React App on S3 & CloudFront', type: 'Video', icon: PlayCircle },
    { title: 'Building a Serverless API with Lambda', type: 'Article', icon: FileText },
    { title: 'Setting up a VPC from Scratch', type: 'Guide', icon: BookOpen },
    { title: 'Introduction to DynamoDB', type: 'Video', icon: PlayCircle }
  ];

  return (
    <PageTransition className="w-full">
      {/* Header */}
      <section className="pt-32 pb-24 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 text-gradient-orange">Learning Resources</h1>
            <div className="w-24 h-1.5 bg-arcade-purple mx-auto rounded-full mb-10"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed font-mono">
              Curated materials, roadmaps, and guides to help you master AWS and cloud computing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cloud Beginner Roadmap */}
      <section className="py-24 bg-cloud-secondary/20 border-y border-border-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-16">
            <Map className="w-10 h-10 text-arcade-purple mr-6" />
            <h2 className="text-4xl font-heading font-bold text-text-primary">Cloud Beginner Roadmap</h2>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
            className="relative border-l border-border-color ml-5 md:ml-8"
          >
            {roadmapSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                }}
                className="mb-12 ml-10 relative group"
              >
                <div className="absolute -left-[45px] top-1 w-5 h-5 rounded-full bg-arcade-purple shadow-[0_0_15px_rgba(255,153,0,0.5)]"></div>
                <div className="glass-panel p-8 pixel-border hover:pixel-border-hover transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(0,0,0,0.2)]">
                  <h3 className="text-2xl font-heading font-bold mb-4 text-text-primary group-hover:text-arcade-purple transition-colors">Step {idx + 1}: {step.title}</h3>
                  <p className="text-text-secondary text-lg leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tutorials & Guides */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Tutorials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-12">
                <BookOpen className="w-10 h-10 text-text-primary mr-6" />
                <h2 className="text-4xl font-heading font-bold text-text-primary">Tutorials & Guides</h2>
              </div>
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
                className="space-y-6"
              >
                {tutorials.map((tut, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
                    }}
                    whileHover={{ scale: 1.01, x: 5 }}
                    className="glass-panel p-6 pixel-border hover:pixel-border-hover flex items-center justify-between group transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center">
                      <tut.icon className="w-7 h-7 text-text-primary mr-6 group-hover:text-arcade-purple transition-colors" />
                      <div>
                        <h4 className="font-heading font-semibold text-text-primary text-lg group-hover:text-arcade-purple transition-colors">{tut.title}</h4>
                        <span className="text-sm font-mono text-text-secondary">{tut.type}</span>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-text-secondary group-hover:text-arcade-purple transition-colors" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Certification & GitHub */}
            <div className="space-y-12">
              {/* Certification */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center mb-12">
                  <Award className="w-10 h-10 text-text-primary mr-6" />
                  <h2 className="text-4xl font-heading font-bold text-text-primary">Certification Guide</h2>
                </div>
                <div className="glass-panel p-10 pixel-border">
                  <h3 className="text-2xl font-heading font-bold mb-5 text-text-primary">AWS Certified Cloud Practitioner</h3>
                  <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                    The perfect starting point for anyone looking to understand the fundamentals of the AWS Cloud. We provide study materials, practice exams, and peer support.
                  </p>
                  <button className="pixel-button-secondary px-8 py-4 flex items-center">
                    View Study Guide <ArrowRight className="w-5 h-5 ml-3" />
                  </button>
                </div>
              </motion.div>

              {/* GitHub */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex items-center mb-12">
                  <Github className="w-10 h-10 text-text-primary mr-6" />
                  <h2 className="text-4xl font-heading font-bold text-text-primary">GitHub Resources</h2>
                </div>
                <div className="glass-panel p-10 pixel-border">
                  <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                    Access our open-source repositories containing lab instructions, sample code, and project templates.
                  </p>
                  <a href="#" className="flex items-center text-text-primary hover:text-arcade-purple transition-colors font-mono text-lg">
                    <Github className="w-6 h-6 mr-3" />
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
