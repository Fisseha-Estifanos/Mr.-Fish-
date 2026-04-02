"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { CALENDLY_URL } from "@/lib/constants";

interface PageCTAProps {
  headline?: string;
  subheadline?: string;
  primaryLabel?: string;
  primaryHref?: string;
  primaryExternal?: boolean;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function PageCTA({
  headline = "Ready to Build Something Exceptional?",
  subheadline = "Book a free 30-minute Discovery Call. No pressure. No pitch deck. Just clarity.",
  primaryLabel = "Book Your Free Discovery Call",
  primaryHref = CALENDLY_URL,
  primaryExternal = true,
  secondaryLabel,
  secondaryHref,
}: PageCTAProps) {
  return (
    <section className="section-padding">
      <div className="content-wrapper">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="rounded-2xl p-10 md:p-16 text-center max-w-3xl mx-auto"
          style={{
            background: "var(--color-accent-glow-faint)",
            border: "1px solid var(--color-accent-border-faint)",
          }}
        >
          <h2
            className="text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4"
            style={{ fontFamily: "Clash Display, sans-serif", color: "var(--color-text-primary)" }}
          >
            {headline}
          </h2>
          <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "var(--color-text-secondary)" }}>
            {subheadline}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {primaryHref && (
              <Button href={primaryHref} external={primaryExternal}>
                {primaryLabel}
              </Button>
            )}
            {secondaryLabel && secondaryHref && (
              <Button href={secondaryHref} variant="secondary">
                {secondaryLabel}
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
