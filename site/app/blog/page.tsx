"use client";

import { motion } from "framer-motion";
import { Database, Layers, Briefcase, Globe } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, staggerContainer, staggerChild, viewportOnce } from "@/lib/animations";

const clusters = [
  {
    icon: Database,
    title: "Data Science for Business",
    topics: [
      "How Non-Technical Founders Can Evaluate Data Science Consultants",
      "5 Signs Your Company Is Leaving Revenue on the Table With Unused Data",
      "Predictive Analytics vs. Business Intelligence: What Startups Actually Need",
    ],
  },
  {
    icon: Layers,
    title: "Full-Stack Architecture",
    topics: [
      "Why Your Startup Needs a Full-Stack Architect, Not Just a Front-End Dev",
      "The Technical Debt Trap: How to Spot It Before It Kills Your Growth",
      "Building an MVP That Doesn't Need a Full Rewrite in 12 Months",
    ],
  },
  {
    icon: Briefcase,
    title: "Fractional CTO / Consulting",
    topics: [
      "What Does a Fractional CTO Actually Do? An Honest Breakdown",
      "Agency Owner's Guide: How to Handle Complex Technical Scope You Can't Build",
      "Fractional CTO vs. Full-Time CTO: What's Right for Your Stage?",
    ],
  },
  {
    icon: Globe,
    title: "Industry Expertise",
    topics: [
      "How Machine Learning Is Transforming the Fintech Landscape",
      "Data Pipeline Architecture for Scaling Startups: A Practical Guide",
      "E-commerce Personalisation With Predictive Analytics",
    ],
  },
];

export default function BlogPage() {
  return (
    <section className="min-h-screen pt-[120px] flex flex-col items-center">
      <div className="content-wrapper py-24 text-center max-w-3xl">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col items-center gap-6">
          <SectionLabel>Coming Soon</SectionLabel>
          <h1
            className="text-[clamp(2rem,5vw,3.5rem)] font-bold"
            style={{ fontFamily: "Clash Display, sans-serif", color: "var(--color-text-primary)" }}
          >
            Insights on Data, Engineering & Growth.
          </h1>
          <p className="text-lg" style={{ color: "var(--color-text-secondary)" }}>
            Practical, no-fluff content for founders, CTOs, and agency leaders navigating complex technical decisions. Launching soon.
          </p>

          {/* Email capture */}
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md mt-4">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 rounded-lg px-4 py-3.5 text-sm"
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                color: "var(--color-text-primary)",
              }}
            />
            <button
              className="px-6 py-3.5 rounded-lg text-sm font-medium gradient-accent text-[#0a0a0f] hover:brightness-110 transition-all whitespace-nowrap"
            >
              Notify Me
            </button>
          </div>
          <p className="text-xs" style={{ color: "var(--color-text-tertiary)" }}>
            No spam. Just high-signal articles when they drop.
          </p>
        </motion.div>
      </div>

      {/* Content clusters preview */}
      <div className="content-wrapper pb-24">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-xs font-medium uppercase tracking-[0.12em] text-center mb-10"
          style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--color-text-tertiary)" }}
        >
          Upcoming Content Clusters
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {clusters.map((cluster) => {
            const Icon = cluster.icon;
            return (
              <motion.div key={cluster.title} variants={staggerChild} className="card p-7 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(0,212,255,0.1)" }}
                  >
                    <Icon size={18} style={{ color: "var(--color-accent)" }} />
                  </div>
                  <h3
                    className="font-bold"
                    style={{ fontFamily: "Cabinet Grotesk, sans-serif", color: "var(--color-text-primary)" }}
                  >
                    {cluster.title}
                  </h3>
                </div>
                <ul className="flex flex-col gap-2">
                  {cluster.topics.map((topic) => (
                    <li key={topic} className="text-sm flex items-start gap-2" style={{ color: "var(--color-text-secondary)" }}>
                      <span style={{ color: "var(--color-accent)" }}>·</span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
