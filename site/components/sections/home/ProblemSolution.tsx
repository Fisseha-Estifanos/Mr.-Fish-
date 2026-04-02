"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { fadeUp, viewportOnce } from "@/lib/animations";

const segments = [
  {
    id: "founder",
    audience: "Startup Founders",
    problem: "You Have the Vision. But the Tech Is Holding You Back.",
    problemCopy:
      "You raised the funding. You have the market opportunity mapped out. But every week, you're making critical product decisions based on incomplete data — or worse, gut feelings. You don't know who to trust or how to evaluate the quality of what you're being built. You just know that things aren't moving fast enough.",
    solution:
      "I give non-technical founders a trustworthy, senior technical co-pilot. I translate your business goals into a precise technical roadmap, build the infrastructure to execute it, and ensure you never again have to wonder whether your codebase is solid or your data is telling you the truth.",
  },
  {
    id: "cto",
    audience: "CTOs & Tech Leaders",
    problem: "Your Team Is Talented. But They're Buried.",
    problemCopy:
      "Your engineers are exceptional — but they're consumed by maintenance, bug fixes, and everyday firefighting. Bringing in machine learning models, rebuilding data architecture, or engineering a new analytics layer? That requires specialised, focused capacity you simply don't have available without pulling people off critical work.",
    solution:
      "I come in as senior, specialised firepower — without the 6-month hiring process or the executive salary. I audit your systems, architect the solution, execute the build, and if needed, train your team to own it afterward.",
  },
  {
    id: "agency",
    audience: "Digital Agencies",
    problem: "You Won the Client. Now the Scope Is Beyond Your Team.",
    problemCopy:
      "You pitched a web project. Now the client wants a custom data dashboard, a machine learning recommendation engine, and a scalable backend that their current tech can't support. Your team is exceptional at what they do — but this is a different league. You don't want to lose the client or your reputation.",
    solution:
      "I am the silent weapon in your agency's arsenal. A white-label, senior consultant who plugs seamlessly into your workflow, handles the complex technical scope professionally, and makes your agency look like it can build anything — because, with me in your corner, it can.",
  },
];

export function ProblemSolution() {
  const [active, setActive] = useState(0);
  const current = segments[active];

  return (
    <section
      className="section-padding"
      id="problem"
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
          <SectionLabel>The Problem</SectionLabel>
          <h2
            className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold max-w-3xl mx-auto"
            style={{ fontFamily: "Clash Display, sans-serif", color: "var(--color-text-primary)" }}
          >
            Sound Familiar? Your Technology Should Be Your Biggest Asset — Not Your Biggest Headache.
          </h2>
        </motion.div>

        {/* Tab buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {segments.map((seg, i) => (
            <button
              key={seg.id}
              onClick={() => setActive(i)}
              className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                background: active === i ? "var(--color-accent)" : "transparent",
                color: active === i ? "#0a0a0f" : "var(--color-text-secondary)",
                border: `1px solid ${active === i ? "var(--color-accent)" : "var(--color-border)"}`,
              }}
            >
              {seg.audience}
            </button>
          ))}
        </motion.div>

        {/* Content panel */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {/* Problem */}
          <div className="card p-8">
            <p
              className="text-xs font-medium uppercase tracking-[0.12em] mb-4"
              style={{ fontFamily: "JetBrains Mono, monospace", color: "#ef4444" }}
            >
              The Problem
            </p>
            <h3
              className="text-xl font-bold mb-4"
              style={{ fontFamily: "Cabinet Grotesk, sans-serif", color: "var(--color-text-primary)" }}
            >
              {current.problem}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              {current.problemCopy}
            </p>
          </div>

          {/* Solution */}
          <div
            className="p-8 rounded-2xl flex flex-col justify-between gap-6"
            style={{ background: "var(--color-accent-glow-faint)", border: "1px solid var(--color-accent-border-faint)" }}
          >
            <div>
              <p
                className="text-xs font-medium uppercase tracking-[0.12em] mb-4"
                style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--color-accent)" }}
              >
                The Solution
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-text-primary)" }}>
                {current.solution}
              </p>
            </div>
            <Button href="/contact" variant="secondary" size="sm" className="self-start">
              Let&apos;s Diagnose Your Situation
            </Button>
          </div>
        </motion.div>

        {/* Transition CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mt-12"
        >
          <Button href="/contact">
            Book a Free Strategy Call
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
