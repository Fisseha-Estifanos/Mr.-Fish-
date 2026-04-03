"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { PageCTA } from "@/components/sections/shared/PageCTA";
import { staggerContainer, staggerChild, fadeUp, viewportOnce } from "@/lib/animations";
import { CALENDLY_URL } from "@/lib/constants";

const engagements = [
  {
    id: "discovery",
    title: "Paid Discovery & Technical Roadmap",
    tagline: "The Smartest First Step Before Any Major Build.",
    description:
      "Before committing to a complex project, get absolute clarity on what needs to be built, how it should be architected, and what it will realistically take to get there.",
    included: [
      "Deep-dive technical assessment (codebase, data infra, or concept review)",
      "Documented architecture roadmap with prioritised recommendations",
      "Risk and bottleneck identification",
      "1-hour debrief session with Q&A",
      "Discovery fee credited toward full project execution if you proceed",
    ],
    bestFor: ["Non-technical founders", "Startups pre-build", "Enterprise pre-investment audits"],
    cta: "Request a Technical Audit",
    featured: false,
  },
  {
    id: "project",
    title: "Value-Based Project Engagement",
    tagline: "A Defined Outcome. A Flat, Agreed-Upon Investment.",
    description:
      "For complete, scoped builds — an MVP, an analytics platform, a custom machine learning model, or a full-stack application. We agree on the outcome and the investment upfront. No billing surprises. No scope creep excuses.",
    included: [
      "Full end-to-end project delivery to agreed specifications",
      "Architecture, development, data modeling, and deployment",
      "Regular progress updates and transparent milestone tracking",
      "Post-launch support window included",
    ],
    bestFor: ["Funded startups", "Digital agencies", "Product companies"],
    cta: "Get a Custom Project Estimate",
    featured: false,
  },
  {
    id: "retainer",
    title: "Monthly Retainer — Fractional CTO & Advisory",
    tagline: "Executive-Level Technical Leadership on Your Terms.",
    description:
      "For companies that need ongoing strategic technical oversight without the commitment of a full-time executive hire. As your embedded Fractional CTO or Senior Advisor, I provide monthly capacity for architectural decisions, team mentoring, roadmap planning, and hands-on development.",
    included: [
      "Set monthly hours of strategic advisory and/or hands-on execution",
      "Architecture reviews and technical decision-making support",
      "Engineering team oversight and mentoring",
      "Data strategy alignment with business goals",
      "Priority response times and async availability",
    ],
    bestFor: ["Scale-up companies", "Startups without a CTO", "Enterprise teams"],
    cta: "Explore Retainer Partnerships",
    featured: true,
  },
  {
    id: "equity",
    title: "Cash + Equity Hybrid",
    tagline: "When You're Building Something Worth Betting On.",
    description:
      "For early-stage founders with a compelling vision but limited immediate cash flow, I selectively offer a blended model: a reduced cash rate plus a small equity or revenue-share position. I'm not just building your product — I'm investing in your success.",
    included: [
      "Everything in a standard project engagement",
      "Reduced upfront cash rate",
      "Equity or revenue share negotiated per project",
      "Long-term strategic alignment — I want you to win",
    ],
    bestFor: ["Pre-seed / Seed-stage founders", "High-conviction early-stage startups"],
    cta: "Apply for the Startup Partnership Program",
    featured: false,
    note: "This model is offered on a highly selective basis. Apply via the Discovery Call.",
  },
];

export default function WorkWithMePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[120px] pb-16" style={{ background: "var(--color-surface)" }}>
        <div className="content-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} initial="hidden" animate="visible">
              <SectionLabel>Engagement Models</SectionLabel>
              <h1
                className="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-4"
                style={{ fontFamily: "Clash Display, sans-serif", color: "var(--color-text-primary)" }}
              >
                Serious Expertise, Structured for Your Stage.
              </h1>
              <p className="text-lg" style={{ color: "var(--color-text-secondary)" }}>
                I don&apos;t believe in one-size-fits-all pricing. Every engagement is scoped individually. Below are the four primary ways we can work together.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex justify-center lg:justify-end"
            >
              <div
                className="w-full max-w-sm rounded-2xl p-7 flex-shrink-0"
                style={{ background: "var(--color-surface-raised)", border: "1px solid var(--color-border)" }}
              >
                <p
                  className="text-xs font-medium uppercase tracking-[0.12em] mb-6"
                  style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--color-text-tertiary)" }}
                >
                  How We Work Together
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    { step: "01", label: "Paid Discovery", sub: "Clarity before commitment" },
                    { step: "02", label: "Project Engagement", sub: "Defined scope, flat rate" },
                    { step: "03", label: "Fractional CTO", sub: "Ongoing strategic leadership", featured: true },
                    { step: "04", label: "Equity Hybrid", sub: "Selective partnership model" },
                  ].map(({ step, label, sub, featured }) => (
                    <div
                      key={step}
                      className="flex items-center gap-4 px-4 py-3 rounded-xl"
                      style={{
                        background: featured ? "var(--color-accent-tint)" : "var(--color-surface)",
                        border: `1px solid ${featured ? "var(--color-accent-border)" : "var(--color-border)"}`,
                      }}
                    >
                      <span
                        className="text-xs font-bold flex-shrink-0"
                        style={{ fontFamily: "JetBrains Mono, monospace", color: featured ? "var(--color-accent)" : "var(--color-text-tertiary)" }}
                      >
                        {step}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold" style={{ color: featured ? "var(--color-text-primary)" : "var(--color-text-secondary)" }}>
                          {label}
                        </p>
                        <p className="text-xs mt-0.5" style={{ color: "var(--color-text-tertiary)" }}>{sub}</p>
                      </div>
                      {featured && (
                        <span className="text-xs flex-shrink-0" style={{ color: "var(--color-accent)" }}>★</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Engagement cards */}
      <section className="section-padding">
        <div className="content-wrapper">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {engagements.map((eng) => (
              <motion.div
                key={eng.id}
                variants={staggerChild}
                className="relative flex flex-col gap-6 p-8 rounded-2xl"
                style={{
                  background: "var(--color-surface)",
                  border: eng.featured ? "2px solid var(--color-accent)" : "1px solid var(--color-border)",
                  boxShadow: eng.featured ? "0 0 40px var(--color-accent-shadow)" : "none",
                }}
              >
                {/* Featured badge */}
                {eng.featured && (
                  <div
                    className="absolute -top-3.5 left-8 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                    style={{ background: "var(--color-accent)", color: "#0a0a0f", fontFamily: "JetBrains Mono, monospace" }}
                  >
                    <Star size={10} />
                    Most Popular
                  </div>
                )}

                {/* Header */}
                <div>
                  <h2
                    className="text-xl font-bold mb-1"
                    style={{ fontFamily: "Clash Display, sans-serif", color: "var(--color-text-primary)" }}
                  >
                    {eng.title}
                  </h2>
                  <p className="text-sm font-medium" style={{ color: "var(--color-accent)" }}>
                    {eng.tagline}
                  </p>
                </div>

                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                  {eng.description}
                </p>

                {/* Included */}
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest mb-3" style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--color-text-tertiary)" }}>
                    What&apos;s Included
                  </p>
                  <ul className="flex flex-col gap-2">
                    {eng.included.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "var(--color-text-secondary)" }}>
                        <Check size={14} className="flex-shrink-0 mt-0.5" style={{ color: "var(--color-success)" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Best for */}
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs" style={{ color: "var(--color-text-tertiary)" }}>Best for:</span>
                  {eng.bestFor.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-xs"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid var(--color-border)",
                        color: "var(--color-text-secondary)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {eng.note && (
                  <p className="text-xs italic" style={{ color: "var(--color-text-tertiary)" }}>
                    {eng.note}
                  </p>
                )}

                <Button href={CALENDLY_URL} external variant={eng.featured ? "primary" : "secondary"} className="self-start mt-auto">
                  {eng.cta}
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-12 text-center max-w-2xl mx-auto"
          >
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
              Every engagement is scoped individually to ensure the right solution for your specific needs, stage, and goals. Pricing reflects the value and ROI of the outcome — not an hourly commodity rate.
            </p>
            <Button href={CALENDLY_URL} external size="lg">
              Book Your Free 30-Minute Discovery Call
            </Button>
            <p className="text-xs mt-3" style={{ color: "var(--color-text-tertiary)" }}>
              No pressure. No pitch. Just a focused conversation about your specific situation.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
