import { motion } from 'motion/react';
import { ArrowLeft, Users, MessageCircle, Gift, Network, Briefcase, Award } from 'lucide-react';
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

                {/* What's in it for you? */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}
                  className="dev-card p-8"
                >
                  <div className="section-label">Benefits</div>
                  <h2 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-3">
                    <Gift className="w-5 h-5" style={{ color: '#FF9900' }} /> What's in it for you?
                  </h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    {[
                      { icon: Gift, title: 'Exclusive AWS Swag', desc: 'Get official AWS t-shirts, stickers, bottles, and exclusive community gear.', color: '#FF9900' },
                      { icon: Network, title: 'Elite Networking', desc: 'Direct connections with AWS employees, industry leaders, and speakers.', color: '#38BDF8' },
                      { icon: Briefcase, title: 'Real Experience', desc: 'Build leadership skills and organize large-scale tech events.', color: '#A855F7' },
                      { icon: Award, title: 'Certifications', desc: 'Priority access to AWS training and certification vouchers.', color: '#22C55E' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-4 rounded-sm" style={{ background: '#080E1A', border: '1px solid #1E2A3A' }}>
                        <div className="p-2 rounded-sm shrink-0" style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                          <item.icon className="w-5 h-5" style={{ color: item.color }} />
                        </div>
                        <div>
                          <h4 className="text-white font-bold font-heading text-sm mb-1">{item.title}</h4>
                          <p className="text-text-secondary text-xs leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Swag photo */}
                  <div className="relative overflow-hidden rounded-sm" style={{ border: '1px solid #1E2A3A' }}>
                    <img 
                      src="/images/aws_swags.jpg" 
                      alt="Official AWS community swags" 
                      className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute bottom-4 left-4">
                      <span className="terminal-tag" style={{ color: '#FF9900', borderColor: '#FF9900' }}>
                        ★ REAL SWAG AWAITS
                      </span>
                    </div>
                  </div>
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
                      href="https://wa.me/918446712322?text=Hi!%20I'm%20interested%20in%20joining%20the%20AWS%20SBG%20Core%20Team.%20Can%20you%20share%20more%20details%20about%20the%20application%20process%3F"
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
