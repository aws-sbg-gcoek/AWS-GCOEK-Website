import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, ArrowLeft, Terminal, ChevronRight, CheckCircle2 } from 'lucide-react';
import { eventsData } from '../data/events';

export default function EventDetails() {
  const { id } = useParams<{ id: string }>();
  const event = eventsData.find(e => e.id === id);

  if (!event) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-heading font-bold text-white mb-4">Event Not Found</h1>
        <p className="text-text-secondary mb-8">The event you are looking for does not exist or has been removed.</p>
        <Link to="/events" className="pixel-button">Back to Events</Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <Link to="/events" className="inline-flex items-center text-aws-orange hover:text-white transition-colors mb-8 font-mono text-sm uppercase tracking-wider">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Events
      </Link>

      <div className="glass-panel pixel-border overflow-hidden rounded-2xl">
        {/* Header Image Area */}
        <div className="relative h-64 sm:h-80 bg-gradient-to-r from-cloud-navy to-cloud-blue/20">
          {event.image && (
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
              style={{ backgroundImage: `url('${event.image}')` }}
            ></div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-cloud-navy via-cloud-navy/80 to-transparent"></div>
          
          <div className="absolute bottom-6 left-6 right-6 z-10">
            <span className="px-3 py-1 bg-aws-orange text-cloud-navy text-xs font-bold rounded uppercase tracking-wider mb-3 inline-block shadow-sm">
              {event.type}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white drop-shadow-md leading-tight">
              {event.title}
            </h1>
          </div>
        </div>

        <div className="p-6 sm:p-10">
          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div className="flex flex-col p-4 bg-cloud-secondary/40 rounded-xl border border-border-color/50">
              <Calendar className="w-6 h-6 mb-3 text-arcade-purple" />
              <span className="text-sm font-bold text-text-primary">{event.date}</span>
            </div>
            <div className="flex flex-col p-4 bg-cloud-secondary/40 rounded-xl border border-border-color/50">
              <Clock className="w-6 h-6 mb-3 text-arcade-purple" />
              <span className="text-sm font-bold text-text-primary">{event.time}</span>
            </div>
            <div className="flex flex-col p-4 bg-cloud-secondary/40 rounded-xl border border-border-color/50">
              <MapPin className="w-6 h-6 mb-3 text-arcade-purple" />
              <span className="text-sm font-bold text-text-primary">{event.location}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              <section>
                <h2 className="text-2xl font-heading font-bold text-white mb-4">About the Event</h2>
                <p className="text-text-secondary leading-relaxed text-lg">
                  {event.desc}
                </p>
              </section>

              {event.highlights && event.highlights.length > 0 && (
                <section>
                  <h2 className="text-2xl font-heading font-bold text-white mb-4">Highlights</h2>
                  <ul className="space-y-3">
                    {event.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-text-secondary">
                        <CheckCircle2 className="w-5 h-5 mr-3 text-aws-orange shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {event.schedule && event.schedule.length > 0 && (
                <section>
                  <h2 className="text-2xl font-heading font-bold text-white mb-6 flex items-center">
                    <Terminal className="w-6 h-6 mr-3 text-aws-orange" />
                    Event Schedule
                  </h2>
                  
                  <div className="relative border-l-2 border-border-color ml-3 space-y-8 pb-4">
                    {event.schedule.map((item, i) => (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        key={i} 
                        className="relative pl-8"
                      >
                        <span className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-cloud-secondary border-2 border-aws-orange shadow-[0_0_10px_rgba(255,153,0,0.5)]"></span>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                          <span className="text-aws-orange font-mono font-bold text-sm bg-aws-orange/10 px-3 py-1 rounded w-fit border border-aws-orange/20">
                            {item.time}
                          </span>
                          <h3 className="text-white font-bold text-lg">{item.title}</h3>
                        </div>
                        <p className="text-text-secondary leading-relaxed">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar / CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 glass-panel p-6 rounded-xl border border-border-color">
                <h3 className="text-xl font-heading font-bold text-white mb-4">Registration</h3>
                {event.status === 'upcoming' ? (
                  <>
                    <p className="text-text-secondary text-sm mb-6">
                      Secure your spot for this event. Limited seats available!
                    </p>
                    {event.link ? (
                      <a 
                        href={event.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="pixel-button w-full flex items-center justify-center py-3"
                      >
                        Register Now <ChevronRight className="w-5 h-5 ml-2" />
                      </a>
                    ) : (
                      <button disabled className="pixel-button-secondary w-full opacity-50 cursor-not-allowed py-3">
                        Registration Opening Soon
                      </button>
                    )}
                  </>
                ) : (
                  <>
                    <p className="text-text-secondary text-sm mb-6">
                      This event has already concluded. Thank you to everyone who participated!
                    </p>
                    <button disabled className="pixel-button-secondary w-full opacity-50 cursor-not-allowed py-3">
                      Event Ended
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
