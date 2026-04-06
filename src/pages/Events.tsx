import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, ArrowRight, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { eventsData } from '../data/events';

export default function Events() {
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const categories = ['all', ...Array.from(new Set(eventsData.map(e => e.type)))];

  const filteredEvents = eventsData.filter(event => {
    const matchesStatus = statusFilter === 'all' || event.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || event.type === categoryFilter;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          event.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          event.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesCategory && matchesSearch;
  });

  const upcomingEvents = filteredEvents.filter(e => e.status === 'upcoming');
  const pastEvents = filteredEvents.filter(e => e.status === 'past');

  return (
    <PageTransition className="w-full">
      {/* Header */}
      <section className="pt-32 pb-24 relative overflow-hidden bg-grid-pattern">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cloud-blue/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-aws-orange/10 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 text-gradient-orange">
              Club Events
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed font-mono">
              Join us for workshops, hands-on labs, and bootcamps to level up your cloud skills.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-panel pixel-border p-6 flex flex-col md:flex-row gap-6 items-center justify-between"
          >
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search events..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-cloud-secondary/50 border border-border-color rounded-full py-3 pl-12 pr-4 text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-aws-orange transition-all duration-300"
              />
            </div>
            
            <div className="flex flex-wrap gap-4 w-full md:w-auto">
              <div className="flex items-center space-x-2">
                <Filter className="text-text-secondary w-4 h-4" />
                <select 
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="bg-cloud-secondary/50 border border-border-color rounded-full py-3 px-6 text-sm text-text-primary focus:outline-none focus:border-aws-orange transition-all duration-300"
                >
                  <option value="all">All Status</option>
                  <option value="upcoming">Upcoming</option>
                  <option value="past">Past</option>
                </select>
              </div>
              
              <select 
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="bg-cloud-secondary/50 border border-border-color rounded-full py-3 px-6 text-sm text-text-primary focus:outline-none focus:border-aws-orange transition-all duration-300"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat === 'all' ? 'All Categories' : cat}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <section className="py-24 bg-cloud-secondary/20 border-y border-border-color">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-heading font-bold mb-16 flex items-center text-text-primary">
              <span className="w-4 h-4 rounded-full bg-aws-orange animate-pulse mr-4"></span>
              Upcoming Events
            </h2>

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
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {upcomingEvents.map((event) => (
                <motion.div 
                  key={event.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                  }}
                  className="glass-panel p-8 pixel-border hover:pixel-border-hover transition-all duration-500 flex flex-col h-full group"
                >
                  <div className="flex justify-between items-start mb-8">
                    <span className="px-4 py-1 bg-cloud-secondary text-xs font-mono text-cloud-blue rounded-full border border-border-color">
                      {event.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-6 text-text-primary group-hover:text-aws-orange transition-colors">{event.title}</h3>
                  
                  <div className="space-y-4 mb-8 text-sm text-text-secondary font-mono">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-4 text-text-primary" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-4 text-text-primary" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-4 text-text-primary" />
                      {event.location}
                    </div>
                  </div>
                  
                  <p className="text-text-secondary mb-8 flex-grow leading-relaxed">{event.desc}</p>
                  
                  <Link to={`/events/${event.id}`} className="pixel-button-secondary w-full py-4 text-center flex items-center justify-center">
                    View Details <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Past Events & Gallery */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {pastEvents.length > 0 && (
            <>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-20"
              >
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-text-primary">Past Events</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-aws-orange to-cloud-blue mx-auto rounded-full"></div>
              </motion.div>

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
                className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24"
              >
                {pastEvents.map((event) => (
                  <motion.div 
                    key={event.id} 
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                    }}
                    className="glass-panel p-8 pixel-border hover:pixel-border-hover transition-all duration-500 flex flex-col group"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <span className="px-4 py-1 bg-cloud-secondary text-xs font-mono text-cloud-blue rounded-full border border-border-color">
                        {event.type}
                      </span>
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-4 text-text-primary group-hover:text-aws-orange transition-colors">{event.title}</h3>
                    
                    <div className="space-y-3 mb-6 text-sm text-text-secondary font-mono">
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 mr-4 text-text-primary" />
                        {event.date}
                      </div>
                      {event.time && (
                        <div className="flex items-center">
                          <Clock className="w-5 h-5 mr-4 text-text-primary" />
                          {event.time}
                        </div>
                      )}
                      {event.location && (
                        <div className="flex items-center">
                          <MapPin className="w-5 h-5 mr-4 text-text-primary" />
                          {event.location}
                        </div>
                      )}
                    </div>

                    <p className="text-text-secondary mb-6 leading-relaxed">{event.desc}</p>
                    {event.highlights && (
                      <ul className="list-disc list-inside text-sm text-text-secondary space-y-2 mb-8">
                        {event.highlights.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                    )}
                    
                    <div className="mt-auto pt-6 border-t border-border-color">
                      <Link to={`/events/${event.id}`} className="text-text-primary font-mono text-sm hover:text-aws-orange transition-colors flex items-center">
                        View Details <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </>
          )}

          {/* Gallery Grid */}
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-heading font-bold mb-12 text-center text-text-primary"
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
                className="aspect-square glass-panel rounded-3xl overflow-hidden pixel-border hover:pixel-border-hover group relative transition-all duration-500"
              >
                <img 
                  src={src} 
                  alt="Event photo" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cloud-navy/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <span className="font-mono text-xs text-aws-orange font-bold tracking-widest uppercase">AWS Community</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
