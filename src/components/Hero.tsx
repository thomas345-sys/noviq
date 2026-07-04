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
    title: 'Modern Software Development Workstation',
  },
  {
    url: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1600',
    title: 'Responsive Digital Systems',
  },
  {
    url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1600',
    title: 'High-Fidelity Mobile Applications',
  },
  {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600',
    title: 'Architectural Visualizations',
  },
  {
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600',
    title: 'Mechanical Engineering Models',
  },
  {
    url: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1600',
    title: 'Automotive CAD Modeling',
  },
  {
    url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1600',
    title: 'Luxury Interior Designs',
  },
  {
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600',
    title: 'Collaborative Office Environments',
  },
];

const serviceTags = [
  'Website Development',
  'Mobile Applications',
  'UI/UX Design',
  'CAD Engineering',
  '3D Modelling',
  'Web Hosting',
  'Domain Registration',
  'Electronics Repair & Design',
  'Academic Solutions',
  'Many More...',
];

const stats = [
  {
    value: '240+',
    label: 'Successful Projects',
  },
  {
    value: '100%',
    label: 'Client Satisfaction',
  },
  {
    value: '8+',
    label: 'Years Experience',
  },
  {
    value: '24/7',
    label: 'Support',
  },
];

export default function Hero({
  onExplorePortfolio,
  onGetStarted,
}: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0 bg-neutral-950">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.12 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{
              opacity: {
                duration: 1.5,
                ease: 'easeInOut',
              },
              scale: {
                duration: 6.5,
                ease: 'linear',
              },
            }}
            className="absolute inset-0"
          >
            <img
              src={slides[currentSlide].url}
              alt={slides[currentSlide].title}
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover brightness-[0.65] contrast-105"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b]/25 via-[#0a0a0b]/55 to-[#0a0a0b]/85" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full w-full max-w-6xl flex-col items-center justify-center px-4 pt-32 pb-16 text-center sm:px-6 md:pt-36 lg:px-8">

        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2"
        >
          <Sparkles className="h-4 w-4 text-amber-400" />

          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-400">
            Global Digital & Engineering Suite
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="max-w-5xl font-sans text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">

          <motion.span
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="mb-2 block"
          >
            Building Ideas.
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.35,
            }}
            className="block bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text pb-2 text-transparent"
          >
            Delivering Results.
          </motion.span>

        </h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.55,
          }}
          className="mt-4 max-w-3xl text-base font-light leading-relaxed text-neutral-300 sm:text-lg"
        >
          NOVIQ Digital Agency delivers premium, high-fidelity digital
          solutions, custom web and mobile systems, architectural
          visualizations, CAD engineering, electronics repair &
          design, and innovative technology solutions for startups,
          enterprises, researchers and students worldwide.
        </motion.p>

        {/* Service Tags */}
        <div className="mt-6 flex max-w-4xl flex-wrap justify-center gap-2">
          {serviceTags.map((tag, index) => (
            <motion.span
              key={tag}
              initial={{
                opacity: 0,
                y: 15,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.45,
                delay: 0.7 + index * 0.06,
              }}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-wide text-neutral-200 transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/10 hover:text-amber-400"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 1.4,
          }}
          className="mt-8 flex w-full flex-col items-center justify-center gap-4 px-4 sm:w-auto sm:flex-row"
        >
          <button
            onClick={onGetStarted}
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-amber-500 px-8 py-4 font-semibold text-neutral-900 shadow-lg shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:w-auto"
          >
            <span>Get Started</span>

            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            onClick={onExplorePortfolio}
            className="group flex w-full items-center justify-center rounded-full border-2 border-amber-500 bg-transparent px-8 py-4 font-semibold text-amber-500 transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-neutral-900 sm:w-auto"
          >
            Explore Portfolio
          </button>
        </motion.div>
                {/* Hero Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.8,
          }}
          className="mt-10 w-full max-w-5xl"
        >
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 2 + index * 0.15,
                }}
                className="group text-center"
              >
                <h3 className="text-4xl font-black text-amber-500 transition-transform duration-300 group-hover:scale-110 md:text-6xl">
                  {stat.value}
                </h3>

                <p className="mt-3 text-xs font-medium uppercase tracking-[0.25em] text-neutral-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative Glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/60 to-transparent" />
    </section>
  );
}
