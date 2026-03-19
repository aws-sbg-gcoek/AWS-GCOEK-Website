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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
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
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500 ease-in-out',
        scrolled ? 'glass-panel py-3 shadow-lg shadow-black/20' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div whileHover={{ scale: 1.05, rotate: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
              <img 
                src="https://i.ibb.co/2TxQZYx/Whats-App-Image-2026-03-15-at-3-44-11-PM-Copy-2-removebg-preview.png" 
                alt="AWS Cloud Club GCOEK Logo" 
                className="h-16 sm:h-20 object-contain" 
                referrerPolicy="no-referrer" 
              />
            </motion.div>
            <span className="font-heading font-bold text-xl tracking-tight transition-colors duration-300 group-hover:text-aws-orange">
              AWS Cloud Club <span className="text-aws-orange hidden sm:inline group-hover:text-text-primary transition-colors duration-300">– GCOEK</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'text-sm font-medium transition-all duration-300 hover:text-aws-orange relative group',
                    location.pathname === link.path
                      ? 'text-aws-orange'
                      : 'text-text-secondary'
                  )}
                >
                  <motion.span whileHover={{ scale: 1.05 }} className="inline-block">{link.name}</motion.span>
                  <span className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-aws-orange transition-all duration-300",
                    location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                  )}></span>
                </Link>
              ))}
            </div>
            <Link
              to="/join"
              className="pixel-button px-6 py-2 text-sm"
            >
              Join the Club
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-secondary hover:text-aws-orange focus:outline-none transition-transform duration-300 hover:scale-110"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden glass-panel border-t border-border-color absolute w-full overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2 sm:px-6">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200',
                      location.pathname === link.path
                        ? 'text-aws-orange bg-cloud-secondary/50 shadow-sm'
                        : 'text-text-secondary hover:text-aws-orange hover:bg-cloud-secondary/30 hover:translate-x-1'
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-4"
              >
                <Link
                  to="/join"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-center pixel-button w-full"
                >
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
