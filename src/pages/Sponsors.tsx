import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { Quote, ExternalLink, Award, Star, Shield, Megaphone, Users, Heart, Zap, X, MessageCircle, Mail } from 'lucide-react';

interface Sponsor {
  name: string;
  tier: 'Platinum' | 'Gold' | 'Silver';
  logo: string;
  description: string;
  link: string;
}

const benefits = [
  { title: "Brand Visibility",  desc: "Reach passionate students, developers, and future cloud professionals.", color: '#A855F7', icon: Megaphone },
  { title: "Tech Talent",       desc: "Connect directly with top-tier, cloud-certified talent for roles.",    color: '#38BDF8', icon: Users },
  { title: "Community Impact",  desc: "Support the next generation of tech leaders and open-source learning.", color: '#EC4899', icon: Heart },
  { title: "Innovation Hub",    desc: "Collaborate on cutting-edge cloud projects and host workshops.",        color: '#FF9900', icon: Zap },
];

const testimonials: { quote: string; author: string; position: string; company: string }[] = [];
const sponsors: Sponsor[] = [];

const SponsorCard = ({ sponsor, idx }: { sponsor: Sponsor; idx: number }) => {
  const tierStyles = {
    Platinum: { border: '#A855F7', icon: <Award className="w-4 h-4 text-arcade-purple" /> },
    Gold:     { border: '#FF9900', icon: <Star className="w-4 h-4 text-aws-orange" /> },
    Silver:   { border: '#9CA3AF', icon: <Shield className="w-4 h-4 text-text-secondary" /> },
  };
  const style = tierStyles[sponsor.tier];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
      className={`dev-card card-shine p-6 md:p-8 flex flex-col ${sponsor.tier === 'Platinum' ? 'md:flex-row items-center md:items-start gap-8' : 'items-center text-center'} group`}
      style={{ borderLeftColor: style.border, borderLeftWidth: 3 }}
    >
      <div className={`${sponsor.tier === 'Platinum' ? 'w-full md:w-1/3' : 'w-full'} h-48 bg-[#0B1220] border border-border-color rounded-sm p-6 flex items-center justify-center mb-6 md:mb-0`}>
        <img
          src={sponsor.logo}
          alt={`${sponsor.name} logo`}
          className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
          loading="lazy"
        />
      </div>
      
      <div className="flex-1 flex flex-col">
        <div className={`flex flex-wrap items-center ${sponsor.tier === 'Platinum' ? 'justify-start' : 'justify-center'} gap-3 mb-4`}>
          <span className="terminal-tag flex items-center gap-2" style={{ borderColor: style.border + '55', color: style.border }}>
            {style.icon} {sponsor.tier}
          </span>
        </div>
        
        <h3 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-aws-orange transition-colors duration-200">
          {sponsor.name}
        </h3>
        <p className="text-text-secondary leading-relaxed mb-6">{sponsor.description}</p>
        
        <a href={sponsor.link} target="_blank" rel="noopener noreferrer" className="mt-auto font-mono text-sm text-aws-orange hover:text-white transition-colors flex items-center gap-2 group/link">
          Visit Website <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.div>
  );
};

export default function Sponsors() {
  const [showContact, setShowContact] = useState(false);

  const platinumSponsors = sponsors.filter(s => s.tier === 'Platinum');
  const goldSponsors = sponsors.filter(s => s.tier === 'Gold');
  const silverSponsors = sponsors.filter(s => s.tier === 'Silver');

  return (
    <PageTransition className="w-full">
      {/* ── HEADER ── */}
      <section className="pt-32 pb-20 bg-grid-animated" style={{ background: '#0B1220' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <div className="section-label">Partners</div>
            <h1 className="text-5xl md:text-7xl font-heading font-black text-white mb-4 leading-tight">
              Our<br /><span style={{ color: '#FF9900' }}>Sponsors</span>
            </h1>
            <div className="section-line" />
            <p className="text-text-secondary max-w-xl mt-6 leading-relaxed">
              Empowering the next generation of cloud leaders through strategic partnerships and community support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-20" style={{ background: '#111827', borderTop: '1px solid #1E2A3A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="section-label">Why Partner</div>
            <h2 className="text-3xl font-heading font-bold text-white">Why Sponsor Us?</h2>
            <div className="section-line mt-4" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                className="dev-card card-shine p-6 group"
                style={{ borderLeftColor: b.color, borderLeftWidth: 3 }}
              >
                <div className="icon-box mb-5" style={{ borderColor: b.color + '44' }}>
                  <b.icon className="w-5 h-5" style={{ color: b.color }} />
                </div>
                <h3 className="text-lg font-heading font-bold text-white mb-2 group-hover:text-aws-orange transition-colors duration-200">{b.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIERS ── */}
      {sponsors.length > 0 && (
        <section className="py-20 bg-grid-dense" style={{ background: '#0B1220', borderTop: '1px solid #1E2A3A' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
            {platinumSponsors.length > 0 && (
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-3xl font-heading font-bold text-arcade-purple flex items-center gap-3"><Award className="w-6 h-6" /> Platinum</h2>
                  <div className="h-px flex-1 bg-border-color" />
                </div>
                <div className="grid grid-cols-1 gap-6">
                  {platinumSponsors.map((s, i) => <SponsorCard key={s.name} sponsor={s} idx={i} />)}
                </div>
              </div>
            )}
            {goldSponsors.length > 0 && (
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-3xl font-heading font-bold text-aws-orange flex items-center gap-3"><Star className="w-6 h-6" /> Gold</h2>
                  <div className="h-px flex-1 bg-border-color" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {goldSponsors.map((s, i) => <SponsorCard key={s.name} sponsor={s} idx={i} />)}
                </div>
              </div>
            )}
            {silverSponsors.length > 0 && (
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-3xl font-heading font-bold text-text-secondary flex items-center gap-3"><Shield className="w-6 h-6" /> Silver</h2>
                  <div className="h-px flex-1 bg-border-color" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {silverSponsors.map((s, i) => <SponsorCard key={s.name} sponsor={s} idx={i} />)}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {sponsors.length === 0 && (
        <section className="py-24 bg-grid-dense" style={{ background: '#0B1220', borderTop: '1px solid #1E2A3A' }}>
          <div className="max-w-2xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="dev-card p-12 text-center border-animate">
              <Award className="w-12 h-12 text-border-color mx-auto mb-4" />
              <h3 className="text-2xl font-heading font-bold text-white mb-2">No sponsors yet</h3>
              <p className="text-text-secondary font-mono text-sm mb-6">Be the first to partner with us and support the next generation of cloud engineers.</p>
              <button onClick={() => setShowContact(true)} className="pixel-button px-8 py-3.5">Partner With Us</button>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── TESTIMONIALS ── */}
      {testimonials.length > 0 && (
        <section className="py-20" style={{ background: '#111827', borderTop: '1px solid #1E2A3A' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div className="section-label">Feedback</div>
              <h2 className="text-3xl font-heading font-bold text-white">Partner Testimonials</h2>
              <div className="section-line mt-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((t, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                  className="dev-card card-shine p-8 relative bl-purple"
                >
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-border-color" />
                  <p className="text-lg text-white italic mb-8 relative z-10 leading-relaxed">"{t.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-none bg-cloud-secondary border border-arcade-purple flex items-center justify-center text-arcade-purple font-heading font-bold">
                      {t.author[0]}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-white text-sm">{t.author}</h4>
                      <p className="text-xs text-text-secondary font-mono">{t.position}, {t.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── MODAL ── */}
      <AnimatePresence>
        {showContact && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowContact(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1220]/80 backdrop-blur-sm px-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()} className="dev-card w-full max-w-md p-8 relative" style={{ background: '#0D1826' }}
            >
              <button onClick={() => setShowContact(false)} className="absolute top-4 right-4 p-2 text-text-secondary hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
              <div className="mb-8">
                <h3 className="text-2xl font-heading font-bold text-white mb-2">Become a Sponsor</h3>
                <div className="section-line mb-4" />
                <p className="text-sm text-text-secondary font-mono">Reach out and let's build something great together.</p>
              </div>
              <div className="space-y-3">
                <a href={`https://wa.me/918797275757`} target="_blank" rel="noopener noreferrer" className="dev-card card-shine flex items-center gap-4 p-4 group hover:border-[#22C55E]">
                  <MessageCircle className="w-5 h-5 text-[#22C55E] shrink-0" />
                  <div><p className="text-sm font-bold text-white">WhatsApp</p><p className="text-xs text-text-secondary font-mono">Send us a message</p></div>
                </a>
                <a href={`mailto:awssbggcoek@gmail.com`} className="dev-card card-shine flex items-center gap-4 p-4 group hover:border-cloud-blue">
                  <Mail className="w-5 h-5 text-cloud-blue shrink-0" />
                  <div><p className="text-sm font-bold text-white">Email</p><p className="text-xs text-text-secondary font-mono">awssbggcoek@gmail.com</p></div>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
