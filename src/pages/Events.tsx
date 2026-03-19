import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

export default function Events() {
  const upcomingEvents = [
    {
      title: 'Cloud 101 Workshop',
      date: '28 Mar 2026',
      time: '10:00 AM - 1:00 PM',
      location: 'Main Auditorium, GCOEK',
      desc: 'Introduction to AWS core services (EC2, S3, RDS). Learn how to navigate the AWS console and launch your first resources.',
      type: 'Workshop'
    },
  ];

  const pastEvents = [
    {
      title: 'AWS Cloud Club GCOEK: Intro Meetup',
      date: 'Jan 19, 2026 • 3:00 PM',
      desc: 'Our first in-person introductory meetup at the Seminar Hall (Old Building) to launch a student community focused on AWS Cloud, DevOps, and hands-on tech learning for all branches. Open to all curious students—no prior AWS experience required.',
      highlights: [
        'Introduction to the club’s vision and goals',
        'Core team selection through interactive group activities',
        'Opportunity to learn, lead, and build your resume through leadership roles'
      ]
    },
    
  ];

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
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Club Events</h1>
            <div className="w-24 h-1 bg-cloud-blue mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Join us for workshops, hands-on labs, and bootcamps to level up your cloud skills.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-cloud-secondary/20 border-y border-border-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold mb-12 flex items-center">
            <span className="w-4 h-4 rounded-full bg-aws-orange animate-pulse mr-4"></span>
            Upcoming Events
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="glass-panel p-6 pixel-border flex flex-col h-full group"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-cloud-secondary text-xs font-mono text-cloud-blue rounded border border-border-color">
                    {event.type}
                  </span>
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-aws-orange transition-colors">{event.title}</h3>
                
                <div className="space-y-2 mb-6 text-sm text-text-secondary font-mono">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-3 text-arcade-purple" />
                    {event.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-3 text-arcade-purple" />
                    {event.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-3 text-arcade-purple" />
                    {event.location}
                  </div>
                </div>
                
                <p className="text-text-secondary mb-8 flex-grow">{event.desc}</p>
                
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSedvS9aXI3kVrDr2Hh5pK0-KLu3LYAO6MhUDsoyEuEvRq8v2g/viewform" target="_blank" rel="noopener noreferrer" className="pixel-button py-3 w-full flex items-center justify-center">
                  Register Now <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events & Gallery */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Past Events</h2>
            <div className="w-24 h-1 bg-arcade-purple mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {pastEvents.map((event, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-6 pixel-border flex flex-col"
              >
                <div className="flex items-center text-text-secondary mb-2 font-mono text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  {event.date}
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{event.title}</h3>
                <p className="text-text-secondary mb-4">{event.desc}</p>
                {event.highlights && (
                  <ul className="list-disc list-inside text-sm text-text-secondary space-y-1 mt-auto">
                    {event.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-heading font-bold mb-8 text-center"
          >
            Event Gallery
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://i.ibb.co/wh3WN4c8/highres-532347430.avif',
              'https://i.ibb.co/mC48zSdN/highres-532347431.avif',
              'https://i.ibb.co/sd6ZXFt4/highres-532347403-1.avif',
              'https://i.ibb.co/h1RwtVP4/highres-532347403.avif',
              'https://i.ibb.co/n8kj4dLH/highres-532347401.avif',
              'https://i.ibb.co/Mx9LRq1m/highres-532347400.avif',
              'https://i.ibb.co/7JqJhG3N/highres-532347399.avif',
              'https://i.ibb.co/r2PWsbBj/IMG-20260313-133159131-HDR-AE-2-jpg.jpg'
            ].map((src, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="aspect-square bg-cloud-secondary rounded-2xl overflow-hidden border border-border-color group relative hover:shadow-2xl hover:border-aws-orange/50 transition-all duration-300"
              >
                <img 
                  src={src} 
                  alt="Event photo" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cloud-navy/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="font-mono text-xs text-aws-orange font-bold tracking-wider">AWS Community</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
