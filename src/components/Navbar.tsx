import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Hexagon } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavClick: (section: string) => void;
}

export default function Navbar({ activeSection, onNavClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { id: 'hero', name: 'Home' },
    { id: 'services', name: 'Services' },
    { id: 'portfolio', name: 'Portfolio' },
    { id: 'why-choose-us', name: 'Why Us' },
    { id: 'testimonials', name: 'Testimonials' },
    { id: 'contact', name: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onNavClick(id);
  };

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0a0b]/80 backdrop-blur-md border-b border-white/5 py-3 shadow-lg shadow-black/20'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div
              className="flex items-center space-x-2 cursor-pointer group"
              onClick={() => handleLinkClick('hero')}
            >
              <div className="relative flex items-center justify-center w-10 h-10">
                <Hexagon className="w-8 h-8 text-amber-500 fill-amber-500/10 group-hover:scale-105 transition-transform" />
                <span className="absolute text-[10px] font-bold text-white tracking-widest">NQ</span>
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-extrabold text-lg text-white tracking-wider leading-none group-hover:text-amber-400 transition-colors">
                  NOVIQ
                </span>
                <span className="text-[9px] font-sans font-medium text-amber-500 uppercase tracking-widest leading-none mt-1">
                  Digital Agency
                </span>
              </div>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`relative text-sm font-medium tracking-wide uppercase transition-colors duration-300 py-2 cursor-pointer ${
                      isActive ? 'text-amber-500' : 'text-neutral-300 hover:text-amber-400'
                    }`}
                  >
                    {link.name}

                    {/* Active small animated dot indicator */}
                    {isActive && (
                      <motion.span
                        layoutId="activeDot"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-500"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}

                    {/* Smooth Gold Underline Animation on Hover */}
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-amber-500 transition-all duration-300 hover:w-full group-hover:w-full" />
                  </button>
                );
              })}

              <button
                onClick={() => handleLinkClick('contact')}
                className="flex items-center space-x-1 text-xs font-semibold uppercase tracking-widest bg-amber-500 text-neutral-900 px-4 py-2.5 rounded-full hover:bg-white transition-all duration-300 group shadow-md shadow-amber-500/15 cursor-pointer"
              >
                <span>Consult Now</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-neutral-300 hover:text-amber-500 transition-colors p-1"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile slide-out menu drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-[#0a0a0b]/98 backdrop-blur-lg md:hidden flex flex-col justify-center px-8"
          >
            {/* Close button inside drawer */}
            <div className="absolute top-6 right-6">
              <button
                onClick={() => setIsOpen(false)}
                className="text-neutral-300 hover:text-amber-500 transition-colors p-2"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            <div className="flex flex-col space-y-6">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.id;
                return (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => handleLinkClick(link.id)}
                    className={`text-2xl font-semibold tracking-wider uppercase text-left py-2 ${
                      isActive
                        ? 'text-amber-500 border-l-4 border-amber-500 pl-4'
                        : 'text-neutral-300 hover:text-amber-400 border-l-4 border-transparent pl-4'
                    }`}
                  >
                    {link.name}
                  </motion.button>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-6 pl-4"
              >
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="w-full flex items-center justify-center space-x-2 text-sm font-semibold uppercase tracking-widest bg-amber-500 text-neutral-900 px-6 py-4 rounded-full hover:bg-white transition-colors"
                >
                  <span>Build Something Amazing</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
