"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface FamilyMember {
  name: string;
  relation: string;
  inital: string;
}

interface FamilyGroup {
  title: string;
  subtitle: string;
  members: FamilyMember[];
}

const families: FamilyGroup[] = [
  {
    title: "Groom\u2019s Family",
    subtitle: "Patel & Ansari Family",
    members: [
      { name: "Late Mohammed Idris Patel", relation: "Father of the Groom", inital: "I" },
      { name: "Ms. Saeeda Mohammed Ilyas Ansari", relation: "Mother of the Groom", inital: "S" },
    ],
  },
  {
    title: "Bride\u2019s Family",
    subtitle: "Khan Family",
    members: [
      { name: "Javed Khan", relation: "Father of the Bride", inital: "J" },
    ],
  },
];

function MemberCard({
  member,
  index,
  isInView,
}: {
  member: FamilyMember;
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.15 + index * 0.1, duration: 0.6 }}
      className="flex items-center gap-4 py-4 border-b border-champagne/10 last:border-b-0"
    >
      {/* Monogram circle */}
      <div className="shrink-0 w-11 h-11 rounded-full bg-gradient-to-br from-champagne/20 to-champagne/5 border border-champagne/20 flex items-center justify-center">
        <span className="font-serif text-base text-champagne-dark">
          {member.inital}
        </span>
      </div>

      <div className="min-w-0">
        <p className="font-serif text-base md:text-lg text-charcoal leading-snug truncate">
          {member.name}
        </p>
        <p className="text-xs tracking-[0.15em] uppercase text-charcoal-light/50 mt-0.5">
          {member.relation}
        </p>
      </div>
    </motion.div>
  );
}

export default function Families() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="families"
      ref={ref}
      className="relative py-24 md:py-32 px-6 islamic-pattern"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-ivory via-ivory/98 to-ivory pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-champagne-dark mb-3">
            With Love &amp; Blessings
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-charcoal">
            The Families
          </h2>
          <div className="section-divider mt-6" />
          <p className="mt-6 text-charcoal-light font-light text-sm md:text-base max-w-lg mx-auto">
            Two families coming together, united in faith and celebration.
          </p>
        </motion.div>

        {/* Family cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {families.map((family, fi) => (
            <motion.div
              key={family.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + fi * 0.2, duration: 0.7 }}
              className="bg-warm-white/80 backdrop-blur-sm rounded-2xl p-7 md:p-9 border border-champagne/10 shadow-sm"
            >
              {/* Family title */}
              <div className="text-center mb-6">
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
                  {family.title}
                </h3>
                <p className="text-xs tracking-[0.2em] uppercase text-charcoal-light/40 mt-1">
                  {family.subtitle}
                </p>
                <div className="flex justify-center mt-4">
                  <span className="block w-10 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />
                </div>
              </div>

              {/* Members */}
              <div>
                {family.members.map((member, mi) => (
                  <MemberCard
                    key={member.name}
                    member={member}
                    index={fi * 3 + mi}
                    isInView={isInView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-14 text-center"
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
