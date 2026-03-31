"use client";

import { motion } from "framer-motion";
import { TagPill } from "@/components/ui/TagPill";
import { StatStrip } from "@/components/ui/StatStrip";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { trustStripSkills } from "@/data/skills";
import { stats } from "@/data/testimonials";

// Duplicate for seamless marquee loop
const marqueeSkills = [...trustStripSkills, ...trustStripSkills];

export function TrustStrip() {
  return (
    <section
      className="border-y py-16"
      style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}
    >
      <div className="content-wrapper">
        {/* Label */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-xs font-medium uppercase tracking-[0.12em] text-center mb-8"
          style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--color-accent)" }}
        >
          Areas of Deep Expertise
        </motion.p>

        {/* Marquee (mobile) / Pill grid (desktop) */}
        <div className="relative overflow-hidden md:hidden mb-10">
          <div className="flex animate-marquee gap-3 w-max">
            {marqueeSkills.map((skill, i) => (
              <TagPill key={`${skill}-${i}`} variant="tech">
                {skill}
              </TagPill>
            ))}
          </div>
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-12 pointer-events-none" style={{ background: "linear-gradient(to right, var(--color-surface), transparent)" }} />
          <div className="absolute inset-y-0 right-0 w-12 pointer-events-none" style={{ background: "linear-gradient(to left, var(--color-surface), transparent)" }} />
        </div>

        <div className="hidden md:flex flex-wrap justify-center gap-3 mb-12">
          {trustStripSkills.map((skill) => (
            <TagPill key={skill} variant="tech">{skill}</TagPill>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <StatStrip stats={stats} className="justify-center" />
        </motion.div>

        {/* Micro-copy */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center text-sm mt-6"
          style={{ color: "var(--color-text-tertiary)" }}
        >
          No junior hand-offs. No account managers. You get me, every time.
        </motion.p>
      </div>
    </section>
  );
}
