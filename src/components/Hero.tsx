"use client";

import { motion } from "framer-motion";
import { useGuestParams } from "@/hooks/useGuestParams";
import { useRevealed } from "@/contexts/RevealContext";

export default function Hero() {
  const { guestName, withFamily } = useGuestParams();
  const revealed = useRevealed();

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 25 },
    animate: revealed
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 25 },
    transition: { delay, duration: 0.7, ease: "easeOut" as const },
  });

  const nameReveal = (delay: number) => ({
    initial: { opacity: 0, scale: 0.85, y: 20 },
    animate: revealed
      ? { opacity: 1, scale: 1, y: 0 }
      : { opacity: 0, scale: 0.85, y: 20 },
    transition: { delay, duration: 0.9, ease: "easeOut" as const },
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden islamic-pattern"
    >
      {/* Soft radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-ivory via-ivory/95 to-ivory-dark/50 pointer-events-none" />

      {/* Decorative corner ornaments */}
      <div className="absolute top-8 left-8 w-20 h-20 border-t border-l border-champagne/30 rounded-tl-sm" />
      <div className="absolute top-8 right-8 w-20 h-20 border-t border-r border-champagne/30 rounded-tr-sm" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-b border-l border-champagne/30 rounded-bl-sm" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-b border-r border-champagne/30 rounded-br-sm" />

      <div className="relative z-10 text-center px-6 max-w-3xl">
        {/* Bismillah */}
        <motion.p
          {...fadeUp(0.6)}
          className="text-champagne text-lg md:text-xl mb-8 tracking-wider"
          style={{ fontFamily: "serif" }}
        >
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </motion.p>

        {/* Ornament */}
        <motion.div
          {...fadeUp(0.8)}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <span className="block w-16 md:w-24 h-px bg-gradient-to-r from-transparent to-champagne" />
          <svg
            className="w-5 h-5 text-champagne"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
          <span className="block w-16 md:w-24 h-px bg-gradient-to-l from-transparent to-champagne" />
        </motion.div>

        {/* Personalized guest welcome */}
        {guestName && (
          <motion.p
            {...fadeUp(0.9)}
            className="text-sm md:text-base text-charcoal-light font-light mb-8"
          >
            Dear{" "}
            <span className="font-serif text-base md:text-lg text-champagne-dark font-medium">
              {guestName}
              {withFamily && " & Family"}
            </span>
          </motion.p>
        )}

        {/* Subtitle above names */}
        <motion.p
          {...fadeUp(1.0)}
          className="text-sm md:text-base tracking-[0.3em] uppercase text-charcoal-light font-light mb-6"
        >
          You are cordially invited to the
        </motion.p>

        <motion.p
          {...fadeUp(1.1)}
          className="text-xs md:text-sm tracking-[0.4em] uppercase text-champagne-dark font-medium mb-10"
        >
          Dawat-e-Walima
        </motion.p>

        {/* Groom name — emerges from curtain morph */}
        <motion.h1
          {...nameReveal(0.5)}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-charcoal tracking-wide leading-tight"
        >
          Adnan
        </motion.h1>
        <motion.p
          {...fadeUp(1.3)}
          className="text-[11px] md:text-xs tracking-[0.25em] uppercase text-champagne-dark/70 font-normal mt-2"
        >
          MBA
        </motion.p>

        {/* Ampersand */}
        <motion.div
          {...nameReveal(0.65)}
          className="my-4 md:my-6"
        >
          <span className="font-serif text-2xl md:text-3xl text-champagne italic">
            &amp;
          </span>
        </motion.div>

        {/* Bride name — emerges from curtain morph */}
        <motion.h1
          {...nameReveal(0.55)}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-charcoal tracking-wide leading-tight"
        >
          Tahreem
        </motion.h1>
        <motion.p
          {...fadeUp(1.35)}
          className="text-[11px] md:text-xs tracking-[0.25em] uppercase text-champagne-dark/70 font-normal mt-2"
        >
          AI Engineer
        </motion.p>

        {/* Date */}
        <motion.div
          {...fadeUp(1.5)}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <span className="block w-8 h-px bg-champagne/40" />
          <p className="text-base md:text-lg tracking-widest text-charcoal-light font-light">
            Sunday, 29th March 2026
          </p>
          <span className="block w-8 h-px bg-champagne/40" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={revealed ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-[0.3em] uppercase text-charcoal-light/60 font-light">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-champagne to-transparent"
        />
      </motion.div>
    </section>
  );
}
