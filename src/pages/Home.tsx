import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Cloud, Server, Code, Users, Terminal, Cpu, Database, ChevronRight, Github, Linkedin, Calendar, MapPin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import { PageTransition } from '../components/PageTransition';

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

export default function Home() {
  return (
    <PageTransition className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 opacity-20 animate-pulse">
            <Cloud className="w-32 h-32 text-cloud-blue" />
          </div>
          <div className="absolute bottom-40 right-20 opacity-20 animate-bounce" style={{ animationDuration: '4s' }}>
            <Cloud className="w-24 h-24 text-arcade-purple" />
          </div>
          <div className="absolute top-40 right-1/4 opacity-10">
            <Server className="w-48 h-48 text-aws-orange" />
          </div>
          {/* Network lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <line x1="10%" y1="20%" x2="90%" y2="80%" stroke="#FF9900" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="90%" y1="20%" x2="10%" y2="80%" stroke="#38BDF8" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-aws-orange to-yellow-400 drop-shadow-sm">AWS Cloud Club</span>
              <br />
              <span className="block mt-4 text-3xl md:text-5xl text-text-primary tracking-widest">GCOE Kolhapur</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-medium text-cloud-blue mb-6">
              Learn Cloud. Build Projects. Launch Your Tech Career.
            </p>
            
            <p className="text-lg text-text-primary/90 leading-relaxed max-w-3xl mx-auto mb-10">
              A student community exploring cloud computing, building real-world projects, and mastering AWS technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/join" className="pixel-button px-8 py-4 w-full sm:w-auto text-center">
                Start Your Cloud Journey
              </Link>
              <Link to="/events" className="pixel-button-secondary px-8 py-4 w-full sm:w-auto text-center">
                Explore Events
              </Link>
            </div>
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
                whileHover={{ y: -5 }}
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
            {[
              { title: 'Cloud 101 Workshop', date: 'Oct 15, 2026', desc: 'Introduction to AWS core services (EC2, S3, RDS).' },
            ].map((event, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-6 pixel-border flex flex-col h-full"
              >
                <div className="flex items-center text-arcade-purple mb-4 font-mono text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  {event.date}
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{event.title}</h3>
                <p className="text-text-secondary mb-6 flex-grow">{event.desc}</p>
                <button className="pixel-button-secondary py-2 w-full text-sm">Register Now</button>
              </motion.div>
            ))}
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
                { name: 'Dr. Varsha Gaikwad', role: 'Faculty Coordinator' },
                { name: 'Shardul Kolekar', role: 'Captain (President)', image: 'https://i.ibb.co/vCkgggZW/Whats-App-Image-2026-03-15-at-4-00-18-PM.jpg' }
              ].map((member, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass-panel p-6 flex flex-col items-center text-center pixel-border hover:pixel-border-hover transition-all duration-300 group"
                >
                  <div className="w-24 h-24 rounded-full bg-cloud-secondary border-2 border-aws-orange mb-4 overflow-hidden flex items-center justify-center group-hover:border-cloud-blue transition-colors">
                    <img 
                      src={member.image || `https://picsum.photos/seed/${member.name.replace(/ /g, '')}/150/150`} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="text-lg font-heading font-bold">{member.name}</h3>
                  <p className="text-cloud-blue font-mono text-xs mt-1 mb-4">{member.role}</p>
                  <div className="flex space-x-3">
                    {member.name !== 'Dr. Varsha Gaikwad' && (
                      <>
                        <a href="#" className="text-text-secondary hover:text-cloud-blue transition-colors hover:scale-110 transform">
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
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto w-full">
              {[
                { name: 'Atharv Patil', role: 'Vice President' },
                { name: 'Vidula', role: 'General Secretary' },
                { name: 'Gopal', role: 'Joint Secretary' },
                { name: 'Shekhar', role: 'Social Media & Content Lead', image: 'https://i.ibb.co/HpV9qJwH/shekhar.jpg' },
                { name: 'Chaitanya', role: 'Logistics Lead', image: 'https://i.ibb.co/KjLPBGnt/chaitanya.png' },
                { name: 'Anas Pathan', role: 'Project Associate', image: 'https://i.ibb.co/V0GgpdmG/anas.jpg' }
              ].map((member, idx) => (
                <motion.div 
                  key={idx + 2} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (idx + 2) * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass-panel p-6 flex flex-col items-center text-center pixel-border hover:pixel-border-hover transition-all duration-300 group"
                >
                  <div className="w-24 h-24 rounded-full bg-cloud-secondary border-2 border-aws-orange mb-4 overflow-hidden flex items-center justify-center group-hover:border-cloud-blue transition-colors">
                    <img 
                      src={(member as any).image || `https://picsum.photos/seed/${member.name.replace(/ /g, '')}/150/150`} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="text-lg font-heading font-bold">{member.name}</h3>
                  <p className="text-cloud-blue font-mono text-xs mt-1 mb-4">{member.role}</p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-text-secondary hover:text-cloud-blue transition-colors hover:scale-110 transform">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={
                      member.name === 'Atharv Patil' ? "mailto:atharvpatil1808@gmail.com" :
                      member.name === 'Vidula' ? "mailto:powarvidula11@gmail.com" :
                      member.name === 'Gopal' ? "mailto:gopallakwal526@gmail.com" :
                      member.name === 'Shekhar' ? "mailto:varekarshekhar@gmail.com" :
                      member.name === 'Chaitanya' ? "mailto:chhaitanyaaz@gmail.com" :
                      member.name === 'Anas Pathan' ? "mailto:pathananas2007@gmail.com" :
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
          <Link to="/join" className="pixel-button px-10 py-5 text-lg inline-block">
            Join the Club
          </Link>
        </motion.div>
      </section>
    </PageTransition>
  );
}
