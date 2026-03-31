"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/Button";
import { staggerContainer, staggerChild, fadeUp, viewportOnce } from "@/lib/animations";
import { services } from "@/data/services";

export function ServicesPreview() {
  return (
    <section className="section-padding" id="services">
      <div className="content-wrapper">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-12"
        >
          <SectionLabel>What I Build</SectionLabel>
          <h2
            className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold mb-4"
            style={{ fontFamily: "Clash Display, sans-serif", color: "var(--color-text-primary)" }}
          >
            High-Impact Consulting Services Engineered for Scale.
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "var(--color-text-secondary)" }}>
            Every engagement is tailored. Every solution is built to last.
          </p>
        </motion.div>

        {/* Service grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={staggerChild}>
              <ServiceCard service={service} compact />
            </motion.div>
          ))}
        </motion.div>

        {/* Link + CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <Button href="/services">
            See All Services
          </Button>
          <Button href="/contact" variant="secondary">
            Book a Discovery Call
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
