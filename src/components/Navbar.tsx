import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Cloud, Menu, X } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

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
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled ? 'glass-panel py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <Cloud className="h-8 w-8 text-aws-orange group-hover:text-cloud-blue transition-colors" />
            <span className="font-heading font-bold text-xl tracking-tight">
              AWS Cloud Club <span className="text-aws-orange hidden sm:inline">– GCOEK</span>
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
                  {link.name}
                  <span className={cn(
                    "absolute -bottom-1 left-0 w-0 h-0.5 bg-aws-orange transition-all duration-300 group-hover:w-full",
                    location.pathname === link.path ? "w-full" : ""
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
              className="text-text-secondary hover:text-aws-orange focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass-panel border-t border-border-color absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'block px-3 py-2 rounded-md text-base font-medium',
                  location.pathname === link.path
                    ? 'text-aws-orange bg-cloud-secondary/50'
                    : 'text-text-secondary hover:text-aws-orange hover:bg-cloud-secondary/30'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/join"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 mt-4 text-center pixel-button"
            >
              Join the Club
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
