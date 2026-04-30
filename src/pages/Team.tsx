import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Linkedin, Mail, Users, X, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { departments } from '../data/team';

const colorMap: Record<string, string> = {
  'text-arcade-purple': '#A855F7',
  'text-cloud-blue': '#38BDF8',
  'text-aws-orange': '#FF9900',
  'text-green-500': '#22C55E',
  'text-pink-500': '#EC4899',
  'text-yellow-500': '#EAB308',
  'text-red-500': '#EF4444',
  'text-indigo-500': '#6366F1'
};

export default function Team() {
  const [showContact, setShowContact] = useState(false);
  return (
    <PageTransition className="w-full">
      {/* ── HEADER ── */}
      <section className="pt-32 pb-20 bg-grid-animated" style={{ background: '#0B1220' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <div className="section-label">Leadership</div>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-4 leading-tight">
              Our<br /><span style={{ color: '#FF9900' }}>Team</span>
            </h1>
            <div className="section-line" />
            <p className="text-text-secondary max-w-xl mt-6 leading-relaxed">
              Meet the dedicated students leading the AWS Student Builder Group at GCOEK.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── DEPARTMENTS ── */}
      <section className="py-20" style={{ background: '#111827', borderTop: '1px solid #1E2A3A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {departments.map((dept, deptIdx) => {
            const hexColor = colorMap[dept.color] || '#FF9900';
            
            return (
              <div key={deptIdx} className="mb-24 last:mb-0">
                <div className="mb-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="icon-box" style={{ borderColor: hexColor + '44' }}>
                      <dept.icon className="w-5 h-5" style={{ color: hexColor }} />
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-white">{dept.title}</h2>
                  </div>
                  <div className="h-1 w-16" style={{ background: hexColor }} />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {dept.members.map((member, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}
                      whileHover={{ y: -4 }}
                      className="dev-card group overflow-hidden flex flex-col"
                      style={{ borderTopColor: hexColor, borderTopWidth: 2 }}
                    >
                      <Link to={`/team/${member.id}`} className="flex flex-col flex-grow">
                        {/* Square photo */}
                        <div className="aspect-square overflow-hidden" style={{ borderBottom: '1px solid #1E2A3A' }}>
                          <img
                            src={(member as any).image || `https://picsum.photos/seed/${member.name.replace(/ /g, '')}/150/150`}
                            alt={member.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 filter grayscale group-hover:grayscale-0"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-4 flex-grow flex flex-col">
                          <h3 className="text-sm font-heading font-bold text-white leading-tight mb-1 group-hover:text-aws-orange transition-colors duration-200">{member.name}</h3>
                          <p className="font-mono text-[10px] uppercase tracking-wider mt-auto" style={{ color: hexColor }}>{member.role}</p>
                        </div>
                      </Link>
                      
                      {/* Socials */}
                      <div className="px-4 pb-4 pt-2 flex gap-2 border-t border-border-color bg-[#080E1A]">
                        {member.linkedin && (
                          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cloud-blue transition-colors text-text-secondary">
                            <Linkedin className="w-4 h-4" />
                          </a>
                        )}
                        {member.email && (
                          <a href={member.email} className="hover:text-aws-orange transition-colors text-text-secondary">
                            <Mail className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-grid-dense" style={{ background: '#0B1220', borderTop: '1px solid #1E2A3A' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto px-4 text-center">
          <div className="dev-card p-12 border-animate">
            <Users className="w-12 h-12 text-border-color mx-auto mb-6" />
            <h2 className="text-3xl font-heading font-bold text-white mb-4">Want to join the core team?</h2>
            <p className="text-text-secondary mb-8 font-mono text-sm">We are always looking for passionate students to help lead the club and organize events.</p>
            <button onClick={() => setShowContact(true)} className="pixel-button px-8 py-3.5">Apply for Leadership</button>
          </div>
        </motion.div>
      </section>

      {/* ── MODAL ── */}
      <AnimatePresence>
        {showContact && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowContact(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1220]/80 backdrop-blur-sm px-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()} className="dev-card w-full max-w-md p-8 relative" style={{ background: '#0D1826' }}
            >
              <button onClick={() => setShowContact(false)} className="absolute top-4 right-4 p-2 text-text-secondary hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
              <div className="mb-8">
                <h3 className="text-2xl font-heading font-bold text-white mb-2">Apply for Leadership</h3>
                <div className="section-line mb-4" />
                <p className="text-sm text-text-secondary font-mono">Reach out to us or fill the form to join the core team.</p>
              </div>
              <div className="space-y-3">
                <a href="https://forms.gle/zF7ETWoREn9nkP6dA" target="_blank" rel="noopener noreferrer" className="dev-card card-shine flex items-center gap-4 p-4 group hover:border-arcade-purple">
                  <Users className="w-5 h-5 text-arcade-purple shrink-0" />
                  <div><p className="text-sm font-bold text-white">Application Form</p><p className="text-xs text-text-secondary font-mono">Fill out the official form</p></div>
                </a>
                <a href={`https://wa.me/918446712322`} target="_blank" rel="noopener noreferrer" className="dev-card card-shine flex items-center gap-4 p-4 group hover:border-[#22C55E]">
                  <MessageCircle className="w-5 h-5 text-[#22C55E] shrink-0" />
                  <div><p className="text-sm font-bold text-white">WhatsApp</p><p className="text-xs text-text-secondary font-mono">Send us a message</p></div>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
