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
    { name: 'Sponsors', path: '/sponsors' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#13131f]/90 backdrop-blur-xl border-b border-white/[0.06] py-3'
          : 'bg-transparent py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="https://i.ibb.co/mCTP8GRn/AWS-Student-Builder-Group-RGB-Program-Icon-Purple.png"
              alt="AWS Student Builder Group GCOEK Logo"
              className="h-9 object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="font-heading font-bold text-base text-white tracking-tight hidden sm:block">
              AWS Student Builder Group
              <span className="text-[#8b5cf6] ml-1">GCOEK</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md',
                  location.pathname === link.path
                    ? 'text-white bg-white/[0.08]'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/join" className="pixel-button px-5 py-2 text-sm ml-4">
              Join
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-400 hover:text-white focus:outline-none transition-colors"
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
                        ? 'text-arcade-purple bg-cloud-secondary/50 shadow-sm'
                        : 'text-text-secondary hover:text-arcade-purple hover:bg-cloud-secondary/30 hover:translate-x-1'
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
