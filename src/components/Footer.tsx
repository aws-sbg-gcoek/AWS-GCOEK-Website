import { Link } from 'react-router-dom';
import { Github, Linkedin, Instagram, Mail, Users } from 'lucide-react';

const QUICK_LINKS = ['Home', 'About', 'Events', 'Projects', 'Resources', 'Team', 'Sponsors', 'Join'];
const SOCIAL = [
  { href: 'https://github.com/AWSCloudClubGCOE', icon: Github, label: 'GitHub' },
  { href: 'https://www.meetup.com/aws-cloud-club-at-gcoe-kolhapur/', icon: Users, label: 'Meetup' },
  { href: 'https://www.linkedin.com/company/aws-cloud-club-gcoe-kolhapur/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://www.instagram.com/awscc.gcoe.kolhapur?igsh=MWJ2dHNpeGxsZGw4Yg==', icon: Instagram, label: 'Instagram' },
  { href: 'mailto:awssbggcoek@gmail.com', icon: Mail, label: 'Email' },
];

export function Footer() {
  return (
    <footer className="bg-[#0d0d1a] border-t mt-20" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>

          {/* Brand col */}
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-3 mb-5 group w-fit">
              <img
                src="https://i.ibb.co/WWfdyDW1/Untitled-design-17-removebg-preview.png"
                alt="AWS Student Builder Group GCOEK"
                className="h-9 object-contain"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <span className="font-heading font-bold text-sm text-white tracking-tight">
                AWS Student Builder Group
                <span className="text-[#8b5cf6] ml-1">GCOEK</span>
              </span>
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm mb-6">
              A student-led community at Government College of Engineering Kolhapur
              focused on cloud technologies, real-world projects, and mastering AWS.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4">
              {SOCIAL.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-200"
                  style={{ border: '1px solid rgba(255,255,255,0.1)', color: '#71717a' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(139,92,246,0.5)';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#a78bfa';
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(139,92,246,0.08)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.1)';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#71717a';
                    (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                  }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <p className="section-label mb-4">Navigation</p>
            <ul className="space-y-3">
              {QUICK_LINKS.map(link => (
                <li key={link}>
                  <Link
                    to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-150"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="section-label mb-4">Contact</p>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="leading-relaxed">
                Government College of Engineering<br />
                Vidyanagar, Kolhapur<br />
                Maharashtra — 416004
              </li>
              <li>
                <a href="mailto:awssbggcoek@gmail.com"
                  className="text-zinc-400 hover:text-white transition-colors duration-150">
                  awssbggcoek@gmail.com
                </a>
              </li>
              <li>
                <a href="https://forms.gle/FHRKXqKDebaHRoaH8" target="_blank" rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors duration-150">
                  Submit feedback →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} AWS Student Builder Group GCOEK. All rights reserved.
          </p>
          <p className="text-xs text-zinc-600">
            Built with <span className="text-[#8b5cf6]">♥</span> by Shardul &amp; Anas
          </p>
        </div>

      </div>
    </footer>
  );
}
