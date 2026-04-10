import { motion } from 'motion/react';
import { Linkedin, Mail, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { departments } from '../data/team';

export default function Team() {
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
              Meet the dedicated students leading the AWS Cloud Club at GCOEK.
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
                             className="w-full h-full object-contain"
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
                              className="w-full h-full object-contain"
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
                            className="w-full h-full object-contain "
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
          <a href="https://forms.gle/zF7ETWoREn9nkP6dA" target="_blank" rel="noopener noreferrer" className="pixel-button-secondary px-8 py-3 inline-block">Apply for Leadership</a>
        </motion.div>
      </section>
    </PageTransition>
  );
}
