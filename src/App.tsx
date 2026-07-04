import { useState, useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { Hexagon, Heart } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);

    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const sections = [
      'hero',
      'services',
      'portfolio',
      'why-choose-us',
      'testimonials',
      'contact',
    ];

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
          rootMargin: '-50% 0px -50% 0px',
        }
      );

      observer.observe(el);

      return {
        observer,
        el,
      };
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
    <div className="relative min-h-screen overflow-x-hidden bg-[#0a0a0b] font-sans text-white selection:bg-amber-500 selection:text-neutral-900">

      {/* 1. Background */}
      <ParticleBackground />

      {/* 2. Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />

      {/* 3. Hero */}
      <Hero
        onExplorePortfolio={() => handleNavClick('portfolio')}
        onGetStarted={() => handleNavClick('contact')}
      />

      {/* 4. Services */}
      <Services />

      {/* 5. Portfolio */}
      <Portfolio />

      {/* 6. Why Choose Us */}
      <WhyChooseUs />

      {/* 7. Testimonials */}
      <Testimonials />

      {/* 8. Contact */}
      <Contact />

      {/* 9. Floating WhatsApp */}
      <FloatingWhatsApp />

      {/* Footer */}
      <footer className="relative border-t border-white/5 bg-[#050506] py-12 text-center text-xs text-neutral-500 sm:text-sm">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row">
          <div className="flex items-center space-x-2">
            <Hexagon className="h-5 w-5 fill-amber-500/10 text-amber-500" />

            <span className="font-extrabold tracking-wider text-white">
              NOVIQ
            </span>

            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500">
              Digital Agency
            </span>
          </div>

          <p className="font-light text-neutral-400">
            &copy; {new Date().getFullYear()} NOVIQ Digital Agency. All rights reserved.
          </p>

          <div className="flex items-center space-x-1.5 font-light text-neutral-400">
            <span>Delivered globally with</span>

            <Heart className="h-3.5 w-3.5 animate-pulse fill-amber-500 text-amber-500" />

            <span>from Kenya &amp; Canada</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
