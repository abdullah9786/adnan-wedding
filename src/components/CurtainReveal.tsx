"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RevealContext } from "@/contexts/RevealContext";

const panelEase = [0.76, 0, 0.24, 1] as const;

export default function CurtainReveal({
  children,
}: {
  children: React.ReactNode;
}) {
  const [revealed, setRevealed] = useState(false);

  const open = useCallback(() => setRevealed(true), []);

  useEffect(() => {
    const timer = setTimeout(open, 4500);
    return () => clearTimeout(timer);
  }, [open]);

  return (
    <RevealContext.Provider value={revealed}>
      {/* Website content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={revealed ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {children}
      </motion.div>

      {/* Curtain overlay */}
      <AnimatePresence>
        {!revealed && (
          <motion.div key="curtain" className="fixed inset-0 z-[200]">
            {/* Dark vignette background behind everything */}
            <motion.div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, #1a1a1a 0%, #111 60%, #0a0a0a 100%)",
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />

            {/* ─── LEFT CURTAIN ─── */}
            <motion.div
              className="absolute top-0 left-0 h-full w-[20%] md:w-[35%]"
              exit={{ x: "-110%" }}
              transition={{ duration: 1.5, ease: panelEase }}
            >
              {/* Main fabric */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, #2a2a2a 0%, #1e1e1e 60%, #252525 100%)",
                }}
              />
              <div className="absolute inset-0 islamic-pattern opacity-10" />

              {/* Fabric folds - vertical light streaks */}
              <div className="absolute top-0 left-[20%] w-3 h-full bg-gradient-to-r from-white/[0.02] to-transparent" />
              <div className="absolute top-0 left-[50%] w-2 h-full bg-gradient-to-r from-white/[0.015] to-transparent" />

              {/* Draped inner edge — curved shadow to simulate gathered fabric */}
              <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-black/50 via-black/20 to-transparent" />
              <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-black/30 to-transparent" />

              {/* Gold trim on inner draped edge */}
              <div className="absolute top-[3%] right-3 w-px h-[94%] bg-gradient-to-b from-champagne/10 via-champagne/40 to-champagne/10" />
              <div className="absolute top-[6%] right-6 w-px h-[88%] bg-gradient-to-b from-transparent via-champagne/15 to-transparent" />

              {/* Tassel at bottom of drape */}
              <div className="absolute bottom-[8%] right-2 w-px h-10 bg-gradient-to-b from-champagne/40 to-champagne/10" />
              <div className="absolute bottom-[6%] right-1.5 w-1.5 h-1.5 rounded-full bg-champagne/30" />
            </motion.div>

            {/* ─── RIGHT CURTAIN ─── */}
            <motion.div
              className="absolute top-0 right-0 h-full w-[20%] md:w-[35%]"
              exit={{ x: "110%" }}
              transition={{ duration: 1.5, ease: panelEase }}
            >
              {/* Main fabric */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(225deg, #2a2a2a 0%, #1e1e1e 60%, #252525 100%)",
                }}
              />
              <div className="absolute inset-0 islamic-pattern opacity-10" />

              {/* Fabric folds */}
              <div className="absolute top-0 right-[20%] w-3 h-full bg-gradient-to-l from-white/[0.02] to-transparent" />
              <div className="absolute top-0 right-[50%] w-2 h-full bg-gradient-to-l from-white/[0.015] to-transparent" />

              {/* Draped inner edge */}
              <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
              <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-black/30 to-transparent" />

              {/* Gold trim on inner draped edge */}
              <div className="absolute top-[3%] left-3 w-px h-[94%] bg-gradient-to-b from-champagne/10 via-champagne/40 to-champagne/10" />
              <div className="absolute top-[6%] left-6 w-px h-[88%] bg-gradient-to-b from-transparent via-champagne/15 to-transparent" />

              {/* Tassel */}
              <div className="absolute bottom-[8%] left-2 w-px h-10 bg-gradient-to-b from-champagne/40 to-champagne/10" />
              <div className="absolute bottom-[6%] left-1.5 w-1.5 h-1.5 rounded-full bg-champagne/30" />
            </motion.div>

            {/* ─── CENTER STAGE CONTENT ─── */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
              {/* Soft spotlight glow behind content */}
              <div className="absolute w-80 h-80 rounded-full bg-champagne/[0.03] blur-3xl" />

              {/* Bismillah */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10, transition: { duration: 0.4 } }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-champagne/80 text-base md:text-lg mb-8"
                style={{ fontFamily: "serif" }}
              >
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </motion.p>

              {/* Groom name */}
              <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.6 } }}
                exit={{
                  scale: 1.35,
                  y: -15,
                  opacity: 0,
                  transition: { duration: 1.1, delay: 0.05 },
                }}
                className="font-serif text-3xl md:text-5xl text-warm-white tracking-wide"
              >
                Adnan
              </motion.p>

              {/* Ampersand */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.6, delay: 0.9 } }}
                exit={{
                  scale: 1.2,
                  opacity: 0,
                  transition: { duration: 0.8, delay: 0.1 },
                }}
                className="font-serif text-xl md:text-2xl text-champagne my-3"
              >
                &amp;
              </motion.p>

              {/* Bride name */}
              <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.8, delay: 1.0 } }}
                exit={{
                  scale: 1.35,
                  y: 15,
                  opacity: 0,
                  transition: { duration: 1.1, delay: 0.05 },
                }}
                className="font-serif text-3xl md:text-5xl text-warm-white tracking-wide"
              >
                Tahreem
              </motion.p>

              {/* Decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1, transition: { delay: 1.4, duration: 0.6 } }}
                exit={{ scaleX: 0, opacity: 0, transition: { duration: 0.4 } }}
                className="w-24 h-px bg-gradient-to-r from-transparent via-champagne to-transparent mt-7 mb-6"
              />

              {/* Open invitation button */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 1.6, duration: 0.6 } }}
                exit={{ opacity: 0, y: 10, transition: { duration: 0.3 } }}
                onClick={open}
                className="pointer-events-auto group relative"
              >
                <span className="block px-8 py-3 border border-champagne/50 rounded-full text-xs md:text-sm tracking-[0.3em] uppercase text-champagne hover:bg-champagne/10 transition-all duration-500 group-hover:border-champagne">
                  Open Invitation
                </span>
                <span className="absolute inset-0 rounded-full bg-champagne/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </RevealContext.Provider>
  );
}
