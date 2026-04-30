import { useState } from "react";
import { motion, AnimatePresence } from 'motion/react';
import { Github, Database, Server, Code, Zap, Globe, X, MessageCircle, Mail } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

export default function Projects() {
  const [showContact, setShowContact] = useState(false);
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
              Explore the real-world cloud solutions built by members of the AWS Student Builder Group.
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
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-aws-orange/5 rounded-full blur-[120px]" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
        >
          <span className="inline-block font-mono text-xs text-aws-orange uppercase tracking-widest mb-4 px-3 py-1 border border-aws-orange/30 rounded-full bg-aws-orange/5">
            Submit Your Work
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-text-primary">
            Have a project to showcase?
          </h2>
          <p className="text-lg text-text-secondary mb-10 leading-relaxed font-mono">
            Built something cool on the cloud? Reach out and we'll feature your project on this page for the whole community to see.
          </p>
          <button
            onClick={() => setShowContact(true)}
            className="pixel-button px-8 py-4 text-base"
          >
            Contact With Us
          </button>
        </motion.div>
      </section>

      {/* Contact Modal */}
      <AnimatePresence>
        {showContact && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowContact(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative glass-panel pixel-border w-full max-w-md p-8 rounded-2xl"
            >
              {/* Close button */}
              <button
                onClick={() => setShowContact(false)}
                className="absolute top-4 right-4 p-2 rounded-full text-text-secondary hover:text-text-primary hover:bg-cloud-secondary transition-all"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header */}
              <div className="mb-8 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-cloud-secondary border border-border-color mb-4">
                  <Mail className="w-6 h-6 text-aws-orange" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-text-primary mb-2">Get in Touch</h3>
                <p className="text-sm text-text-secondary font-mono">
                  We'll review your project and get back to you soon.
                </p>
              </div>

              {/* Buttons */}
              <div className="space-y-3">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/918421807460?text=${encodeURIComponent("Hi! I'm interested in showcasing my project on the AWS Student Builder Group website. I'd love to have it featured in the Student Projects section. Could you guide me on the submission process?")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 w-full px-5 py-4 rounded-xl border border-border-color bg-cloud-secondary hover:border-[#25D366]/50 hover:bg-[#25D366]/10 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 group-hover:bg-[#25D366]/20 transition-colors shrink-0">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-text-primary">WhatsApp</p>
                    <p className="text-xs text-text-secondary font-mono">Send us a message directly</p>
                  </div>
                  <span className="ml-auto text-xs font-mono text-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:awssbggcoek@gmail.com?subject=${encodeURIComponent("Project Submission – AWS Student Builder Group Website")}&body=${encodeURIComponent("Hi AWS Student Builder Group Team,\n\nI'm interested in submitting my project to be displayed on your website.\n\nProject Name: \nProject Description: \nTech Stack: \nGitHub Link: \n\nLooking forward to hearing from you!\n\nBest regards,\n[Your Name]")}`}
                  className="flex items-center gap-4 w-full px-5 py-4 rounded-xl border border-border-color bg-cloud-secondary hover:border-cloud-blue/50 hover:bg-cloud-blue/10 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-cloud-blue/10 border border-cloud-blue/20 group-hover:bg-cloud-blue/20 transition-colors shrink-0">
                    <Mail className="w-5 h-5 text-cloud-blue" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-text-primary">Email</p>
                    <p className="text-xs text-text-secondary font-mono">awssbggcoek@gmail.com</p>
                  </div>
                  <span className="ml-auto text-xs font-mono text-cloud-blue opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
              </div>

              <p className="text-center text-xs text-text-secondary font-mono mt-6">
                We typically respond within 24–48 hours.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}













