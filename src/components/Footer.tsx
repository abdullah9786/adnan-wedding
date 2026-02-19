"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer
      ref={ref}
      className="relative py-20 md:py-28 px-6 text-center overflow-hidden islamic-pattern"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-ivory via-ivory/98 to-ivory pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Dua */}
          <p
            className="text-champagne text-lg md:text-xl mb-4"
            style={{ fontFamily: "serif" }}
          >
            رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ
            أَعْيُنٍ
          </p>
          <p className="text-xs tracking-[0.2em] uppercase text-charcoal-light/50 mb-8">
            &ldquo;Our Lord, grant us from among our spouses and offspring
            comfort to our eyes&rdquo;
            <br />
            <span className="text-[10px]">— Surah Al-Furqan 25:74</span>
          </p>

          <div className="section-divider mb-8" />

          {/* Couple names */}
          <div className="flex items-center justify-center gap-3 mb-1">
            <div className="text-center">
              <p className="font-serif text-2xl md:text-3xl text-charcoal">Adnan</p>
              <p className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-champagne-dark/60 font-normal mt-0.5">MBA</p>
            </div>
            <span className="font-serif text-xl md:text-2xl text-champagne italic">&amp;</span>
            <div className="text-center">
              <p className="font-serif text-2xl md:text-3xl text-charcoal">Tahreem</p>
              <p className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-champagne-dark/60 font-normal mt-0.5">AI Engineer</p>
            </div>
          </div>
          <p className="text-charcoal-light font-light text-sm md:text-base mb-1 mt-3">
            We look forward to celebrating with you
          </p>
          <p className="text-charcoal-light/50 text-sm font-light">
            Sunday, 29th March 2026
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 pt-8 border-t border-champagne/10"
        >
          <p className="text-xs text-charcoal-light/40 font-light tracking-wider">
            Made with love &middot; {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
