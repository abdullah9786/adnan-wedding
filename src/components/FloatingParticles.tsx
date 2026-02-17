"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
  drift: number;
  type: "circle" | "star" | "diamond";
}

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 8,
    duration: Math.random() * 8 + 14,
    opacity: Math.random() * 0.3 + 0.15,
    drift: (Math.random() - 0.5) * 80,
    type: (["circle", "star", "diamond"] as const)[
      Math.floor(Math.random() * 3)
    ],
  }));
}

function StarShape({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      width={size * 3.5}
      height={size * 3.5}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2L13.09 8.26L18 6L14.74 10.91L21 12L14.74 13.09L18 18L13.09 15.74L12 22L10.91 15.74L6 18L9.26 13.09L3 12L9.26 10.91L6 6L10.91 8.26L12 2Z" />
    </svg>
  );
}

function DiamondShape({
  size,
  className,
}: {
  size: number;
  className?: string;
}) {
  return (
    <svg
      width={size * 3}
      height={size * 3}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2L22 12L12 22L2 12L12 2Z" />
    </svg>
  );
}

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(generateParticles(35));
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[30] overflow-hidden">
      {/* Falling particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{ left: `${p.x}%` }}
          initial={{ y: "-5%", x: 0, opacity: 0 }}
          animate={{
            y: "105vh",
            x: [0, p.drift, 0],
            opacity: [0, p.opacity, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
            x: {
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          {p.type === "circle" && (
            <div
              className="rounded-full bg-champagne"
              style={{ width: p.size, height: p.size }}
            />
          )}
          {p.type === "star" && (
            <StarShape size={p.size} className="text-champagne" />
          )}
          {p.type === "diamond" && (
            <DiamondShape size={p.size} className="text-champagne" />
          )}
        </motion.div>
      ))}

      {/* Stationary twinkling shimmer spots */}
      {particles.slice(0, 12).map((p) => (
        <motion.div
          key={`twinkle-${p.id}`}
          className="absolute rounded-full bg-champagne"
          style={{
            left: `${(p.x + 30) % 100}%`,
            top: `${(p.delay / 8) * 100}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{ opacity: [0, p.opacity * 0.9, 0] }}
          transition={{
            duration: p.duration * 0.35,
            delay: p.delay * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
