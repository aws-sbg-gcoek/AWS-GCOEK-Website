import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion, AnimatePresence } from 'motion/react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Projects', path: '/projects' },
    { name: 'Resources', path: '/resources' },
    { name: 'Team', path: '/team' },
    { name: 'Sponsors', path: '/sponsors' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled ? 'navbar-scrolled py-3' : 'navbar-top py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
              <img
                src="https://i.ibb.co/mCTP8GRn/AWS-Student-Builder-Group-RGB-Program-Icon-Purple.png"
                alt="AWS Student Builder Group GCOEK Logo"
                className="h-10 sm:h-12 object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm leading-tight tracking-tight text-white group-hover:text-aws-orange transition-colors duration-200">
                AWS Student Builder Group
              </span>
              <span className="font-mono text-xs text-aws-orange tracking-widest uppercase">– GCOEK</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'px-3 py-2 text-xs font-mono font-medium tracking-wider uppercase transition-all duration-200',
                  location.pathname === link.path
                    ? 'text-aws-orange border-b-2 border-aws-orange'
                    : 'text-text-secondary hover:text-white'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/join"
              className="pixel-button px-5 py-2 text-xs ml-4"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-secondary hover:text-aws-orange focus:outline-none transition-colors duration-200"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden absolute w-full overflow-hidden"
            style={{ background: '#0B1220', borderBottom: '1px solid #1E2A3A' }}
          >
            <div className="px-4 pt-3 pb-5 space-y-1">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'block px-3 py-2.5 text-xs font-mono font-medium tracking-wider uppercase transition-all duration-200 border-l-2',
                      location.pathname === link.path
                        ? 'text-aws-orange border-aws-orange bg-aws-orange/5'
                        : 'text-text-secondary border-transparent hover:text-white hover:border-white/20'
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-3">
                <Link
                  to="/join"
                  onClick={() => setIsOpen(false)}
                  className="block pixel-button w-full text-center py-3 text-xs"
                >
                  Join Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
