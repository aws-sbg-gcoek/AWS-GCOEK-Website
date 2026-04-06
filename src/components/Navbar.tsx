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

  // close mobile menu on route change
  useEffect(() => { setIsOpen(false); }, [location.pathname]);

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
    <nav className={cn(
      'fixed top-0 w-full z-50 transition-all duration-500 ease-in-out',
      scrolled
        ? 'bg-cloud-navy/85 backdrop-blur-xl border-b border-white/[0.06] py-2 shadow-[0_4px_32px_rgba(0,0,0,0.3)]'
        : 'bg-transparent py-4'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div whileHover={{ scale: 1.06 }} transition={{ type: 'spring', stiffness: 400, damping: 12 }}>
              <img
                src="https://i.ibb.co/2TxQZYx/Whats-App-Image-2026-03-15-at-3-44-11-PM-Copy-2-removebg-preview.png"
                alt="AWS Cloud Club GCOEK Logo"
                className="h-11 sm:h-13 object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="flex flex-col leading-tight">
              <span className="font-heading font-bold text-base tracking-tight text-text-primary group-hover:text-aws-orange transition-colors duration-300">
                AWS Cloud Club
              </span>
              <span className="text-aws-orange font-mono text-[10px] tracking-widest uppercase hidden sm:block">
                GCOE Kolhapur
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                    active
                      ? 'text-aws-orange'
                      : 'text-text-secondary hover:text-text-primary'
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-aws-orange/10 rounded-lg border border-aws-orange/20"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
            <Link to="/join" className="pixel-button px-5 py-2 text-xs ml-3">
              Join
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg text-text-secondary hover:text-aws-orange hover:bg-white/5 transition-all duration-200"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isOpen ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden absolute w-full bg-cloud-navy/95 backdrop-blur-xl border-b border-border-color shadow-2xl"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      'flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200',
                      location.pathname === link.path
                        ? 'text-aws-orange bg-aws-orange/10 border border-aws-orange/20'
                        : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.04 }}
                className="pt-2 pb-1"
              >
                <Link to="/join" className="pixel-button w-full text-center block py-3">
                  Join the Club
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
