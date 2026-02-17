"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const duas = [
  {
    arabic: "بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    translation:
      "May Allah bless you, and shower His blessings upon you, and join you together in goodness.",
    source: "Sunan Abu Dawud",
  },
  {
    arabic:
      "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
    translation:
      "Our Lord, grant us from among our spouses and offspring comfort to our eyes and make us a leader for the righteous.",
    source: "Surah Al-Furqan 25:74",
  },
  {
    arabic:
      "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    translation:
      "And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them, and He has put love and mercy between your hearts.",
    source: "Surah Ar-Rum 30:21",
  },
  {
    arabic: "اللَّهُمَّ أَلِّفْ بَيْنَ قُلُوبِنَا وَأَصْلِحْ ذَاتَ بَيْنِنَا",
    translation:
      "O Allah, bring our hearts together and mend our relations with one another.",
    source: "Hadith",
  },
];

export default function Blessings() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="blessings"
      ref={ref}
      className="relative py-24 md:py-32 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-ivory-dark/30 via-warm-white to-ivory pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-champagne-dark mb-3">
            In the Light of Faith
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-charcoal">
            Duas &amp; Blessings
          </h2>
          <div className="section-divider mt-6" />
          <p className="mt-6 text-charcoal-light font-light text-sm md:text-base max-w-lg mx-auto">
            Beautiful prayers for the blessed union — may Allah fill this
            marriage with love, mercy, and barakah.
          </p>
        </motion.div>

        {/* Duas grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {duas.map((dua, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.7 }}
              className="group bg-warm-white/80 backdrop-blur-sm rounded-2xl p-7 md:p-9 border border-champagne/10 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              {/* Decorative top accent */}
              <div className="flex justify-center mb-6">
                <span className="block w-8 h-px bg-gradient-to-r from-transparent via-champagne to-transparent" />
              </div>

              {/* Arabic text */}
              <p
                className="text-champagne-dark text-center text-lg md:text-xl leading-loose mb-6 direction-rtl"
                style={{ fontFamily: "serif", direction: "rtl" }}
              >
                {dua.arabic}
              </p>

              {/* Divider */}
              <div className="flex items-center justify-center gap-3 mb-5">
                <span className="block w-6 h-px bg-champagne/30" />
                <svg
                  className="w-3 h-3 text-champagne/50"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                <span className="block w-6 h-px bg-champagne/30" />
              </div>

              {/* Translation */}
              <p className="text-charcoal-light font-light text-sm md:text-[15px] leading-relaxed text-center flex-1">
                &ldquo;{dua.translation}&rdquo;
              </p>

              {/* Source */}
              <p className="text-[11px] tracking-[0.2em] uppercase text-charcoal-light/40 text-center mt-5">
                — {dua.source}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom ornament */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-center"
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
          <p className="mt-6 font-serif text-lg md:text-xl text-charcoal-light/70 italic">
            Ameen
          </p>
        </motion.div>
      </div>
    </section>
  );
}
