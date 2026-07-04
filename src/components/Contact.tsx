import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Upload,
  MessageSquare,
  Sparkles,
  Send,
  CheckCircle,
  File,
  X
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'website-development',
    description: '',
  });

  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const servicesList = [
    { value: 'website-development', label: 'Website Development' },
    { value: 'mobile-applications', label: 'Mobile Applications' },
    { value: 'architectural-visualization', label: 'Architectural Visualization' },
    { value: 'furniture-modeling', label: 'Furniture Modeling' },
    { value: 'mechanical-engineering', label: 'Mechanical Engineering' },
    { value: 'automotive-design', label: 'Automotive Design' },
    { value: 'hosting-infrastructure', label: 'Hosting Infrastructure' },
    { value: 'academic-support', label: 'Academic Support & Solutions' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Drag and drop mechanics
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setAttachedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setAttachedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.description) return;

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        service: 'website-development',
        description: '',
      });
      setAttachedFile(null);
    }, 1800);
  };

  const kenyaWhatsApp = 'https://wa.me/254705141011?text=Hello%20NOVIQ%20Digital%20Agency%20Kenya,%20I%20would%20like%20to%20consult%20regarding%20a%20project.';
  const canadaWhatsApp = 'https://wa.me/14389926442?text=Hello%20NOVIQ%20Digital%20Agency%20Canada,%20I%20would%20like%20to%20consult%20regarding%20a%20project.';

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-amber-400 uppercase bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full inline-flex items-center space-x-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect Immediately</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white tracking-tight mt-4 leading-tight">
            Let&rsquo;s Build <span className="text-amber-500">Something Amazing</span> Together
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-6 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
            Our engineering teams and systems developers typically respond <strong className="text-amber-400 font-semibold">within minutes</strong>. Choose your direct line below.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Column 1: Info & Dual WhatsApp Buttons (Grid 5/12) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-sans font-extrabold text-white tracking-tight">
                Immediate Consultations
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                Secure immediate feedback on blueprints, code, pricing, or academic requirements. Select our closest regional hub for direct chat.
              </p>
            </div>

            {/* Glowing Regional WhatsApp CTA Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {/* Kenya WhatsApp */}
              <a
                href={kenyaWhatsApp}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center space-x-4 bg-emerald-600/10 hover:bg-emerald-600 border border-emerald-500/30 hover:border-emerald-500 p-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-emerald-600/25 cursor-pointer"
              >
                <div className="bg-emerald-500/20 group-hover:bg-white/20 p-3 rounded-xl text-emerald-400 group-hover:text-white shrink-0 transition-colors">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-emerald-400 group-hover:text-emerald-100 font-bold block">
                    African Operations Hub
                  </span>
                  <span className="font-sans font-extrabold text-sm sm:text-base text-white block mt-0.5">
                    Contact Kenya (+254)
                  </span>
                  <span className="text-[10px] text-neutral-400 group-hover:text-emerald-100 block mt-0.5">
                    Direct WhatsApp Consulting
                  </span>
                </div>
              </a>

              {/* Canada WhatsApp */}
              <a
                href={canadaWhatsApp}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center space-x-4 bg-amber-500/10 hover:bg-amber-500 border border-amber-500/30 hover:border-amber-500 p-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-amber-500/25 cursor-pointer"
              >
                <div className="bg-amber-500/20 group-hover:bg-white/20 p-3 rounded-xl text-amber-400 group-hover:text-white shrink-0 transition-colors">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-amber-400 group-hover:text-amber-100 font-bold block">
                    North American Hub
                  </span>
                  <span className="font-sans font-extrabold text-sm sm:text-base text-white block mt-0.5">
                    Contact Canada (+1)
                  </span>
                  <span className="text-[10px] text-neutral-400 group-hover:text-amber-100 block mt-0.5">
                    Direct WhatsApp Consulting
                  </span>
                </div>
              </a>
            </div>

            {/* Traditional Contact channels */}
            <div className="bg-white/5 border border-white/5 p-6 rounded-2xl space-y-6">
              <h4 className="text-xs uppercase font-extrabold text-amber-500 tracking-widest">
                General Communication Directory
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3.5 text-neutral-300 text-sm">
                  <Phone className="w-4.5 h-4.5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-neutral-500 font-bold uppercase block">Direct Hotlines</span>
                    <span className="block font-medium text-white">+254 705 141 011 (Kenya)</span>
                    <span className="block font-medium text-white">+1 (438) 992-6442 (Canada)</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3.5 text-neutral-300 text-sm">
                  <Mail className="w-4.5 h-4.5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-neutral-500 font-bold uppercase block">Official Email</span>
                    <a href="mailto:info@noviq.agency" className="text-white hover:text-amber-400 transition-colors font-medium">
                      info@noviq.agency
                    </a>
                  </div>
                </li>
                <li className="flex items-start space-x-3.5 text-neutral-300 text-sm">
                  <MapPin className="w-4.5 h-4.5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-neutral-500 font-bold uppercase block">Physical HQ Locations</span>
                    <span className="block font-medium text-white">Nairobi Operations, Kenya</span>
                    <span className="block font-medium text-white">Montreal Technical Center, Quebec, Canada</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3.5 text-neutral-300 text-sm">
                  <Globe className="w-4.5 h-4.5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[10px] text-neutral-500 font-bold uppercase block">Corporate domain</span>
                    <a href="https://noviq.agency" className="text-white hover:text-amber-400 transition-colors font-medium">
                      www.noviq.agency
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: Conversions inquiry form (Grid 7/12) */}
          <div className="lg:col-span-7 bg-white text-neutral-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-neutral-150">
            <h3 className="text-xl sm:text-2xl font-sans font-extrabold text-neutral-950 tracking-tight mb-2">
              Submit Project Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 mb-8 leading-relaxed font-light">
              Submit your engineering parameters, source repositories, or thesis blueprints for a thorough assessment and guaranteed quote.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold text-neutral-600 uppercase tracking-wider block">
                    Full Name <span className="text-amber-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Michael Sang"
                    className="w-full text-sm bg-neutral-50 border border-neutral-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-xl px-4 py-3 outline-none transition-all text-neutral-900"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-neutral-600 uppercase tracking-wider block">
                    Email Address <span className="text-amber-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. sang@apexbuilders.co.ke"
                    className="w-full text-sm bg-neutral-50 border border-neutral-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-xl px-4 py-3 outline-none transition-all text-neutral-900"
                  />
                </div>
              </div>

              {/* Company & Desired Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="company" className="text-xs font-bold text-neutral-600 uppercase tracking-wider block">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="e.g. Apex Builders Ltd"
                    className="w-full text-sm bg-neutral-50 border border-neutral-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-xl px-4 py-3 outline-none transition-all text-neutral-900"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="text-xs font-bold text-neutral-600 uppercase tracking-wider block">
                    Desired Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full text-sm bg-neutral-50 border border-neutral-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-xl px-4 py-3 outline-none transition-all text-neutral-900"
                  >
                    {servicesList.map((srv) => (
                      <option key={srv.value} value={srv.value}>
                        {srv.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Project Description */}
              <div className="space-y-2">
                <label htmlFor="description" className="text-xs font-bold text-neutral-600 uppercase tracking-wider block">
                  Project Parameters &amp; Description <span className="text-amber-600">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={4}
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Outline dimensions, CAD requirements, required files formats, technical scopes, code languages, or timeline milestones..."
                  className="w-full text-sm bg-neutral-50 border border-neutral-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 rounded-xl px-4 py-3 outline-none transition-all text-neutral-900 resize-none"
                />
              </div>

              {/* DRAG-AND-DROP FILE ATTACHMENTS (Usability pattern requirement) */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral-600 uppercase tracking-wider block">
                  Project Schematics or Briefs
                </label>

                <div
                  onDragEnter={handleDrag}
                  onDragOver={handleDrag}
                  onDragLeave={handleDrag}
                  onDrop={handleDrop}
                  onClick={triggerFileSelect}
                  className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
                    dragActive
                      ? 'border-amber-500 bg-amber-50'
                      : 'border-neutral-300 bg-neutral-50 hover:bg-neutral-100/50 hover:border-neutral-400'
                  }`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    id="file-upload"
                    multiple={false}
                    onChange={handleFileChange}
                    className="hidden"
                  />

                  {!attachedFile ? (
                    <div className="space-y-2">
                      <div className="mx-auto w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
                        <Upload className="w-5 h-5 animate-pulse" />
                      </div>
                      <p className="text-xs font-medium text-neutral-700">
                        Drag and drop your CAD brief, blueprint, or specification file here, or <span className="text-amber-600 underline">browse</span>
                      </p>
                      <p className="text-[10px] text-neutral-400">
                        Supports PDF, STEP, DWG, OBJ, TSX, ZIP, or DOCX (Max 25MB)
                      </p>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between bg-white border border-neutral-200 p-3.5 rounded-lg shadow-sm">
                      <div className="flex items-center space-x-3 text-left">
                        <div className="bg-amber-100 text-amber-700 p-2 rounded-md">
                          <File className="w-5 h-5" />
                        </div>
                        <div className="max-w-[200px] sm:max-w-xs">
                          <p className="text-xs font-semibold text-neutral-900 truncate">
                            {attachedFile.name}
                          </p>
                          <p className="text-[10px] text-neutral-400">
                            {(attachedFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeFile();
                        }}
                        className="p-1 hover:bg-neutral-100 text-neutral-400 hover:text-neutral-900 rounded-full"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full relative group flex items-center justify-center space-x-2 bg-amber-500 hover:bg-neutral-950 text-neutral-900 hover:text-white font-extrabold text-xs uppercase tracking-widest py-4 rounded-xl transition-all duration-300 transform active:scale-95 shadow-md hover:shadow-xl shadow-amber-500/15"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-neutral-900 border-t-transparent rounded-full animate-spin group-hover:border-white group-hover:border-t-transparent" />
                    <span>Transmitting Schematics...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Transmit Proposal Request</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Notification Modal Overlay */}
      <AnimatePresence>
        {showSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSuccess(false)}
              className="fixed inset-0 bg-[#0a0a0b]/80 backdrop-blur-md cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="bg-white text-neutral-900 p-8 sm:p-10 rounded-2xl max-w-md w-full text-center space-y-6 z-10 border border-neutral-200 shadow-2xl shadow-black/30"
            >
              <div className="mx-auto w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shadow-inner">
                <CheckCircle className="w-10 h-10 animate-pulse" />
              </div>

              <div className="space-y-2">
                <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-neutral-950 leading-tight">
                  Proposal Transmitted!
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-light">
                  Thank you. Your project schematics and parameters have been safely received. An engineering partner from our Kenya or Canada office will message your email or WhatsApp in under 5 minutes.
                </p>
              </div>

              <button
                onClick={() => setShowSuccess(false)}
                className="w-full bg-neutral-900 hover:bg-amber-500 text-white hover:text-neutral-950 font-bold text-xs uppercase tracking-widest py-3.5 rounded-xl transition-all"
              >
                Acknowledge &amp; Return
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
