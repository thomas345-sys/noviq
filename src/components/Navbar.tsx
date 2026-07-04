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
      <nav
        id="navbar"
        className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0b]/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20 py-4 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div
              className="flex items-center space-x-2 cursor-pointer group"
              onClick={() => handleLinkClick('hero')}
            >
              <div className="relative flex items-center justify-center w-10 h-10">
                <Hexagon className="w-8 h-8 text-amber-500 fill-amber-500/10 transition-transform group-hover:scale-105" />
                <span className="absolute text-[10px] font-bold tracking-widest text-white">
                  NQ
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-wider text-white leading-none transition-colors group-hover:text-amber-400">
                  NOVIQ
                </span>

                <span className="mt-1 text-[9px] uppercase tracking-widest text-amber-500 leading-none">
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
                    className={`relative py-2 text-sm font-medium uppercase tracking-wide transition-colors duration-300 ${
                      isActive
                        ? 'text-amber-500'
                        : 'text-neutral-300 hover:text-amber-400'
                    }`}
                  >
                    {link.name}

                    {/* Active Indicator */}
                    {isActive && (
                      <motion.span
                        layoutId="activeDot"
                        className="absolute left-1/2 -bottom-1 h-1 w-1 -translate-x-1/2 rounded-full bg-amber-500"
                        transition={{
                          type: 'spring',
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}

                    {/* Hover Underline */}
                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-amber-500 transition-all duration-300 hover:w-full" />
                  </button>
                );
              })}

              <button
                onClick={() => handleLinkClick('contact')}
                className="group flex items-center space-x-1 rounded-full bg-amber-500 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-neutral-900 shadow-md shadow-amber-500/20 transition-all duration-300 hover:bg-white"
              >
                <span>Consult Now</span>

                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* Mobile Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-1 text-neutral-300 transition-colors hover:text-amber-500"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 200,
            }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-[#0a0a0b]/95 backdrop-blur-xl px-8 md:hidden"
          >
            <div className="absolute top-6 right-6">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-neutral-300 transition-colors hover:text-amber-500"
              >
                <X className="h-7 w-7" />
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
                    className={`border-l-4 py-2 pl-4 text-left text-2xl font-semibold uppercase tracking-wider transition-colors ${
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-6 pl-4"
              >
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="flex w-full items-center justify-center space-x-2 rounded-full bg-amber-500 px-6 py-4 text-sm font-semibold uppercase tracking-widest text-neutral-900 transition-colors hover:bg-white"
                >
                  <span>Build Something Amazing</span>

                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
