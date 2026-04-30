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
    <div className="flex flex-col items-center justify-center p-6 glass-panel pixel-border hover:pixel-border-hover animated-border transition-all duration-300 group">
      <span className="stat-number text-4xl md:text-5xl mb-2">
        {count}+
      </span>
      <span className="text-xs md:text-sm font-mono font-medium text-text-secondary uppercase tracking-widest">
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
      {/* ── HERO ── */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-grid-pattern">

        {/* Ambient glow orbs */}
        <div className="glow-orb glow-orb-purple w-[600px] h-[600px] top-[-150px] left-[-150px] opacity-40" />
        <div className="glow-orb glow-orb-pink   w-[400px] h-[400px] bottom-[-100px] right-[-80px]  opacity-30" />
        <div className="glow-orb glow-orb-cyan   w-[300px] h-[300px] top-1/2 right-[10%] opacity-20" />

        {/* PPT-inspired floating pixel blocks */}
        <motion.div animate={{ y: [0,-14,0], rotate:[0,4,0] }} transition={{ duration:7, repeat:Infinity, ease:'easeInOut' }}
          className="pixel-block-deco w-12 h-12 bg-arcade-purple/70 top-[12%] right-[8%]" style={{animationDelay:'0s'}} />
        <motion.div animate={{ y: [0,10,0],  rotate:[0,-3,0] }} transition={{ duration:9, repeat:Infinity, ease:'easeInOut' }}
          className="pixel-block-deco w-8 h-8  bg-builder-pink/60  top-[20%] right-[14%]" style={{animationDelay:'1s'}} />
        <motion.div animate={{ y: [0,-8,0],  rotate:[0,2,0] }} transition={{ duration:11, repeat:Infinity, ease:'easeInOut' }}
          className="pixel-block-deco w-6 h-6  bg-builder-cyan/50  top-[35%] right-[6%]" style={{animationDelay:'2s'}} />
        <motion.div animate={{ y: [0,12,0],  rotate:[0,-2,0] }} transition={{ duration:8, repeat:Infinity, ease:'easeInOut' }}
          className="pixel-block-deco w-10 h-10 bg-builder-green/50 bottom-[20%] right-[10%]" style={{animationDelay:'0.5s'}} />
        <motion.div animate={{ y: [0,-10,0], rotate:[0,3,0] }} transition={{ duration:10, repeat:Infinity, ease:'easeInOut' }}
          className="pixel-block-deco w-7 h-7  bg-arcade-purple/40 top-[15%] left-[6%]" style={{animationDelay:'1.5s'}} />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">

            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 badge-purple mb-10">
              <span className="pulse-dot"></span>
              Now accepting new members
            </motion.div>

            {/* Heading */}
            <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl md:text-8xl font-heading font-black mb-6 tracking-tighter leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-400">AWS Student</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-400">Builder Group</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-arcade-purple via-builder-pink to-builder-cyan">GCOE Kolhapur</span>
            </motion.h1>

            {/* Gradient rule */}
            <motion.div variants={itemVariants} className="gradient-divider max-w-xs mx-auto mb-8" />

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-text-secondary mb-12 max-w-xl mx-auto leading-relaxed">
              Empowering students to{' '}
              <span className="text-builder-cyan font-semibold">learn</span>,{' '}
              <span className="text-arcade-purple font-semibold">build</span>, and{' '}
              <span className="text-builder-green font-semibold">launch</span>{' '}
              their cloud careers.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://www.meetup.com/aws-cloud-club-at-gcoe-kolhapur/" target="_blank" rel="noopener noreferrer"
                className="pixel-button px-10 py-4 text-sm w-full sm:w-auto">
                Join the Group
              </a>
              <button onClick={() => document.getElementById('upcoming-events')?.scrollIntoView({ behavior: 'smooth' })}
                className="pixel-button-secondary px-10 py-4 text-sm w-full sm:w-auto">
                Explore Events
              </button>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-cloud-secondary/30 border-y border-border-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <StatCounter end={700} label="Members Joined" />
            <StatCounter end={3} label="Events Conducted" />
            <StatCounter end={3} label="Projects Built" />
            <StatCounter end={1} label="Workshops Hosted" />
          </div>
        </div>
      </section>

      {/* Featured Spotlight Section */}
      {featuredEvent?.isFeatured && <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Image — left on desktop */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 w-full relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-border-color shadow-2xl relative group">
                <img
                  src={featuredEvent.image || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"}
                  alt={featuredEvent.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cloud-navy via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6 z-20">
                  <span className="bg-aws-orange/90 text-cloud-navy px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider">
                    FEATURED {featuredEvent.type.toUpperCase()}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Text + Buttons — right on desktop */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2 w-full"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
                {featuredEvent.title}
              </h2>
              <div className="w-20 h-0.5 bg-gradient-to-r from-arcade-purple to-builder-pink mb-8 rounded-full"></div>

              <p className="text-xl text-text-secondary mb-10 leading-relaxed">
                {featuredEvent.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {[
                  { icon: Calendar, text: featuredEvent.date },
                  { icon: Clock, text: featuredEvent.time },
                  { icon: MapPin, text: featuredEvent.location }
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 text-text-primary/80 font-mono text-sm">
                    <div className="p-2 bg-cloud-secondary rounded-lg border border-border-color">
                      <item.icon className="w-5 h-5 text-aws-orange" />
                    </div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {featuredEvent.link && (
                  <a href={featuredEvent.link} target="_blank" rel="noopener noreferrer" className="pixel-button px-10 py-4 text-lg text-center">
                    Register Now
                  </a>
                )}
                <Link to={`/events/${featuredEvent.id}`} className="pixel-button-secondary px-10 py-4 text-lg text-center">
                  View Details
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>}

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
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">What We Do</h2>
            <div className="gradient-divider max-w-[6rem] mx-auto mt-2" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { icon: Cloud, title: 'Cloud Workshops', desc: 'Hands-on AWS learning sessions and deep dives.', span: 'lg:col-span-2' },
              { icon: Server, title: 'Hands-on Labs', desc: 'Deploy real applications on AWS infrastructure.', span: 'lg:col-span-1' },
              { icon: Code, title: 'Student Projects', desc: 'Build real-world cloud solutions collaboratively.', span: 'lg:col-span-1' },
              { icon: Terminal, title: 'Certification Guidance', desc: 'Prepare for AWS certifications with peer support.', span: 'lg:col-span-2' }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.01 }}
                className={`glass-panel p-8 pixel-border hover:pixel-border-hover group ${feature.span}`}
              >
                <div className="icon-box w-14 h-14 mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-arcade-purple" />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-3">{feature.title}</h3>
                <p className="text-text-secondary text-lg leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="upcoming-events" className="py-24 bg-cloud-secondary/20">
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
                  className="glass-panel p-6 pixel-border hover:pixel-border-hover flex flex-col h-full"
                >
                  <div className="flex items-center text-aws-orange mb-4 font-mono text-sm">
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
                  <div className="p-2 bg-cloud-secondary rounded border border-border-color">
                    <Database className="w-6 h-6 text-arcade-purple" />
                  </div>
                  <a href="#" className="text-text-secondary hover:text-text-primary transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
                <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-arcade-purple transition-colors">{project.title}</h3>
                <p className="text-text-secondary text-sm mb-6">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map(t => (
                    <span key={t} className="tech-tag">{t}</span>
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
                { id: 'varsha-gaikwad', name: 'Dr. Varsha Gaikwad', role: 'Faculty Coordinator', image: 'https://i.ibb.co/xqY0bSS3/Varsha-maam.jpg' },
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
                    <div className="w-24 h-24 rounded-full bg-cloud-secondary border border-border-color mb-4 overflow-hidden flex items-center justify-center group-hover:border-aws-orange transition-colors">
                      <img
                        src={member.image || `https://picsum.photos/seed/${member.name.replace(/ /g, '')}/150/150`}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-lg font-heading font-bold">{member.name}</h3>
                    <p className="text-aws-orange font-mono text-xs mt-1 mb-4">{member.role}</p>
                  </Link>
                  <div className="flex space-x-3">
                    {member.name !== 'Dr. Varsha Gaikwad' && (
                      <>
                        <a href={member.name === 'Shardul Kolekar' ? "https://www.linkedin.com/in/shardulkolekar" : "#"} className="text-text-secondary hover:text-arcade-purple transition-colors hover:scale-110 transform">
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a href={member.name === 'Shardul Kolekar' ? "mailto:kolekarshardul23@gmail.com" : "mailto:awssbggcoek@gmail.com"} className="text-text-secondary hover:text-text-primary transition-colors hover:scale-110 transform">
                          <Mail className="w-5 h-5" />
                        </a>
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto w-full">
              {[
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
                    <div className="w-24 h-24 rounded-full bg-cloud-secondary border border-border-color mb-4 overflow-hidden flex items-center justify-center group-hover:border-aws-orange transition-colors">
                      <img
                        src={(member as any).image || `https://picsum.photos/seed/${member.name.replace(/ /g, '')}/150/150`}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-lg font-heading font-bold">{member.name}</h3>
                    <p className="text-aws-orange font-mono text-xs mt-1 mb-4">{member.role}</p>
                  </Link>
                  <div className="flex space-x-3">
                    <a href={
                      member.id === 'vidula' ? "https://www.linkedin.com/in/vidula-p-372734294" :
                        member.id === 'gopal' ? "https://www.linkedin.com/in/gopal-lakwal-461467383" :
                          member.id === 'shubham' ? "https://www.linkedin.com/in/shubham-sonwane-b9b056312" :
                            "#"
                    } className="text-text-secondary hover:text-aws-orange transition-colors hover:scale-110 transform">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={
                      member.id === 'vidula' ? "mailto:powarvidula11@gmail.com" :
                        member.id === 'gopal' ? "mailto:gopallakwal526@gmail.com" :
                          member.id === 'shubham' ? "mailto:sonwaneshubham38@gmail.com" :
                            "mailto:awssbggcoek@gmail.com"
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-arcade-purple/10 z-0"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Start Your Cloud Journey Today</h2>
          <p className="text-xl text-text-secondary mb-10">
            Join the AWS Student Builder Group and learn cloud computing through workshops, projects, and community learning.
          </p>
          <Link to="/join" onClick={() => setTimeout(() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' }), 300)} className="pixel-button px-10 py-5 text-lg inline-block">
            Join the Club
          </Link>
        </motion.div>
      </section>
    </PageTransition>
  );
}
