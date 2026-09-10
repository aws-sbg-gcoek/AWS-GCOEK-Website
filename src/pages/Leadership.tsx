import { motion } from 'motion/react';
import { ArrowLeft, Users, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';

export default function Leadership() {
  return (
    <PageTransition className="w-full pt-28 pb-20" style={{ background: '#0B1220' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back link */}
        <Link
          to="/team"
          className="inline-flex items-center text-text-secondary hover:text-aws-orange transition-colors mb-8 font-mono text-xs uppercase tracking-widest group"
        >
          <ArrowLeft className="w-3.5 h-3.5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Team
        </Link>

        <div className="dev-card overflow-hidden bg-[#0D1826]">

          {/* Banner */}
          <div className="h-32 md:h-48 w-full relative" style={{ backgroundColor: '#FF990015', borderBottom: '1px solid #1E2A3A' }}>
            <div className="absolute inset-0 bg-grid-dense opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0D1826]" />
          </div>

          <div className="px-6 md:px-12 pb-12 relative -mt-16 md:-mt-20">

            {/* Icon + Title */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-end mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="relative z-10 flex-shrink-0"
              >
                <div
                  className="w-32 h-32 md:w-40 md:h-40 rounded-sm bg-[#080E1A] border-4 border-[#080E1A] flex items-center justify-center"
                  style={{ borderBottomColor: '#FF9900' }}
                >
                  <Users className="w-16 h-16" style={{ color: '#FF9900' }} />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
                className="flex-grow text-center md:text-left z-10 pb-2"
              >
                <div className="mb-3">
                  <span className="terminal-tag flex items-center gap-2 w-max mx-auto md:mx-0" style={{ borderColor: '#FF9900', color: '#FF9900', background: '#0D1826' }}>
                    <Users className="w-3.5 h-3.5" /> Leadership Dept
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-heading font-black text-white mb-2">Apply for Leadership</h1>
                <p className="font-mono uppercase tracking-widest text-sm" style={{ color: '#FF9900' }}>Join the Core Team</p>
              </motion.div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              <div className="lg:col-span-2 space-y-8">
                {/* About */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                  className="dev-card p-8"
                >
                  <div className="section-label">About</div>
                  <h2 className="text-2xl font-heading font-bold text-white mb-4 flex items-center gap-3">
                    <Users className="w-5 h-5" style={{ color: '#FF9900' }} /> Want to join the core team?
                  </h2>
                  <p className="text-text-secondary leading-relaxed">
                    We are always looking for passionate students to help lead the club and organize events.
                    As a core team member you'll get hands-on experience with AWS cloud technologies, lead
                    workshops, collaborate with industry professionals, and grow your network within the
                    cloud computing community at GCOEK.
                  </p>
                </motion.div>
              </div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-6"
              >
                <div className="dev-card p-6 bg-[#080E1A]">
                  <div className="section-label">Connect</div>
                  <h3 className="text-xl font-heading font-bold text-white mb-6">Apply Now</h3>

                  <div className="space-y-3">
                    <a
                      href="https://forms.gle/zF7ETWoREn9nkP6dA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dev-card card-shine flex items-center gap-4 p-4 group hover:border-arcade-purple"
                    >
                      <Users className="w-5 h-5 text-arcade-purple shrink-0" />
                      <div>
                        <p className="text-sm font-bold text-white group-hover:text-arcade-purple transition-colors">Application Form</p>
                        <p className="text-xs text-text-secondary font-mono">Fill out the official form</p>
                      </div>
                    </a>

                    <a
                      href="https://wa.me/918446712322"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dev-card card-shine flex items-center gap-4 p-4 group hover:border-[#22C55E]"
                    >
                      <MessageCircle className="w-5 h-5 text-[#22C55E] shrink-0" />
                      <div>
                        <p className="text-sm font-bold text-white group-hover:text-[#22C55E] transition-colors">WhatsApp</p>
                        <p className="text-xs text-text-secondary font-mono">Send us a message</p>
                      </div>
                    </a>
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
