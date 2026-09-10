import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Github, Globe, Zap, CheckCircle2, Cpu, Cloud, User } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

// ── Project data ──────────────────────────────────────────────────────────────
const PROJECTS_DATA: Record<string, ProjectDetailData> = {
  'devinsight-guardian': {
    id: 'devinsight-guardian',
    title: 'DevInsight Guardian',
    category: 'AI + Serverless',
    tagline: 'The AI Engineering Manager that works while you sleep.',
    creator: {
      name: 'Shardul Kolekar',
      role: 'Project Creator',
      image: 'https://i.ibb.co/YBzRTFVx/Chat-GPT-Image-Sep-4-2026-12-34-54-PM.png',
    },
    image: '',
    about:
      'An autonomous serverless AI engineering manager that watches GitHub activity, analyzes engineering patterns, and delivers a personalized morning brief with prioritized recommendations.',
    howItWorks:
      'Guardian observes GitHub activity, analyzes 30 days of patterns, computes productivity and burnout metrics, applies agent memory, generates personalized coaching insights, and delivers the results through a morning email.',
    features: [
      'Autonomous daily analysis',
      '8-stage agentic pipeline',
      'Agent memory and strategy adaptation',
      'Burnout early warning',
      'Priority, confidence and reason for recommendations',
      'Repository spotlighting',
      'Personalized morning brief',
      'Fault-tolerant processing',
      'CloudWatch monitoring',
    ],
    tech: ['AWS Lambda', 'AWS SAM', 'TypeScript', 'React', 'Node.js', 'Groq', 'Firebase'],
    awsServices: [
      'AWS Lambda',
      'Amazon EventBridge Scheduler',
      'Amazon SES',
      'AWS Secrets Manager',
      'Amazon CloudWatch',
      'Amazon SQS',
      'AWS IAM',
      'AWS SAM',
    ],
    links: {
      live: 'https://dev-insight-shardul-kolekar.vercel.app/',
      github: 'https://github.com/ShardulOnGit/DevInsight',
    },
    color: '#FF9900',
  },
};

// ── Types ─────────────────────────────────────────────────────────────────────
interface ProjectDetailData {
  id: string;
  title: string;
  category: string;
  tagline: string;
  creator: { name: string; role: string; image: string };
  image: string;
  about: string;
  howItWorks: string;
  features: string[];
  tech: string[];
  awsServices: string[];
  links: { live?: string; github?: string };
  color: string;
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? PROJECTS_DATA[id] : null;

  if (!project) {
    return (
      <PageTransition className="w-full flex-grow flex items-center justify-center py-24" style={{ background: '#0B1220' }}>
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold text-white mb-4">Project Not Found</h1>
          <p className="text-text-secondary font-mono text-sm mb-8">
            The project you are looking for does not exist.
          </p>
          <Link to="/projects" className="pixel-button px-6 py-2 inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
        </div>
      </PageTransition>
    );
  }

  const { color } = project;

  return (
    <PageTransition className="w-full pt-28 pb-20" style={{ background: '#0B1220' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back link */}
        <Link
          to="/projects"
          className="inline-flex items-center text-text-secondary hover:text-aws-orange transition-colors mb-8 font-mono text-xs uppercase tracking-widest group"
        >
          <ArrowLeft className="w-3.5 h-3.5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* ── MAIN CARD ── */}
        <div className="dev-card overflow-hidden bg-[#0D1826]">

          {/* Banner */}
          <div
            className="h-32 md:h-48 w-full relative"
            style={{ backgroundColor: color + '15', borderBottom: '1px solid #1E2A3A' }}
          >
            <div className="absolute inset-0 bg-grid-dense opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0D1826]" />
            {/* Category pill */}
            <div className="absolute top-4 left-6">
              <span
                className="terminal-tag flex items-center gap-2"
                style={{ borderColor: color, color, background: '#0D1826' }}
              >
                <Zap className="w-3 h-3" /> {project.category}
              </span>
            </div>
          </div>

          <div className="px-6 md:px-12 pb-12 relative -mt-16 md:-mt-24">

            {/* ── Header: creator photo + title ── */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-end mb-12">

              {/* Creator photo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="relative z-10 flex-shrink-0"
              >
                <div
                  className="w-32 h-32 md:w-44 md:h-44 rounded-sm bg-[#080E1A] border-4 border-[#080E1A] overflow-hidden"
                  style={{ borderBottomColor: color }}
                >
                  <img
                    src={project.creator.image}
                    alt={project.creator.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        `https://ui-avatars.com/api/?name=${encodeURIComponent(project.creator.name)}&background=0D1826&color=FF9900&size=200`;
                    }}
                  />
                </div>
              </motion.div>

              {/* Title block */}
              <motion.div
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
                className="flex-grow text-center md:text-left z-10 pb-2"
              >
                <div className="mb-3 flex items-center gap-2 justify-center md:justify-start">
                  <User className="w-3.5 h-3.5" style={{ color }} />
                  <span className="font-mono text-xs uppercase tracking-widest" style={{ color }}>
                    {project.creator.role}
                  </span>
                </div>
                <p className="font-mono text-sm text-text-secondary mb-1">{project.creator.name}</p>
                <h1 className="text-3xl md:text-5xl font-heading font-black text-white mb-3 leading-tight">
                  {project.title}
                </h1>
                <p className="text-text-secondary font-mono text-sm italic mb-5">"{project.tagline}"</p>

                {/* Action buttons */}
                <div className="flex gap-3 justify-center md:justify-start flex-wrap">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-105"
                      style={{ background: color, color: '#0B1220' }}
                    >
                      <Globe className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold border transition-all duration-200 hover:border-white hover:text-white text-text-secondary"
                      style={{ borderColor: '#1E2A3A', background: 'transparent' }}
                    >
                      <Github className="w-4 h-4" /> GitHub
                    </a>
                  )}
                </div>
              </motion.div>
            </div>

            {/* ── Project screenshot ── */}
            {project.image && (
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
                className="w-full rounded-md overflow-hidden border mb-10"
                style={{ borderColor: '#1E2A3A' }}
              >
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            )}

            {/* ── Content grid ── */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              {/* Left: About + How it works + Features */}
              <div className="lg:col-span-2 space-y-8">

                {/* About */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                  className="dev-card p-8"
                >
                  <div className="section-label">Overview</div>
                  <h2 className="text-2xl font-heading font-bold text-white mb-4">About the Project</h2>
                  <p className="text-text-secondary leading-relaxed">{project.about}</p>
                </motion.div>

                {/* How it works */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}
                  className="dev-card p-8"
                >
                  <div className="section-label">Architecture</div>
                  <h2 className="text-2xl font-heading font-bold text-white mb-4">How It Works</h2>
                  <p className="text-text-secondary leading-relaxed">{project.howItWorks}</p>
                </motion.div>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
                  className="dev-card p-8"
                >
                  <div className="section-label">Capabilities</div>
                  <h2 className="text-2xl font-heading font-bold text-white mb-6">Key Features</h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-text-secondary">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Right sidebar: tech stack + AWS services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }}
                className="space-y-6"
              >
                {/* Tech stack */}
                <div className="dev-card p-6 bg-[#080E1A]">
                  <div className="section-label">Stack</div>
                  <h3 className="text-lg font-heading font-bold text-white mb-4 flex items-center gap-2">
                    <Cpu className="w-4 h-4" style={{ color }} /> Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="tech-tag"
                        style={{ color: '#9CA3AF' }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* AWS Services */}
                <div className="dev-card p-6 bg-[#080E1A]">
                  <div className="section-label">Cloud</div>
                  <h3 className="text-lg font-heading font-bold text-white mb-4 flex items-center gap-2">
                    <Cloud className="w-4 h-4" style={{ color }} /> AWS Services
                  </h3>
                  <ul className="space-y-2">
                    {project.awsServices.map((svc, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-text-secondary font-mono">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color }} />
                        {svc}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Creator card */}
                <div className="dev-card p-6 bg-[#080E1A]">
                  <div className="section-label">Creator</div>
                  <h3 className="text-lg font-heading font-bold text-white mb-4">Built by</h3>
                  <div className="flex items-center gap-4">
                    <img
                      src={project.creator.image}
                      alt={project.creator.name}
                      className="w-12 h-12 rounded-sm object-cover border-2"
                      style={{ borderColor: color }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          `https://ui-avatars.com/api/?name=${encodeURIComponent(project.creator.name)}&background=0D1826&color=FF9900&size=80`;
                      }}
                    />
                    <div>
                      <p className="text-white font-bold text-sm">{project.creator.name}</p>
                      <p className="text-text-secondary text-xs font-mono">{project.creator.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
