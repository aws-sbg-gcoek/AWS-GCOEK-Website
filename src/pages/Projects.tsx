import { motion } from 'motion/react';
import { Github, Database, Server, Code, Zap, Globe, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';

export default function Projects() {
  const projects = [
    { title: 'Serverless Web Application',      desc: 'A full-stack web app built on AWS serverless. Features auth, REST API, and a React frontend.',                                                    tech: ['Lambda', 'API Gateway', 'DynamoDB', 'Cognito', 'S3', 'CloudFront'], icon: Zap,      github: '#' },
    { title: 'IoT Health Monitoring Dashboard', desc: 'Real-time dashboard for patient vitals from simulated IoT devices. MQTT ingestion and React visualization.',                                     tech: ['IoT Core', 'Amplify', 'React', 'Kinesis', 'Timestream'],             icon: Globe,    github: '#' },
    { title: 'Cloud Attendance System',         desc: 'Automated attendance via facial recognition. Students scan at the entrance; attendance is logged automatically.',                                tech: ['Rekognition', 'Lambda', 'S3', 'DynamoDB', 'Python'],                 icon: Code,     github: '#' },
    { title: 'Automated Data Pipeline',         desc: 'Serverless ETL pipeline that extracts from external APIs, transforms with Python, and loads into a data warehouse.',                            tech: ['Glue', 'Athena', 'S3', 'EventBridge', 'Step Functions'],             icon: Database, github: '#' },
    { title: 'Containerized Microservices',     desc: 'E-commerce backend broken into microservices, containerized with Docker, and orchestrated on Amazon ECS.',                                      tech: ['ECS', 'Fargate', 'Docker', 'ECR', 'ALB', 'RDS'],                    icon: Server,   github: '#' },
    { title: 'Serverless Chatbot',              desc: 'Intelligent conversational agent built with Amazon Lex, integrated with Slack for answering student queries about the club.',                   tech: ['Lex', 'Lambda', 'DynamoDB', 'API Gateway'],                          icon: Zap,      github: '#' },
  ];

  return (
    <PageTransition className="w-full">

      {/* Header */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-grid-pattern">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cloud-blue/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-aws-orange/8 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
            <p className="text-xs font-mono text-aws-orange uppercase tracking-widest mb-4">What we build</p>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-gradient-orange">Student Projects</h1>
            <p className="text-base text-text-secondary max-w-xl mx-auto leading-relaxed">
              Real-world cloud solutions built by members of the AWS Cloud Club.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-cloud-secondary/15 border-y border-border-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
                whileHover={{ y: -6 }}
                className="glass-panel p-7 pixel-border group flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-cloud-secondary rounded-xl border border-border-color group-hover:border-aws-orange/40 transition-colors">
                    <project.icon className="w-6 h-6 text-aws-orange" />
                  </div>
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="p-2 text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-white/5 border border-transparent hover:border-border-color">
                    <Github className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-lg font-heading font-bold mb-2 group-hover:text-cloud-blue transition-colors">{project.title}</h3>
                <p className="text-text-secondary text-sm mb-6 flex-grow leading-relaxed">{project.desc}</p>

                <div className="mt-auto">
                  <p className="text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-2">Stack</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <p className="text-xs font-mono text-aws-orange uppercase tracking-widest mb-4">Got an idea?</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-5">Have a project idea?</h2>
          <p className="text-text-secondary text-sm mb-10 leading-relaxed max-w-lg mx-auto">
            Join the club and collaborate with other students to bring your cloud project ideas to life. We provide the resources and mentorship you need.
          </p>
          <Link to="/join" className="pixel-button px-10 py-4 inline-block">Start Building With Us</Link>
        </motion.div>
      </section>

    </PageTransition>
  );
}
