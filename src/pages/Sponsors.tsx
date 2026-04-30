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
  {
    title: "Brand Visibility",
    description: "Reach hundreds of passionate students, developers, and future cloud professionals through our events and platforms.",
    icon: <Megaphone className="w-8 h-8 text-arcade-purple" />
  },
  {
    title: "Tech Talent Pipeline",
    description: "Connect directly with top-tier, cloud-certified talent for internships and full-time engineering roles.",
    icon: <Users className="w-8 h-8 text-cloud-blue" />
  },
  {
    title: "Community Impact",
    description: "Support the next generation of tech leaders and contribute to accessible, open-source learning.",
    icon: <Heart className="w-8 h-8 text-pink-500" />
  },
  {
    title: "Innovation Hub",
    description: "Collaborate on cutting-edge cloud projects and host exclusive workshops with our technical teams.",
    icon: <Zap className="w-8 h-8 text-yellow-400" />
  }
];

const testimonials: { quote: string; author: string; position: string; company: string }[] = [];

const SponsorCard = ({ sponsor, idx }: { sponsor: Sponsor; idx: number; key?: string }) => {
  const tierStyles = {
    Platinum: {
      card: "bg-gradient-to-br from-[#1a1f2e] to-[#0B0F19] border-arcade-purple/40 shadow-[0_0_30px_rgba(255,153,0,0.1)]",
      badge: "bg-arcade-purple/20 text-arcade-purple border-arcade-purple/30",
      icon: <Award className="w-5 h-5 text-arcade-purple" />,
      grid: "col-span-1 lg:col-span-2 max-w-4xl mx-auto w-full"
    },
    Gold: {
      card: "bg-[#151926]/60 border-yellow-500/30 shadow-[0_0_20px_rgba(234,179,8,0.05)]",
      badge: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
      icon: <Star className="w-5 h-5 text-yellow-500" />,
      grid: "col-span-1"
    },
    Silver: {
      card: "bg-[#151926]/40 border-slate-400/20",
      badge: "bg-slate-400/10 text-slate-400 border-slate-400/20",
      icon: <Shield className="w-5 h-5 text-slate-400" />,
      grid: "col-span-1"
    }
  };

  const style = tierStyles[sponsor.tier];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className={`${style.card} p-8 rounded-3xl border transition-all duration-500 flex flex-col items-center text-center group hover:scale-[1.02] ${sponsor.tier === 'Platinum' ? 'md:flex-row md:text-left md:items-start gap-8' : ''}`}
    >
      <div className={`${sponsor.tier === 'Platinum' ? 'w-full md:w-1/3' : 'w-full'} h-48 mb-6 md:mb-0 rounded-2xl overflow-hidden bg-white/5 flex items-center justify-center p-6 relative`}>
        <img 
          src={sponsor.logo} 
          alt={`${sponsor.name} logo`} 
          className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <div className="flex-grow flex flex-col">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-4">
          <div className={`inline-flex items-center gap-2 px-4 py-1 rounded-full border text-xs font-bold tracking-wider uppercase ${style.badge}`}>
            {style.icon}
            {sponsor.tier}
          </div>
        </div>
        
        <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3 text-white group-hover:text-arcade-purple transition-colors">
          {sponsor.name}
        </h3>
        
        <p className="text-text-secondary leading-relaxed mb-6 text-sm md:text-base">
          {sponsor.description}
        </p>
        
        <a 
          href={sponsor.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-2 text-arcade-purple hover:text-white transition-colors text-sm font-bold group/link"
        >
          Visit Website
          <ExternalLink className="w-4 h-4 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
};

export default function Sponsors() {
  const [showContact, setShowContact] = useState(false);
  const sponsors: Sponsor[] = [];

  const platinumSponsors = sponsors.filter(s => s.tier === 'Platinum');
  const goldSponsors = sponsors.filter(s => s.tier === 'Gold');
  const silverSponsors = sponsors.filter(s => s.tier === 'Silver');

  return (
    <PageTransition className="w-full">
      {/* Header */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-arcade-purple/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-arcade-purple/10 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-arcade-purple font-mono text-sm mb-8">
              <Star className="w-4 h-4" />
              <span>Support Our Mission</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              Our Partners
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Empowering the next generation of cloud leaders through strategic partnerships and community support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Sponsor Us Section */}
      <section className="py-20 bg-cloud-secondary/10 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Why Sponsor Us?</h2>
            <div className="w-24 h-1 bg-arcade-purple mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-text-secondary leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers Sections */}
      {sponsors.length > 0 && (
        <section className="py-24 space-y-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {platinumSponsors.length > 0 && (
              <div className="mb-24">
                <div className="flex items-center gap-4 mb-12">
                  <div className="h-px flex-grow bg-gradient-to-r from-transparent to-arcade-purple/30"></div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-arcade-purple flex items-center gap-3">
                    <Award className="w-8 h-8" /> Platinum Tier
                  </h2>
                  <div className="h-px flex-grow bg-gradient-to-l from-transparent to-arcade-purple/30"></div>
                </div>
                <div className="grid grid-cols-1 gap-8">
                  {platinumSponsors.map((sponsor, idx) => (
                    <SponsorCard key={sponsor.name} sponsor={sponsor} idx={idx} />
                  ))}
                </div>
              </div>
            )}
            {goldSponsors.length > 0 && (
              <div className="mb-24">
                <div className="flex items-center gap-4 mb-12">
                  <div className="h-px flex-grow bg-gradient-to-r from-transparent to-yellow-500/30"></div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-yellow-500 flex items-center gap-3">
                    <Star className="w-8 h-8" /> Gold Tier
                  </h2>
                  <div className="h-px flex-grow bg-gradient-to-l from-transparent to-yellow-500/30"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {goldSponsors.map((sponsor, idx) => (
                    <SponsorCard key={sponsor.name} sponsor={sponsor} idx={idx} />
                  ))}
                </div>
              </div>
            )}
            {silverSponsors.length > 0 && (
              <div className="mb-24">
                <div className="flex items-center gap-4 mb-12">
                  <div className="h-px flex-grow bg-gradient-to-r from-transparent to-slate-400/30"></div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-400 flex items-center gap-3">
                    <Shield className="w-8 h-8" /> Silver Tier
                  </h2>
                  <div className="h-px flex-grow bg-gradient-to-l from-transparent to-slate-400/30"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {silverSponsors.map((sponsor, idx) => (
                    <SponsorCard key={sponsor.name} sponsor={sponsor} idx={idx} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {sponsors.length === 0 && (
        <section className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto px-4 text-center"
          >
            <div className="glass-panel pixel-border p-16 rounded-3xl">
              <Award className="w-16 h-16 text-arcade-purple/30 mx-auto mb-6" />
              <h3 className="text-2xl font-heading font-bold text-text-primary mb-3">No sponsors yet</h3>
              <p className="text-text-secondary font-mono text-sm">
                Be the first to partner with us and support the next generation of cloud engineers.
              </p>
            </div>
          </motion.div>
        </section>
      )}

      {/* Testimonials Section */}
      {testimonials.length > 0 && (
        <section className="py-24 bg-cloud-secondary/20 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Partner Testimonials</h2>
              <div className="w-24 h-1 bg-arcade-purple mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((t, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-panel p-8 rounded-3xl border border-white/5 relative"
                >
                  <Quote className="absolute top-6 right-8 w-12 h-12 text-arcade-purple/10" />
                  <p className="text-lg md:text-xl text-text-primary italic mb-8 relative z-10 leading-relaxed">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-arcade-purple/20 flex items-center justify-center text-arcade-purple font-bold">
                      {t.author[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{t.author}</h4>
                      <p className="text-sm text-text-secondary">{t.position}, {t.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center bg-gradient-to-br from-[#1a1f2e] to-[#0B0F19] p-12 md:p-20 rounded-[3rem] border border-white/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-arcade-purple/5 rounded-full blur-[100px] -mr-32 -mt-32 transition-all duration-700 group-hover:bg-arcade-purple/10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cloud-blue/5 rounded-full blur-[100px] -ml-32 -mb-32 transition-all duration-700 group-hover:bg-cloud-blue/10" />
            
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-white relative z-10">
              Partner With Us
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-12 relative z-10 leading-relaxed">
              Join our mission to empower students and shape the future of cloud computing. Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
              <button onClick={() => setShowContact(true)} className="pixel-button px-12 py-4 text-lg w-full sm:w-auto">
                Become a Sponsor
              </button>
              <a href="/resources/sponsorship-deck.pdf" className="pixel-button-secondary px-12 py-4 text-lg w-full sm:w-auto">
                Download Deck
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Modal */}
      <AnimatePresence>
        {showContact && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowContact(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative glass-panel pixel-border w-full max-w-md p-8 rounded-2xl"
            >
              <button
                onClick={() => setShowContact(false)}
                className="absolute top-4 right-4 p-2 rounded-full text-text-secondary hover:text-text-primary hover:bg-cloud-secondary transition-all"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="mb-8 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-cloud-secondary border border-border-color mb-4">
                  <Star className="w-6 h-6 text-arcade-purple" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-text-primary mb-2">Become a Sponsor</h3>
                <p className="text-sm text-text-secondary font-mono">
                  Reach out and let's build something great together.
                </p>
              </div>

              <div className="space-y-3">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/918797275757?text=${encodeURIComponent("Hi! I'm interested in sponsoring the AWS Student Builder Group at GCOE Kolhapur. Could you share more details about the sponsorship tiers and benefits?")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 w-full px-5 py-4 rounded-xl border border-border-color bg-cloud-secondary hover:border-[#25D366]/50 hover:bg-[#25D366]/10 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 group-hover:bg-[#25D366]/20 transition-colors shrink-0">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-text-primary">WhatsApp</p>
                    <p className="text-xs text-text-secondary font-mono">Send us a message directly</p>
                  </div>
                  <span className="ml-auto text-xs font-mono text-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:awssbggcoek@gmail.com?subject=${encodeURIComponent("Sponsorship Inquiry – AWS Student Builder Group GCOE")}&body=${encodeURIComponent("Hi AWS Student Builder Group Team,\n\nI'm interested in sponsoring your club and would like to learn more about the available sponsorship tiers and benefits.\n\nOrganization Name: \nContact Person: \nDesignation: \nSponsorship Tier Interested In: \n\nLooking forward to connecting!\n\nBest regards,\n[Your Name]")}`}
                  className="flex items-center gap-4 w-full px-5 py-4 rounded-xl border border-border-color bg-cloud-secondary hover:border-cloud-blue/50 hover:bg-cloud-blue/10 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-cloud-blue/10 border border-cloud-blue/20 group-hover:bg-cloud-blue/20 transition-colors shrink-0">
                    <Mail className="w-5 h-5 text-cloud-blue" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-text-primary">Email</p>
                    <p className="text-xs text-text-secondary font-mono">awssbggcoek@gmail.com</p>
                  </div>
                  <span className="ml-auto text-xs font-mono text-cloud-blue opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
              </div>

              <p className="text-center text-xs text-text-secondary font-mono mt-6">
                We typically respond within 24–48 hours.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
