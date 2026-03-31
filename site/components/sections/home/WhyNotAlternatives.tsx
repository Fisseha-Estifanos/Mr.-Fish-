"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { staggerContainer, staggerChild, fadeUp, viewportOnce } from "@/lib/animations";
import { CALENDLY_URL } from "@/lib/constants";

const comparisons = [
  {
    title: "Why Not a Large Agency?",
    copy: "Agencies pitch you with their senior partners. They build your project with their juniors. By the time you notice the quality gap, you're 60 days in and three invoices deep. With Mr. Fish, there is no bait-and-switch. You get direct, senior-level expertise on every interaction — every call, every commit, every decision.",
    tag: "The difference: Direct access. Always.",
  },
  {
    title: "Why Not Hire Three Separate Freelancers?",
    copy: "A pure data scientist can't integrate their model into your app. A front-end developer can't architect your database. When the work breaks at the seams between them, who owns the problem? With Mr. Fish, the answer is always the same person: me. End-to-end responsibility means no blame game, no integration failures, and no project falling through the cracks.",
    tag: "The difference: One owner. The entire stack.",
  },
  {
    title: "Why Not a No-Code Tool or SaaS Platform?",
    copy: "No-code tools are brilliant — for prototypes. The moment you need real customisation, true data ownership, or the ability to scale beyond the platform's ceiling, you hit a wall. I build proprietary, custom architecture that you own outright. Not a technology rental that locks you in and charges you more every time you grow.",
    tag: "The difference: You own the asset. Not a subscription.",
  },
  {
    title: "Why Not Hire a Full-Time CTO or Lead Engineer?",
    copy: "Finding a world-class, senior Data Scientist and Full-Stack Architect takes months of recruiting. Hiring them takes $150,000–$250,000+ in salary, equity, benefits, and the risk that they don't work out. With Mr. Fish, you access that same calibre of expertise on-demand, at a fraction of the cost, with zero hiring risk.",
    tag: "The difference: Senior expertise. Fractional cost.",
  },
];

export function WhyNotAlternatives() {
  return (
    <section className="section-padding" id="why-mr-fish">
      <div className="content-wrapper">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-12"
        >
          <SectionLabel>Why Not Just...</SectionLabel>
          <h2
            className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold mb-4"
            style={{ fontFamily: "Clash Display, sans-serif", color: "var(--color-text-primary)" }}
          >
            You&apos;ve Had the Other Options.
            <br />
            Here&apos;s Why They Didn&apos;t Work.
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "var(--color-text-secondary)" }}>
            The market is full of options. But most of them were designed for a different problem
            than the one you actually have.
          </p>
        </motion.div>

        {/* Comparison blocks */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {comparisons.map((block) => (
            <motion.div
              key={block.title}
              variants={staggerChild}
              className="flex flex-col gap-4 p-7 rounded-xl transition-all duration-250"
              style={{
                background: "var(--color-surface-raised)",
                borderLeft: "2px solid var(--color-border)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderLeftColor = "var(--color-accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderLeftColor = "var(--color-border)";
              }}
            >
              <h3
                className="text-lg font-bold"
                style={{ fontFamily: "Cabinet Grotesk, sans-serif", color: "var(--color-text-primary)" }}
              >
                {block.title}
              </h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--color-text-secondary)" }}>
                {block.copy}
              </p>
              <span
                className="inline-flex self-start px-3 py-1.5 rounded-full text-xs font-medium"
                style={{
                  background: "rgba(34,197,94,0.1)",
                  border: "1px solid rgba(34,197,94,0.2)",
                  color: "var(--color-success)",
                  fontFamily: "JetBrains Mono, monospace",
                }}
              >
                {block.tag}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Transition CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mt-12"
        >
          <p className="text-sm mb-4" style={{ color: "var(--color-text-secondary)" }}>
            Ready to work with the apex option?
          </p>
          <Button href={CALENDLY_URL} external>
            Book Your Free Discovery Call
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
