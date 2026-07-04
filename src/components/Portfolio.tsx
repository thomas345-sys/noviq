import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, Eye, Grid, X, Calendar, Briefcase, Cpu, CheckSquare } from 'lucide-react';
import { projectsData } from '../data';
import { Project } from '../types';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [beforeAfterToggle, setBeforeAfterToggle] = useState<'before' | 'after'>('after');

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'websites', name: 'Websites' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'architecture', name: 'Architecture' },
    { id: 'furniture', name: 'Furniture' },
    { id: 'automotive', name: 'Automotive' },
    { id: 'mechanical', name: 'Mechanical' },
    { id: 'branding', name: 'Branding' },
    { id: 'academic', name: 'Academic' }
  ];

  // Filter projects
  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0a0b]/20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-amber-400 uppercase bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full inline-flex items-center space-x-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Showcase of Excellence</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white tracking-tight mt-4 leading-tight">
            Our Elite <span className="text-amber-500">Project Portfolio</span>
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-6 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
            Discover how we translate abstract ideas into standardized manufacturing files, photorealistic architectural scenes, and secure software applications.
          </p>
        </div>

        {/* Filter Categories (Horizontal scrollable on mobile) */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 mb-12 scrollbar-none gap-2 sm:gap-3 px-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`text-xs sm:text-sm font-semibold tracking-wider whitespace-nowrap px-4 py-2 sm:px-5 sm:py-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-neutral-900 shadow-md shadow-amber-500/15'
                  : 'bg-white/5 hover:bg-white/10 text-neutral-300 border border-white/5 hover:text-white'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Modern Pinterest Masonry Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 w-full">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="break-inside-avoid mb-6 block relative rounded-xl overflow-hidden group cursor-pointer bg-white text-neutral-900 shadow-lg border border-neutral-100"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image layout */}
                <div className="relative overflow-hidden w-full h-auto max-h-[480px]">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ height: 'auto', minHeight: '180px' }}
                  />
                  {/* Subtle black overlay on hover with Eye icon */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="bg-amber-500 text-neutral-900 p-3 rounded-full shadow-lg"
                    >
                      <Eye className="w-6 h-6" />
                    </motion.div>
                  </div>
                </div>

                {/* Info Box below thumbnail */}
                <div className="p-5 space-y-2">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-amber-600 block">
                    {project.category}
                  </span>
                  <h3 className="font-sans font-extrabold text-base sm:text-lg text-neutral-950 leading-tight">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-1.5 pt-2 text-[10px] font-bold text-neutral-500 group-hover:text-amber-600 transition-colors">
                    <span>View Project</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Presentation Expansion Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div
            id={`project-modal-${selectedProject.id}`}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            {/* Soft Ambient Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-[#0a0a0b]/85 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative bg-white text-neutral-900 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl z-10 border border-neutral-200"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black/90 text-white hover:scale-105 transition-all p-2 rounded-full cursor-pointer shadow-md"
                aria-label="Close Project Modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 sm:p-8 space-y-8">
                {/* Header */}
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-extrabold text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-sans font-extrabold tracking-tight text-neutral-950 mt-3 leading-tight">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Multiple Images Showcase Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedProject.images.map((imgUrl, i) => (
                    <div
                      key={imgUrl}
                      className={`relative overflow-hidden rounded-xl bg-neutral-100 ${
                        i === 0 && selectedProject.images.length > 1 ? 'md:col-span-2 h-[280px] sm:h-[350px]' : 'h-[180px] sm:h-[220px]'
                      }`}
                    >
                      <img
                        src={imgUrl}
                        alt={`${selectedProject.title} showcase ${i + 1}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Before and After Interactive Tab Toggles */}
                {selectedProject.hasBeforeAfter && selectedProject.beforeImg && selectedProject.afterImg && (
                  <div className="bg-neutral-50 border border-neutral-150 p-6 rounded-2xl space-y-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <h4 className="text-sm font-sans font-extrabold uppercase text-neutral-950 tracking-wider flex items-center">
                          <Grid className="w-4 h-4 text-amber-500 mr-2" />
                          Before &amp; After Comparison
                        </h4>
                        <p className="text-xs text-neutral-500">
                          Toggle between our preliminary drafting blueprints and the finished visualization renders.
                        </p>
                      </div>
                      <div className="flex bg-neutral-200 p-1 rounded-full border border-neutral-300">
                        <button
                          onClick={() => setBeforeAfterToggle('before')}
                          className={`text-xs font-semibold px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                            beforeAfterToggle === 'before'
                              ? 'bg-neutral-900 text-white shadow-sm'
                              : 'text-neutral-600 hover:text-neutral-950'
                          }`}
                        >
                          CAD / Blueprints
                        </button>
                        <button
                          onClick={() => setBeforeAfterToggle('after')}
                          className={`text-xs font-semibold px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                            beforeAfterToggle === 'after'
                              ? 'bg-amber-500 text-neutral-900 shadow-sm'
                              : 'text-neutral-600 hover:text-neutral-950'
                          }`}
                        >
                          Finished Render
                        </button>
                      </div>
                    </div>

                    <div className="relative h-[240px] sm:h-[320px] rounded-xl overflow-hidden bg-neutral-200">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={beforeAfterToggle}
                          initial={{ opacity: 0, x: beforeAfterToggle === 'before' ? -15 : 15 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: beforeAfterToggle === 'before' ? 15 : -15 }}
                          transition={{ duration: 0.3 }}
                          src={beforeAfterToggle === 'before' ? selectedProject.beforeImg : selectedProject.afterImg}
                          alt="Before or after visualization state"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </AnimatePresence>
                      <div className="absolute top-3 left-3 bg-neutral-950/70 backdrop-blur-sm text-[10px] font-bold text-white px-3 py-1 rounded">
                        {beforeAfterToggle === 'before' ? 'PRE-PROD BLUEPRINT' : 'HIGH-FIDELITY RENDER'}
                      </div>
                    </div>
                  </div>
                )}

                {/* Context & Technical Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Overview details */}
                  <div className="md:col-span-2 space-y-4">
                    <h4 className="text-base font-bold text-neutral-900 flex items-center">
                      <Briefcase className="w-5 h-5 text-amber-500 mr-2" />
                      Project Background &amp; Solution
                    </h4>
                    <p className="text-neutral-700 leading-relaxed text-sm">
                      {selectedProject.overview}
                    </p>
                  </div>

                  {/* Side metadata metadata list */}
                  <div className="bg-neutral-50 border border-neutral-150 p-5 rounded-xl space-y-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-extrabold block">Client Industry</span>
                      <strong className="text-sm text-neutral-900 font-semibold block mt-1">{selectedProject.clientIndustry}</strong>
                    </div>
                    <div className="border-t border-neutral-200 pt-3">
                      <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-extrabold block">Timeframe</span>
                      <strong className="text-sm text-neutral-900 font-semibold block mt-1 flex items-center">
                        <Calendar className="w-4 h-4 text-neutral-400 mr-1.5" />
                        {selectedProject.timeline}
                      </strong>
                    </div>
                  </div>
                </div>

                {/* Technologies and Deliverables lists */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-neutral-100 pt-6">
                  {/* Technologies tags */}
                  <div className="space-y-3">
                    <h5 className="text-xs font-bold uppercase text-neutral-500 tracking-wider flex items-center">
                      <Cpu className="w-4.5 h-4.5 text-neutral-400 mr-1.5" />
                      Technologies &amp; Systems Used
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-semibold bg-neutral-100 text-neutral-800 border border-neutral-200 px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables checklist */}
                  <div className="space-y-3">
                    <h5 className="text-xs font-bold uppercase text-neutral-500 tracking-wider flex items-center">
                      <CheckSquare className="w-4.5 h-4.5 text-neutral-400 mr-1.5" />
                      Shipped Deliverables
                    </h5>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedProject.deliverables.map((del) => (
                        <li key={del} className="flex items-center text-xs text-neutral-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Call to action at bottom */}
                <div className="border-t border-neutral-100 pt-8 text-center">
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      // Scroll to contact form smoothly
                      const contactForm = document.getElementById('contact');
                      if (contactForm) {
                        contactForm.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="inline-flex items-center space-x-2 bg-neutral-950 hover:bg-amber-500 text-white hover:text-neutral-900 font-semibold text-xs uppercase tracking-widest px-6 py-3.5 rounded-full transition-colors cursor-pointer"
                  >
                    <span>Request Similar Project</span>
                    <ArrowRight className="w-4 h-4" />
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
