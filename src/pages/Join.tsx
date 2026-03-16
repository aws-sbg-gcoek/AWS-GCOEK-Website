import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MessageSquare, Linkedin, Instagram, ArrowRight, Send, CheckCircle2, AlertCircle, Users } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

export default function Join() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    department: '',
    year: '',
    interest: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.department) newErrors.department = 'Please select a department';
    if (!formData.year) newErrors.year = 'Please select your year of study';
    if (formData.interest.trim().length < 10) newErrors.interest = 'Please provide a bit more detail (min 10 characters)';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus('error');
      return;
    }
    
    setErrors({});
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ fullName: '', email: '', department: '', year: '', interest: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[id];
        return newErrors;
      });
    }
  };

  const inputBaseClass = "w-full bg-cloud-secondary/50 border rounded px-4 py-3 text-text-primary focus:outline-none transition-all duration-300 hover:border-aws-orange/50 focus:border-aws-orange focus:ring-2 focus:ring-aws-orange/20 focus:shadow-[0_0_15px_rgba(255,153,0,0.15)]";
  const getErrorClass = (field: string) => errors[field] ? "border-red-500 focus:border-red-500 focus:ring-red-500/20 focus:shadow-[0_0_15px_rgba(239,68,68,0.15)]" : "border-border-color";

  return (
    <PageTransition className="w-full">
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

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 bg-green-500/10 border border-green-500/50 rounded flex items-start"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-green-500 font-bold font-heading">Application Received!</h4>
                      <p className="text-sm text-green-400/80 mt-1">Thank you for applying. We'll be in touch soon.</p>
                    </div>
                  </motion.div>
                )}

                {status === 'error' && Object.keys(errors).length > 0 && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded flex items-start"
                  >
                    <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-red-500 font-bold font-heading">Please fix the errors below</h4>
                      <p className="text-sm text-red-400/80 mt-1">Some fields require your attention before submitting.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div>
                  <label htmlFor="fullName" className="block text-sm font-mono text-text-secondary mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="fullName" 
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`${inputBaseClass} ${getErrorClass('fullName')}`}
                    placeholder="John Doe"
                  />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1 font-mono">{errors.fullName}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-mono text-text-secondary mb-2">College Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className={`${inputBaseClass} ${getErrorClass('email')}`}
                    placeholder="john@gcek.edu"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1 font-mono">{errors.email}</p>}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="department" className="block text-sm font-mono text-text-secondary mb-2">Department</label>
                    <select 
                      id="department" 
                      value={formData.department}
                      onChange={handleChange}
                      className={`${inputBaseClass} ${getErrorClass('department')} appearance-none`}
                    >
                      <option value="" disabled>Select Dept</option>
                      <option value="cse">Computer Science</option>
                      <option value="it">Information Tech</option>
                      <option value="entc">Electronics & Telecom</option>
                      <option value="mech">Mechanical</option>
                      <option value="civil">Civil</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.department && <p className="text-red-500 text-xs mt-1 font-mono">{errors.department}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="year" className="block text-sm font-mono text-text-secondary mb-2">Year of Study</label>
                    <select 
                      id="year" 
                      value={formData.year}
                      onChange={handleChange}
                      className={`${inputBaseClass} ${getErrorClass('year')} appearance-none`}
                    >
                      <option value="" disabled>Select Year</option>
                      <option value="1">First Year</option>
                      <option value="2">Second Year</option>
                      <option value="3">Third Year</option>
                      <option value="4">Final Year</option>
                    </select>
                    {errors.year && <p className="text-red-500 text-xs mt-1 font-mono">{errors.year}</p>}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-sm font-mono text-text-secondary mb-2">Interest in Cloud Technologies</label>
                  <textarea 
                    id="interest" 
                    rows={4}
                    value={formData.interest}
                    onChange={handleChange}
                    className={`${inputBaseClass} ${getErrorClass('interest')} resize-none`}
                    placeholder="Why do you want to join the AWS Cloud Club?"
                  ></textarea>
                  {errors.interest && <p className="text-red-500 text-xs mt-1 font-mono">{errors.interest}</p>}
                </div>
                
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="pixel-button w-full py-4 text-lg mt-4 flex items-center justify-center relative overflow-hidden group hover:shadow-[0_0_20px_rgba(255,153,0,0.6)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <span className="flex items-center">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Submit Application <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
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
                <motion.a 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  href="https://www.meetup.com/aws-cloud-club-at-gcoe-kolhapur/" target="_blank" rel="noopener noreferrer" className="glass-panel p-6 pixel-border flex items-center group hover:bg-cloud-secondary/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-[#ED1C40]/20 flex items-center justify-center mr-6 group-hover:bg-[#ED1C40]/30 transition-colors group-hover:shadow-[0_0_15px_rgba(237,28,64,0.4)]">
                    <Users className="w-6 h-6 text-[#ED1C40]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold group-hover:text-[#ED1C40] transition-colors">Meetup Group</h3>
                    <p className="text-sm text-text-secondary">Join our events and meet the community.</p>
                  </div>
                </motion.a>
                
                <motion.a 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  href="https://chat.whatsapp.com/KFima5xdcxW2dQsZN0C5SP" target="_blank" rel="noopener noreferrer" className="glass-panel p-6 pixel-border flex items-center group hover:bg-cloud-secondary/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center mr-6 group-hover:bg-[#25D366]/30 transition-colors group-hover:shadow-[0_0_15px_rgba(37,211,102,0.4)]">
                    <MessageSquare className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold group-hover:text-[#25D366] transition-colors">WhatsApp Community</h3>
                    <p className="text-sm text-text-secondary">Get instant updates and announcements.</p>
                  </div>
                </motion.a>
                
                <motion.a 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  href="https://linkedin.com/company/aws-cloud-club-gcoek" target="_blank" rel="noopener noreferrer" className="glass-panel p-6 pixel-border flex items-center group hover:bg-cloud-secondary/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-[#0A66C2]/20 flex items-center justify-center mr-6 group-hover:bg-[#0A66C2]/30 transition-colors group-hover:shadow-[0_0_15px_rgba(10,102,194,0.4)]">
                    <Linkedin className="w-6 h-6 text-[#0A66C2]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold group-hover:text-[#0A66C2] transition-colors">LinkedIn Page</h3>
                    <p className="text-sm text-text-secondary">Follow our professional journey and achievements.</p>
                  </div>
                </motion.a>
                
                <motion.a 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  href="https://instagram.com/awscloudclub_gcoek" target="_blank" rel="noopener noreferrer" className="glass-panel p-6 pixel-border flex items-center group hover:bg-cloud-secondary/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-[#E1306C]/20 flex items-center justify-center mr-6 group-hover:bg-[#E1306C]/30 transition-colors group-hover:shadow-[0_0_15px_rgba(225,48,108,0.4)]">
                    <Instagram className="w-6 h-6 text-[#E1306C]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold group-hover:text-[#E1306C] transition-colors">Instagram</h3>
                    <p className="text-sm text-text-secondary">Check out event photos and behind-the-scenes.</p>
                  </div>
                </motion.a>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
