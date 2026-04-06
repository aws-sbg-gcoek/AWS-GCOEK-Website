import { motion } from 'motion/react';
import { Github, Database, Server, Code, Zap, Globe } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

export default function Projects() {
  const projects = [
    {
      title: 'Serverless Web Application',
      desc: 'A full-stack web application built entirely on AWS serverless technologies. Features user authentication, a RESTful API, and a React frontend.',
      tech: ['Lambda', 'API Gateway', 'DynamoDB', 'Cognito', 'S3', 'CloudFront'],
      icon: Zap,
      github: '#'
    },
    {
      title: 'IoT Health Monitoring Dashboard',
      desc: 'Real-time dashboard for monitoring patient vitals collected from simulated IoT devices. Uses MQTT for data ingestion and React for visualization.',
      tech: ['IoT Core', 'Amplify', 'React', 'Kinesis', 'Timestream'],
      icon: Globe,
      github: '#'
    },
    {
      title: 'Cloud Attendance System',
      desc: 'An automated attendance tracking system using facial recognition. Students scan their faces at the entrance, and attendance is logged in a database.',
      tech: ['Rekognition', 'Lambda', 'S3', 'DynamoDB', 'Python'],
      icon: Code,
      github: '#'
    },
    {
      title: 'Automated Data Pipeline',
      desc: 'A serverless ETL pipeline that extracts data from external APIs, transforms it using Python, and loads it into a data warehouse for analysis.',
      tech: ['Glue', 'Athena', 'S3', 'EventBridge', 'Step Functions'],
      icon: Database,
      github: '#'
    },
    {
      title: 'Containerized Microservices',
      desc: 'An e-commerce backend broken down into microservices, containerized with Docker, and orchestrated using Amazon ECS.',
      tech: ['ECS', 'Fargate', 'Docker', 'ECR', 'ALB', 'RDS'],
      icon: Server,
      github: '#'
    },
    {
      title: 'Serverless Chatbot',
      desc: 'An intelligent conversational agent built using Amazon Lex and integrated with Slack for answering student queries about the club.',
      tech: ['Lex', 'Lambda', 'DynamoDB', 'API Gateway'],
      icon: Zap,
      github: '#'
    }
  ];

  return (
    <PageTransition className="w-full">
      {/* Header */}
      <section className="pt-32 pb-24 relative overflow-hidden bg-grid-pattern">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cloud-blue/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-aws-orange/10 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 text-gradient-orange">
              Student Projects
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed font-mono">
              Explore the real-world cloud solutions built by members of the AWS Cloud Club.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-cloud-secondary/20 border-y border-border-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, idx) => (
              <motion.div 
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="glass-panel p-8 pixel-border hover:pixel-border-hover transition-all duration-500 group flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 bg-cloud-secondary rounded-2xl border border-border-color group-hover:border-aws-orange/50 transition-colors">
                    <project.icon className="w-8 h-8 text-text-primary group-hover:text-aws-orange transition-colors" />
                  </div>
                  <a 
                    href={project.github} 
                    className="text-text-secondary hover:text-text-primary transition-colors p-3 bg-cloud-secondary rounded-full border border-border-color"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
                
                <h3 className="text-2xl font-heading font-bold mb-4 text-text-primary group-hover:text-cloud-blue transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-text-secondary mb-8 flex-grow leading-relaxed">
                  {project.desc}
                </p>
                
                <div className="mt-auto">
                  <h4 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-4">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-cloud-secondary text-xs font-mono text-cloud-blue rounded-full border border-border-color">
                        {t}
                      </span>
                    ))}
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-4xl font-heading font-bold mb-8 text-text-primary">Have a project idea?</h2>
          <p className="text-lg text-text-secondary mb-10 leading-relaxed font-mono">
            Join the club and collaborate with other students to bring your cloud project ideas to life. We provide the resources and mentorship you need.
          </p>
          <button className="pixel-button px-8 py-4 text-lg">Start Building With Us</button>
        </motion.div>
      </section>
    </PageTransition>
  );
}
