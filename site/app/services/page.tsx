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
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <SectionLabel>What I Build</SectionLabel>
            <h1
              className="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-4 max-w-3xl"
              style={{ fontFamily: "Clash Display, sans-serif", color: "var(--color-text-primary)" }}
            >
              High-Impact Consulting Services Engineered for Scale.
            </h1>
            <p className="text-lg max-w-2xl" style={{ color: "var(--color-text-secondary)" }}>
              Every engagement is tailored. Every solution is built to last. Here is what I bring to the table.
            </p>
          </motion.div>
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
