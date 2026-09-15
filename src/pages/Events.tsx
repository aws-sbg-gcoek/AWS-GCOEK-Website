import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, ArrowRight, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { eventsData } from '../data/events';

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

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
      {/* ── HEADER ── */}
      <section className="pt-32 pb-20 bg-grid-animated" style={{ background: '#0B1220' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="section-label">Community Events</div>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-4 leading-tight">
              Club<br /><span style={{ color: '#FF9900' }}>Events</span>
            </h1>
            <div className="section-line" />
            <p className="text-text-secondary max-w-2xl mt-6 leading-relaxed">
              Join us for workshops, hands-on labs, and bootcamps to level up your cloud skills.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FILTERS ── */}
      <section className="py-8 border-y" style={{ background: '#080E1A', borderColor: '#1E2A3A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-cloud-secondary border border-border-color rounded-sm py-2 pl-9 pr-4 text-sm text-white focus:outline-none focus:border-aws-orange transition-colors"
              />
            </div>

            {/* Dropdowns */}
            <div className="flex flex-wrap gap-4 w-full md:w-auto">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-text-secondary" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="bg-cloud-secondary border border-border-color rounded-sm py-2 px-3 text-sm text-white focus:outline-none focus:border-aws-orange transition-colors font-mono uppercase tracking-wider"
                >
                  <option value="all">All Status</option>
                  <option value="upcoming">Upcoming</option>
                  <option value="past">Past</option>
                </select>
              </div>

              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="bg-cloud-secondary border border-border-color rounded-sm py-2 px-3 text-sm text-white focus:outline-none focus:border-aws-orange transition-colors font-mono uppercase tracking-wider"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat === 'all' ? 'ALL CATEGORIES' : cat.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>

          </div>
        </div>
      </section>

      {/* ── UPCOMING EVENTS ── */}
      {upcomingEvents.length > 0 && (
        <section className="py-20" style={{ background: '#111827' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
              <div className="section-label">Live</div>
              <h2 className="text-3xl font-heading font-bold text-white flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-aws-orange animate-pulse" /> Upcoming Events
              </h2>
              <div className="section-line section-line-blue mt-4" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event, idx) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="dev-card card-shine bl-blue p-6 flex flex-col h-full group"
                >
                  <div className="mb-4">
                    <span className="tech-tag border-cloud-blue text-cloud-blue">{event.type}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-4 group-hover:text-aws-orange transition-colors duration-200">{event.title}</h3>
                  
                  <div className="space-y-3 mb-6 font-mono text-xs text-text-secondary">
                    <div className="flex items-center gap-3"><Calendar className="w-4 h-4 text-cloud-blue" /> {event.date}</div>
                    <div className="flex items-center gap-3"><Clock className="w-4 h-4 text-cloud-blue" /> {event.time}</div>
                    <div className="flex items-center gap-3"><MapPin className="w-4 h-4 text-cloud-blue" /> {event.location}</div>
                  </div>
                  
                  <p className="text-text-secondary text-sm mb-6 flex-grow leading-relaxed line-clamp-3">{event.desc}</p>
                  
                  <Link to={`/events/${event.id}`} className="pixel-button-secondary py-2.5 w-full text-center text-xs flex items-center justify-center gap-2">
                    View Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── PAST EVENTS ── */}
      <section className="py-20 bg-grid-dense" style={{ background: '#0B1220', borderTop: '1px solid #1E2A3A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {pastEvents.length > 0 && (
            <div className="mb-24">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
                <div className="section-label">Archive</div>
                <h2 className="text-3xl font-heading font-bold text-white">Past Events</h2>
                <div className="section-line mt-4" />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pastEvents.map((event, idx) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="dev-card card-shine p-6 flex flex-col group"
                    style={{ borderLeftColor: '#A855F7', borderLeftWidth: 3 }}
                  >
                    <div className="mb-4">
                      <span className="tech-tag border-arcade-purple text-arcade-purple">{event.type}</span>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-white mb-4 group-hover:text-aws-orange transition-colors duration-200">{event.title}</h3>
                    
                    <div className="space-y-2 mb-4 font-mono text-xs text-text-secondary">
                      <div className="flex items-center gap-3"><Calendar className="w-4 h-4 text-arcade-purple" /> {event.date}</div>
                      {event.location && <div className="flex items-center gap-3"><MapPin className="w-4 h-4 text-arcade-purple" /> {event.location}</div>}
                    </div>

                    <p className="text-text-secondary text-sm mb-4 leading-relaxed line-clamp-2">{event.desc}</p>
                    
                    <div className="mt-auto pt-4 border-t border-border-color">
                      <Link to={`/events/${event.id}`} className="text-aws-orange font-mono text-xs hover:text-white transition-colors flex items-center gap-2">
                        Read Summary <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* ── GALLERY ── */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
            <div className="section-label">Media</div>
            <h2 className="text-3xl font-heading font-bold text-white">Event Gallery</h2>
            <div className="section-line mt-4" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://i.ibb.co/wh3WN4c8/highres-532347430.avif',
              'https://i.ibb.co/mC48zSdN/highres-532347431.avif',
              'https://i.ibb.co/sd6ZXFt4/highres-532347403-1.avif',
              'https://i.ibb.co/h1RwtVP4/highres-532347403.avif',
              'https://i.ibb.co/n8kj4dLH/highres-532347401.avif',
              'https://i.ibb.co/Mx9LRq1m/highres-532347400.avif',
              'https://i.ibb.co/7JqJhG3N/highres-532347399.avif',
              'https://i.ibb.co/r2PWsbBj/IMG-20260313-133159131-HDR-AE-2-jpg.jpg',
            ].map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}
                className="aspect-square dev-card overflow-hidden group relative"
              >
                <img
                  src={src}
                  alt="Event photo"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="terminal-tag border-aws-orange text-aws-orange">AWS Community</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
