import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { cn } from '../utils/cn';

const companyLinks = [
  { name: 'About Us', path: '/about' },
  { name: 'Our Team', path: '/about#team' },
  { name: 'Career', path: '/career' },
  { name: 'Life at Innovatex', path: '/life' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          {/* Logo Placeholder - assuming logo.png will be placed in public */}
          <div className="w-10 h-10 relative flex items-center justify-center">
            {/* Fallback stylized IS if image is missing, but prioritizing image */}
            <img 
              src="/logo.png" 
              alt="Innovatex Soft Logo" 
              className="w-full h-full object-contain absolute inset-0 z-10 transition-transform group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="hidden w-full h-full bg-gradient-to-tr from-primary to-accent rounded-lg items-center justify-center text-white font-bold text-xl shadow-[0_0_15px_rgba(29,78,216,0.5)]">
              IS
            </div>
          </div>
          <span className="font-outfit font-bold text-xl tracking-tight hidden sm:block">
            INNOVATEX <span className="text-white">SOFT</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            to="/"
            className={cn(
              'text-sm font-medium transition-colors hover:text-white relative',
              isActive('/') ? 'text-primary' : 'text-text-secondary'
            )}
          >
            Home
            {isActive('/') && (
              <motion.div
                layoutId="nav-underline"
                className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-primary"
              />
            )}
          </Link>
          <Link
            to="/services"
            className={cn(
              'text-sm font-medium transition-colors hover:text-white relative',
              isActive('/services') ? 'text-primary' : 'text-text-secondary'
            )}
          >
            Services
            {isActive('/services') && (
              <motion.div
                layoutId="nav-underline"
                className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-primary"
              />
            )}
          </Link>

          {/* Company Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCompanyOpen(true)}
            onMouseLeave={() => setCompanyOpen(false)}
          >
            <button
              className={cn(
                'flex items-center gap-1 text-sm font-medium transition-colors hover:text-white',
                isActive('/about') || companyOpen ? 'text-primary' : 'text-text-secondary'
              )}
            >
              Company
              <ChevronDown
                className={cn(
                  'w-4 h-4 transition-transform duration-200',
                  companyOpen ? 'rotate-180 text-primary' : ''
                )}
              />
            </button>

            <AnimatePresence>
              {companyOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-48"
                >
                  <div className="bg-[#0f0f0f] border border-white/10 rounded-xl p-2 shadow-2xl backdrop-blur-xl">
                    {companyLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.path}
                        className="block px-4 py-2.5 text-sm text-text-secondary hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                        onClick={() => setCompanyOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/work"
            className={cn(
              'text-sm font-medium transition-colors hover:text-white relative',
              isActive('/work') ? 'text-primary' : 'text-text-secondary'
            )}
          >
            Work
            {isActive('/work') && (
              <motion.div
                layoutId="nav-underline"
                className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-primary"
              />
            )}
          </Link>
          <Link
            to="/blog"
            className={cn(
              'text-sm font-medium transition-colors hover:text-white relative',
              isActive('/blog') ? 'text-primary' : 'text-text-secondary'
            )}
          >
            Insider
            {isActive('/blog') && (
              <motion.div
                layoutId="nav-underline"
                className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-primary"
              />
            )}
          </Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-primary-dark rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(29,78,216,0.5)] hover:-translate-y-0.5"
          >
            Contact Us
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white p-2 z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#000000] bg-opacity-95 backdrop-blur-xl flex flex-col items-center justify-center pt-20 pb-10 px-6 h-screen overflow-y-auto"
          >
            <nav className="flex flex-col items-center gap-8 w-full max-w-sm">
              <Link to="/" className={cn('text-3xl font-bold transition-colors', isActive('/') ? 'text-primary' : 'text-white')}>Home</Link>
              <Link to="/services" className={cn('text-3xl font-bold transition-colors', isActive('/services') ? 'text-primary' : 'text-white')}>Services</Link>
              
              <div className="flex flex-col items-center w-full">
                <span className="text-3xl font-bold text-white mb-4">Company</span>
                <div className="flex flex-col items-center gap-4 border-l-2 border-white/10 pl-6">
                  {companyLinks.map(link => (
                    <Link key={link.name} to={link.path} className="text-xl text-text-secondary hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/work" className={cn('text-3xl font-bold transition-colors', isActive('/work') ? 'text-primary' : 'text-white')}>Work</Link>
              <Link to="/blog" className={cn('text-3xl font-bold transition-colors', isActive('/blog') ? 'text-primary' : 'text-white')}>Insider</Link>
              <Link to="/contact" className={cn('text-3xl font-bold transition-colors mt-4 text-primary', isActive('/contact') ? 'text-primary' : 'text-white')}>Contact Us</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
