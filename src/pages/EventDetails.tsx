import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, ArrowLeft, Terminal, ChevronRight, CheckCircle2, Video, MessageCircle } from 'lucide-react';
import { eventsData } from '../data/events';

export default function EventDetails() {
  const { id } = useParams<{ id: string }>();
  const event = eventsData.find(e => e.id === id);

  if (!event) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-heading font-bold text-text-primary mb-4">Event Not Found</h1>
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
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
    >
      <Link to="/events" className="inline-flex items-center text-text-primary hover:text-aws-orange transition-colors mb-12 font-mono text-sm uppercase tracking-widest">
        <ArrowLeft className="w-4 h-4 mr-3" /> Back to Events
      </Link>

      <div className="glass-panel pixel-border rounded-3xl overflow-hidden">
        {/* Header Image Area */}
        <div className="relative h-96">
          {event.image && (
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40"
              style={{ backgroundImage: `url('${event.image}')` }}
            ></div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-cloud-navy via-cloud-navy/60 to-transparent"></div>
          
          <div className="absolute bottom-10 left-10 right-10 z-10">
            <span className="px-4 py-1.5 bg-aws-orange text-cloud-navy text-xs font-bold rounded-full uppercase tracking-widest mb-6 inline-block">
              {event.type}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-text-primary leading-tight">
              {event.title}
            </h1>
          </div>
        </div>

        <div className="p-8 sm:p-12">
          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            <div className="flex flex-col p-6 bg-cloud-secondary/50 rounded-2xl border border-border-color">
              <Calendar className="w-7 h-7 mb-4 text-aws-orange" />
              <span className="text-sm font-bold text-text-primary">{event.date}</span>
            </div>
            <div className="flex flex-col p-6 bg-cloud-secondary/50 rounded-2xl border border-border-color">
              <Clock className="w-7 h-7 mb-4 text-aws-orange" />
              <span className="text-sm font-bold text-text-primary">{event.time}</span>
            </div>
            <div className="flex flex-col p-6 bg-cloud-secondary/50 rounded-2xl border border-border-color">
              <MapPin className="w-7 h-7 mb-4 text-aws-orange" />
              <span className="text-sm font-bold text-text-primary">{event.location}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-heading font-bold text-text-primary mb-6">About the Event</h2>
                <p className="text-text-secondary leading-relaxed text-lg">
                  {event.desc}
                </p>
              </section>

              {event.highlights && event.highlights.length > 0 && (
                <section>
                  <h2 className="text-3xl font-heading font-bold text-text-primary mb-6">Highlights</h2>
                  <ul className="space-y-4">
                    {event.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-text-secondary text-lg">
                        <CheckCircle2 className="w-6 h-6 mr-4 text-aws-orange shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {event.schedule && event.schedule.length > 0 && (
                <section>
                  <h2 className="text-3xl font-heading font-bold text-text-primary mb-10 flex items-center">
                    <Terminal className="w-7 h-7 mr-4 text-aws-orange" />
                    Event Schedule
                  </h2>
                  
                  <div className="relative border-l border-border-color ml-3 space-y-12 pb-4">
                    {event.schedule.map((item, i) => (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        key={i} 
                        className="relative pl-10"
                      >
                        <span className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-aws-orange shadow-[0_0_10px_rgba(255,153,0,0.5)]"></span>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-3">
                          <span className="text-aws-orange font-mono font-bold text-sm bg-aws-orange/10 px-4 py-1.5 rounded-full w-fit border border-aws-orange/20">
                            {item.time}
                          </span>
                          <h3 className="text-text-primary font-bold text-xl">{item.title}</h3>
                        </div>
                        <p className="text-text-secondary leading-relaxed text-lg">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar / CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 glass-panel pixel-border p-8 rounded-3xl">
                <h3 className="text-2xl font-heading font-bold text-text-primary mb-6">Registration</h3>
                {event.status === 'upcoming' ? (
                  <>
                    <p className="text-text-secondary text-base mb-8 leading-relaxed">
                      Secure your spot for this event. Limited seats available!
                    </p>
                    {event.link ? (
                      <a 
                        href={event.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="pixel-button w-full flex items-center justify-center py-4 text-center mb-3"
                      >
                        Apply Now <ChevronRight className="w-5 h-5 ml-2" />
                      </a>
                    ) : (
                      <button disabled className="w-full py-4 bg-cloud-secondary/50 text-text-secondary font-semibold rounded-lg cursor-not-allowed border border-border-color mb-3">
                        Registration Opening Soon
                      </button>
                    )}
                    {event.meetLink && (
                      <a
                        href={event.meetLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 w-full px-5 py-4 rounded-xl border border-border-color bg-cloud-secondary hover:border-cloud-blue/50 hover:bg-cloud-blue/10 transition-all duration-300 group mb-3"
                      >
                        <Video className="w-5 h-5 text-cloud-blue shrink-0" />
                        <div className="text-left">
                          <p className="text-sm font-semibold text-text-primary">Join Online</p>
                          <p className="text-xs text-text-secondary font-mono">Google Meet</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-cloud-blue ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    )}
                    {event.whatsappLink && (
                      <a
                        href={event.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 w-full px-5 py-4 rounded-xl border border-border-color bg-cloud-secondary hover:border-[#25D366]/50 hover:bg-[#25D366]/10 transition-all duration-300 group"
                      >
                        <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0" />
                        <div className="text-left">
                          <p className="text-sm font-semibold text-text-primary">WhatsApp Group</p>
                          <p className="text-xs text-text-secondary font-mono">Join for updates</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-[#25D366] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    )}
                  </>
                ) : (
                  <>
                    <p className="text-text-secondary text-base mb-8 leading-relaxed">
                      This event has already concluded. Thank you to everyone who participated!
                    </p>
                    <button disabled className="w-full py-4 bg-cloud-secondary/50 text-text-secondary font-semibold rounded-lg cursor-not-allowed border border-border-color">
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
