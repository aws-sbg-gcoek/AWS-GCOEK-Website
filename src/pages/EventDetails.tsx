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
        <p className="text-5xl mb-6">🔍</p>
        <h1 className="text-3xl font-heading font-bold mb-3">Event Not Found</h1>
        <p className="text-text-secondary text-sm mb-8">The event you're looking for doesn't exist or has been removed.</p>
        <Link to="/events" className="pixel-button px-8 py-3">Back to Events</Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
    >
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-mono text-text-secondary mb-10">
        <Link to="/events" className="hover:text-aws-orange transition-colors flex items-center gap-1.5">
          <ArrowLeft className="w-3.5 h-3.5" /> Events
        </Link>
        <ChevronRight className="w-3 h-3 opacity-40" />
        <span className="text-text-primary truncate max-w-[200px]">{event.title}</span>
      </div>

      <div className="glass-panel pixel-border rounded-3xl overflow-hidden">

        {/* Hero image */}
        <div className="relative h-72 sm:h-96">
          {event.image ? (
            <img src={event.image} alt={event.title} className="absolute inset-0 w-full h-full object-cover opacity-50" loading="lazy" referrerPolicy="no-referrer" />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-cloud-secondary to-cloud-navy" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-cloud-navy via-cloud-navy/50 to-transparent" />

          <div className="absolute bottom-8 left-8 right-8 z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-aws-orange text-cloud-navy text-xs font-mono font-bold rounded-full uppercase tracking-wider">
                {event.type}
              </span>
              <span className={event.status === 'upcoming' ? 'badge-upcoming' : 'badge-past'}>
                {event.status}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-text-primary leading-tight">
              {event.title}
            </h1>
          </div>
        </div>

        <div className="p-7 sm:p-10">

          {/* Quick info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {[
              { icon: Calendar, label: 'Date',     value: event.date },
              { icon: Clock,    label: 'Time',     value: event.time },
              { icon: MapPin,   label: 'Location', value: event.location },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-5 bg-cloud-secondary/50 rounded-2xl border border-border-color">
                <div className="p-2 bg-aws-orange/10 rounded-lg border border-aws-orange/20">
                  <item.icon className="w-5 h-5 text-aws-orange" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-text-secondary uppercase tracking-widest mb-0.5">{item.label}</p>
                  <p className="text-sm font-semibold text-text-primary">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              <section>
                <h2 className="text-2xl font-heading font-bold mb-4">About the Event</h2>
                <p className="text-text-secondary leading-relaxed">{event.desc}</p>
              </section>

              {event.highlights && event.highlights.length > 0 && (
                <section>
                  <h2 className="text-2xl font-heading font-bold mb-5">Highlights</h2>
                  <ul className="space-y-3">
                    {event.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-text-secondary text-sm">
                        <CheckCircle2 className="w-5 h-5 text-aws-orange shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {event.schedule && event.schedule.length > 0 && (
                <section>
                  <div className="flex items-center gap-3 mb-8">
                    <Terminal className="w-5 h-5 text-aws-orange" />
                    <h2 className="text-2xl font-heading font-bold">Event Schedule</h2>
                  </div>
                  <div className="relative border-l-2 border-border-color ml-3 space-y-8 pb-2">
                    {event.schedule.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                        className="relative pl-8"
                      >
                        <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-aws-orange shadow-[0_0_10px_rgba(255,153,0,0.5)]" />
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span className="text-aws-orange font-mono font-bold text-xs bg-aws-orange/10 px-3 py-1 rounded-full border border-aws-orange/20">
                            {item.time}
                          </span>
                          <h3 className="text-base font-heading font-bold">{item.title}</h3>
                        </div>
                        <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 glass-panel pixel-border p-7 rounded-2xl">
                <h3 className="text-xl font-heading font-bold mb-2">Registration</h3>
                <div className="w-8 h-0.5 bg-aws-orange rounded-full mb-5" />

                {event.status === 'upcoming' ? (
                  <>
                    <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                      Secure your spot. Limited seats available.
                    </p>
                    {event.link ? (
                      <a href={event.link} target="_blank" rel="noopener noreferrer"
                        className="pixel-button w-full flex items-center justify-center gap-2 py-3.5 text-center">
                        Register Now <ChevronRight className="w-4 h-4" />
                      </a>
                    ) : (
                      <button disabled className="w-full py-3.5 bg-cloud-secondary/50 text-text-secondary text-sm font-mono rounded-xl cursor-not-allowed border border-border-color">
                        Opening Soon
                      </button>
                    )}
                  </>
                ) : (
                  <>
                    <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                      This event has concluded. Thanks to everyone who participated!
                    </p>
                    <div className="w-full py-3.5 bg-cloud-secondary/30 text-text-secondary text-sm font-mono rounded-xl border border-border-color text-center">
                      Event Ended
                    </div>
                  </>
                )}

                <div className="mt-6 pt-6 border-t border-border-color">
                  <Link to="/events" className="flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-aws-orange transition-colors uppercase tracking-wider">
                    <ArrowLeft className="w-3.5 h-3.5" /> All Events
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
}
