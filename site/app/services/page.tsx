"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { PageCTA } from "@/components/sections/shared/PageCTA";
import { services } from "@/data/services";
import { staggerContainer, staggerChild, fadeUp, viewportOnce } from "@/lib/animations";

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="pt-[120px] pb-16 section-padding" style={{ background: "var(--color-surface)" }}>
        <div className="content-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} initial="hidden" animate="visible">
              <SectionLabel>What I Build</SectionLabel>
              <h1
                className="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-4"
                style={{ fontFamily: "Clash Display, sans-serif", color: "var(--color-text-primary)" }}
              >
                High-Impact Consulting Services Engineered for Scale.
              </h1>
              <p className="text-lg" style={{ color: "var(--color-text-secondary)" }}>
                Every engagement is tailored. Every solution is built to last. Here is what I bring to the table.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex justify-center lg:justify-end"
            >
              <div
                className="w-full max-w-sm rounded-2xl overflow-hidden flex-shrink-0"
                style={{ border: "1px solid var(--color-border)", background: "var(--color-surface-raised)" }}
              >
                {/* Terminal header */}
                <div
                  className="flex items-center gap-2 px-4 py-3 border-b"
                  style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}
                >
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,95,86,0.6)" }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,189,46,0.6)" }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(39,201,63,0.6)" }} />
                  <span
                    className="ml-2 text-xs"
                    style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--color-text-tertiary)" }}
                  >
                    services.config
                  </span>
                </div>
                {/* Terminal body */}
                <div className="p-6 flex flex-col gap-4" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                  {[
                    { key: "ai_ml", value: "Generative AI · RAG · LLMs" },
                    { key: "data", value: "Engineering · Analytics · BI" },
                    { key: "full_stack", value: "APIs · Web Apps · Systems" },
                    { key: "advisory", value: "Fractional CTO · Strategy" },
                  ].map(({ key, value }) => (
                    <div key={key} className="flex flex-wrap gap-1 text-sm">
                      <span style={{ color: "var(--color-accent)" }}>{key}</span>
                      <span style={{ color: "var(--color-text-tertiary)" }}>{" : "}</span>
                      <span style={{ color: "var(--color-text-secondary)" }}>{value}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-1 text-sm mt-2">
                    <span style={{ color: "var(--color-success)" }}>✓</span>
                    <span style={{ color: "var(--color-text-tertiary)" }}>status:</span>
                    <span style={{ color: "var(--color-success)" }}>available</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service cards */}
      <section className="section-padding">
        <div className="content-wrapper">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-8"
          >
            {services.map((service) => (
              <motion.div key={service.id} variants={staggerChild}>
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-16 text-center rounded-xl py-10 px-6"
            style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
          >
            <p
              className="text-lg font-semibold mb-2"
              style={{ color: "var(--color-text-primary)", fontFamily: "Cabinet Grotesk, sans-serif" }}
            >
              Not sure which engagement model is right for you?
            </p>
            <p className="text-sm mb-6" style={{ color: "var(--color-text-secondary)" }}>
              Book a free 30-minute Discovery Call and we&apos;ll figure it out together.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-medium gradient-accent text-[#0a0a0f] hover:brightness-110 transition-all"
            >
              Book a Free Discovery Call
            </a>
          </motion.div>
        </div>
      </section>

      <PageCTA
        headline="Ready to Build Something That Lasts?"
        subheadline="Serious expertise, structured for your stage. Let's start with a conversation."
      />
    </>
  );
}
