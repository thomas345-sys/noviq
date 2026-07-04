import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, HelpCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const kenyaWhatsApp = 'https://wa.me/254705141011?text=Hello%20NOVIQ%20Digital%20Agency%20Kenya,%20I%20have%20an%20inquiry.';
  const canadaWhatsApp = 'https://wa.me/14389926442?text=Hello%20NOVIQ%20Digital%20Agency%20Canada,%20I%20have%20an%20inquiry.';

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center">
      
      {/* Expanded quick contact buttons represented solely by visual flag icons */}
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col items-center mb-4 space-y-3">
            {/* Canada Hub WhatsApp Button */}
            <motion.a
              href={canadaWhatsApp}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 15, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.8 }}
              transition={{ duration: 0.25 }}
              title="Contact Canada Hub"
              className="w-12 h-12 rounded-full bg-white hover:bg-neutral-100 flex items-center justify-center shadow-lg border border-neutral-200 text-2xl hover:scale-110 active:scale-95 transition-transform cursor-pointer"
            >
              🇨🇦
            </motion.a>

            {/* Kenya Hub WhatsApp Button */}
            <motion.a
              href={kenyaWhatsApp}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 15, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.8 }}
              transition={{ duration: 0.25, delay: 0.05 }}
              title="Contact Kenya Hub"
              className="w-12 h-12 rounded-full bg-white hover:bg-neutral-100 flex items-center justify-center shadow-lg border border-neutral-200 text-2xl hover:scale-110 active:scale-95 transition-transform cursor-pointer"
            >
              🇰🇪
            </motion.a>
          </div>
        )}
      </AnimatePresence>

      {/* Primary Pulsing Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        animate={
          !isOpen
            ? {
                boxShadow: [
                  '0 0 0 0 rgba(16, 185, 129, 0.4)',
                  '0 0 0 15px rgba(16, 185, 129, 0)',
                  '0 0 0 0 rgba(16, 185, 129, 0)',
                ],
              }
            : {}
        }
        transition={{
          repeat: Infinity,
          duration: 2.0,
          ease: 'easeInOut',
        }}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-105 active:scale-95 cursor-pointer text-white ${
          isOpen ? 'bg-neutral-900 rotate-90' : 'bg-emerald-500 hover:bg-emerald-600'
        }`}
        aria-label="Direct Chat Channels"
      >
        {isOpen ? (
          <span className="text-sm font-extrabold uppercase tracking-widest text-amber-500">X</span>
        ) : (
          <MessageCircle className="w-7 h-7" />
        )}
      </motion.button>
    </div>
  );
}
