import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onExplorePortfolio: () => void;
  onGetStarted: () => void;
}

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=1600',
    title: 'Modern Software Development Workstation'
  },
  {
    url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1600',
    title: 'Responsive Digital Systems'
  },
  {
    url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1600',
    title: 'High-Fidelity Mobile Applications'
  },
  {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600',
    title: 'Architectural visualizations'
  },
  {
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600',
    title: 'Mechanical engineering models'
  },
  {
    url: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1600',
    title: 'Automotive CAD modeling'
  },
  {
    url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1600',
    title: 'Luxury interior designs'
  },
  {
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600',
    title: 'Collaborative office environments'
  }
];

const serviceTags = [
  'Website Development',
  'Mobile Applications',
  'UI/UX Design',
  'CAD Engineering',
  '3D Modelling',
  'Web Hosting',
  'Domain Registration',
  'SEO',
  'Academic Solutions'
];

export default function Hero({ onExplorePortfolio, onGetStarted }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Transitions every 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Immersive Ken Burns slideshow background */}
      <div className="absolute inset-0 w-full h-full z-0 bg-neutral-950">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.0 }}
            animate={{ opacity: 1, scale: 1.15 }}
            exit={{ opacity: 0, scale: 1.25 }}
            transition={{
              opacity: { duration: 1.5, ease: 'easeInOut' },
              scale: { duration: 6.5, ease: 'linear' } // Ken Burns effect
            }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={slides[currentSlide].url}
              alt={slides[currentSlide].title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter brightness-[0.45] contrast-105"
            />
            {/* Dark overlay with slight color grading gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b]/40 via-[#0a0a0b]/75 to-[#0a0a0b]" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center h-full pt-16">
        
        {/* Subtle decorative tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 rounded-full mb-6"
        >
          <Sparkles className="w-4.5 h-4.5 text-amber-500 animate-pulse" />
          <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-amber-400 uppercase">
            Global Digital & Engineering Suite
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-extrabold tracking-tight leading-tight sm:leading-none text-white max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="block text-white mb-2 sm:mb-4"
          >
            Building Ideas.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 drop-shadow-md pb-2"
          >
            Delivering Results.
          </motion.span>
        </h1>

        {/* Concise Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 text-base sm:text-lg text-neutral-300 max-w-2xl font-light leading-relaxed px-2"
        >
          NOVIQ Digital Agency delivers premium, high-fidelity digital solutions, custom web and mobile systems, 3D architectural renders, and robust CAD engineering for global businesses, startups, researchers, and students.
        </motion.p>

        {/* Animated Service Tags - gently slide/fade in one by one */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-2.5 max-w-3xl px-2">
          {serviceTags.map((tag, idx) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.7 + idx * 0.08,
                type: 'spring',
                stiffness: 100
              }}
              className="text-[10px] sm:text-xs font-medium tracking-wide bg-white/5 hover:bg-amber-500/10 border border-white/10 hover:border-amber-500/30 text-neutral-200 hover:text-amber-400 px-3.5 py-1.5 rounded-full transition-colors duration-300 shadow-sm"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Call To Actions */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4"
        >
          {/* Primary CTA */}
          <button
            onClick={onGetStarted}
            className="w-full sm:w-auto relative group flex items-center justify-center space-x-2 bg-amber-500 hover:bg-white text-neutral-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-white/10 shadow-amber-500/25 cursor-pointer"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform text-neutral-900" />
          </button>

          {/* Secondary CTA */}
          <button
            onClick={onExplorePortfolio}
            className="w-full sm:w-auto relative group flex items-center justify-center bg-transparent hover:bg-white border-2 border-amber-500 hover:border-white text-amber-500 hover:text-neutral-900 font-semibold px-8 py-3.5 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-white/10 cursor-pointer"
          >
            <span>Explore Portfolio</span>
          </button>
        </motion.div>
      </div>

      {/* Subtle indicator suggesting scrolling down */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
        <span className="text-[9px] uppercase tracking-widest text-neutral-500 mb-2 font-medium">Scroll to explore</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-amber-500 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white animate-bounce" />
        </div>
      </div>
    </section>
  );
}
