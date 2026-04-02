"use client";

import { motion } from "framer-motion";
import { LinkedInIcon, GitHubIcon } from "@/components/ui/SocialIcons";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TagPill } from "@/components/ui/TagPill";
import { PageCTA } from "@/components/sections/shared/PageCTA";
import { fadeUp, staggerContainer, staggerChild, slideInLeft, slideInRight, viewportOnce } from "@/lib/animations";
import { skillCategories } from "@/data/skills";
import { timeline } from "@/data/timeline";
import { education } from "@/data/education";
import { projects } from "@/data/projects";
import { SOCIAL } from "@/lib/constants";

export default function HistoryPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-[120px] pb-16" style={{ background: "var(--color-surface)" }}>
        <div className="content-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <motion.div variants={fadeUp} initial="hidden" animate="visible">
              <SectionLabel>The Track Record</SectionLabel>
              <h1
                className="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-4"
                style={{ fontFamily: "Clash Display, sans-serif", color: "var(--color-text-primary)" }}
              >
                Built in the Deep End. Proven Across the Board.
              </h1>
              <p className="text-lg mb-8" style={{ color: "var(--color-text-secondary)" }}>
                Every engagement, every system, every result — rooted in years of real-world experience across data science, full-stack engineering, and strategic consulting. Not theory. Not slide decks. Track record.
              </p>

              {/* Social proof strip */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={SOCIAL.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all hover:opacity-90"
                  style={{ background: "var(--color-surface-raised)", border: "1px solid var(--color-border)", color: "var(--color-text-primary)" }}
                >
                  <LinkedInIcon size={16} style={{ color: "#0a66c2" }} />
                  View LinkedIn
                </a>
                <a
                  href={SOCIAL.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all hover:opacity-90"
                  style={{ background: "var(--color-surface-raised)", border: "1px solid var(--color-border)", color: "var(--color-text-primary)" }}
                >
                  <GitHubIcon size={16} />
                  See GitHub
                </a>
              </div>
            </motion.div>

            {/* Right: profile photo */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex justify-center lg:justify-end"
            >
              {/* Replace /public/images/profile.png with your actual photo */}
              <div className="relative w-64 h-64 lg:w-80 lg:h-99 rounded-2xl overflow-hidden flex-shrink-0">
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
                {/* Fallback — hidden by default, shown only if image fails to load */}
                <div
                  className="absolute inset-0 flex-col items-center justify-center gap-3"
                  style={{
                    display: "none",
                    background: "linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-raised) 100%)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <span style={{ fontSize: "4rem", lineHeight: 1 }}>🦈</span>
                  <div className="text-center px-4">
                    <p className="font-bold text-sm" style={{ fontFamily: "Clash Display, sans-serif", color: "var(--color-text-primary)" }}>
                      Mr. Fish
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--color-accent)", fontFamily: "JetBrains Mono, monospace" }}>
                      Add photo →
                    </p>
                    <p className="text-xs mt-1" style={{ color: "var(--color-text-tertiary)", fontFamily: "JetBrains Mono, monospace" }}>
                      public/images/profile.png
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Bio */}
      <section className="section-padding">
        <div className="content-wrapper">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start"
          >
            <motion.div variants={staggerChild} className="lg:col-span-2 flex flex-col gap-5">
              <SectionLabel>The Story</SectionLabel>
              <p className="text-lg leading-relaxed" style={{ color: "var(--color-text-primary)" }}>
                Fisseha Estifanos — known professionally as <strong style={{ color: "var(--color-accent)" }}>Mr. Fish</strong> — is a data scientist, AI engineer, and full-stack consultant based in Addis Ababa, Ethiopia, operating globally.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                The journey started at Addis Ababa Institute of Technology (AAiT), where a BSc in Software Engineering built the formal foundation: algorithms, database systems, software architecture — the engineering rigour that underpins everything that followed. During the degree, an internship at ICare Ethio Medical turned into a two-year backend and database role — real production systems, real clinical data, real stakes.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                After graduating, a competitive fellowship at 10 Academy accelerated the transition into data engineering and machine learning — five production-grade projects in four months, spanning logistics optimisation, pharmaceutical forecasting, telecom analytics, and automated data pipelines. That intensive programme was the bridge between software engineering and applied data science.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                In 2022, Mr. Fish consulting launched — building AI-powered systems, data infrastructure, and full-stack backends for clients across Africa and beyond. The current focus: Generative AI and RAG architectures — building production-grade intelligent systems that solve real business problems, not demos.
              </p>
            </motion.div>

            <motion.div variants={staggerChild} className="flex flex-col gap-4">
              {[
                { label: "Based In", value: "Addis Ababa, Ethiopia" },
                { label: "Works With", value: "Global Clients · Remote-First" },
                { label: "Primary Specialty", value: "Generative AI & RAG Pipelines" },
                { label: "Background", value: "Software Engineering + Data Science" },
                { label: "Experience", value: "2019 – Present" },
              ].map(({ label, value }) => (
                <div key={label} className="card p-4">
                  <p className="text-xs font-medium uppercase tracking-widest mb-1" style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--color-text-tertiary)" }}>
                    {label}
                  </p>
                  <p className="text-sm font-semibold" style={{ color: "var(--color-text-primary)" }}>
                    {value}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="section-padding">
        <div className="content-wrapper">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mb-12">
            <SectionLabel>Career Timeline</SectionLabel>
            <h2
              className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold"
              style={{ fontFamily: "Clash Display, sans-serif", color: "var(--color-text-primary)" }}
            >
              Where I&apos;ve Been. What I&apos;ve Built.
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical connector line */}
            <div
              className="absolute left-1/2 top-0 bottom-0 w-px hidden lg:block"
              style={{ background: "var(--color-border)", transform: "translateX(-50%)" }}
            />

            <div className="flex flex-col gap-10">
              {timeline.map((entry, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div key={entry.id} className="relative grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Year badge on connector (desktop) */}
                    <div
                      className="absolute left-1/2 top-8 -translate-x-1/2 hidden lg:flex items-center justify-center z-10"
                    >
                      <span
                        className="px-3 py-1 rounded-full text-xs font-bold"
                        style={{ background: "var(--color-accent)", color: "#0a0a0f", fontFamily: "JetBrains Mono, monospace" }}
                      >
                        {entry.yearRange.split("–")[0].trim()}
                      </span>
                    </div>

                    {/* Card — alternates left/right on desktop */}
                    <motion.div
                      variants={isLeft ? slideInLeft : slideInRight}
                      initial="hidden"
                      whileInView="visible"
                      viewport={viewportOnce}
                      className={`card p-7 ${!isLeft ? "lg:col-start-2" : ""}`}
                    >
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                          <h3
                            className="text-base font-bold"
                            style={{ fontFamily: "Cabinet Grotesk, sans-serif", color: "var(--color-text-primary)" }}
                          >
                            {entry.title}
                          </h3>
                          <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                            {entry.company} · {entry.location}
                          </p>
                        </div>
                        <span
                          className="text-xs px-2.5 py-1 rounded-full flex-shrink-0 lg:hidden"
                          style={{ background: "var(--color-accent-tint)", color: "var(--color-accent)", fontFamily: "JetBrains Mono, monospace" }}
                        >
                          {entry.yearRange}
                        </span>
                      </div>
                      <ul className="flex flex-col gap-1.5 mb-4">
                        {entry.achievements.map((a) => (
                          <li key={a} className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                            · {a}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5">
                        {entry.tags.map((tag) => (
                          <TagPill key={tag} variant="tech">{tag}</TagPill>
                        ))}
                      </div>
                    </motion.div>

                    {/* Empty cell for alternating layout */}
                    {!isLeft && <div className="hidden lg:block lg:col-start-1 lg:row-start-1" />}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section-padding" style={{ background: "var(--color-surface)" }}>
        <div className="content-wrapper">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mb-12">
            <SectionLabel>Education & Credentials</SectionLabel>
            <h2
              className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold"
              style={{ fontFamily: "Clash Display, sans-serif", color: "var(--color-text-primary)" }}
            >
              The Foundation Behind the Expertise.
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            {education.map((edu) => (
              <motion.div key={edu.id} variants={staggerChild} className="card p-6">
                <p className="font-bold mb-1" style={{ color: "var(--color-text-primary)", fontFamily: "Cabinet Grotesk, sans-serif" }}>
                  {edu.credential}
                </p>
                <p className="text-sm mb-1" style={{ color: "var(--color-text-secondary)" }}>
                  {edu.institution}
                </p>
                <p className="text-xs" style={{ color: "var(--color-text-tertiary)", fontFamily: "JetBrains Mono, monospace" }}>
                  {edu.year}
                </p>
                {edu.relevance && (
                  <p className="text-xs mt-2" style={{ color: "var(--color-text-secondary)" }}>
                    {edu.relevance}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-padding">
        <div className="content-wrapper">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mb-12">
            <SectionLabel>Skills & Tech Stack</SectionLabel>
            <h2
              className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold"
              style={{ fontFamily: "Clash Display, sans-serif", color: "var(--color-text-primary)" }}
            >
              The Toolkit.
            </h2>
          </motion.div>

          <div className="flex flex-col gap-10">
            {skillCategories.map((cat) => (
              <motion.div
                key={cat.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
              >
                <p
                  className="text-xs font-medium uppercase tracking-[0.12em] mb-4"
                  style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--color-text-tertiary)" }}
                >
                  {cat.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <TagPill key={skill} variant="tech">{skill}</TagPill>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding" style={{ background: "var(--color-surface)" }}>
        <div className="content-wrapper">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mb-12">
            <SectionLabel>Selected Work</SectionLabel>
            <h2
              className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold mb-2"
              style={{ fontFamily: "Clash Display, sans-serif", color: "var(--color-text-primary)" }}
            >
              Problems Solved. Systems Built. Results Delivered.
            </h2>
            <p className="text-base max-w-2xl" style={{ color: "var(--color-text-secondary)" }}>
              A curated selection of past engagements — chosen to illustrate the breadth of industries, the depth of technical challenge, and the measurable impact of each solution.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={staggerChild} className="card p-7 flex flex-col gap-4">
                <TagPill variant="category">{project.category}</TagPill>
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest mb-1" style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--color-text-tertiary)" }}>
                    The Challenge
                  </p>
                  <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>{project.challenge}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest mb-1" style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--color-text-tertiary)" }}>
                    The Solution
                  </p>
                  <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>{project.solution}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest mb-1" style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--color-accent)" }}>
                    The Result
                  </p>
                  <p className="text-sm font-semibold" style={{ color: "var(--color-text-primary)" }}>{project.result}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t" style={{ borderColor: "var(--color-border)" }}>
                  {project.stack.map((s) => (
                    <TagPill key={s} variant="tech">{s}</TagPill>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <PageCTA
        headline="You've Seen the Track Record. Now Let's Add Your Project to It."
        subheadline="Every entry on this page represents a real problem solved, a real system built, and a real business transformed. The next one could be yours."
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  );
}
