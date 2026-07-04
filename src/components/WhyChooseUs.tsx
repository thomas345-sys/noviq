import { motion } from 'motion/react';
import {
  Sparkles,
  Zap,
  CheckCircle,
  Settings,
  ShieldCheck,
  Headphones,
  DollarSign,
  ThumbsUp,
  HelpCircle
} from 'lucide-react';
import { coreValuesData } from '../data';

// Helper to map icon names to actual Lucide component elements
const IconMapper = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'Zap':
      return <Zap className={className} />;
    case 'CheckCircle':
      return <CheckCircle className={className} />;
    case 'Settings':
      return <Settings className={className} />;
    case 'ShieldAlert':
      return <ShieldCheck className={className} />;
    case 'Headphones':
      return <Headphones className={className} />;
    case 'DollarSign':
      return <DollarSign className={className} />;
    case 'ThumbsUp':
      return <ThumbsUp className={className} />;
    default:
      return <HelpCircle className={className} />;
  }
};

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-28">
          <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-amber-400 uppercase bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full inline-flex items-center space-x-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Foundations of Trust</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white tracking-tight mt-4 leading-tight">
            Why Visionaries <span className="text-amber-500">Choose NOVIQ</span>
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-6 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
            We operate as your dedicated technology partners, combining rigorous mathematical consulting with premium full-stack software and CAD precision.
          </p>
        </div>

        {/* Floating Cards Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {coreValuesData.map((card, idx) => {
            // Staggered continuous floating parameters
            const floatDuration = 4 + (idx % 3) * 1.5;
            const floatDelay = idx * 0.2;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
              >
                {/* Continuous floating wrapper combined with hover lifting and shadow increase */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: floatDuration,
                    delay: floatDelay,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  whileHover={{
                    y: -12,
                    scale: 1.02,
                    transition: { duration: 0.2, ease: 'easeOut' },
                  }}
                  className="bg-white text-neutral-900 rounded-2xl p-6 sm:p-7 shadow-md hover:shadow-2xl hover:shadow-amber-500/10 transition-shadow duration-300 border border-neutral-100 flex flex-col items-start space-y-4 h-full"
                >
                  {/* Glowing Round Gold Icon Base */}
                  <div className="bg-amber-500/10 border border-amber-500/30 p-3 rounded-xl flex items-center justify-center text-amber-600">
                    <IconMapper name={card.iconName} className="w-6 h-6" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-sans font-extrabold text-base sm:text-lg text-neutral-950 tracking-tight leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
