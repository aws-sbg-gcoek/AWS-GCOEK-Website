import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Linkedin, Mail, Briefcase, User, Code2 } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { getMemberById } from '../data/team';

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

export default function TeamMember() {
  const { id } = useParams<{ id: string }>();
  const member = id ? getMemberById(id) : null;

  if (!member) {
    return (
      <PageTransition className="w-full flex-grow flex items-center justify-center py-24" style={{ background: '#0B1220' }}>
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold text-white mb-4">Member Not Found</h1>
          <p className="text-text-secondary font-mono text-sm mb-8">The team member you are looking for does not exist.</p>
          <Link to="/team" className="pixel-button px-6 py-2 inline-flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Team
          </Link>
        </div>
      </PageTransition>
    );
  }

  const hexColor = colorMap[member.deptColor] || '#FF9900';

  return (
    <PageTransition className="w-full pt-28 pb-20" style={{ background: '#0B1220' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link to="/team" className="inline-flex items-center text-text-secondary hover:text-aws-orange transition-colors mb-8 font-mono text-xs uppercase tracking-widest group">
          <ArrowLeft className="w-3.5 h-3.5 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Team
        </Link>

        <div className="dev-card overflow-hidden bg-[#0D1826]">
          {/* Banner */}
          <div className="h-32 md:h-48 w-full relative" style={{ backgroundColor: hexColor + '15', borderBottom: '1px solid #1E2A3A' }}>
            <div className="absolute inset-0 bg-grid-dense opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0D1826]" />
          </div>

          <div className="px-6 md:px-12 pb-12 relative -mt-16 md:-mt-24">
            
            {/* Header Info */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-end mb-12">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="relative z-10 flex-shrink-0">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-sm bg-[#080E1A] border-4 border-[#080E1A] overflow-hidden" style={{ borderBottomColor: hexColor }}>
                  <img 
                    src={(member as any).image || `https://picsum.photos/seed/${member.name.replace(/ /g, '')}/400/400`} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="flex-grow text-center md:text-left z-10 pb-2">
                <div className="mb-3">
                  <span className="terminal-tag flex items-center gap-2 w-max mx-auto md:mx-0" style={{ borderColor: hexColor, color: hexColor, background: '#0D1826' }}>
                    <Briefcase className="w-3.5 h-3.5" /> {member.department}
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-heading font-black text-white mb-2">{member.name}</h1>
                <p className="font-mono uppercase tracking-widest text-sm" style={{ color: hexColor }}>{member.role}</p>
              </motion.div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              <div className="lg:col-span-2 space-y-8">
                {/* About */}
                {member.bio && (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="dev-card p-8">
                    <div className="section-label">Bio</div>
                    <h2 className="text-2xl font-heading font-bold text-white mb-4 flex items-center gap-3">
                      <User className="w-5 h-5" style={{ color: hexColor }} /> About
                    </h2>
                    <p className="text-text-secondary leading-relaxed">{member.bio}</p>
                  </motion.div>
                )}

                {/* Skills */}
                {member.skills && member.skills.length > 0 && (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="dev-card p-8">
                    <div className="section-label">Expertise</div>
                    <h2 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-3">
                      <Code2 className="w-5 h-5" style={{ color: hexColor }} /> Skills
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, idx) => (
                        <span key={idx} className="tech-tag border-border-color text-text-secondary hover:text-white transition-colors cursor-default">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Sidebar */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="space-y-6">
                <div className="dev-card p-6 bg-[#080E1A]">
                  <div className="section-label">Connect</div>
                  <h3 className="text-xl font-heading font-bold text-white mb-6">Social Links</h3>
                  
                  <div className="space-y-3">
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="dev-card card-shine flex items-center gap-4 p-4 group hover:border-cloud-blue">
                        <Linkedin className="w-5 h-5 text-cloud-blue shrink-0" />
                        <div>
                          <p className="text-sm font-bold text-white group-hover:text-cloud-blue transition-colors">LinkedIn</p>
                          <p className="text-xs text-text-secondary font-mono">View Profile</p>
                        </div>
                      </a>
                    )}
                    
                    {member.email && (
                      <a href={member.email} className="dev-card card-shine flex items-center gap-4 p-4 group" style={{ hover: { borderColor: hexColor } } as any} onMouseEnter={(e) => e.currentTarget.style.borderColor = hexColor} onMouseLeave={(e) => e.currentTarget.style.borderColor = '#1E2A3A'}>
                        <Mail className="w-5 h-5 shrink-0" style={{ color: hexColor }} />
                        <div>
                          <p className="text-sm font-bold text-white transition-colors" style={{ color: 'white' }}>Email</p>
                          <p className="text-xs text-text-secondary font-mono">Send Message</p>
                        </div>
                      </a>
                    )}
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
