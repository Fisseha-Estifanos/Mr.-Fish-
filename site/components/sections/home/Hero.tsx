"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import {
  LinkedInIcon,
  GitHubIcon,
  XIcon,
  MediumIcon,
} from "@/components/ui/SocialIcons";
import { Button } from "@/components/ui/Button";
import { heroStagger, staggerChild } from "@/lib/animations";
import { SOCIAL, CALENDLY_URL } from "@/lib/constants";

const socialLinks = [
  { icon: LinkedInIcon, href: SOCIAL.linkedin, label: "LinkedIn" },
  { icon: GitHubIcon, href: SOCIAL.github, label: "GitHub" },
  { icon: XIcon, href: SOCIAL.twitter, label: "Twitter / X" },
  { icon: MediumIcon, href: SOCIAL.medium, label: "Medium" },
];

export function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen pt-[72px] text-center overflow-hidden"
      style={{ background: "var(--color-bg)" }}
    >
      {/* Radial glow */}
      <div
        className="hero-glow absolute inset-0 pointer-events-none"
        aria-hidden
      />

      {/* Subtle grid pattern with radial fade */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.2]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 0%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 0%, transparent 100%)",
        }}
        aria-hidden
      />

      <div className="content-wrapper relative z-10 flex flex-col items-center py-24 md:py-32">
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6 max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.p
            variants={staggerChild}
            className="text-xs font-medium uppercase tracking-[0.12em]"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              color: "var(--color-accent)",
            }}
          >
            Apex Data Science and Analytics & Full-Stack Consulting
          </motion.p>

          {/* H1 */}
          <motion.h1
            variants={staggerChild}
            className="font-bold leading-[1.05] text-[clamp(2.5rem,6vw,4.5rem)]"
            style={{
              fontFamily: "Clash Display, sans-serif",
              color: "var(--color-text-primary)",
            }}
          >
            The Apex Tech Partner
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, #00d4ff 0%, #0ea5e9 50%, #7c3aed 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                display: "inline-block",
              }}
            >
              Your Business Has Been Missing.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={staggerChild}
            className="text-xl font-semibold"
            style={{
              fontFamily: "Cabinet Grotesk, sans-serif",
              color: "var(--color-text-secondary)",
            }}
          >
            Full-Stack Engineering. Advanced Data Science & Analytics
            Consulting. One Expert.
            <br className="hidden sm:block" />
            Zero Hand-Offs. Zero Excuses.
          </motion.p>

          {/* Body copy */}
          <motion.p
            variants={staggerChild}
            className="text-base leading-relaxed max-w-2xl"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Most companies are sitting on a goldmine of untapped data and
            stalled engineering potential. The problem isn&apos;t the technology
            — it&apos;s the gap between what your systems produce and what your
            business actually needs. Mr. Fish bridges that gap.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={staggerChild}
            className="flex flex-col sm:flex-row items-center gap-4 mt-2"
          >
            <Button href={CALENDLY_URL} external size="lg">
              Book a Free 30-Minute Strategy Call
            </Button>
            <Button
              href="/services"
              variant="ghost"
              size="lg"
              className="group"
            >
              Explore What I Build
              <span className="transition-transform duration-150 group-hover:translate-x-1">
                →
              </span>
            </Button>
          </motion.div>

          {/* Social proof micro-copy */}
          <motion.p
            variants={staggerChild}
            className="text-xs"
            style={{ color: "var(--color-text-tertiary)" }}
          >
            Trusted by founders, CTOs, and agencies across North America, Europe
            & Asia-Pacific.
          </motion.p>

          {/* Social icons */}
          <motion.div
            variants={staggerChild}
            className="flex items-center gap-5 mt-2"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="transition-all duration-150 hover:scale-110 hover:opacity-100"
                style={{ color: "var(--color-text-tertiary)" }}
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-scroll-bounce"
          aria-hidden
        >
          <ArrowDown
            size={18}
            style={{ color: "var(--color-text-tertiary)" }}
          />
        </div>
      </div>
    </section>
  );
}
