import { motion } from 'motion/react';
import { X, Calendar, Clock, Sparkles, Code, FileCode, CheckCircle2, MessageCircle, DollarSign } from 'lucide-react';
import { Service } from '../types';

interface ServiceModalProps {
  service: Service;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  // Map software names to beautiful badge style indicators
  const getSoftwareStyle = (sw: string) => {
    const swLower = sw.toLowerCase();
    if (swLower.includes('solidworks')) return 'bg-red-500/10 text-red-400 border-red-500/30';
    if (swLower.includes('archicad')) return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
    if (swLower.includes('sketchup')) return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
    if (swLower.includes('blender')) return 'bg-orange-500/10 text-orange-400 border-orange-500/30';
    if (swLower.includes('inventor')) return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30';
    if (swLower.includes('revit')) return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30';
    if (swLower.includes('autocad')) return 'bg-red-600/10 text-red-500 border-red-600/30';
    if (swLower.includes('fusion')) return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
    if (swLower.includes('freecad')) return 'bg-teal-500/10 text-teal-400 border-teal-500/30';
    if (swLower.includes('matlab')) return 'bg-red-700/10 text-red-500 border-red-700/30';
    if (swLower.includes('python')) return 'bg-blue-400/10 text-blue-300 border-blue-400/30';
    return 'bg-neutral-100 text-neutral-800 border-neutral-300';
  };

  const kenyaWhatsApp = 'https://wa.me/254705141011?text=Hello%20NOVIQ%20Digital%20Agency%20Kenya,%20I%20am%20interested%20in%20your%20' + encodeURIComponent(service.title) + '%20services.';
  const canadaWhatsApp = 'https://wa.me/14389926442?text=Hello%20NOVIQ%20Digital%20Agency%20Canada,%20I%20am%20interested%20in%20your%20' + encodeURIComponent(service.title) + '%20services.';

  return (
    <div
      id={`modal-${service.id}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
    >
      {/* Soft Blurred Ambient Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-[#0a0a0b]/80 backdrop-blur-md cursor-pointer"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ type: 'spring', damping: 25, stiffness: 220 }}
        className="relative bg-white text-neutral-900 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl shadow-black/50 z-10 border border-neutral-200"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black/90 text-white hover:scale-105 transition-all p-2 rounded-full cursor-pointer shadow-md"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Banner Image */}
        <div className="relative w-full h-[250px] sm:h-[320px]">
          <img
            src={service.image}
            alt={service.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-[10px] uppercase tracking-widest font-extrabold text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              {service.category}
            </span>
            <h2 className="text-2xl sm:text-4xl font-sans font-extrabold tracking-tight text-neutral-950 mt-3 drop-shadow-sm">
              {service.title}
            </h2>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Section: Overview & Pricing */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-lg font-bold text-neutral-950 flex items-center space-x-2 border-b border-neutral-100 pb-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <span>Service Overview</span>
              </h3>
              <p className="text-neutral-700 leading-relaxed text-sm sm:text-base">
                {service.overview}
              </p>
            </div>

            {/* Side Card: Specs & Pricing */}
            <div className="bg-neutral-50 border border-neutral-150 p-5 rounded-xl space-y-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold block">Indicative Pricing</span>
                <span className="text-xl sm:text-2xl font-sans font-extrabold text-amber-600 flex items-center mt-1">
                  <DollarSign className="w-5 h-5 mr-0.5" />
                  {service.pricing.replace('Starts from ', '')}
                </span>
              </div>
              <div className="border-t border-neutral-200 pt-3 space-y-2">
                <div className="flex items-center text-xs text-neutral-600">
                  <Clock className="w-4 h-4 text-neutral-400 mr-2 shrink-0" />
                  <span>Timeline: <strong className="text-neutral-900">{service.deliveryTime}</strong></span>
                </div>
                <div className="flex items-center text-xs text-neutral-600">
                  <Calendar className="w-4 h-4 text-neutral-400 mr-2 shrink-0" />
                  <span>Support: <strong className="text-neutral-900">24/7 Priority</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* Grid Layout for Features & Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Features list */}
            <div className="space-y-4">
              <h4 className="font-sans font-extrabold text-sm sm:text-base text-neutral-950 tracking-wide uppercase border-l-4 border-amber-500 pl-3">
                Key Deliverables & Features
              </h4>
              <ul className="space-y-3">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-start text-xs sm:text-sm text-neutral-600">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 mr-2.5 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits list */}
            <div className="space-y-4">
              <h4 className="font-sans font-extrabold text-sm sm:text-base text-neutral-950 tracking-wide uppercase border-l-4 border-neutral-900 pl-3">
                Direct Value & Benefits
              </h4>
              <ul className="space-y-3">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start text-xs sm:text-sm text-neutral-600">
                    <CheckCircle2 className="w-4 h-4 text-neutral-800 mr-2.5 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technical Specs: Software, Technologies & File Formats */}
          <div className="border-t border-neutral-100 pt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Software Used */}
            <div className="space-y-3">
              <h5 className="text-xs font-bold uppercase text-neutral-500 tracking-wider flex items-center">
                <Code className="w-4 h-4 text-neutral-400 mr-1.5" />
                Industry Software
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {service.software.map((sw) => (
                  <span
                    key={sw}
                    className={`text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded border ${getSoftwareStyle(
                      sw
                    )}`}
                  >
                    {sw}
                  </span>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="space-y-3">
              <h5 className="text-xs font-bold uppercase text-neutral-500 tracking-wider flex items-center">
                <FileCode className="w-4 h-4 text-neutral-400 mr-1.5" />
                Methodologies
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] sm:text-xs font-semibold bg-neutral-100 text-neutral-700 border border-neutral-200 px-2.5 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Delivery File Formats */}
            <div className="space-y-3">
              <h5 className="text-xs font-bold uppercase text-neutral-500 tracking-wider flex items-center">
                <Clock className="w-4 h-4 text-neutral-400 mr-1.5" />
                Supported Formats
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {service.fileFormats.map((fmt) => (
                  <span
                    key={fmt}
                    className="text-[10px] sm:text-xs font-mono font-medium bg-neutral-50 text-neutral-600 border border-neutral-200 px-2 py-0.5 rounded"
                  >
                    {fmt}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Step-by-Step Delivery Timeline */}
          <div className="bg-neutral-50 border border-neutral-150 rounded-xl p-5 space-y-2">
            <h5 className="text-xs font-extrabold uppercase text-neutral-900 tracking-wider">
              Project Lifecycle & Milestones
            </h5>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed italic">
              {service.timeline}
            </p>
          </div>

          {/* Bottom WhatsApp Contact Panel */}
          <div className="border-t border-neutral-100 pt-8 text-center space-y-4">
            <h4 className="text-sm font-sans font-extrabold text-neutral-900 uppercase tracking-widest">
              Initiate Direct Collaboration
            </h4>
            <p className="text-xs text-neutral-500 max-w-lg mx-auto">
              Ready to execute? Connect directly with our lead developers and 3D engineering architects in Kenya or Canada. Real human response in minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              {/* Kenya Office WhatsApp */}
              <a
                href={kenyaWhatsApp}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center space-x-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm px-6 py-3 rounded-full shadow-md shadow-emerald-600/10 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Contact Kenya Hub (+254)</span>
              </a>

              {/* Canada Office WhatsApp */}
              <a
                href={canadaWhatsApp}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center space-x-2.5 bg-neutral-950 hover:bg-neutral-800 text-white font-medium text-sm px-6 py-3 rounded-full shadow-md shadow-neutral-950/10 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer border border-neutral-800"
              >
                <MessageCircle className="w-5 h-5 text-amber-500" />
                <span>Contact Canada Hub (+1)</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
