import { motion } from 'motion/react';
import { Github, Database, Server, Code, Zap, Globe } from 'lucide-react';

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
    <div className="w-full">
      {/* Header */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Student Projects</h1>
            <div className="w-24 h-1 bg-arcade-purple mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Explore the real-world cloud solutions built by members of the AWS Cloud Club.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-cloud-secondary/20 border-y border-border-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="glass-panel p-6 pixel-border hover:pixel-border-hover transition-all duration-300 group flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-cloud-secondary rounded-lg border border-border-color group-hover:border-aws-orange/50 transition-colors">
                    <project.icon className="w-8 h-8 text-arcade-purple group-hover:text-aws-orange transition-colors" />
                  </div>
                  <a 
                    href={project.github} 
                    className="text-text-secondary hover:text-text-primary transition-colors p-2 bg-cloud-secondary/50 rounded-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
                
                <h3 className="text-2xl font-heading font-bold mb-3 group-hover:text-cloud-blue transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-text-secondary mb-8 flex-grow">
                  {project.desc}
                </p>
                
                <div className="mt-auto">
                  <h4 className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-2 py-1 bg-cloud-secondary text-xs font-mono text-cloud-blue rounded border border-border-color">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold mb-6">Have a project idea?</h2>
          <p className="text-lg text-text-secondary mb-8">
            Join the club and collaborate with other students to bring your cloud project ideas to life. We provide the resources and mentorship you need.
          </p>
          <button className="pixel-button px-8 py-4">Start Building With Us</button>
        </div>
      </section>
    </div>
  );
}
