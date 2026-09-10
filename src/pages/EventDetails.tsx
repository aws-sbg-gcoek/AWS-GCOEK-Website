import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, ArrowLeft, Terminal, ChevronRight, CheckSquare, Video, MessageSquare } from 'lucide-react';
import { eventsData } from '../data/events';

export default function EventDetails() {
  const { id } = useParams<{ id: string }>();
  const event = eventsData.find(e => e.id === id);

  if (!event) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4" style={{ background: '#0B1220' }}>
        <h1 className="text-4xl font-heading font-bold text-white mb-4">Event Not Found</h1>
        <p className="text-text-secondary mb-8 font-mono text-sm">The event you are looking for does not exist or has been removed.</p>
        <Link to="/events" className="pixel-button px-6 py-2">Back to Events</Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="w-full pt-28 pb-20"
      style={{ background: '#0B1220' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link to="/events" className="inline-flex items-center text-text-secondary hover:text-aws-orange transition-colors mb-8 font-mono text-xs uppercase tracking-widest">
          <ArrowLeft className="w-3.5 h-3.5 mr-2" /> Back to Events
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content (Left) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Header Image & Title */}
            <div className="dev-card overflow-hidden">
              <div className="relative h-64 sm:h-80 border-b border-border-color">
                {event.image ? (
                  <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: `url('${event.image}')` }} />
                ) : (
                  <div className="absolute inset-0 bg-grid-dense opacity-50" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1826] to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="tech-tag bg-[#0D1826] border-aws-orange text-aws-orange mb-4 inline-block">{event.type}</span>
                  <h1 className="text-3xl sm:text-5xl font-heading font-black text-white leading-tight">
                    {event.title}
                  </h1>
                </div>
              </div>
              
              {/* Quick Info Bar */}
              <div className="flex flex-wrap border-b border-border-color bg-[#080E1A]">
                <div className="flex-1 flex items-center gap-3 p-4 border-r border-border-color min-w-[140px]">
                  <Calendar className="w-4 h-4 text-cloud-blue" />
                  <span className="text-sm font-mono text-white">{event.date}</span>
                </div>
                <div className="flex-1 flex items-center gap-3 p-4 border-r border-border-color min-w-[140px]">
                  <Clock className="w-4 h-4 text-cloud-blue" />
                  <span className="text-sm font-mono text-white">{event.time}</span>
                </div>
                <div className="flex-1 flex items-center gap-3 p-4 min-w-[140px]">
                  <MapPin className="w-4 h-4 text-cloud-blue" />
                  <span className="text-sm font-mono text-white line-clamp-1">{event.location}</span>
                </div>
              </div>

              {/* Description */}
              <div className="p-8">
                <div className="section-label">Overview</div>
                <h2 className="text-2xl font-heading font-bold text-white mb-4">About the Event</h2>
                <div className="section-line mb-6" />
                <p className="text-text-secondary leading-relaxed">
                  {event.desc}
                </p>
              </div>
            </div>

            {/* Highlights */}
            {event.highlights && event.highlights.length > 0 && (
              <div className="dev-card p-8 bl-purple">
                <div className="section-label">Key Takeaways</div>
                <h2 className="text-2xl font-heading font-bold text-white mb-6">Highlights</h2>
                <ul className="space-y-4">
                  {event.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <CheckSquare className="w-5 h-5 text-arcade-purple shrink-0 mt-0.5" />
                      <span className="text-text-secondary">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Schedule */}
            {event.schedule && event.schedule.length > 0 && (
              <div className="dev-card p-8">
                <div className="section-label">Agenda</div>
                <h2 className="text-2xl font-heading font-bold text-white flex items-center gap-3 mb-8">
                  <Terminal className="w-6 h-6 text-aws-orange" /> Event Schedule
                </h2>
                
                <div className="relative border-l border-border-color ml-3 space-y-8 pb-2">
                  {event.schedule.map((item, i) => (
                    <div key={i} className="relative pl-8 group">
                      <span className="absolute -left-1.5 top-1.5 w-3 h-3 bg-[#0D1826] border-2 border-aws-orange rounded-sm group-hover:bg-aws-orange transition-colors" />
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                        <span className="terminal-tag border-aws-orange text-aws-orange">{item.time}</span>
                        <h3 className="text-white font-bold text-lg">{item.title}</h3>
                      </div>
                      <p className="text-text-secondary leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar (Right) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 dev-card p-6 bg-[#080E1A]">
              <div className="section-label">Action</div>
              <h3 className="text-xl font-heading font-bold text-white mb-6">Registration</h3>
              
              {event.status === 'upcoming' ? (
                <>
                  <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                    Secure your spot for this event. Limited seats available!
                  </p>
                  
                  {event.link ? (
                    <a href={event.link} target="_blank" rel="noopener noreferrer" className="pixel-button w-full flex items-center justify-center py-3.5 mb-4">
                      Register Now <ChevronRight className="w-4 h-4 ml-2" />
                    </a>
                  ) : (
                    <button disabled className="w-full py-3.5 bg-[#111827] text-text-secondary font-mono text-xs uppercase border border-border-color mb-4 cursor-not-allowed">
                      Opening Soon
                    </button>
                  )}
                  
                  {event.meetLink && (
                    <a href={event.meetLink} target="_blank" rel="noopener noreferrer" className="dev-card card-shine flex items-center gap-3 p-4 mb-3 group hover:border-cloud-blue">
                      <Video className="w-5 h-5 text-cloud-blue shrink-0" />
                      <div>
                        <p className="text-sm font-bold text-white group-hover:text-cloud-blue transition-colors">Join Online</p>
                        <p className="text-xs text-text-secondary font-mono">Google Meet</p>
                      </div>
                    </a>
                  )}
                  
                  {event.whatsappLink && (
                    <a href={event.whatsappLink} target="_blank" rel="noopener noreferrer" className="dev-card card-shine flex items-center gap-3 p-4 group hover:border-[#22C55E]">
                      <MessageSquare className="w-5 h-5 text-[#22C55E] shrink-0" />
                      <div>
                        <p className="text-sm font-bold text-white group-hover:text-[#22C55E] transition-colors">WhatsApp Group</p>
                        <p className="text-xs text-text-secondary font-mono">Join for updates</p>
                      </div>
                    </a>
                  )}
                </>
              ) : (
                <>
                  <p className="text-text-secondary text-sm mb-6 leading-relaxed">
                    This event has already concluded. Check out our upcoming events!
                  </p>
                  <button disabled className="w-full py-3.5 bg-[#111827] text-text-secondary font-mono text-xs uppercase border border-border-color cursor-not-allowed">
                    Event Ended
                  </button>
                </>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </motion.div>
  );
}
