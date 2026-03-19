import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Linkedin, Mail, Briefcase, User, Code2 } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { getMemberById } from '../data/team';

export default function TeamMember() {
  const { id } = useParams<{ id: string }>();
  const member = id ? getMemberById(id) : null;

  if (!member) {
    return (
      <PageTransition className="w-full flex-grow flex items-center justify-center py-24">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Member Not Found</h1>
          <p className="text-text-secondary mb-8">The team member you are looking for does not exist.</p>
          <Link to="/team" className="pixel-button inline-flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Team
          </Link>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition className="w-full">
      <section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/team" className="inline-flex items-center text-text-secondary hover:text-aws-orange transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Team
          </Link>

          <div className="glass-panel pixel-border relative overflow-hidden flex flex-col">
            {/* Banner */}
            <div className={`h-32 md:h-48 w-full ${member.deptBgColor} opacity-20 relative`}>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cloud-navy/90"></div>
            </div>

            <div className="px-6 md:px-12 pb-12 relative -mt-16 md:-mt-24">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-end mb-10">
                {/* Profile Image */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex-shrink-0 relative z-10"
                >
                  <div className={`w-32 h-32 md:w-48 md:h-48 rounded-2xl bg-cloud-secondary border-4 border-cloud-navy overflow-hidden flex items-center justify-center shadow-2xl`}>
                    <img 
                      src={(member as any).image || `https://picsum.photos/seed/${member.name.replace(/ /g, '')}/400/400`} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  </div>
                </motion.div>

                {/* Name & Role */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex-grow text-center md:text-left z-10 pb-2"
                >
                  <div className="mb-3">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-bold ${member.deptBgColor} text-cloud-navy shadow-lg`}>
                      <Briefcase className="w-3 h-3 mr-1.5" />
                      {member.department}
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-5xl font-heading font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">{member.name}</h1>
                  <p className={`text-lg md:text-xl font-mono ${member.deptColor}`}>{member.role}</p>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Column: About & Skills */}
                <div className="md:col-span-2 space-y-8">
                  {member.bio && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="bg-cloud-secondary/30 rounded-xl p-6 border border-border-color/50"
                    >
                      <h3 className="text-lg font-bold mb-4 text-text-primary flex items-center">
                        <User className={`w-5 h-5 mr-2 ${member.deptColor}`} />
                        About
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {member.bio}
                      </p>
                    </motion.div>
                  )}

                  {member.skills && member.skills.length > 0 && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="bg-cloud-secondary/30 rounded-xl p-6 border border-border-color/50"
                    >
                      <h3 className="text-lg font-bold mb-4 text-text-primary flex items-center">
                        <Code2 className={`w-5 h-5 mr-2 ${member.deptColor}`} />
                        Skills & Expertise
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, idx) => (
                          <span key={idx} className={`px-4 py-1.5 bg-cloud-navy border border-border-color rounded-lg text-sm text-text-secondary shadow-sm transition-colors`}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Right Column: Connect */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-bold mb-4 text-text-primary">Connect</h3>
                  
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-cloud-secondary/50 border border-border-color rounded-xl text-text-secondary hover:text-white hover:bg-[#0A66C2]/20 hover:border-[#0A66C2] transition-all group">
                      <div className="p-2 bg-cloud-navy rounded-lg mr-4 group-hover:bg-[#0A66C2] transition-colors">
                        <Linkedin className="w-5 h-5 group-hover:text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-sm text-text-primary">LinkedIn</div>
                        <div className="text-xs opacity-70">View Profile</div>
                      </div>
                    </a>
                  )}
                  
                  {member.email && (
                    <a href={member.email} className="flex items-center p-4 bg-cloud-secondary/50 border border-border-color rounded-xl text-text-secondary hover:text-white hover:bg-green-500/20 hover:border-green-500 transition-all group">
                      <div className="p-2 bg-cloud-navy rounded-lg mr-4 group-hover:bg-green-500 transition-colors">
                        <Mail className="w-5 h-5 group-hover:text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-sm text-text-primary">Email</div>
                        <div className="text-xs opacity-70">Send a message</div>
                      </div>
                    </a>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
