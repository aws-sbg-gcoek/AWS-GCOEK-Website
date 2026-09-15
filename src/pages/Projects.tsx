import { useState } from "react";
import { motion, AnimatePresence } from 'motion/react';
import Tilt from 'react-parallax-tilt';
import { Link } from 'react-router-dom';
import { Github, Database, Server, Code, Zap, Globe, X, MessageCircle, Mail, ExternalLink } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

const PROJECTS = [
  {
    id: 'devinsight-guardian',
    title: 'DevInsight Guardian',
    desc: 'An autonomous AI engineering manager that analyzes GitHub activity, detects productivity and burnout trends, and delivers personalized daily coaching insights.',
    tech: ['AWS Lambda', 'EventBridge', 'SES', 'CloudWatch', 'Groq AI'],
    icon: Zap,
    color: '#FF9900',
    github: 'https://github.com/ShardulOnGit/DevInsight',
    liveUrl: 'https://dev-insight-shardul-kolekar.vercel.app/',
    detailUrl: '/projects/devinsight-guardian',
  },
  {
    title: 'IoT Health Monitoring Dashboard',
    desc: 'Real-time dashboard for monitoring patient vitals collected from simulated IoT devices. Uses MQTT for data ingestion and React for visualization.',
    tech: ['IoT Core', 'Amplify', 'React', 'Timestream'],
    icon: Globe,
    color: '#38BDF8',
    github: '#'
  },
  {
    title: 'Cloud Attendance System',
    desc: 'An automated attendance tracking system using facial recognition. Students scan their faces at the entrance, and attendance is logged in a database.',
    tech: ['Rekognition', 'Lambda', 'S3', 'DynamoDB'],
    icon: Code,
    color: '#A855F7',
    github: '#'
  },
  {
    title: 'Automated Data Pipeline',
    desc: 'A serverless ETL pipeline that extracts data from external APIs, transforms it using Python, and loads it into a data warehouse for analysis.',
    tech: ['Glue', 'Athena', 'S3', 'Step Functions'],
    icon: Database,
    color: '#22C55E',
    github: '#'
  },
  {
    title: 'Containerized Microservices',
    desc: 'An e-commerce backend broken down into microservices, containerized with Docker, and orchestrated using Amazon ECS.',
    tech: ['ECS', 'Fargate', 'Docker', 'ALB'],
    icon: Server,
    color: '#EC4899',
    github: '#'
  },
  {
    title: 'Serverless Chatbot',
    desc: 'An intelligent conversational agent built using Amazon Lex and integrated with Slack for answering student queries about the club.',
    tech: ['Lex', 'Lambda', 'DynamoDB'],
    icon: Zap,
    color: '#FF9900',
    github: '#'
  }
];

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.08 } }) };

export default function Projects() {
  const [showContact, setShowContact] = useState(false);

  return (
    <PageTransition className="w-full">
      {/* ── HEADER ── */}
      <section className="pt-32 pb-20 bg-grid-animated" style={{ background: '#0B1220' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <div className="section-label">Showcase</div>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-4 leading-tight">
              Student<br /><span style={{ color: '#FF9900' }}>Projects</span>
            </h1>
            <div className="section-line" />
            <p className="text-text-secondary max-w-xl mt-6 leading-relaxed">
              Explore the real-world cloud solutions built by members of the AWS Student Builder Group.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── PROJECTS GRID ── */}
      <section className="py-20" style={{ background: '#111827', borderTop: '1px solid #1E2A3A', borderBottom: '1px solid #1E2A3A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, idx) => (
              <Tilt key={idx} tiltMaxAngleX={5} tiltMaxAngleY={5} glareEnable glareMaxOpacity={0.1} scale={1.02} className="h-full flex flex-col">
                <motion.div
                  custom={idx} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="dev-card card-shine p-6 flex flex-col h-full w-full group"
                  style={{ borderLeftColor: project.color, borderLeftWidth: 3 }}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="icon-box" style={{ borderColor: project.color + '44' }}>
                      <project.icon className="w-5 h-5" style={{ color: project.color }} />
                    </div>
                    <div className="flex items-center gap-2">
                      {(project as any).liveUrl && (
                        <a
                          href={(project as any).liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon-box w-9 h-9 hover:border-white transition-colors"
                          title="Live Demo"
                        >
                          <Globe className="w-4 h-4" style={{ color: project.color }} />
                        </a>
                      )}
                      {project.github !== '#' && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="icon-box w-9 h-9 hover:border-white transition-colors"
                          title="GitHub"
                        >
                          <Github className="w-4 h-4 text-text-secondary" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-aws-orange transition-colors duration-200">
                    {project.title}
                  </h3>

                  <p className="text-text-secondary text-sm mb-6 flex-grow leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map(t => (
                        <span key={t} className="tech-tag" style={{ color: '#9CA3AF' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {(project as any).detailUrl && (
                        <Link
                          to={(project as any).detailUrl}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-105"
                          style={{ background: project.color, color: '#0B1220' }}
                        >
                          <ExternalLink className="w-4 h-4" />
                          View
                        </Link>
                      )}
                      {(project as any).liveUrl && !(project as any).detailUrl && (
                        <a
                          href={(project as any).liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-105"
                          style={{ background: project.color, color: '#0B1220' }}
                        >
                          <Globe className="w-4 h-4" />
                          View Project
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-grid-dense" style={{ background: '#0B1220' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} glareEnable glareMaxOpacity={0.1} scale={1.01} className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="dev-card p-12 lg:p-16 text-center max-w-4xl mx-auto border-animate"
            >
              <div className="section-label mb-6 justify-center">Submit Your Work</div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                Have a project to share?
              </h2>
              <p className="text-text-secondary mb-10 max-w-2xl mx-auto font-mono text-sm leading-relaxed">
                If you've built something cool using AWS services, we'd love to feature it! Submit your project and get recognized by the community.
              </p>
              <a
                href="#"
                className="pixel-button px-10 py-4 text-sm inline-flex items-center gap-2 mx-auto"
              >
                Submit Project <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </Tilt>
        </div>
      </section>

      {/* ── CONTACT MODAL ── */}
      <AnimatePresence>
        {showContact && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setShowContact(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1220]/80 backdrop-blur-sm px-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="dev-card w-full max-w-md p-8 relative"
              style={{ background: '#0D1826' }}
            >
              <button
                onClick={() => setShowContact(false)}
                className="absolute top-4 right-4 p-2 text-text-secondary hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-8">
                <h3 className="text-2xl font-heading font-bold text-white mb-2">Submit Project</h3>
                <div className="section-line mb-4" />
                <p className="text-sm text-text-secondary font-mono">We'll review your project and get back to you soon.</p>
              </div>

              <div className="space-y-3">
                <a
                  href={`https://wa.me/918421807460?text=${encodeURIComponent("Hi! I'm interested in showcasing my project on the AWS Student Builder Group website. I'd love to have it featured in the Student Projects section. Could you guide me on the submission process?")}`}
                  target="_blank" rel="noopener noreferrer"
                  className="dev-card card-shine flex items-center gap-4 p-4 group hover:border-[#22C55E]"
                >
                  <MessageCircle className="w-5 h-5 text-[#22C55E] shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-white group-hover:text-[#22C55E] transition-colors">WhatsApp</p>
                    <p className="text-xs text-text-secondary font-mono">Send us a message</p>
                  </div>
                </a>

                <a
                  href={`mailto:awssbggcoek@gmail.com?subject=${encodeURIComponent("Project Submission – AWS Student Builder Group")}&body=${encodeURIComponent("Hi AWS Team,\n\nProject Name: \nDescription: \nTech Stack: \nGitHub Link: \n\nBest,\n[Name]")}`}
                  className="dev-card card-shine flex items-center gap-4 p-4 group hover:border-cloud-blue"
                >
                  <Mail className="w-5 h-5 text-cloud-blue shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-white group-hover:text-cloud-blue transition-colors">Email</p>
                    <p className="text-xs text-text-secondary font-mono">awssbggcoek@gmail.com</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
