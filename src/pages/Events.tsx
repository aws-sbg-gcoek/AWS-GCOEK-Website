import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MapPin, Clock, ArrowRight, Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';
import { eventsData } from '../data/events';

export default function Events() {
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const categories = ['all', ...Array.from(new Set(eventsData.map(e => e.type)))];
  const hasActiveFilters = statusFilter !== 'all' || categoryFilter !== 'all' || searchQuery !== '';

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

  const clearFilters = () => { setStatusFilter('all'); setCategoryFilter('all'); setSearchQuery(''); };

  const statusOptions = [
    { value: 'all', label: 'All' },
    { value: 'upcoming', label: 'Upcoming' },
    { value: 'past', label: 'Past' },
  ];

  return (
    <PageTransition className="w-full">

      {/* Header */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-grid-pattern">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cloud-blue/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-aws-orange/8 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
            <p className="text-xs font-mono text-aws-orange uppercase tracking-widest mb-4">Community</p>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-gradient-orange">Club Events</h1>
            <p className="text-base text-text-secondary max-w-xl mx-auto leading-relaxed font-mono">
              Workshops, hands-on labs, and bootcamps to level up your cloud skills.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-10 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}
            className="glass-panel border border-border-color rounded-2xl p-4 flex flex-col sm:flex-row gap-3 items-center shadow-xl"
          >
            {/* Search */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary w-4 h-4" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-cloud-secondary/60 border border-border-color rounded-xl py-2.5 pl-10 pr-4 text-sm text-text-primary placeholder:text-text-secondary/60 focus:outline-none focus:border-aws-orange/60 transition-colors"
              />
            </div>

            {/* Status pills */}
            <div className="flex gap-1.5 shrink-0">
              {statusOptions.map(opt => (
                <button
                  key={opt.value}
                  onClick={() => setStatusFilter(opt.value)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider transition-all duration-200 ${
                    statusFilter === opt.value
                      ? 'bg-aws-orange text-cloud-navy shadow-[0_0_12px_rgba(255,153,0,0.3)]'
                      : 'bg-cloud-secondary/50 text-text-secondary hover:text-text-primary border border-border-color'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* Category */}
            <select
              value={categoryFilter}
              onChange={e => setCategoryFilter(e.target.value)}
              className="bg-cloud-secondary/60 border border-border-color rounded-xl py-2.5 px-4 text-xs font-mono text-text-primary focus:outline-none focus:border-aws-orange/60 transition-colors shrink-0"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat === 'all' ? 'All Types' : cat}</option>
              ))}
            </select>

            {/* Clear */}
            <AnimatePresence>
              {hasActiveFilters && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                  onClick={clearFilters}
                  className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-mono text-text-secondary hover:text-aws-orange border border-border-color hover:border-aws-orange/40 transition-all shrink-0"
                >
                  <X className="w-3.5 h-3.5" /> Clear
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Result count */}
          <p className="text-xs font-mono text-text-secondary mt-2 px-1">
            {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''} found
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <section className="py-16 bg-cloud-secondary/15 border-y border-border-color">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-12">
              <span className="w-2.5 h-2.5 rounded-full bg-aws-orange animate-pulse" />
              <h2 className="text-3xl font-heading font-bold">Upcoming Events</h2>
              <span className="badge-upcoming ml-2">{upcomingEvents.length}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event, idx) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.45, delay: idx * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="glass-panel pixel-border flex flex-col h-full group overflow-hidden"
                >
                  {event.image && (
                    <div className="h-44 overflow-hidden relative">
                      <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-90" loading="lazy" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-gradient-to-t from-cloud-navy via-cloud-navy/30 to-transparent" />
                      <span className="absolute bottom-3 left-4 badge-upcoming">{event.type}</span>
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-grow">
                    {!event.image && <span className="badge-upcoming mb-4 self-start">{event.type}</span>}
                    <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-aws-orange transition-colors leading-snug">{event.title}</h3>
                    <div className="space-y-2 mb-4 text-xs font-mono text-text-secondary">
                      <div className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5 text-aws-orange" />{event.date}</div>
                      <div className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-aws-orange" />{event.time}</div>
                      <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-aws-orange" />{event.location}</div>
                    </div>
                    <p className="text-text-secondary text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">{event.desc}</p>
                    <Link to={`/events/${event.id}`} className="pixel-button-secondary w-full py-2.5 text-xs text-center flex items-center justify-center gap-2 mt-auto">
                      View Details <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-12">
              <h2 className="text-3xl font-heading font-bold">Past Events</h2>
              <span className="badge-past">{pastEvents.length}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
              {pastEvents.map((event, idx) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.45, delay: idx * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="glass-panel pixel-border flex flex-col group overflow-hidden"
                >
                  {event.image && (
                    <div className="h-40 overflow-hidden relative">
                      <img src={event.image} alt={event.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 grayscale group-hover:grayscale-0" loading="lazy" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-gradient-to-t from-cloud-navy via-cloud-navy/40 to-transparent" />
                      <span className="absolute bottom-3 left-4 badge-past">{event.type}</span>
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-grow">
                    {!event.image && <span className="badge-past mb-4 self-start">{event.type}</span>}
                    <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-aws-orange transition-colors">{event.title}</h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-4 text-xs font-mono text-text-secondary">
                      <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{event.date}</span>
                      {event.location && <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{event.location}</span>}
                    </div>
                    <p className="text-text-secondary text-sm mb-5 leading-relaxed line-clamp-3">{event.desc}</p>
                    <div className="mt-auto pt-4 border-t border-border-color">
                      <Link to={`/events/${event.id}`} className="text-text-secondary hover:text-aws-orange transition-colors font-mono text-xs flex items-center gap-1.5 uppercase tracking-wider">
                        View Details <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Gallery */}
            <div className="mb-4">
              <p className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-3">Moments</p>
              <h3 className="text-2xl font-heading font-bold mb-10">Event Gallery</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
                  initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.04 }}
                  className="aspect-square rounded-2xl overflow-hidden relative group border border-border-color hover:border-aws-orange/30 transition-colors"
                >
                  <img src={src} alt="Event photo" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-75 group-hover:opacity-100" referrerPolicy="no-referrer" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-cloud-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4">
                    <span className="font-mono text-[10px] text-aws-orange font-bold tracking-widest uppercase">AWS Community</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty state */}
      {filteredEvents.length === 0 && (
        <section className="py-24">
          <div className="max-w-md mx-auto text-center px-4">
            <p className="text-5xl mb-6">🔍</p>
            <h3 className="text-xl font-heading font-bold mb-3">No events found</h3>
            <p className="text-text-secondary text-sm mb-8">Try adjusting your filters or search query.</p>
            <button onClick={clearFilters} className="pixel-button-secondary px-6 py-2.5 text-xs">Clear Filters</button>
          </div>
        </section>
      )}

    </PageTransition>
  );
}
