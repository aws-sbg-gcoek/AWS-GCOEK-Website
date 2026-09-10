import { motion } from 'motion/react';
import {
  BookOpen, Map, Award, Github, ExternalLink,
  PlayCircle, FileText, Shield,
  Layers, FlaskConical, Zap, Globe, Code2,
  GraduationCap, Rocket, Star,
} from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */

const ROADMAP_SECTIONS = [
  {
    step: 1,
    title: 'Cloud Fundamentals',
    desc: 'Understand what cloud computing is, deployment models, and service models (IaaS, PaaS, SaaS).',
    accent: '#FF9900',
    icon: Rocket,
    links: [
      { label: 'AWS Getting Started',       url: 'https://aws.amazon.com/getting-started/',                                 cta: 'LEARN →' },
      { label: 'Cloud Practitioner Training', url: 'https://aws.amazon.com/training/learn-about/cloud-practitioner/',       cta: 'LEARN →' },
      { label: 'AWS Skill Builder',          url: 'https://aws.amazon.com/training/digital/',                               cta: 'START LEARNING →' },
      { label: 'AWS Educate',               url: 'https://aws.amazon.com/education/awseducate/',                            cta: 'START LEARNING →' },
    ],
  },
  {
    step: 2,
    title: 'AWS Core Services',
    desc: 'Learn EC2 (Compute), S3 (Storage), RDS (Database), and VPC (Networking).',
    accent: '#38BDF8',
    icon: Layers,
    links: [
      { label: 'AWS Hands-On Tutorials',        url: 'https://aws.amazon.com/getting-started/hands-on/',                              cta: 'START LAB →' },
      { label: 'AWS Tutorials Directory',       url: 'https://aws.amazon.com/tutorials/',                                             cta: 'VIEW RESOURCES →' },
      { label: 'AWS Documentation',             url: 'https://docs.aws.amazon.com/',                                                  cta: 'OPEN DOCS →' },
      { label: 'EC2 – Launch First Instance',   url: 'https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/tutorial-launch-my-first-ec2-instance.html', cta: 'START LAB →' },
      { label: 'S3 – Getting Started',          url: 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/GetStartedWithS3.html',   cta: 'OPEN DOCS →' },
      { label: 'RDS – Getting Started',         url: 'https://docs.aws.amazon.com/AmazonRDS/latest/gettingstartedguide/what-is-rds.html', cta: 'OPEN DOCS →' },
      { label: 'VPC – Getting Started',         url: 'https://docs.aws.amazon.com/vpc/latest/userguide/vpc-getting-started.html',     cta: 'OPEN DOCS →' },
    ],
  },
  {
    step: 3,
    title: 'Security & Identity',
    desc: 'Master IAM (Identity and Access Management) and basic cloud security principles.',
    accent: '#22C55E',
    icon: Shield,
    links: [
      { label: 'IAM – Getting Started',                 url: 'https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-started.html',         cta: 'OPEN DOCS →' },
      { label: 'AWS Security Documentation',            url: 'https://docs.aws.amazon.com/security/',                                         cta: 'OPEN DOCS →' },
      { label: 'AWS Cloud Security',                    url: 'https://aws.amazon.com/security/',                                              cta: 'LEARN →' },
      { label: 'Well-Architected Security Pillar',      url: 'https://docs.aws.amazon.com/wellarchitected/latest/framework/security.html',    cta: 'VIEW GUIDE →' },
    ],
  },
  {
    step: 4,
    title: 'Serverless & Architecture',
    desc: 'Explore Lambda, API Gateway, DynamoDB, and the Well-Architected Framework.',
    accent: '#A855F7',
    icon: Zap,
    links: [
      { label: 'AWS Serverless Developer Guide',        url: 'https://docs.aws.amazon.com/serverless/latest/devguide/',                       cta: 'OPEN DOCS →' },
      { label: 'Lambda – Create Your First Function',   url: 'https://docs.aws.amazon.com/lambda/latest/dg/getting-started.html',            cta: 'START LAB →' },
      { label: 'API Gateway – Getting Started',         url: 'https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started.html', cta: 'START LAB →' },
      { label: 'DynamoDB – Getting Started',            url: 'https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStartedDynamoDB.html', cta: 'START LAB →' },
      { label: 'Lambda Workshops & Tutorials',          url: 'https://aws.amazon.com/lambda/resources/workshops-and-tutorials/',              cta: 'START LAB →' },
      { label: 'AWS Serverless Workshops',              url: 'https://aws.amazon.com/serverless-workshops/',                                  cta: 'START LAB →' },
      { label: 'Well-Architected Framework',            url: 'https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html',    cta: 'VIEW GUIDE →' },
      { label: 'AWS Architecture Center',               url: 'https://aws.amazon.com/architecture/',                                         cta: 'VIEW GUIDE →' },
    ],
  },
  {
    step: 5,
    title: 'Hands-on Projects',
    desc: 'Build and deploy real applications to solidify your cloud knowledge.',
    accent: '#EC4899',
    icon: FlaskConical,
    links: [
      { label: 'AWS Hands-On Tutorials',       url: 'https://aws.amazon.com/getting-started/hands-on/',               cta: 'START LAB →' },
      { label: 'AWS Workshops',                url: 'https://workshops.aws/',                                         cta: 'START LAB →' },
      { label: 'AWS Code Examples Library',    url: 'https://docs.aws.amazon.com/code-library/',                      cta: 'OPEN DOCS →' },
      { label: 'AWS Samples on GitHub',        url: 'https://github.com/aws-samples',                                 cta: 'VIEW RESOURCES →' },
      { label: 'Serverless Workshops (GitHub)', url: 'https://github.com/aws-samples/aws-serverless-workshops',       cta: 'START LAB →' },
    ],
  },
];

const INTERACTIVE_LINKS = [
  { label: 'AWS Cloud Quest',    url: 'https://skillbuilder.aws/',                 cta: 'START QUEST →',    accent: '#FF9900', icon: Star },
  { label: 'AWS Skill Builder',  url: 'https://aws.amazon.com/training/digital/', cta: 'START LEARNING →', accent: '#38BDF8', icon: PlayCircle },
  { label: 'AWS Builder Center', url: 'https://builder.aws.com/',                 cta: 'LEARN →',          accent: '#A855F7', icon: Code2 },
];

const WEB_DEV_LINKS = [
  { label: 'Host a Static Website on S3',           url: 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html', cta: 'START LAB →' },
  { label: 'Build a Full-Stack React App (Amplify)', url: 'https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify/',          cta: 'START LAB →' },
  { label: 'AWS Amplify',                            url: 'https://aws.amazon.com/amplify/',                                                   cta: 'LEARN →' },
  { label: 'Amazon CloudFront',                      url: 'https://aws.amazon.com/cloudfront/',                                               cta: 'LEARN →' },
];

const CERTIFICATION_LINKS = [
  { label: 'AWS Certification Hub',               url: 'https://aws.amazon.com/certification/',                                                                           cta: 'VIEW GUIDE →' },
  { label: 'AWS Certified Cloud Practitioner',    url: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',                                               cta: 'VIEW GUIDE →' },
  { label: 'Exam Guide (CLF-C02)',                url: 'https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html',           cta: 'VIEW GUIDE →' },
  { label: 'Certification Exam Prep',             url: 'https://aws.amazon.com/certification/certification-prep/',                                                        cta: 'VIEW GUIDE →' },
  { label: 'Cloud Practitioner Training',         url: 'https://aws.amazon.com/training/learn-about/cloud-practitioner/',                                                 cta: 'LEARN →' },
];

const DEV_EXTRAS = [
  { label: 'AWS Documentation',      url: 'https://docs.aws.amazon.com/',              cta: 'OPEN DOCS →', icon: FileText },
  { label: 'AWS Code Examples',      url: 'https://docs.aws.amazon.com/code-library/', cta: 'OPEN DOCS →', icon: Code2 },
  { label: 'AWS CLI',                url: 'https://docs.aws.amazon.com/cli/',           cta: 'OPEN DOCS →', icon: FileText },
  { label: 'AWS re:Post Community',  url: 'https://repost.aws/',                       cta: 'LEARN →',     icon: BookOpen },
  { label: 'AWS Architecture Center',url: 'https://aws.amazon.com/architecture/',      cta: 'VIEW GUIDE →', icon: Layers },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.06 } }),
};

/* ─────────────────────────────────────────────────────────────
   HELPER COMPONENTS
───────────────────────────────────────────────────────────── */

function ExternalCTAButton({ url, cta, accent }: { url: string; cta: string; accent?: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={accent ? { borderColor: accent + '55', color: accent } : undefined}
      className={[
        'inline-flex items-center gap-1 px-2.5 py-1.5 rounded',
        'font-mono text-[0.6rem] font-bold tracking-wide uppercase',
        'border transition-all duration-200 flex-shrink-0',
        !accent ? 'border-aws-orange/40 text-aws-orange hover:bg-aws-orange/10' : 'hover:opacity-80',
        'hover:scale-105 whitespace-nowrap',
      ].join(' ')}
    >
      {cta}
    </a>
  );
}

function LinkRow({ label, url, cta, accent }: { label: string; url: string; cta: string; accent?: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-3 py-2.5 rounded-lg group border border-transparent hover:border-white/5 hover:bg-white/[0.03] transition-all duration-200 min-w-0"
    >
      <span className="text-text-secondary text-sm group-hover:text-white transition-colors duration-200 leading-snug flex-1 min-w-0 break-words">
        {label}
      </span>
      <ExternalCTAButton url={url} cta={cta} accent={accent} />
    </a>
  );
}

export default function Resources() {
  return (
    <PageTransition className="w-full">

      {/* ── PAGE HEADER ── */}
      <section className="pt-32 pb-20" style={{ background: '#0B1220' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <div className="section-label">Knowledge Base</div>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-4 leading-tight">
              Learning<br /><span style={{ color: '#FF9900' }}>Resources</span>
            </h1>
            <div className="section-line" />
            <p className="text-text-secondary max-w-xl mt-6 leading-relaxed">
              Curated links, roadmaps, and guides to help you master AWS and cloud computing —
              every card takes you directly to the official source.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CLOUD BEGINNER ROADMAP ── */}
      <section className="py-20" style={{ background: '#111827', borderTop: '1px solid #1E2A3A', borderBottom: '1px solid #1E2A3A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <div className="section-label">Roadmap</div>
            <h2 className="text-3xl font-heading font-bold text-white flex items-center gap-3">
              <Map className="w-6 h-6" style={{ color: '#A855F7' }} />
              Cloud Beginner Roadmap
            </h2>
            <div className="section-line section-line-purple mt-4" />
            <p className="text-text-secondary text-sm mt-3 max-w-lg">
              Follow these steps in order. Each stage includes direct links to official AWS resources.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative ml-2 sm:ml-4">
            <div className="absolute left-0 top-0 bottom-0 w-px" style={{ background: '#1E2A3A' }} />
            <div className="space-y-6">
              {ROADMAP_SECTIONS.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={idx}
                    custom={idx} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className="relative ml-6 sm:ml-8 dev-card p-0 overflow-hidden"
                    style={{ borderLeftColor: step.accent, borderLeftWidth: 3 }}
                  >
                    {/* Timeline dot */}
                    <div
                      className="absolute -left-[1.7rem] sm:-left-[2.6rem] top-5 w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center"
                      style={{ background: step.accent, borderRadius: 3 }}
                    >
                      <span className="font-mono text-[0.55rem] sm:text-[0.6rem] font-bold text-black">{idx + 1}</span>
                    </div>

                    {/* Header */}
                    <div className="flex items-start gap-3 p-4 sm:p-5 pb-3">
                      <div className="icon-box flex-shrink-0 hidden xs:flex" style={{ borderColor: step.accent + '44' }}>
                        <Icon className="w-4 h-4" style={{ color: step.accent }} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-heading font-bold text-white text-sm sm:text-base">
                          Step {idx + 1}: {step.title}
                        </h3>
                        <p className="text-text-secondary text-xs sm:text-sm mt-0.5 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="mx-5 border-t border-white/5" />

                    {/* Links */}
                    <div className="p-2">
                      {step.links.map((link, li) => (
                        <LinkRow key={li} {...link} accent={step.accent} />
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE LEARNING ── */}
      <section className="py-20 bg-grid-dense" style={{ background: '#0B1220' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <div className="section-label">Interactive Learning</div>
            <h2 className="text-3xl font-heading font-bold text-white flex items-center gap-3">
              <PlayCircle className="w-6 h-6 text-aws-orange" />
              Learn by Doing
            </h2>
            <div className="section-line mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {INTERACTIVE_LINKS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  custom={idx} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="dev-card card-shine p-5 sm:p-6 flex flex-col gap-3 sm:gap-4 group cursor-pointer min-w-0"
                  style={{ borderTopColor: item.accent, borderTopWidth: 2 }}
                >
                  <div className="icon-box" style={{ borderColor: item.accent + '44' }}>
                    <Icon className="w-5 h-5" style={{ color: item.accent }} />
                  </div>
                  <p className="font-heading font-bold text-white group-hover:text-aws-orange transition-colors duration-200">
                    {item.label}
                  </p>
                  <span
                    className="mt-auto inline-flex items-center gap-1.5 font-mono text-[0.65rem] font-bold tracking-widest uppercase"
                    style={{ color: item.accent }}
                  >
                    {item.cta} <ExternalLink className="w-3 h-3" />
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── STATIC WEBSITE / WEB DEV ── */}
      <section className="py-20" style={{ background: '#111827', borderTop: '1px solid #1E2A3A', borderBottom: '1px solid #1E2A3A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <div className="section-label">Web Development</div>
            <h2 className="text-3xl font-heading font-bold text-white flex items-center gap-3">
              <Globe className="w-6 h-6" style={{ color: '#38BDF8' }} />
              Static Website &amp; Web Dev on AWS
            </h2>
            <div className="section-line mt-4" style={{ background: '#38BDF8' }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="dev-card p-2 w-full max-w-2xl"
            style={{ borderLeftColor: '#38BDF8', borderLeftWidth: 3 }}
          >
            {WEB_DEV_LINKS.map((link, idx) => (
              <LinkRow key={idx} {...link} accent="#38BDF8" />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CERTIFICATION + DEVELOPER EXTRAS ── */}
      <section className="py-20 bg-grid-dense" style={{ background: '#0B1220' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Certification */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
                <div className="section-label">Certification</div>
                <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-3">
                  <Award className="w-5 h-5 text-aws-orange" /> Certification Guide
                </h2>
                <div className="section-line mt-4" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="dev-card p-5"
                style={{ borderLeftColor: '#FF9900', borderLeftWidth: 3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-5 h-5 text-aws-orange" />
                  <h3 className="font-heading font-bold text-white">AWS Certified Cloud Practitioner</h3>
                </div>
                <p className="text-text-secondary text-sm mb-5 leading-relaxed">
                  The perfect starting point. Access the official exam guide, certification hub, prep materials, and training resources directly.
                </p>
                <div className="space-y-1">
                  {CERTIFICATION_LINKS.map((link, idx) => (
                    <LinkRow key={idx} {...link} />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Developer Extras + GitHub */}
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
                <div className="section-label">Developer Resources</div>
                <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-3">
                  <Code2 className="w-5 h-5 text-aws-orange" /> Extra Dev Resources
                </h2>
                <div className="section-line mt-4" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="dev-card p-2 mb-6"
                style={{ borderLeftColor: '#A855F7', borderLeftWidth: 3 }}
              >
                {DEV_EXTRAS.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={idx}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg group border border-transparent hover:border-white/5 hover:bg-white/[0.03] transition-all duration-200 min-w-0"
                    >
                      <Icon className="w-4 h-4 text-arcade-purple flex-shrink-0" />
                      <span className="text-text-secondary text-sm group-hover:text-white transition-colors duration-200 flex-1 min-w-0 break-words">
                        {item.label}
                      </span>
                      <ExternalCTAButton url={item.url} cta={item.cta} accent="#A855F7" />
                    </a>
                  );
                })}
              </motion.div>

              {/* GitHub */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="dev-card p-6 bl-purple"
              >
                <h2 className="text-lg font-heading font-bold text-white flex items-center gap-3 mb-3">
                  <Github className="w-5 h-5 text-aws-orange" /> GitHub Resources
                </h2>
                <p className="text-text-secondary text-sm mb-5 leading-relaxed">
                  Access open-source repositories with lab instructions, sample code, and project templates from AWS directly.
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://github.com/aws-samples"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-mono text-xs sm:text-sm text-arcade-purple hover:text-aws-orange transition-colors duration-200 min-w-0"
                  >
                    <Github className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">aws-samples</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0 ml-auto" />
                  </a>
                  <a
                    href="https://github.com/aws-samples/aws-serverless-workshops"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-mono text-xs sm:text-sm text-arcade-purple hover:text-aws-orange transition-colors duration-200 min-w-0"
                  >
                    <Github className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">aws-serverless-workshops</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0 ml-auto" />
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
