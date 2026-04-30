import { motion } from 'motion/react';
import { MessageSquare, Linkedin, Instagram, Send, Users } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

export default function Join() {

  return (
    <PageTransition className="w-full">
      {/* Header */}
      <section className="pt-32 pb-24 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 text-gradient-orange">Join The Club</h1>
            <div className="w-24 h-1.5 bg-arcade-purple mx-auto rounded-full mb-10"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed font-mono">
              Become a part of GCOEK's fastest-growing tech community. Learn, build, and grow with us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Form Section */}
            <motion.div 
              id="application-form"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-panel pixel-border relative overflow-hidden flex flex-col"
            >
              <div className="p-8 border-b border-border-color flex items-center gap-4">
                <Send className="w-7 h-7 text-arcade-purple" />
                <h2 className="text-2xl font-heading font-bold text-text-primary">Membership Application</h2>
              </div>
              <div className="w-full overflow-hidden" style={{ height: '800px' }}>
                <div style={{ width: 'calc(100% + 20px)', height: '100%', overflowY: 'scroll', paddingRight: '20px' }}>
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSddwOHTiDieyXOiyQhxKXd-BgFoHbBRiPkDL6X8kntx4nGtUw/viewform?embedded=true"
                    width="100%"
                    height="800"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    style={{ minHeight: '800px', display: 'block' }}
                  >
                    Loading…
                  </iframe>
                </div>
              </div>
            </motion.div>

            {/* Community Links Section */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-4xl font-heading font-bold mb-8 text-text-primary">Connect With Us</h2>
              <p className="text-xl text-text-secondary mb-12 leading-relaxed font-mono">
                Can't wait to get started? Join our community channels to stay updated on the latest events, resources, and discussions.
              </p>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
                className="space-y-6"
              >
                <motion.a 
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                  }}
                  whileHover={{ scale: 1.02, x: -5 }}
                  href="https://www.meetup.com/aws-cloud-club-at-gcoe-kolhapur/" target="_blank" rel="noopener noreferrer" className="glass-panel p-8 pixel-border hover:pixel-border-hover flex items-center group transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#ED1C40]/10 flex items-center justify-center mr-8 group-hover:bg-[#ED1C40]/20 transition-colors">
                    <Users className="w-8 h-8 text-[#ED1C40]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-text-primary group-hover:text-[#ED1C40] transition-colors">Meetup Group</h3>
                    <p className="text-base text-text-secondary mt-1">Join our events and meet the community.</p>
                  </div>
                </motion.a>
                
                <motion.a 
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                  }}
                  whileHover={{ scale: 1.02, x: -5 }}
                  href="https://chat.whatsapp.com/KFima5xdcxW2dQsZN0C5SP" target="_blank" rel="noopener noreferrer" className="glass-panel p-8 pixel-border hover:pixel-border-hover flex items-center group transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#25D366]/10 flex items-center justify-center mr-8 group-hover:bg-[#25D366]/20 transition-colors">
                    <MessageSquare className="w-8 h-8 text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-text-primary group-hover:text-[#25D366] transition-colors">WhatsApp Community</h3>
                    <p className="text-base text-text-secondary mt-1">Get instant updates and announcements.</p>
                  </div>
                </motion.a>
                
                <motion.a 
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                  }}
                  whileHover={{ scale: 1.02, x: -5 }}
                  href="https://www.linkedin.com/company/aws-cloud-club-gcoe-kolhapur/" target="_blank" rel="noopener noreferrer" className="glass-panel p-8 pixel-border hover:pixel-border-hover flex items-center group transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#0A66C2]/10 flex items-center justify-center mr-8 group-hover:bg-[#0A66C2]/20 transition-colors">
                    <Linkedin className="w-8 h-8 text-[#0A66C2]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-text-primary group-hover:text-[#0A66C2] transition-colors">LinkedIn Page</h3>
                    <p className="text-base text-text-secondary mt-1">Follow our professional journey and achievements.</p>
                  </div>
                </motion.a>
                
                <motion.a 
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                  }}
                  whileHover={{ scale: 1.02, x: -5 }}
                  href="https://www.instagram.com/awscc.gcoe.kolhapur?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="glass-panel p-8 pixel-border hover:pixel-border-hover flex items-center group transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#E1306C]/10 flex items-center justify-center mr-8 group-hover:bg-[#E1306C]/20 transition-colors">
                    <Instagram className="w-8 h-8 text-[#E1306C]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-text-primary group-hover:text-[#E1306C] transition-colors">Instagram</h3>
                    <p className="text-base text-text-secondary mt-1">Check out event photos and behind-the-scenes.</p>
                  </div>
                </motion.a>
              </motion.div>
            </motion.div>
            
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
