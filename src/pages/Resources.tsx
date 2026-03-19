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
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Learning Resources</h1>
            <div className="w-24 h-1 bg-aws-orange mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Curated materials, roadmaps, and guides to help you master AWS and cloud computing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cloud Beginner Roadmap */}
      <section className="py-16 bg-cloud-secondary/20 border-y border-border-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <Map className="w-8 h-8 text-aws-orange mr-4" />
            <h2 className="text-3xl font-heading font-bold">Cloud Beginner Roadmap</h2>
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
            className="relative border-l-2 border-border-color ml-4 md:ml-8"
          >
            {roadmapSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                }}
                className="mb-10 ml-8 relative group"
              >
                <div className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-cloud-navy border-2 border-aws-orange flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                  <div className="w-2 h-2 rounded-full bg-aws-orange group-hover:animate-ping"></div>
                </div>
                <div className="glass-panel p-6 pixel-border group-hover:border-aws-orange/50 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,153,0,0.15)] group-hover:-translate-y-1">
                  <h3 className="text-xl font-heading font-bold mb-2 text-cloud-blue group-hover:text-aws-orange transition-colors">Step {idx + 1}: {step.title}</h3>
                  <p className="text-text-secondary">{step.desc}</p>
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
              <div className="flex items-center mb-8">
                <BookOpen className="w-8 h-8 text-cloud-blue mr-4" />
                <h2 className="text-3xl font-heading font-bold">Tutorials & Guides</h2>
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
                className="space-y-4"
              >
                {tutorials.map((tut, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
                    }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="glass-panel p-4 pixel-border flex items-center justify-between group hover:bg-cloud-secondary/50 transition-all duration-300 cursor-pointer hover:shadow-[0_0_15px_rgba(0,161,241,0.15)] hover:border-cloud-blue/50"
                  >
                    <div className="flex items-center">
                      <tut.icon className="w-5 h-5 text-text-secondary mr-4 group-hover:text-cloud-blue transition-colors" />
                      <div>
                        <h4 className="font-heading font-semibold group-hover:text-aws-orange transition-colors">{tut.title}</h4>
                        <span className="text-xs font-mono text-text-secondary">{tut.type}</span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
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
                <div className="flex items-center mb-8">
                  <Award className="w-8 h-8 text-arcade-purple mr-4" />
                  <h2 className="text-3xl font-heading font-bold">Certification Guide</h2>
                </div>
                <div className="glass-panel p-6 pixel-border">
                  <h3 className="text-xl font-heading font-bold mb-3">AWS Certified Cloud Practitioner</h3>
                  <p className="text-text-secondary mb-4">
                    The perfect starting point for anyone looking to understand the fundamentals of the AWS Cloud. We provide study materials, practice exams, and peer support.
                  </p>
                  <button className="pixel-button-secondary py-2 px-4 text-sm flex items-center">
                    View Study Guide <ArrowRight className="w-4 h-4 ml-2" />
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
                <div className="flex items-center mb-8">
                  <Github className="w-8 h-8 text-text-primary mr-4" />
                  <h2 className="text-3xl font-heading font-bold">GitHub Resources</h2>
                </div>
                <div className="glass-panel p-6 pixel-border bg-cloud-secondary/30">
                  <p className="text-text-secondary mb-6">
                    Access our open-source repositories containing lab instructions, sample code, and project templates.
                  </p>
                  <a href="#" className="flex items-center text-cloud-blue hover:text-aws-orange transition-colors font-mono">
                    <Github className="w-5 h-5 mr-2" />
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
