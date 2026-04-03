"use client";

import { motion } from "framer-motion";
import { Eye, Target, TrendingUp, Shield } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PageCTA } from "@/components/sections/shared/PageCTA";
import { fadeUp, staggerContainer, staggerChild, viewportOnce } from "@/lib/animations";

const values = [
  {
    icon: Eye,
    title: "Radical Transparency",
    copy: "You will always know where your project stands, why decisions were made, and exactly what the numbers mean for your business.",
  },
  {
    icon: Target,
    title: "Precision Over Volume",
    copy: "I take on a limited number of projects at a time to ensure every client receives focused, senior-level attention — not a diluted slice of a busy agency.",
  },
  {
    icon: TrendingUp,
    title: "Business First, Technology Second",
    copy: "The best solution isn't always the most technically elegant one. Every recommendation I make starts with your business objective, not a preference for a particular tech stack.",
  },
  {
    icon: Shield,
    title: "Ownership & Accountability",
    copy: "When something is in my hands, it's in the right hands. I take full ownership of outcomes — not just deliverables.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[120px] pb-16" style={{ background: "var(--color-surface)" }}>
        <div className="content-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} initial="hidden" animate="visible">
              <SectionLabel>The Consultant Behind the Brand</SectionLabel>
              <h1
                className="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-6"
                style={{ fontFamily: "Clash Display, sans-serif", color: "var(--color-text-primary)" }}
              >
                Why &ldquo;Mr. Fish&rdquo;? Because in a Sea of Average, You Need an Apex Partner.
              </h1>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-80 h-96 rounded-2xl overflow-hidden flex-shrink-0">
                <img
                  src="/images/profile.png"
                  alt="Fisseha Estifanos — Mr. Fish"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                <div
                  className="absolute inset-0 flex-col items-center justify-center gap-3"
                  style={{ display: "none", background: "linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-raised) 100%)", border: "1px solid var(--color-border)" }}
                >
                  <span style={{ fontSize: "4rem", lineHeight: 1 }}>🦈</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="content-wrapper max-w-3xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-6"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <p className="text-lg font-medium italic" style={{ color: "var(--color-text-primary)" }}>
              Most consultants will tell you they&apos;re &ldquo;passionate about technology.&rdquo; That&apos;s not a differentiator. That&apos;s a default.
            </p>
            <p>
              What actually matters is this: Can they see the full picture? Can they build it, measure it, scale it, and tell you with precision — in business language, not jargon — what it means for your bottom line?
            </p>
            <p>
              I built Mr. Fish on a single, frustrating observation: too many talented companies were failing not because of bad ideas, but because of fragmented technical execution. The startup founder who hired three freelancers that couldn&apos;t communicate. The CTO whose team was buried in maintenance while the company&apos;s data strategy sat idle. The agency that lost a major contract because the project scope jumped into territory their team had never seen.
            </p>
            <p>
              In every one of these situations, the missing piece was the same: a single, senior, hybrid expert who could see and execute across the entire technical spectrum — from data infrastructure to user experience — and translate all of it into clear business value.
            </p>
            <p>
              That&apos;s the role I built myself to fill. With a foundation in Data Science, Machine Learning, and Full-Stack Engineering, I&apos;ve developed a rare ability to move fluidly between the analytical and the architectural — between building the models that generate insight and the systems that actually deliver it.
            </p>
            <p>
              The name &ldquo;Mr. Fish&rdquo; isn&apos;t accidental. In the ocean of consulting options — bloated agencies, siloed freelancers, and theoretical academics — I move with precision, speed, and purpose. I don&apos;t circle problems. I solve them.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-10 p-8 rounded-2xl"
            style={{ background: "var(--color-accent-glow-faint)", border: "1px solid var(--color-accent-border-faint)" }}
          >
            <p
              className="text-xs font-medium uppercase tracking-[0.12em] mb-3"
              style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--color-accent)" }}
            >
              Mission Statement
            </p>
            <p className="text-lg font-semibold" style={{ color: "var(--color-text-primary)", fontFamily: "Cabinet Grotesk, sans-serif" }}>
              To be the apex technical partner that ambitious companies deserve but rarely find. One expert. End-to-end expertise. Measurable results. No hand-offs. No excuses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding" style={{ background: "var(--color-surface)" }}>
        <div className="content-wrapper">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="text-center mb-12">
            <SectionLabel>Core Values</SectionLabel>
            <h2
              className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold"
              style={{ fontFamily: "Clash Display, sans-serif", color: "var(--color-text-primary)" }}
            >
              The Principles Behind Every Engagement.
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <motion.div key={v.title} variants={staggerChild} className="card p-8 flex gap-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--color-accent-tint)" }}
                  >
                    <Icon size={22} style={{ color: "var(--color-accent)" }} />
                  </div>
                  <div>
                    <h3
                      className="text-base font-bold mb-2"
                      style={{ fontFamily: "Cabinet Grotesk, sans-serif", color: "var(--color-text-primary)" }}
                    >
                      {v.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                      {v.copy}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <PageCTA
        headline="Want to Know If We're the Right Fit?"
        subheadline="30 minutes. No pitch. Just clarity."
      />
    </>
  );
}
