import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onExplorePortfolio: () => void;
  onGetStarted: () => void;
}

const backgroundImage =
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1600';

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

type Stat =
  | {
      value: number;
      suffix: string;
      label: string;
    }
  | {
      text: string;
      label: string;
    };

const stats: Stat[] = [
  {
    value: 240,
    suffix: '+',
    label: 'Projects Delivered',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
  },
  {
    value: 24,
    suffix: '/7',
    label: 'Support',
  },
  {
    text: 'Global',
    label: 'Clients Served',
  },
];

export default function Hero({
  onExplorePortfolio,
  onGetStarted,
}: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(heroRef, {
    once: true,
    amount: 0.3,
  });

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Single Background Image */}
      <div className="absolute inset-0 overflow-hidden bg-neutral-950">

        <motion.img
          src={backgroundImage}
          alt="Luxury Interior Design"
          referrerPolicy="no-referrer"
          className="absolute inset-0 h-full w-full object-cover brightness-[0.75]"
          animate={{
            scale: [1.05, 1.14, 1.05],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b]/20 via-[#0a0a0b]/45 to-[#0a0a0b]/80" />

      </div>

      {/* Main Hero */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-20 pb-10">

        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.45fr_0.55fr]">

          {/* LEFT CONTENT */}
          <div>

            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5"
            >
              <Sparkles className="h-4 w-4 text-amber-400" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-amber-400">
                Global Digital & Engineering Suite
              </span>
            </motion.div>

            <h1 className="max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">

              <motion.span
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.1,
                  duration: 0.8,
                }}
                className="block"
              >
                Building Ideas.
              </motion.span>

              <motion.span
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
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
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
                duration: 0.8,
              }}
              className="mt-5 max-w-2xl text-base leading-7 text-neutral-300"
            >
              NOVIQ Digital Agency delivers premium digital experiences,
              modern websites, mobile applications, CAD engineering,
              electronics repair & design, architectural visualizations,
              academic solutions and many more technology services for
              businesses around the globe.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-7 flex max-w-3xl flex-wrap gap-2.5"
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
                    delay: 0.75 + index * 0.05,
                    duration: 0.45,
                  }}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium tracking-wide text-neutral-200 backdrop-blur-sm transition-all duration-300 hover:border-amber-500/40 hover:bg-amber-500/10 hover:text-amber-400"
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
                delay: 1.2,
                duration: 0.8,
              }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <button
                onClick={onGetStarted}
                className="group flex items-center justify-center gap-2 rounded-full bg-amber-500 px-8 py-3.5 font-semibold text-neutral-900 shadow-lg shadow-amber-500/25 transition-all duration-300 hover:-translate-y-1 hover:bg-white"
              >
                <span>Get Started</span>

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExplorePortfolio}
                className="rounded-full border-2 border-amber-500 px-8 py-3.5 font-semibold text-amber-500 transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-neutral-900"
              >
                Explore Portfolio
              </button>
            </motion.div>

          </div>

          {/* RIGHT METRICS */}
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
              delay: 1.3,
              duration: 0.8,
            }}
            className="hidden lg:flex justify-end self-start pt-12"
          >
            <div className="w-full max-w-[200px] rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl shadow-black/30">

              <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.35em] text-amber-400">
                NOVIQ BY THE NUMBERS
              </p>

              <div className="space-y-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    animate={
                      isInView
                        ? {
                            opacity: 1,
                            y: 0,
                          }
                        : {}
                    }
                    transition={{
                      duration: 0.5,
                      delay: 1.5 + index * 0.15,
                    }}
                    className="group"
                  >
                    <h2 className="text-4xl font-black leading-none text-amber-500 transition-transform duration-300 group-hover:translate-x-2">
                      {'text' in stat ? (
                        stat.text
                      ) : (
                        <>
                          <Counter
                            target={stat.value}
                            trigger={isInView}
                          />
                          <span>{stat.suffix}</span>
                        </>
                      )}
                    </h2>

                    <p className="mt-2 text-[10px] uppercase tracking-[0.28em] text-neutral-400">
                      {stat.label}
                    </p>

                    {index !== stats.length - 1 && (
                      <div className="mt-5 h-px w-full bg-gradient-to-r from-amber-500/40 to-transparent" />
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

/* ==========================================================
   Animated Counter
========================================================== */

function Counter({
  target,
  trigger,
}: {
  target: number;
  trigger: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let animationFrame: number;

    // Delay before counting starts
    const timer = setTimeout(() => {
      const duration = 1800;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const progress = Math.min(
          (currentTime - startTime) / duration,
          1
        );

        // Ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);

        setCount(Math.floor(eased * target));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(target);
        }
      };

      animationFrame = requestAnimationFrame(animate);
    }, 800);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animationFrame);
    };
  }, [target, trigger]);

  return <>{count.toLocaleString()}</>;
}
