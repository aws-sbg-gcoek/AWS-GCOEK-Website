import { Link } from 'react-router-dom';
import { Github, Linkedin, Instagram, Mail, Users } from 'lucide-react';
import { motion } from 'motion/react';

const socials = [
  { icon: Github,    href: 'https://github.com/AWSCloudClubGCOE',                                                                    label: 'GitHub',    hover: 'hover:text-text-primary' },
  { icon: Users,     href: 'https://www.meetup.com/aws-cloud-club-at-gcoe-kolhapur/',                                                label: 'Meetup',    hover: 'hover:text-[#ED1C40]' },
  { icon: Linkedin,  href: 'https://www.linkedin.com/company/aws-cloud-club-gcoe-kolhapur/',                                         label: 'LinkedIn',  hover: 'hover:text-[#0A66C2]' },
  { icon: Instagram, href: 'https://www.instagram.com/awscc.gcoe.kolhapur?igsh=MWJ2dHNpeGxsZGw4Yg==',                               label: 'Instagram', hover: 'hover:text-[#E1306C]' },
  { icon: Mail,      href: 'mailto:awscc.gcoe@gmail.com',                                                                            label: 'Email',     hover: 'hover:text-aws-orange' },
];

const quickLinks = ['Home', 'About', 'Events', 'Projects', 'Resources', 'Team', 'Join'];

export function Footer() {
  return (
    <footer className="bg-cloud-navy/90 backdrop-blur-md border-t border-border-color mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Brand */}
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-3 group mb-5 w-fit">
              <img
                src="https://i.ibb.co/2TxQZYx/Whats-App-Image-2026-03-15-at-3-44-11-PM-Copy-2-removebg-preview.png"
                alt="AWS Cloud Club GCOEK Logo"
                className="h-14 object-contain"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div>
                <p className="font-heading font-bold text-base text-text-primary group-hover:text-aws-orange transition-colors">AWS Cloud Club</p>
                <p className="text-aws-orange font-mono text-[10px] tracking-widest uppercase">GCOE Kolhapur</p>
              </div>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-sm mb-7">
              A student-led community at Government College of Engineering Kolhapur focused on cloud technologies, real-world projects, and mastering AWS.
            </p>
            <div className="flex gap-4">
              {socials.map(s => (
                <motion.a
                  key={s.label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`text-text-secondary transition-colors duration-200 ${s.hover}`}
                >
                  <s.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 md:col-start-7">
            <p className="font-mono text-xs text-text-secondary uppercase tracking-widest mb-5">Quick Links</p>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link}>
                  <Link
                    to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="text-sm text-text-secondary hover:text-aws-orange transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-aws-orange transition-all duration-200 rounded-full" />
                    {link}
                  </Link>
                </li>
              ))}
              <li>
                <a href="https://forms.gle/FHRKXqKDebaHRoaH8" target="_blank" rel="noopener noreferrer"
                  className="text-sm text-text-secondary hover:text-aws-orange transition-colors inline-flex items-center gap-1.5 group">
                  <span className="w-0 group-hover:w-3 h-px bg-aws-orange transition-all duration-200 rounded-full" />
                  Submit Feedback
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 md:col-start-10">
            <p className="font-mono text-xs text-text-secondary uppercase tracking-widest mb-5">Contact</p>
            <address className="not-italic space-y-3 text-sm text-text-secondary leading-relaxed">
              <p>Government College of Engineering<br />Vidyanagar, Kolhapur<br />Maharashtra 416004</p>
              <a href="mailto:awscc.gcoe@gmail.com" className="hover:text-aws-orange transition-colors block">
                awscc.gcoe@gmail.com
              </a>
            </address>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-border-color mt-12 pt-7 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs font-mono text-text-secondary">
          <p>&copy; {new Date().getFullYear()} AWS Cloud Club GCOEK. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <span className="text-red-400">♥</span> by Shardul &amp; Anas
          </p>
        </div>
      </div>
    </footer>
  );
}
