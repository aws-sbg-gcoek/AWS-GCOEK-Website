import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Cloud, Server, Code, Users, Terminal, Cpu, Database, ChevronRight, Github, Linkedin, Calendar, MapPin, Mail, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';
import { PageTransition } from '../components/PageTransition';
import { eventsData } from '../data/events';

const StatCounter = ({ end, label }: { end: number; label: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="flex flex-col items-center justify-center p-6 glass-panel pixel-border hover:pixel-border-hover transition-all duration-300">
      <span className="text-4xl md:text-5xl font-mono font-bold text-aws-orange mb-2">
        {count}+
      </span>
      <span className="text-sm md:text-base font-heading font-medium text-text-secondary uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

export default function Home() {
  const featuredEvent = eventsData.find(e => e.isFeatured) || eventsData[0];
  const upcomingEvents = eventsData.filter(e => e.status === 'upcoming').slice(0, 3);

  return (
    <PageTransition className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }} 
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 opacity-20"
          >
            <Cloud className="w-32 h-32 text-cloud-blue" />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }} 
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-40 right-20 opacity-20"
          >
            <Cloud className="w-24 h-24 text-arcade-purple" />
          </motion.div>
          <motion.div 
            animate={{ y: [0, -15, 0], rotate: [0, -10, 10, 0] }} 
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-40 right-1/4 opacity-10"
          >
            <Server className="w-48 h-48 text-aws-orange" />
          </motion.div>
          {/* Network lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <motion.line 
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut" }}
              x1="10%" y1="20%" x2="90%" y2="80%" stroke="#FF9900" strokeWidth="1" strokeDasharray="4 4" 
            />
            <motion.line 
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
              x1="90%" y1="20%" x2="10%" y2="80%" stroke="#38BDF8" strokeWidth="1" strokeDasharray="4 4" 
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-aws-orange to-yellow-400 drop-shadow-sm">AWS Cloud Club</span>
              <br />
              <span className="block mt-4 text-3xl md:text-5xl text-text-primary tracking-widest">GCOE Kolhapur</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl md:text-2xl font-medium text-cloud-blue mb-6">
              Learn Cloud. Build Projects. Launch Your Tech Career.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-lg text-text-primary/90 leading-relaxed max-w-3xl mx-auto mb-10">
              A student community exploring cloud computing, building real-world projects, and mastering AWS technologies.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="https://www.meetup.com/aws-cloud-club-at-gcoe-kolhapur/" target="_blank" rel="noopener noreferrer" className="pixel-button px-8 py-4 w-full sm:w-auto text-center">
                <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">Join the Club</motion.span>
              </a>
              <Link to="/events" className="pixel-button-secondary px-8 py-4 w-full sm:w-auto text-center">
                <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">Explore Events</motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-cloud-secondary/30 border-y border-border-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <StatCounter end={400} label="Members Joined" />
            <StatCounter end={2} label="Events Conducted" />
            <StatCounter end={1} label="Projects Built" />
            <StatCounter end={1} label="Workshops Hosted" />
          </div>
        </div>
      </section>

      {/* Featured Spotlight Section */}
      <section className="py-24 relative overflow-hidden bg-cloud-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 w-full relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border-2 border-aws-orange/30 shadow-[0_0_30px_rgba(255,153,0,0.15)] relative group">
                
                <img 
                  src={featuredEvent.image || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"} 
                  alt={featuredEvent.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-aws-orange border border-aws-orange/50 z-20">
                  FEATURED {featuredEvent.type.toUpperCase()}
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2 w-full"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                {featuredEvent.title}
              </h2>
              <div className="w-20 h-1 bg-aws-orange mb-6 rounded-full"></div>
              
              <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                {featuredEvent.desc}
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  `Date: ${featuredEvent.date}`,
                  `Time: ${featuredEvent.time}`,
                  `Location: ${featuredEvent.location}`
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mt-1 mr-3 p-1 bg-aws-orange/20 rounded-full shrink-0">
                      <ChevronRight className="w-4 h-4 text-aws-orange" />
                    </div>
                    <span className="text-text-primary/90">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                {featuredEvent.link && (
                  <a href={featuredEvent.link} target="_blank" rel="noopener noreferrer" className="pixel-button px-8 py-3 text-center">
                    Register Now
                  </a>
                )}
                <Link to={`/events/${featuredEvent.id}`} className="pixel-button-secondary px-8 py-3 text-center">
                  View Details
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">What We Do</h2>
            <div className="w-24 h-1 bg-aws-orange mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Cloud, title: 'Cloud Workshops', desc: 'Hands-on AWS learning sessions and deep dives.' },
              { icon: Server, title: 'Hands-on Labs', desc: 'Deploy real applications on AWS infrastructure.' },
              { icon: Code, title: 'Student Projects', desc: 'Build real-world cloud solutions collaboratively.' },
              { icon: Terminal, title: 'Certification Guidance', desc: 'Prepare for AWS certifications with peer support.' }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-panel p-6 pixel-border hover:pixel-border-hover group"
              >
                <div className="w-12 h-12 bg-cloud-secondary rounded-lg flex items-center justify-center mb-4 group-hover:bg-aws-orange/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-aws-orange" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">{feature.title}</h3>
                <p className="text-text-secondary text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-cloud-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-between items-end mb-12"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Upcoming Events</h2>
              <div className="w-24 h-1 bg-cloud-blue mx-auto md:mx-0 rounded-full"></div>
            </div>
            <Link to="/events" className="hidden md:flex items-center text-cloud-blue hover:text-aws-orange transition-colors font-mono text-sm">
              View All Events <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.length > 0 ? (
              upcomingEvents.map((event, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="glass-panel p-6 pixel-border flex flex-col h-full"
                >
                  <div className="flex items-center text-arcade-purple mb-4 font-mono text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">{event.title}</h3>
                  <p className="text-text-secondary mb-6 flex-grow line-clamp-3">{event.desc}</p>
                  <Link to={`/events/${event.id}`} className="pixel-button-secondary py-2 w-full text-sm text-center">
                    <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>View Details</motion.span>
                  </Link>
                </motion.div>
              ))
            ) : (
              <div className="col-span-1 md:col-span-3 text-center py-12 glass-panel pixel-border">
                <p className="text-text-secondary text-lg">No upcoming events scheduled at the moment. Check back soon!</p>
              </div>
            )}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/events" className="text-cloud-blue font-mono text-sm">View All Events →</Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-arcade-purple mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Serverless Attendance System', desc: 'Facial recognition based attendance using Rekognition and Lambda.', tech: ['Lambda', 'DynamoDB', 'Rekognition'] },
              { title: 'IoT Health Dashboard', desc: 'Real-time health monitoring using AWS IoT Core and React.', tech: ['IoT Core', 'Amplify', 'React'] },
              { title: 'Cloud File Storage', desc: 'Secure file sharing platform built on S3 and Cognito.', tech: ['S3', 'Cognito', 'API Gateway'] }
            ].map((project, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-panel p-6 pixel-border hover:pixel-border-hover transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-cloud-secondary rounded">
                    <Database className="w-6 h-6 text-arcade-purple" />
                  </div>
                  <a href="#" className="text-text-secondary hover:text-text-primary transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
                <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-aws-orange transition-colors">{project.title}</h3>
                <p className="text-text-secondary text-sm mb-6">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map(t => (
                    <span key={t} className="px-2 py-1 bg-cloud-secondary text-xs font-mono text-cloud-blue rounded border border-border-color">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/projects" className="pixel-button-secondary px-6 py-3">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-24 bg-cloud-secondary/20 border-t border-border-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Meet The Team</h2>
            <div className="w-24 h-1 bg-aws-orange mx-auto rounded-full"></div>
          </motion.div>

          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto w-full">
              {[
                { id: 'varsha-gaikwad', name: 'Dr. Varsha Gaikwad', role: 'Faculty Coordinator' },
                { id: 'shardul-kolekar', name: 'Shardul Kolekar', role: 'Captain (President)', image: 'https://i.ibb.co/vCkgggZW/Whats-App-Image-2026-03-15-at-4-00-18-PM.jpg' }
              ].map((member, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="glass-panel p-6 flex flex-col items-center text-center pixel-border hover:pixel-border-hover transition-all duration-300 group"
                >
                  <Link to={`/team/${member.id}`} className="w-full flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-cloud-secondary border-2 border-aws-orange mb-4 overflow-hidden flex items-center justify-center group-hover:border-cloud-blue transition-colors">
                      <img 
                        src={member.image || `https://picsum.photos/seed/${member.name.replace(/ /g, '')}/150/150`} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-lg font-heading font-bold">{member.name}</h3>
                    <p className="text-cloud-blue font-mono text-xs mt-1 mb-4">{member.role}</p>
                  </Link>
                  <div className="flex space-x-3">
                    {member.name !== 'Dr. Varsha Gaikwad' && (
                      <>
                        <a href={member.name === 'Shardul Kolekar' ? "https://www.linkedin.com/in/shardulkolekar" : "#"} className="text-text-secondary hover:text-cloud-blue transition-colors hover:scale-110 transform">
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a href={member.name === 'Shardul Kolekar' ? "mailto:kolekarshardul23@gmail.com" : "mailto:awscc.gcoe@gmail.com"} className="text-text-secondary hover:text-text-primary transition-colors hover:scale-110 transform">
                          <Mail className="w-5 h-5" />
                        </a>
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto w-full">
              {[
                { id: 'atharv-patil', name: 'Atharv Patil', role: 'Vice President', image: 'https://i.ibb.co/99Zxx9f2/atharva-patil.jpg' },
                { id: 'vidula', name: 'Vidula Powar', role: 'General Secretary', image: 'https://i.ibb.co/5W0h4c8y/Whats-App-Image-2026-03-17-at-9-01-47-AM.jpg' },
                { id: 'gopal', name: 'Gopal Lakwal', role: 'Joint Secretary', image: 'https://i.ibb.co/4wBwTHtx/file-000000002ef871fab1e8c53a2708be68-Gopal-lakwal.png' },
                { id: 'shubham', name: 'Shubham Sonwane', role: 'Joint Secretary', image: 'https://i.ibb.co/LDDfM6hn/Gemini-Generated-Image-nbpxu8nbpxu8nbpx-Shubham-Sonwane.png' }
              ].map((member, idx) => (
                <motion.div 
                  key={idx + 2} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (idx + 2) * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="glass-panel p-6 flex flex-col items-center text-center pixel-border hover:pixel-border-hover transition-all duration-300 group"
                >
                  <Link to={`/team/${member.id}`} className="w-full flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full bg-cloud-secondary border-2 border-aws-orange mb-4 overflow-hidden flex items-center justify-center group-hover:border-cloud-blue transition-colors">
                      <img 
                        src={(member as any).image || `https://picsum.photos/seed/${member.name.replace(/ /g, '')}/150/150`} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-lg font-heading font-bold">{member.name}</h3>
                    <p className="text-cloud-blue font-mono text-xs mt-1 mb-4">{member.role}</p>
                  </Link>
                  <div className="flex space-x-3">
                    <a href={
                      member.id === 'vidula' ? "https://www.linkedin.com/in/vidula-p-372734294" :
                      member.id === 'gopal' ? "https://www.linkedin.com/in/gopal-lakwal-461467383" :
                      member.id === 'shubham' ? "https://www.linkedin.com/in/shubham-sonwane-b9b056312" :
                      "#"
                    } className="text-text-secondary hover:text-cloud-blue transition-colors hover:scale-110 transform">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={
                      member.id === 'atharv-patil' ? "mailto:atharvpatil1808@gmail.com" :
                      member.id === 'vidula' ? "mailto:powarvidula11@gmail.com" :
                      member.id === 'gopal' ? "mailto:gopallakwal526@gmail.com" :
                      member.id === 'shubham' ? "mailto:sonwaneshubham38@gmail.com" :
                      "mailto:awscc.gcoe@gmail.com"
                    } className="text-text-secondary hover:text-text-primary transition-colors hover:scale-110 transform">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/team" className="pixel-button-secondary px-6 py-3">
              View Full Team
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-aws-orange/10 z-0"></div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Start Your Cloud Journey Today</h2>
          <p className="text-xl text-text-secondary mb-10">
            Join the AWS Cloud Club and learn cloud computing through workshops, projects, and community learning.
          </p>
          <a href="https://www.meetup.com/aws-cloud-club-at-gcoe-kolhapur/" target="_blank" rel="noopener noreferrer" className="pixel-button px-10 py-5 text-lg inline-block">
            Join the Club
          </a>
        </motion.div>
      </section>
    </PageTransition>
  );
}
