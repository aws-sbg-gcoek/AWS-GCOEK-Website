import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Linkedin, Github, Mail, Globe } from 'lucide-react';
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
          <Link to="/team" className="inline-flex items-center text-text-secondary hover:text-aws-orange transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Team
          </Link>

          <div className="glass-panel p-8 md:p-12 pixel-border relative overflow-hidden">
            {/* Background decoration */}
            <div className={`absolute top-0 right-0 w-64 h-64 ${member.deptBgColor} opacity-5 rounded-full blur-3xl -mr-20 -mt-20`}></div>
            
            <div className="flex flex-col md:flex-row gap-10 items-center md:items-start relative z-10">
              {/* Profile Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0"
              >
                <div className={`w-48 h-48 md:w-64 md:h-64 rounded-2xl bg-cloud-secondary border-2 border-border-color overflow-hidden flex items-center justify-center shadow-lg`}>
                  <img 
                    src={(member as any).image || `https://picsum.photos/seed/${member.name.replace(' ', '')}/400/400`} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>

              {/* Details */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex-grow text-center md:text-left"
              >
                <div className="mb-2">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono font-bold ${member.deptBgColor} text-cloud-navy mb-3`}>
                    {member.department}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">{member.name}</h1>
                <p className={`text-xl font-mono ${member.deptColor} mb-6`}>{member.role}</p>
                
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-2 text-text-primary">About</h3>
                  <p className="text-text-secondary leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-3 text-text-primary">Skills & Expertise</h3>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {member.skills.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-cloud-secondary border border-border-color rounded-md text-sm text-text-secondary">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4 justify-center md:justify-start pt-4 border-t border-border-color/50">
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-cloud-secondary border border-border-color rounded-lg text-text-secondary hover:text-cloud-blue hover:border-cloud-blue transition-all group">
                      <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </a>
                  )}
                  {member.email && (
                    <a href={member.email} className="p-3 bg-cloud-secondary border border-border-color rounded-lg text-text-secondary hover:text-green-400 hover:border-green-400 transition-all group">
                      <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
