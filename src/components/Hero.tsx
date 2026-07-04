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
    title: 'Collaborative Office Environment',
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
    label: 'Projects Delivered',
  },
  {
    value: '98%',
    label: 'Client Satisfaction',
  },
  {
    value: '24/7',
    label: 'Support',
  },
  {
    value: 'Global',
    label: 'Clients Served',
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
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0 bg-neutral-950">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.12 }}
            exit={{ opacity: 0, scale: 1.22 }}
            transition={{
              opacity: {
                duration: 1.4,
                ease: 'easeInOut',
              },
              scale: {
                duration: 6,
                ease: 'linear',
              },
            }}
            className="absolute inset-0"
          >
            <img
              src={slides[currentSlide].url}
              alt={slides[currentSlide].title}
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover brightness-[0.65]"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b]/25 via-[#0a0a0b]/55 to-[#0a0a0b]/80" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Hero */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 pt-32 pb-12">

        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.4fr_0.6fr]">

          {/* LEFT CONTENT */}
          <div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-2"
            >
              <Sparkles className="h-4 w-4 text-amber-400" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-400">
                Global Digital & Engineering Suite
              </span>
            </motion.div>

            <h1 className="max-w-4xl text-5xl font-extrabold leading-tight text-white sm:text-6xl md:text-7xl">

              <motion.span
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1,
                  duration: 0.8,
                }}
                className="block"
              >
                Building Ideas.
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                }}
                className="block bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent"
              >
                Delivering Results.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.8,
              }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-300"
            >
              NOVIQ Digital Agency delivers premium digital experiences,
              modern web platforms, mobile applications, CAD engineering,
              electronics repair & design, architectural visualizations,
              academic solutions and many more technology services for
              businesses around the globe.
            </motion.p>
                        {/* Service Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-8 flex max-w-3xl flex-wrap gap-3"
            >
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
                    delay: 0.7 + index * 0.05,
                    duration: 0.45,
                  }}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-wide text-neutral-200 backdrop-blur-sm transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/10 hover:text-amber-400"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

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
                delay: 1.25,
                duration: 0.8,
              }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <button
                onClick={onGetStarted}
                className="group flex items-center justify-center gap-2 rounded-full bg-amber-500 px-8 py-4 font-semibold text-neutral-900 shadow-lg shadow-amber-500/25 transition-all duration-300 hover:-translate-y-1 hover:bg-white"
              >
                <span>Get Started</span>

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExplorePortfolio}
                className="rounded-full border-2 border-amber-500 px-8 py-4 font-semibold text-amber-500 transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-neutral-900"
              >
                Explore Portfolio
              </button>
            </motion.div>

          </div>

          {/* RIGHT SIDE METRICS */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 1.4,
              duration: 0.8,
            }}
            className="hidden lg:flex justify-end"
          >
            <div className="w-full max-w-[260px] rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl shadow-black/30">

              <p className="mb-8 text-xs font-semibold uppercase tracking-[0.35em] text-amber-400">
                NOVIQ BY THE NUMBERS
              </p>

              <div className="space-y-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 1.6 + index * 0.15,
                    }}
                    className="group"
                  >
                    <h2 className="text-5xl font-black leading-none text-amber-500 transition-transform duration-300 group-hover:translate-x-2">
                      {stat.value}
                    </h2>

                    <p className="mt-2 text-[11px] uppercase tracking-[0.28em] text-neutral-400">
                      {stat.label}
                    </p>

                    {index !== stats.length - 1 && (
                      <div className="mt-6 h-px w-full bg-gradient-to-r from-amber-500/40 to-transparent" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
            {/* Bottom Fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/60 to-transparent" />
    </section>
  );
}
