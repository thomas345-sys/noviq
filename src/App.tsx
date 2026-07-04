import { useState, useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { Hexagon, Heart } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Smooth click scroll handler
  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Setup IntersectionObserver to dynamically track visible section on scroll
  useEffect(() => {
    const sections = ['hero', 'services', 'portfolio', 'why-choose-us', 'testimonials', 'contact'];
    const observers = sections.map((sectionId) => {
      const el = document.getElementById(sectionId);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        },
        {
          rootMargin: '-50% 0px -50% 0px', // Triggers when section occupies middle of screen
        }
      );

      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el);
        }
      });
    };
  }, []);

  return (
    <div className="relative text-white font-sans bg-[#0a0a0b] selection:bg-amber-500 selection:text-neutral-900 overflow-x-hidden min-h-screen">
      {/* 1. Technical blueprint particle canvas background */}
      <ParticleBackground />

      {/* 2. Glassmorphism fixed Navigation bar */}
      <Navbar activeSection={activeSection} onNavClick={handleNavClick} />

      {/* 3. Full-screen Slideshow Hero Section */}
      <Hero
        onExplorePortfolio={() => handleNavClick('portfolio')}
        onGetStarted={() => handleNavClick('contact')}
      />

      {/* 4. Animated counters section */}
      <Stats />

      {/* 5. Custom Premium Services Grid */}
      <Services />

      {/* 6. Pinterest Masonry Portfolio */}
      <Portfolio />

      {/* 7. Animated floating cards core values section */}
      <WhyChooseUs />

      {/* 8. Client Testimonials Carousel */}
      <Testimonials />

      {/* 9. High-converting inquiry form with file attachment */}
      <Contact />

      {/* 10. Floating WhatsApp regional quicklinks */}
      <FloatingWhatsApp />

      {/* 11. Custom Footnotes */}
      <footer className="relative py-12 border-t border-white/5 bg-[#050506] text-neutral-500 text-center text-xs sm:text-sm space-y-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-2">
            <Hexagon className="w-5 h-5 text-amber-500 fill-amber-500/10" />
            <span className="font-extrabold text-white tracking-wider">NOVIQ</span>
            <span className="text-[10px] text-amber-500 tracking-widest font-bold uppercase">Digital Agency</span>
          </div>
          
          <p className="font-light text-neutral-400">
            &copy; {new Date().getFullYear()} NOVIQ Digital Agency. All rights reserved.
          </p>

          <div className="flex items-center space-x-1.5 font-light text-neutral-400">
            <span>Delivered globally with</span>
            <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500 animate-pulse" />
            <span>from Kenya &amp; Canada</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
