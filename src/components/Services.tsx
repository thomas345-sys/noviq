import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Sparkles, Clock } from 'lucide-react';
import { servicesData } from '../data';
import { Service } from '../types';
import ServiceModal from './ServiceModal';

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      {/* Container wrapper for relative elements */}
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading with high design polish */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-amber-400 uppercase bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full inline-flex items-center space-x-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Noviq Competence Center</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white tracking-tight mt-4 leading-tight">
            Comprehensive Digital &amp; <span className="text-amber-500">Engineering Suite</span>
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-6 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
            We operate across multiple tech and creative disciplines, fusing robust digital frameworks with photorealistic 3D drafting and standardized engineering mechanics.
          </p>
        </div>

        {/* Services Grid (Responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              onClick={() => setSelectedService(service)}
              className="group relative bg-white text-neutral-900 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-black/25 transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between cursor-pointer border border-neutral-100"
            >
              {/* Premium Top Edge Animated Gold Line */}
              <span className="absolute top-0 left-0 w-0 h-1.5 bg-gradient-to-r from-amber-400 to-yellow-500 transition-all duration-500 group-hover:w-full z-10" />

              {/* Top portion image */}
              <div className="relative overflow-hidden h-48 sm:h-52 w-full">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Category tag floating over image */}
                <span className="absolute bottom-3 left-3 bg-[#0a0a0b]/80 backdrop-blur-sm text-[9px] font-bold tracking-widest text-amber-400 uppercase px-2.5 py-1 rounded-md border border-amber-500/30">
                  {service.category}
                </span>
              </div>

              {/* Lower text content */}
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-sans font-extrabold text-base sm:text-lg text-neutral-950 tracking-tight leading-snug group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed font-light line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Specs and trigger button */}
                <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
                  <div className="flex items-center text-[10px] font-semibold text-neutral-500">
                    <Clock className="w-3.5 h-3.5 text-neutral-400 mr-1 shrink-0" />
                    <span>Delivered in {service.deliveryTime}</span>
                  </div>
                  <button className="flex items-center space-x-1 text-[11px] font-bold text-amber-600 uppercase tracking-wider group-hover:text-neutral-950 transition-colors cursor-pointer">
                    <span>Explore</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal View for Selected Service */}
      <AnimatePresence>
        {selectedService && (
          <ServiceModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
