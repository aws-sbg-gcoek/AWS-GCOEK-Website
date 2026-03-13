import { motion } from 'motion/react';
import { Mail, MessageSquare, Linkedin, Instagram, ArrowRight, Send } from 'lucide-react';

export default function Join() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Join The Club</h1>
            <div className="w-24 h-1 bg-aws-orange mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Become a part of GCOEK's fastest-growing tech community. Learn, build, and grow with us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Form Section */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-panel p-8 pixel-border relative overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-aws-orange/10 rounded-bl-full -z-10"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-cloud-blue/10 rounded-tr-full -z-10"></div>

              <h2 className="text-2xl font-heading font-bold mb-6 flex items-center">
                <Send className="w-6 h-6 text-aws-orange mr-3" />
                Membership Application
              </h2>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="fullName" className="block text-sm font-mono text-text-secondary mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="fullName" 
                    className="w-full bg-cloud-secondary/50 border border-border-color rounded px-4 py-3 text-text-primary focus:outline-none focus:border-aws-orange transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-mono text-text-secondary mb-2">College Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-cloud-secondary/50 border border-border-color rounded px-4 py-3 text-text-primary focus:outline-none focus:border-aws-orange transition-colors"
                    placeholder="john@gcek.edu"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="department" className="block text-sm font-mono text-text-secondary mb-2">Department</label>
                    <select 
                      id="department" 
                      className="w-full bg-cloud-secondary/50 border border-border-color rounded px-4 py-3 text-text-primary focus:outline-none focus:border-aws-orange transition-colors appearance-none"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>Select Dept</option>
                      <option value="cse">Computer Science</option>
                      <option value="it">Information Tech</option>
                      <option value="entc">Electronics & Telecom</option>
                      <option value="mech">Mechanical</option>
                      <option value="civil">Civil</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="year" className="block text-sm font-mono text-text-secondary mb-2">Year of Study</label>
                    <select 
                      id="year" 
                      className="w-full bg-cloud-secondary/50 border border-border-color rounded px-4 py-3 text-text-primary focus:outline-none focus:border-aws-orange transition-colors appearance-none"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>Select Year</option>
                      <option value="1">First Year</option>
                      <option value="2">Second Year</option>
                      <option value="3">Third Year</option>
                      <option value="4">Final Year</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-sm font-mono text-text-secondary mb-2">Interest in Cloud Technologies</label>
                  <textarea 
                    id="interest" 
                    rows={4}
                    className="w-full bg-cloud-secondary/50 border border-border-color rounded px-4 py-3 text-text-primary focus:outline-none focus:border-aws-orange transition-colors resize-none"
                    placeholder="Why do you want to join the AWS Cloud Club?"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="pixel-button w-full py-4 text-lg mt-4 flex items-center justify-center">
                  Submit Application <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </form>
            </motion.div>

            {/* Community Links Section */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl font-heading font-bold mb-6">Connect With Us</h2>
              <p className="text-text-secondary mb-10">
                Can't wait to get started? Join our community channels to stay updated on the latest events, resources, and discussions.
              </p>
              
              <div className="space-y-4">
                <a href="#" className="glass-panel p-6 pixel-border flex items-center group hover:bg-cloud-secondary/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#5865F2]/20 flex items-center justify-center mr-6 group-hover:bg-[#5865F2]/30 transition-colors">
                    <MessageSquare className="w-6 h-6 text-[#5865F2]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold group-hover:text-[#5865F2] transition-colors">Discord Server</h3>
                    <p className="text-sm text-text-secondary">Join the conversation and ask questions.</p>
                  </div>
                </a>
                
                <a href="#" className="glass-panel p-6 pixel-border flex items-center group hover:bg-cloud-secondary/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center mr-6 group-hover:bg-[#25D366]/30 transition-colors">
                    <MessageSquare className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold group-hover:text-[#25D366] transition-colors">WhatsApp Group</h3>
                    <p className="text-sm text-text-secondary">Get instant updates and announcements.</p>
                  </div>
                </a>
                
                <a href="#" className="glass-panel p-6 pixel-border flex items-center group hover:bg-cloud-secondary/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#0A66C2]/20 flex items-center justify-center mr-6 group-hover:bg-[#0A66C2]/30 transition-colors">
                    <Linkedin className="w-6 h-6 text-[#0A66C2]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold group-hover:text-[#0A66C2] transition-colors">LinkedIn Page</h3>
                    <p className="text-sm text-text-secondary">Follow our professional journey and achievements.</p>
                  </div>
                </a>
                
                <a href="#" className="glass-panel p-6 pixel-border flex items-center group hover:bg-cloud-secondary/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#E1306C]/20 flex items-center justify-center mr-6 group-hover:bg-[#E1306C]/30 transition-colors">
                    <Instagram className="w-6 h-6 text-[#E1306C]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold group-hover:text-[#E1306C] transition-colors">Instagram</h3>
                    <p className="text-sm text-text-secondary">Check out event photos and behind-the-scenes.</p>
                  </div>
                </a>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
