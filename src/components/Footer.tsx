import { Link } from 'react-router-dom';
import { Github, Linkedin, Instagram, Mail, Users } from 'lucide-react';
import { motion } from 'motion/react';

const ACCENT_COLORS = ['#FF9900', '#A855F7', '#38BDF8', '#EC4899', '#22C55E'];

export function Footer() {
  return (
    <footer className="mt-20 bg-grid-dense" style={{ background: '#080E1A', borderTop: '1px solid #1E2A3A' }}>
      {/* Top accent bar */}
      <div className="flex h-1">
        {ACCENT_COLORS.map((c) => (
          <div key={c} className="flex-1" style={{ background: c }} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 group mb-5">
              <img
                src="https://i.ibb.co/mCTP8GRn/AWS-Student-Builder-Group-RGB-Program-Icon-Purple.png"
                alt="AWS Student Builder Group GCOEK Logo"
                className="h-12 object-contain"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div>
                <div className="font-heading font-bold text-base text-white leading-tight">
                  AWS Student Builder Group
                </div>
                <div className="font-mono text-xs text-aws-orange tracking-widest uppercase">– GCOEK</div>
              </div>
            </Link>

            <p className="text-text-secondary text-sm max-w-sm mb-7 leading-relaxed">
              A student-led community at Government College of Engineering Kolhapur, focused on cloud technologies and AWS.
            </p>

            {/* Social icons */}
            <div className="flex space-x-4">
              {[
                { href: 'https://github.com/AWSCloudClubGCOE', icon: Github, color: '#A855F7' },
                { href: 'https://www.meetup.com/aws-cloud-club-at-gcoe-kolhapur/', icon: Users, color: '#EC4899' },
                { href: 'https://www.linkedin.com/company/aws-cloud-club-gcoe-kolhapur/', icon: Linkedin, color: '#38BDF8' },
                { href: 'https://www.instagram.com/awscc.gcoe.kolhapur?igsh=MWJ2dHNpeGxsZGw4Yg==', icon: Instagram, color: '#EC4899' },
                { href: 'mailto:awssbggcoek@gmail.com', icon: Mail, color: '#FF9900' },
              ].map(({ href, icon: Icon, color }) => (
                <motion.a
                  key={href}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.15 }}
                  className="icon-box transition-all duration-200"
                  style={{ '--hover-color': color } as React.CSSProperties}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = color)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = '#1E2A3A')}
                >
                  <Icon className="h-4 w-4 text-text-secondary" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="section-label mb-4">Navigation</div>
            <ul className="space-y-2.5">
              {['Home', 'About', 'Events', 'Projects', 'Resources', 'Team', 'Sponsors', 'Join'].map((link) => (
                <li key={link}>
                  <Link
                    to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="text-text-secondary hover:text-aws-orange text-sm font-mono transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-border-color group-hover:bg-aws-orange transition-colors duration-200" />
                    {link}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://forms.gle/FHRKXqKDebaHRoaH8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-aws-orange text-sm font-mono transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-3 h-px bg-border-color group-hover:bg-aws-orange transition-colors duration-200" />
                  Feedback
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="section-label mb-4">Contact</div>
            <ul className="space-y-3 text-sm text-text-secondary font-mono">
              <li className="leading-relaxed">
                Govt. College of Engineering<br />
                Vidyanagar, Kolhapur<br />
                Maharashtra 416004
              </li>
              <li>
                <a
                  href="mailto:awssbggcoek@gmail.com"
                  className="text-aws-orange hover:text-white transition-colors duration-200"
                >
                  awssbggcoek@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-text-secondary font-mono"
          style={{ borderTop: '1px solid #1E2A3A' }}
        >
          <p>&copy; {new Date().getFullYear()} AWS Student Builder Group GCOEK. All rights reserved.</p>
          <div className="mt-3 md:mt-0 flex items-center gap-2">
            <span className="terminal-tag">built with ♥</span>
            <span>by Shardul &amp; Anas</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
