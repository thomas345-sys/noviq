import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Hexagon } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavClick: (section: string) => void;
}

export default function Navbar({
  activeSection,
  onNavClick,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 'hero', name: 'Home' },
    { id: 'services', name: 'Services' },
    { id: 'portfolio', name: 'Portfolio' },
    { id: 'why-choose-us', name: 'Why Us' },
    { id: 'testimonials', name: 'Testimonials' },
    { id: 'contact', name: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onNavClick(id);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        id="navbar"
        className="fixed top-0 left-0 w-full z-50
                   bg-[#0a0a0b]/90
                   backdrop-blur-xl
                   border-b border-white/10
                   shadow-lg shadow-black/30
                   transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div
              className="flex items-center space-x-2 cursor-pointer group"
              onClick={() => handleLinkClick('hero')}
            >
              <div className="relative flex items-center justify-center w-10 h-10">
                <Hexagon className="w-8 h-8 text-amber-500 fill-amber-500/10 transition-transform duration-300 group-hover:scale-110" />
                <span className="absolute text-[10px] font-bold text-white tracking-widest">
                  NQ
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-extrabold text-lg text-white tracking-wider leading-none transition-colors duration-300 group-hover:text-amber-400">
                  NOVIQ
                </span>

                <span className="text-[9px] font-medium text-amber-500 uppercase tracking-[0.2em] mt-1">
                  Digital Agency
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;

                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`relative uppercase text-sm font-medium tracking-wide transition-colors duration-300 cursor-pointer ${
                      isActive
                        ? 'text-amber-500'
                        : 'text-neutral-300 hover:text-amber-400'
                    }`}
                  >
                    {link.name}

                    {/* Active Indicator */}
                    {isActive && (
                      <motion.span
                        layoutId="activeIndicator"
                        className="absolute left-0 -bottom-2 h-[2px] w-full rounded-full bg-amber-500"
                        transition={{
                          type: 'spring',
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}

                    {/* Hover Underline */}
                    {!isActive && (
                      <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-amber-500 transition-all duration-300 hover:w-full" />
                    )}
                  </button>
                );
              })}

              {/* CTA */}
              <button
                onClick={() => handleLinkClick('contact')}
                className="group flex items-center space-x-2 rounded-full
                           bg-amber-500 px-6 py-3
                           text-xs font-semibold uppercase tracking-[0.2em]
                           text-neutral-900
                           transition-all duration-300
                           hover:bg-white hover:shadow-lg hover:shadow-amber-500/20"
              >
                <span>Consult Now</span>

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>

            {/* Mobile Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-neutral-300 transition-colors hover:text-amber-500"
                aria-label="Toggle Navigation"
              >
                {isOpen ? (
                  <X className="h-7 w-7" />
                ) : (
                  <Menu className="h-7 w-7" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{
              type: 'spring',
              stiffness: 250,
              damping: 28,
            }}
            className="fixed inset-0 z-40 flex flex-col justify-center
                       bg-[#0a0a0b]/98 backdrop-blur-2xl
                       px-8 md:hidden"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-6 top-6 text-neutral-300 transition-colors hover:text-amber-500"
            >
              <X className="h-7 w-7" />
            </button>

            <div className="flex flex-col space-y-7">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.id;

                return (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleLinkClick(link.id)}
                    className={`border-l-4 pl-5 text-left text-2xl font-semibold uppercase tracking-wider transition-colors ${
                      isActive
                        ? 'border-amber-500 text-amber-500'
                        : 'border-transparent text-neutral-300 hover:text-amber-400'
                    }`}
                  >
                    {link.name}
                  </motion.button>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-8"
              >
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="group flex w-full items-center justify-center
                             rounded-full bg-amber-500 px-6 py-4
                             text-sm font-semibold uppercase tracking-[0.2em]
                             text-neutral-900
                             transition-all duration-300 hover:bg-white"
                >
                  <span>Build Something Amazing</span>

                  <ArrowUpRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
