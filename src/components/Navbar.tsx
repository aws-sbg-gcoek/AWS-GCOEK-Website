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
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
      'fixed top-0 w-full z-50 transition-all duration-500',
      scrolled
        ? 'bg-cloud-navy/80 backdrop-blur-2xl border-b border-border-color py-3 shadow-[0_1px_0_rgba(255,255,255,0.03)]'
        : 'bg-transparent py-5'
    )}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              src="https://i.ibb.co/2TxQZYx/Whats-App-Image-2026-03-15-at-3-44-11-PM-Copy-2-removebg-preview.png"
              alt="AWS Cloud Club GCOEK"
              className="h-10 object-contain"
              referrerPolicy="no-referrer"
            />
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-heading font-bold text-sm text-text-primary group-hover:text-aws-orange transition-colors duration-300 tracking-tight">
                AWS Cloud Club
              </span>
              <span className="font-mono text-[9px] text-aws-orange/70 tracking-[0.18em] uppercase mt-0.5">
                GCOE Kolhapur
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link key={link.name} to={link.path}
                  className={cn(
                    'relative px-3.5 py-2 text-[13px] font-medium rounded-lg transition-colors duration-200',
                    active ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
                  )}
                >
                  {active && (
                    <motion.span layoutId="nav-active"
                      className="absolute inset-0 bg-white/[0.06] rounded-lg border border-white/[0.08]"
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
            <Link to="/join" className="pixel-button px-5 py-2 text-[11px] ml-4">
              Join
            </Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary transition-colors">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={isOpen ? 'x' : 'm'}
                initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.12 }}>
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.18, ease: 'easeOut' }}
            className="md:hidden absolute w-full bg-cloud-navy/98 backdrop-blur-2xl border-b border-border-color"
          >
            <div className="px-5 py-4 space-y-0.5">
              {navLinks.map((link, idx) => (
                <motion.div key={link.name}
                  initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.03 }}>
                  <Link to={link.path}
                    className={cn(
                      'flex items-center px-4 py-2.5 rounded-xl text-sm transition-colors duration-150',
                      location.pathname === link.path
                        ? 'text-text-primary bg-white/[0.06] border border-white/[0.08]'
                        : 'text-text-secondary hover:text-text-primary hover:bg-white/[0.04]'
                    )}>
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="pt-3 pb-1">
                <Link to="/join" className="pixel-button w-full text-center block py-3">Join the Club</Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
