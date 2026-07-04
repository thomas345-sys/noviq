import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { statsData } from '../data';
not
export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <section
      id="stats"
      ref={containerRef}
      className="relative py-16 sm:py-20 border-y border-white/5 bg-[#0a0a0b]/40 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 lg:gap-12">
          {statsData.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="text-center flex flex-col items-center"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-sans font-extrabold text-amber-500 tracking-tight flex items-baseline">
                <Counter target={stat.value} trigger={isInView} />
                <span className="text-amber-500 ml-0.5">{stat.suffix}</span>
              </div>
              <p className="mt-2 text-xs sm:text-sm font-medium tracking-wide text-neutral-400 uppercase max-w-[150px] leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Custom internal counter element that increments gracefully
function Counter({ target, trigger }: { target: number; trigger: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const end = target;
    if (start === end) return;

    const duration = 1500; // 1.5 seconds animation
    const startTime = performance.now();

    const animateCount = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      // Ease out quadratic
      const easeProgress = progress * (2 - progress);
      const current = Math.floor(easeProgress * (end - start) + start);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [target, trigger]);

  return <span>{count}</span>;
}
