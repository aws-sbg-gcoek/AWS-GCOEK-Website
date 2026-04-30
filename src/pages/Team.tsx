import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Linkedin, Mail, Users, X, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { departments } from '../data/team';

export default function Team() {
  const [showContact, setShowContact] = useState(false);
  return (
    <PageTransition className="w-full">
      {/* Header */}
      <section className="pt-24 pb-16 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-gradient-orange">Our Team</h1>
            <div className="w-24 h-1 bg-aws-orange mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto font-mono">
              Meet the dedicated students leading the AWS Student Builder Group at GCOEK.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 bg-cloud-secondary/20 border-y border-border-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {departments.map((dept, deptIdx) => (
            <div key={deptIdx} className="mb-20 last:mb-0">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <dept.icon className={`w-8 h-8 ${dept.color} mr-3`} />
                  <h2 className="text-3xl font-heading font-bold text-text-primary">{dept.title}</h2>
                </div>
                <div className={`w-16 h-1 ${dept.bgColor} mx-auto rounded-full`}></div>
              </div>

              {dept.title === "Leadership Dept" ? (
                <div className="flex flex-col gap-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto w-full">
                    {dept.members.slice(0, 2).map((member, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="glass-panel flex flex-col items-center text-center pixel-border hover:pixel-border-hover transition-all duration-300 group overflow-hidden hover:shadow-[0_0_20px_rgba(255,153,0,0.15)]"
                      >
                        <Link to={`/team/${member.id}`} className="w-full p-6 flex flex-col items-center flex-grow">
                          <div className={`w-28 h-28 rounded-full bg-cloud-secondary border-2 border-border-color mb-4 overflow-hidden flex items-center justify-center ${dept.hoverBorderColor} transition-colors`}>
                            <img 
                              src={(member as any).image || `https://picsum.photos/seed/${member.name.replace(/ /g, '')}/150/150`} 
                              alt={member.name}
                             className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                              loading="lazy"
                            />
                          </div>
                          <h3 className="text-lg font-heading font-bold mb-1 text-text-primary group-hover:text-aws-orange transition-colors">{member.name}</h3>
                          <p className={`${dept.color} font-mono text-xs mb-4 min-h-[32px] flex items-center justify-center`}>{member.role}</p>
                        </Link>
                        <div className="flex space-x-3 mt-auto pb-6 px-6">
                          {member.linkedin && (
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-cloud-blue transition-colors hover:scale-110 transform z-10">
                              <Linkedin className="w-4 h-4" />
                            </a>
                          )}
                          {member.email && (
                            <a href={member.email} className="text-text-secondary hover:text-text-primary transition-colors hover:scale-110 transform z-10">
                              <Mail className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center">
                    {dept.members.slice(2).map((member, idx) => (
                      <motion.div 
                        key={idx + 2}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: (idx + 2) * 0.1 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="glass-panel flex flex-col items-center text-center pixel-border hover:pixel-border-hover transition-all duration-300 group overflow-hidden hover:shadow-[0_0_20px_rgba(255,153,0,0.15)]"
                      >
                        <Link to={`/team/${member.id}`} className="w-full p-6 flex flex-col items-center flex-grow">
                          <div className={`w-28 h-28 rounded-full bg-cloud-secondary border-2 border-border-color mb-4 overflow-hidden flex items-center justify-center ${dept.hoverBorderColor} transition-colors`}>
                            <img 
                              src={(member as any).image || `https://picsum.photos/seed/${member.name.replace(/ /g, '')}/150/150`} 
                              alt={member.name}
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                              loading="lazy"
                            />
                          </div>
                          <h3 className="text-lg font-heading font-bold mb-1 text-text-primary group-hover:text-aws-orange transition-colors">{member.name}</h3>
                          <p className={`${dept.color} font-mono text-xs mb-4 min-h-[32px] flex items-center justify-center`}>{member.role}</p>
                        </Link>
                        <div className="flex space-x-3 mt-auto pb-6 px-6">
                          {member.linkedin && (
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-cloud-blue transition-colors hover:scale-110 transform z-10">
                              <Linkedin className="w-4 h-4" />
                            </a>
                          )}
                          {member.email && (
                            <a href={member.email} className="text-text-secondary hover:text-text-primary transition-colors hover:scale-110 transform z-10">
                              <Mail className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center">
                  {dept.members.map((member, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="glass-panel flex flex-col items-center text-center pixel-border hover:pixel-border-hover transition-all duration-300 group overflow-hidden hover:shadow-[0_0_20px_rgba(255,153,0,0.15)]"
                    >
                      <Link to={`/team/${member.id}`} className="w-full p-6 flex flex-col items-center flex-grow">
                        <div className={`w-28 h-28 rounded-full bg-cloud-secondary border-2 border-border-color mb-4 overflow-hidden flex items-center justify-center ${dept.hoverBorderColor} transition-colors`}>
                          <img 
                            src={(member as any).image || `https://picsum.photos/seed/${member.name.replace(/ /g, '')}/150/150`} 
                            alt={member.name}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                            loading="lazy"
                          />
                        </div>
                        <h3 className="text-lg font-heading font-bold mb-1 text-text-primary group-hover:text-aws-orange transition-colors">{member.name}</h3>
                        <p className={`${dept.color} font-mono text-xs mb-4 min-h-[32px] flex items-center justify-center`}>{member.role}</p>
                      </Link>
                      <div className="flex space-x-3 mt-auto pb-6 px-6">
                        {member.linkedin && (
                          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-cloud-blue transition-colors hover:scale-110 transform z-10">
                            <Linkedin className="w-4 h-4" />
                          </a>
                        )}
                        {member.email && (
                          <a href={member.email} className="text-text-secondary hover:text-text-primary transition-colors hover:scale-110 transform z-10">
                            <Mail className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-16 bg-cloud-secondary/30 border-t border-border-color text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <Users className="w-16 h-16 text-aws-orange mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl font-heading font-bold mb-4 text-text-primary">Want to join the core team?</h2>
          <p className="text-lg text-text-secondary mb-8 font-mono">
            We are always looking for passionate students to help lead the club and organize events.
          </p>
          <button onClick={() => setShowContact(true)} className="pixel-button-secondary px-8 py-3 inline-block">Apply for Leadership</button>
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
              <button
                onClick={() => setShowContact(false)}
                className="absolute top-4 right-4 p-2 rounded-full text-text-secondary hover:text-text-primary hover:bg-cloud-secondary transition-all"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="mb-8 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-cloud-secondary border border-border-color mb-4">
                  <Users className="w-6 h-6 text-aws-orange" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-text-primary mb-2">Apply for Leadership</h3>
                <p className="text-sm text-text-secondary font-mono">
                  Reach out to us or fill the form to join the core team.
                </p>
              </div>

              <div className="space-y-3">
                {/* Google Form */}
                <a
                  href="https://forms.gle/zF7ETWoREn9nkP6dA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 w-full px-5 py-4 rounded-xl border border-border-color bg-cloud-secondary hover:border-aws-orange/50 hover:bg-aws-orange/10 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-aws-orange/10 border border-aws-orange/20 group-hover:bg-aws-orange/20 transition-colors shrink-0">
                    <Users className="w-5 h-5 text-aws-orange" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-text-primary">Application Form</p>
                    <p className="text-xs text-text-secondary font-mono">Fill out the official form</p>
                  </div>
                  <span className="ml-auto text-xs font-mono text-aws-orange opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/918446712322?text=${encodeURIComponent("Hi! I'm interested in applying for a leadership role in the AWS Student Builder Group. Could you guide me through the process?")}`}
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
                  href={`mailto:awssbggcoek@gmail.com?subject=${encodeURIComponent("Leadership Application – AWS Student Builder Group")}&body=${encodeURIComponent("Hi AWS Student Builder Group Team,\n\nI'm interested in applying for a leadership role in the club.\n\nName: \nYear/Branch: \nRole Interested In: \nWhy I want to join: \n\nLooking forward to hearing from you!\n\nBest regards,\n[Your Name]")}`}
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
