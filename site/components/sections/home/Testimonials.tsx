"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { StatStrip } from "@/components/ui/StatStrip";
import { staggerContainer, staggerChild, fadeUp, viewportOnce } from "@/lib/animations";
import { testimonials, stats } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section
      className="section-padding"
      id="testimonials"
      style={{ background: "var(--color-surface)" }}
    >
      <div className="content-wrapper">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-12"
        >
          <SectionLabel>Results That Speak</SectionLabel>
          <h2
            className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold mb-4"
            style={{ fontFamily: "Clash Display, sans-serif", color: "var(--color-text-primary)" }}
          >
            What Happens When Ambition Meets Apex Expertise.
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "var(--color-text-secondary)" }}>
            From early-stage founders to enterprise innovation leaders, here is what clients
            experience when they stop managing fragmented teams and start working with a single,
            high-calibre technical partner.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div key={t.id} variants={staggerChild}>
              <TestimonialCard testimonial={t} />
            </motion.div>
          ))}
        </motion.div>

        {/* Metrics */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 rounded-2xl py-8"
          style={{ background: "var(--color-surface-raised)", border: "1px solid var(--color-border)" }}
        >
          <StatStrip stats={stats} />
        </motion.div>

        {/* "As featured in" placeholder */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 text-center"
        >
          <p
            className="text-xs font-medium uppercase tracking-[0.12em] mb-6"
            style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--color-text-tertiary)" }}
          >
            As Featured In / Worked With
          </p>
          <div
            className="flex flex-wrap justify-center items-center gap-8 opacity-40"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {/* Add real logos here once available */}
            {["Partner Brand", "Client Logo", "Publication", "Institution"].map((name) => (
              <span key={name} className="text-sm font-medium">{name}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
