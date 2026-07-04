import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote, Sparkles, X, Heart, ShieldCheck } from 'lucide-react';
import { testimonialsData } from '../data';
import { Testimonial } from '../types';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto scroll logic
  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, []);

  const handlePrev = () => {
    stopTimer();
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
    startTimer();
  };

  const handleNext = () => {
    stopTimer();
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    startTimer();
  };

  const handleDotClick = (index: number) => {
    stopTimer();
    setActiveIndex(index);
    startTimer();
  };

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0a0b]/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-amber-400 uppercase bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full inline-flex items-center space-x-1.5">
            <Heart className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
            <span>Success Stories</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white tracking-tight mt-4 leading-tight">
            Client <span className="text-amber-500">Testimonials</span>
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-6 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
            Read detailed reviews from developers, engineering researchers, and real estate directors who trust our high-precision solutions.
          </p>
        </div>

        {/* Horizontal Scrolling Testimonial Area */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-12">
          
          {/* Main Testimonial Card Display with slide transition */}
          <div className="overflow-hidden min-h-[320px] sm:min-h-[280px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                onClick={() => setSelectedTestimonial(testimonialsData[activeIndex])}
                className="w-full bg-white text-neutral-900 p-6 sm:p-10 rounded-2xl border border-neutral-150 shadow-xl hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 cursor-pointer flex flex-col justify-between relative group"
              >
                {/* Floating Large Quote Mark */}
                <Quote className="absolute right-6 top-6 w-12 h-12 text-neutral-100 group-hover:text-amber-100 transition-colors pointer-events-none" />

                {/* Rating & Service info */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-extrabold text-amber-600 block">
                    {testimonialsData[activeIndex].servicePurchased}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-neutral-700 font-medium leading-relaxed my-4 line-clamp-3">
                  &ldquo;{testimonialsData[activeIndex].review}&rdquo;
                </p>

                {/* Client Profile details */}
                <div className="flex items-center space-x-4 border-t border-neutral-100 pt-4 mt-2">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-amber-500">
                    <img
                      src={testimonialsData[activeIndex].photo}
                      alt={testimonialsData[activeIndex].name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-sans font-extrabold text-sm sm:text-base text-neutral-950 flex items-center">
                      <span>{testimonialsData[activeIndex].name}</span>
                      <span className="ml-2 text-lg filter drop-shadow-sm" title={testimonialsData[activeIndex].countryName}>
                        {testimonialsData[activeIndex].flag}
                      </span>
                    </h4>
                    <p className="text-xs text-neutral-500">
                      {testimonialsData[activeIndex].role}, <strong className="text-neutral-700 font-semibold">{testimonialsData[activeIndex].company}</strong>
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-4 right-6 text-[10px] font-bold text-amber-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to Expand Full Case Study
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 bg-amber-500 hover:bg-white text-neutral-900 hover:text-neutral-950 p-2.5 rounded-full shadow-lg hover:scale-105 transition-all z-10 cursor-pointer"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 bg-amber-500 hover:bg-white text-neutral-900 hover:text-neutral-950 p-2.5 rounded-full shadow-lg hover:scale-105 transition-all z-10 cursor-pointer"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Indicators Dots */}
        <div className="flex justify-center items-center space-x-2 mt-8">
          {testimonialsData.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === i ? 'w-8 bg-amber-500' : 'w-2 bg-neutral-600 hover:bg-neutral-400'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Expanded Full Testimonial Modal */}
      <AnimatePresence>
        {selectedTestimonial && (
          <div
            id={`testimonial-expanded-${selectedTestimonial.id}`}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            {/* Ambient blurred backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTestimonial(null)}
              className="fixed inset-0 bg-[#0a0a0b]/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative bg-white text-neutral-900 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl z-10 border border-neutral-200 p-6 sm:p-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedTestimonial(null)}
                className="absolute top-4 right-4 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 p-2 rounded-full cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-6 pt-2">
                {/* Profile Header */}
                <div className="flex items-center space-x-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-amber-500">
                    <img
                      src={selectedTestimonial.photo}
                      alt={selectedTestimonial.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-sans font-extrabold text-lg sm:text-xl text-neutral-950">
                        {selectedTestimonial.name}
                      </h4>
                      <span className="text-xl filter drop-shadow-sm">{selectedTestimonial.flag}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-500">
                      {selectedTestimonial.role} &bull; <strong className="text-neutral-800">{selectedTestimonial.company}</strong>
                    </p>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center space-x-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                  <span className="text-xs font-bold text-neutral-500 ml-2">Verified Client Account</span>
                </div>

                {/* Detailed Service Details */}
                <div className="bg-neutral-50 border border-neutral-150 p-4 rounded-xl space-y-2">
                  <div className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">Service Project</div>
                  <strong className="text-xs sm:text-sm text-neutral-800 block leading-snug">
                    {selectedTestimonial.servicePurchased}
                  </strong>
                  {selectedTestimonial.projectSpecs && (
                    <div className="text-xs text-amber-600 font-mono mt-1 font-semibold flex items-center">
                      <ShieldCheck className="w-3.5 h-3.5 mr-1" />
                      <span>Project Specs: {selectedTestimonial.projectSpecs}</span>
                    </div>
                  )}
                </div>

                {/* Full detailed review */}
                <div className="space-y-2">
                  <h5 className="text-xs font-bold uppercase text-neutral-400 tracking-wider">The Project Case Study</h5>
                  <p className="text-neutral-700 text-sm sm:text-base leading-relaxed italic">
                    &ldquo;{selectedTestimonial.fullReview}&rdquo;
                  </p>
                </div>

                {/* Bottom closing action */}
                <div className="border-t border-neutral-100 pt-6 flex justify-end">
                  <button
                    onClick={() => setSelectedTestimonial(null)}
                    className="bg-neutral-900 hover:bg-amber-500 text-white hover:text-neutral-950 text-xs font-semibold uppercase tracking-widest px-5 py-3 rounded-full transition-colors cursor-pointer"
                  >
                    Close Review
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
