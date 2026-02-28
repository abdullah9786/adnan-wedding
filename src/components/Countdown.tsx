"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const WALIMA_DATE = new Date("2026-03-29T20:30:00").getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const now = Date.now();
  const diff = Math.max(WALIMA_DATE - now, 0);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function CountdownUnit({
  value,
  label,
  delay,
}: {
  value: number;
  label: string;
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="flex flex-col items-center"
    >
      <div className="countdown-digit rounded-2xl w-20 h-20 md:w-28 md:h-28 flex items-center justify-center shadow-sm">
        <span
          className="font-serif text-3xl md:text-5xl text-charcoal"
          suppressHydrationWarning
        >
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <p className="mt-3 text-xs tracking-[0.2em] uppercase text-charcoal-light/60 font-light">
        {label}
      </p>
    </motion.div>
  );
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-14 md:py-20 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-ivory to-ivory-dark/30 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-champagne-dark mb-3">
            Save the Date
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-charcoal">
            Counting Down
          </h2>
          <div className="section-divider mt-6" />
        </motion.div>

        <div className="flex justify-center gap-4 md:gap-5">
          <CountdownUnit value={timeLeft?.days ?? 0} label="Days" delay={0.2} />
          <CountdownUnit value={timeLeft?.hours ?? 0} label="Hours" delay={0.35} />
          <CountdownUnit
            value={timeLeft?.minutes ?? 0}
            label="Minutes"
            delay={0.5}
          />
          <CountdownUnit
            value={timeLeft?.seconds ?? 0}
            label="Seconds"
            delay={0.65}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 text-charcoal-light font-light text-sm md:text-base"
        >
          Sunday, 29th March 2026 &middot; 8:30 PM
        </motion.p>
      </div>
    </section>
  );
}
