import { Link } from 'react-router-dom';
import { Github, Linkedin, Instagram, Mail, Users } from 'lucide-react';
import { motion } from 'motion/react';

const socials = [
  { icon: Github,    href: 'https://github.com/AWSCloudClubGCOE',                                          label: 'GitHub',    color: 'hover:text-text-primary' },
  { icon: Users,     href: 'https://www.meetup.com/aws-cloud-club-at-gcoe-kolhapur/',                      label: 'Meetup',    color: 'hover:text-[#ED1C40]' },
  { icon: Linkedin,  href: 'https://www.linkedin.com/company/aws-cloud-club-gcoe-kolhapur/',               label: 'LinkedIn',  color: 'hover:text-[#0A66C2]' },
  { icon: Instagram, href: 'https://www.instagram.com/awscc.gcoe.kolhapur?igsh=MWJ2dHNpeGxsZGw4Yg==',    label: 'Instagram', color: 'hover:text-[#E1306C]' },
  { icon: Mail,      href: 'mailto:awscc.gcoe@gmail.com',                                                  label: 'Email',     color: 'hover:text-aws-orange' },
];

const links = ['Home', 'About', 'Events', 'Projects', 'Resources', 'Team', 'Join'];

export function Footer() {
  return (
    <footer className="relative mt-20">
      <div className="luxury-divider" />
      <div className="bg-cloud-secondary/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

            {/* Brand col */}
            <div className="md:col-span-5">
              <Link to="/" className="flex items-center gap-3 group mb-6 w-fit">
                <img
                  src="https://i.ibb.co/2TxQZYx/Whats-App-Image-2026-03-15-at-3-44-11-PM-Copy-2-removebg-preview.png"
                  alt="AWS Cloud Club GCOEK"
                  className="h-12 object-contain"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div>
                  <p className="font-heading font-bold text-sm text-text-primary group-hover:text-aws-orange transition-colors">AWS Cloud Club</p>
                  <p className="font-mono text-[9px] text-aws-orange/70 tracking-[0.18em] uppercase mt-0.5">GCOE Kolhapur</p>
                </div>
              </Link>
              <p className="text-text-secondary text-sm leading-relaxed max-w-xs mb-8">
                A student-led community at Government College of Engineering Kolhapur, focused on cloud technologies and real-world AWS skills.
              </p>
              <div className="flex gap-4">
                {socials.map(s => (
                  <motion.a key={s.label} whileHover={{ y: -2 }}
                    href={s.href}
                    target={s.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`text-text-muted transition-colors duration-200 ${s.color}`}
                  >
                    <s.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div className="md:col-span-3 md:col-start-7">
              <p className="font-mono text-[10px] text-text-muted uppercase tracking-[0.16em] mb-6">Navigation</p>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link}>
                    <Link to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-150">
                      {link}
                    </Link>
                  </li>
                ))}
                <li>
                  <a href="https://forms.gle/FHRKXqKDebaHRoaH8" target="_blank" rel="noopener noreferrer"
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-150">
                    Submit Feedback
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="md:col-span-3 md:col-start-10">
              <p className="font-mono text-[10px] text-text-muted uppercase tracking-[0.16em] mb-6">Contact</p>
              <address className="not-italic space-y-3 text-sm text-text-secondary leading-relaxed">
                <p>Government College of Engineering<br />Vidyanagar, Kolhapur<br />Maharashtra 416004</p>
                <a href="mailto:awscc.gcoe@gmail.com" className="hover:text-aws-orange transition-colors block">
                  awscc.gcoe@gmail.com
                </a>
              </address>
            </div>

          </div>

          {/* Bottom */}
          <div className="mt-14 pt-6 border-t border-border-color flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="font-mono text-[11px] text-text-muted">
              &copy; {new Date().getFullYear()} AWS Cloud Club GCOEK. All rights reserved.
            </p>
            <p className="font-mono text-[11px] text-text-muted flex items-center gap-1.5">
              Built with <span className="text-red-400/70">♥</span> by Shardul &amp; Anas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
