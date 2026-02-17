"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const nikahDetails = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    label: "Date",
    value: "Saturday, 28th March 2026",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Time",
    value: "11:00 AM Sharp",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "Venue",
    value: "Sunni Badi Masjid",
  },
];

const walimaDetails = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    label: "Date",
    value: "Sunday, 29th March 2026",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Time",
    value: "8:30 PM to 11:30 PM",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "Venue",
    value: "Mehfil Hall",
  },
];

function EventCard({
  item,
  index,
  isInView,
}: {
  item: (typeof nikahDetails)[0];
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
      className="bg-warm-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-champagne/10 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-champagne/10 text-champagne-dark mb-4">
        {item.icon}
      </div>
      <p className="text-xs tracking-[0.2em] uppercase text-charcoal-light/60 mb-2">
        {item.label}
      </p>
      <p className="font-serif text-lg md:text-xl text-charcoal">{item.value}</p>
    </motion.div>
  );
}

export default function EventDetails() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="details"
      ref={ref}
      className="relative py-24 md:py-32 px-6 islamic-pattern"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-ivory via-ivory/98 to-ivory pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-champagne-dark mb-3">
            Insha Allah
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-charcoal">
            Event Details
          </h2>
          <div className="section-divider mt-6" />
        </motion.div>

        {/* ── NIKAH ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mb-16"
        >
          <h3 className="text-center font-serif text-2xl md:text-3xl text-charcoal mb-2">
            Nikah
          </h3>
          <p className="text-center text-xs tracking-[0.2em] uppercase text-charcoal-light/50 mb-8">
            The Sacred Union
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {nikahDetails.map((item, i) => (
              <EventCard key={item.label} item={item} index={i} isInView={isInView} />
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="text-center text-charcoal-light font-light leading-relaxed mt-6 text-sm md:text-base"
          >
            Sunni Badi Masjid, M. Azad Road, Mumbai&nbsp;-&nbsp;400&nbsp;008
          </motion.p>
        </motion.div>

        {/* Divider between events */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className="block w-16 md:w-28 h-px bg-gradient-to-r from-transparent to-champagne/40" />
          <svg className="w-4 h-4 text-champagne/50" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
          <span className="block w-16 md:w-28 h-px bg-gradient-to-l from-transparent to-champagne/40" />
        </div>

        {/* ── DAWAT-E-WALIMA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <h3 className="text-center font-serif text-2xl md:text-3xl text-charcoal mb-2">
            Dawat-e-Walima
          </h3>
          <p className="text-center text-xs tracking-[0.2em] uppercase text-charcoal-light/50 mb-8">
            The Wedding Feast
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {walimaDetails.map((item, i) => (
              <EventCard key={item.label} item={item} index={i + 3} isInView={isInView} />
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.7 }}
            className="text-center text-charcoal-light font-light leading-relaxed mt-6 text-sm md:text-base"
          >
            Mehfil Hall, Morland Road, Mumbai&nbsp;-&nbsp;400&nbsp;008
          </motion.p>
        </motion.div>

        {/* Map embed — Walima venue area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-14 rounded-2xl overflow-hidden border border-champagne/10 shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.5!2d72.8350!3d18.9650!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce1f0000001%3A0x0!2sMorland+Road+Mumbai!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mehfil Hall, Morland Road, Mumbai"
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
