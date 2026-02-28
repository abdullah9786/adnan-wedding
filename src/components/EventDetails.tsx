"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function EventBlock({
  title,
  subtitle,
  date,
  time,
  venue,
  address,
  index,
  isInView,
}: {
  title: string;
  subtitle: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2 + index * 0.25, duration: 0.7 }}
      className="bg-warm-white/80 backdrop-blur-sm rounded-2xl border border-champagne/10 shadow-sm overflow-hidden"
    >
      {/* Header band */}
      <div className="bg-gradient-to-r from-champagne/10 via-champagne/5 to-champagne/10 px-5 py-4 md:px-8 md:py-5 text-center border-b border-champagne/10">
        <h3 className="font-serif text-xl md:text-2xl text-charcoal">
          {title}
        </h3>
        <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-charcoal-light/50 mt-1">
          {subtitle}
        </p>
      </div>

      {/* Details row */}
      <div className="px-5 py-5 md:px-8 md:py-6 flex items-center justify-between gap-3 text-center">
        {/* Date */}
        <div className="flex-1">
          <svg className="w-4 h-4 md:w-5 md:h-5 mx-auto text-champagne-dark/60 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
          </svg>
          <p className="font-serif text-sm md:text-base text-charcoal leading-snug">{date}</p>
        </div>

        {/* Divider */}
        <div className="w-px h-10 bg-champagne/20" />

        {/* Time */}
        <div className="flex-1">
          <svg className="w-4 h-4 md:w-5 md:h-5 mx-auto text-champagne-dark/60 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="font-serif text-sm md:text-base text-charcoal leading-snug">{time}</p>
        </div>

        {/* Divider */}
        <div className="w-px h-10 bg-champagne/20" />

        {/* Venue */}
        <div className="flex-1">
          <svg className="w-4 h-4 md:w-5 md:h-5 mx-auto text-champagne-dark/60 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <p className="font-serif text-sm md:text-base text-charcoal leading-snug">{venue}</p>
        </div>
      </div>

      {/* Address footer */}
      <div className="px-5 pb-4 md:px-8 md:pb-5">
        <p className="text-center text-xs md:text-sm text-charcoal-light/60 font-light">
          {address}
        </p>
      </div>
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
      className="relative py-14 md:py-20 px-4 md:px-6 islamic-pattern"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-ivory via-ivory/98 to-ivory pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-champagne-dark mb-3">
            Insha Allah
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-charcoal">
            Event Details
          </h2>
          <div className="section-divider mt-6" />
        </motion.div>

        {/* Events */}
        <div className="space-y-6">
          <EventBlock
            title="Nikah"
            subtitle="The Sacred Union"
            date="Sat, 28th Mar"
            time="11:00 AM"
            venue="Sunni Badi Masjid"
            address="M. Azad Road, Mumbai - 400 008"
            index={0}
            isInView={isInView}
          />

          <EventBlock
            title="Dawat-e-Walima"
            subtitle="The Wedding Feast"
            date="Sun, 29th Mar"
            time="8:30 – 11:30 PM"
            venue="Mehfil Hall"
            address="Morland Road, Mumbai - 400 008"
            index={1}
            isInView={isInView}
          />
        </div>

        {/* Map embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-6 rounded-2xl overflow-hidden border border-champagne/10 shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.5!2d72.8350!3d18.9650!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce1f0000001%3A0x0!2sMorland+Road+Mumbai!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="200"
            className="w-full md:h-[320px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mehfil Hall, Morland Road, Mumbai"
          />
        </motion.div>
      </div>
    </section>
  );
}
