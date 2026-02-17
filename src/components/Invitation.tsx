"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useGuestParams } from "@/hooks/useGuestParams";

export default function Invitation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { guestName, withFamily } = useGuestParams();

  return (
    <section
      id="invitation"
      ref={ref}
      className="relative py-24 md:py-32 px-6 overflow-hidden"
    >
      {/* Soft background */}
      <div className="absolute inset-0 bg-gradient-to-b from-ivory-dark/30 via-warm-white to-ivory pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Top ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <div className="ornament-divider">
            <svg
              className="w-6 h-6 text-champagne"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
        </motion.div>

        {/* Personalized guest greeting */}
        {guestName && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mb-10"
          >
            <p className="text-xs tracking-[0.3em] uppercase text-champagne-dark/70 mb-2">
              Dear
            </p>
            <p className="font-serif text-2xl md:text-3xl text-charcoal">
              {guestName}
              {withFamily && (
                <span className="text-champagne-dark"> &amp; Family</span>
              )}
            </p>
            <div className="flex justify-center mt-4">
              <span className="block w-12 h-px bg-gradient-to-r from-transparent via-champagne to-transparent" />
            </div>
          </motion.div>
        )}

        {/* Quranic verse */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-champagne-dark font-serif text-lg md:text-xl italic mb-8"
        >
          &ldquo;And among His signs is that He created for you mates from among
          yourselves, that you may dwell in tranquility with them, and He has
          put love and mercy between your hearts.&rdquo;
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xs tracking-[0.3em] uppercase text-charcoal-light/60 mb-12"
        >
          Surah Ar-Rum 30:21
        </motion.p>

        {/* Invitation message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-base md:text-lg leading-relaxed text-charcoal-light font-light">
            <span className="font-serif text-xl md:text-2xl text-charcoal block mb-3">
              Ms. Saeeda Mohammed Ilyas Ansari
            </span>
            solicits your esteemed presence on the auspicious occasion of the
            wedding ceremony of her son
          </p>

          <div className="py-4">
            <p className="font-serif text-3xl md:text-4xl text-charcoal">
              Adnan Patel
            </p>
            <p className="text-sm text-charcoal-light/60 font-light mt-1">
              S/o Late Mohammed Idris Patel
            </p>
          </div>

          <p className="font-serif text-xl text-champagne italic">with</p>

          <div className="py-4">
            <p className="font-serif text-3xl md:text-4xl text-charcoal">
              Tahreem Khan
            </p>
            <p className="text-sm text-charcoal-light/60 font-light mt-1">
              D/o Javed Khan
            </p>
          </div>
        </motion.div>

        {/* Compliments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12"
        >
          <p className="text-xs tracking-[0.25em] uppercase text-champagne-dark mb-2">
            With Best Compliments From
          </p>
          <p className="font-serif text-lg text-charcoal">
            Irfan Mohd Ilyas Ansari
          </p>
          <p className="text-sm text-charcoal-light/60 font-light mt-1">
            Relatives &amp; Friends
          </p>
        </motion.div>

        {/* Bottom ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12"
        >
          <div className="section-divider" />
        </motion.div>
      </div>
    </section>
  );
}
