"use client";

import { motion } from "framer-motion";
import { Layers, BarChart2, Shield } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer, staggerChild, viewportOnce } from "@/lib/animations";

const valueBlocks = [
  {
    icon: Layers,
    title: "End-to-End Architecture",
    body: "From database design and API engineering to front-end interfaces and data pipelines — I build the complete system, not just one piece of it.",
  },
  {
    icon: BarChart2,
    title: "Data Turned Into Decisions",
    body: "Raw data is worthless until it becomes insight. I design predictive models and analytics systems that give you the strategic clarity to act with confidence and speed.",
  },
  {
    icon: Shield,
    title: "Strategic Consulting Rigor",
    body: "Beyond writing code, I bring executive-level technical leadership. Auditing your existing architecture, eliminating costly bottlenecks, and building the roadmap your engineers can actually execute.",
  },
];

export function ValueProp() {
  return (
    <section className="section-padding" id="value">
      <div className="content-wrapper">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <SectionLabel>Why Mr. Fish</SectionLabel>
          <h2
            className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold mb-6"
            style={{ fontFamily: "Clash Display, sans-serif", color: "var(--color-text-primary)" }}
          >
            One Expert Who Sees the Entire Chessboard.
          </h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--color-text-secondary)" }}>
            Most technical consultants are specialists. They go deep in one lane — and that&apos;s
            exactly where the cracks appear. You end up managing three freelancers who speak
            different languages, deliver siloed work, and point fingers when something breaks.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
            As a hybrid Data Science and Full-Stack Software Consultant, I architect the full
            technical picture — from the backend data infrastructure that powers your decisions to
            the front-end experience your customers actually see and use. I don&apos;t just execute
            tasks. I function as your strategic technical partner.
          </p>
        </motion.div>

        {/* Three-column blocks */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {valueBlocks.map((block) => {
            const Icon = block.icon;
            return (
              <motion.div
                key={block.title}
                variants={staggerChild}
                className="card p-8 flex flex-col gap-4"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(0,212,255,0.1)" }}
                >
                  <Icon size={24} style={{ color: "var(--color-accent)" }} />
                </div>
                <h3
                  className="text-lg font-bold"
                  style={{ fontFamily: "Cabinet Grotesk, sans-serif", color: "var(--color-text-primary)" }}
                >
                  {block.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                  {block.body}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-12"
        >
          <Button href="/services">See My Services</Button>
          <Button href="/contact" variant="secondary">Book a Discovery Call</Button>
        </motion.div>
      </div>
    </section>
  );
}
