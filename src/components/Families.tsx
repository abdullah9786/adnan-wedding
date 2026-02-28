"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const members = [
  { name: "Late Mohammed Idris Patel", relation: "Father of the Groom", initial: "M" },
  { name: "Ms. Saeeda Mohammed Ilyas Ansari", relation: "Mother of the Groom", initial: "S" },
];

export default function Families() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="families"
      ref={ref}
      className="relative py-14 md:py-20 px-6 islamic-pattern"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-ivory via-ivory/98 to-ivory pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-champagne-dark mb-3">
            With Love &amp; Blessings
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-charcoal">
            Host Family
          </h2>
          <div className="section-divider mt-6" />
          <p className="mt-6 text-charcoal-light font-light text-sm md:text-base max-w-md mx-auto">
            {/* The Patel &amp; Ansari family warmly welcomes you to this blessed celebration. */}
            The Patel family warmly welcomes you to this blessed celebration.
          </p>
        </motion.div>

        {/* Family card — centered */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="bg-warm-white/80 backdrop-blur-sm rounded-2xl p-5 md:p-7 border border-champagne/10 shadow-sm"
        >
          {/* Header */}
          <div className="text-center mb-5">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-champagne/10 mb-3">
              <svg
                className="w-5 h-5 text-champagne-dark"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>
            <h3 className="font-serif text-xl md:text-2xl text-charcoal">
              Patel &amp; Ansari Family
            </h3>
            <div className="flex justify-center mt-4">
              <span className="block w-10 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />
            </div>
          </div>

          {/* Members */}
          <div>
            {members.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.6 }}
                className="flex items-center gap-4 py-4 border-b border-champagne/10 last:border-b-0"
              >
                <div className="shrink-0 w-11 h-11 rounded-full bg-gradient-to-br from-champagne/20 to-champagne/5 border border-champagne/20 flex items-center justify-center">
                  <span className="font-serif text-base text-champagne-dark">
                    {member.initial}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="font-serif text-base md:text-lg text-charcoal leading-snug">
                    {member.name}
                  </p>
                  <p className="text-xs tracking-[0.15em] uppercase text-charcoal-light/50 mt-0.5">
                    {member.relation}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-8 text-center"
        >
          <div className="ornament-divider">
            <svg
              className="w-5 h-5 text-champagne/60"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
          <p className="mt-6 text-charcoal-light font-light text-sm italic">
            Bound together by the mercy of Allah
          </p>
        </motion.div>
      </div>
    </section>
  );
}
