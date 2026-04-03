"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Globe, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/SocialIcons";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { CALENDLY_URL, CONTACT_EMAIL, SOCIAL, WHATSAPP_URL } from "@/lib/constants";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-[120px] pb-12" style={{ background: "var(--color-surface)" }}>
        <div className="content-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} initial="hidden" animate="visible">
              <SectionLabel>Let&apos;s Build Something Exceptional.</SectionLabel>
              <h1
                className="text-[clamp(1.75rem,4vw,3rem)] font-bold mb-4"
                style={{ fontFamily: "Clash Display, sans-serif", color: "var(--color-text-primary)" }}
              >
                The Gap Between Where You Are and Where You Want to Be Is Usually Technical. Let&apos;s Close It.
              </h1>
              <p className="text-lg" style={{ color: "var(--color-text-secondary)" }}>
                Whether you&apos;re sitting on untapped data, stalled in a build, or looking for a senior partner to take your technology to the next level — this is where that conversation starts.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="hidden lg:flex justify-end"
            >
              <div className="relative w-72 h-80 rounded-2xl overflow-hidden flex-shrink-0">
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
                  className="absolute inset-0 flex-col items-center justify-center"
                  style={{ display: "none", background: "var(--color-surface-raised)", border: "1px solid var(--color-border)" }}
                >
                  <span style={{ fontSize: "4rem" }}>🦈</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="content-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: details + secondary CTAs */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="flex flex-col gap-8"
            >
              <div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: "Cabinet Grotesk, sans-serif", color: "var(--color-text-primary)" }}
                >
                  Book a Free 30-Minute Discovery Call
                </h2>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
                  I&apos;ll listen to what you&apos;re building, ask the right questions, and give you my honest, direct assessment of the best path forward. If we&apos;re a great fit, we&apos;ll move fast. If I&apos;m not the right solution, I&apos;ll tell you that too.
                  <br /><br />
                  No pressure. No pitch deck. Just clarity.
                </p>
                <Button href={CALENDLY_URL} external size="lg">
                  Book Your Discovery Call
                </Button>
              </div>

              {/* Secondary CTAs */}
              <div className="flex flex-col gap-3">
                <p className="text-xs font-medium uppercase tracking-widest" style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--color-text-tertiary)" }}>
                  Other Ways to Reach Me
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3.5 rounded-xl text-sm font-medium transition-all hover:opacity-90"
                  style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", color: "var(--color-text-primary)" }}
                >
                  <MessageCircle size={18} style={{ color: "var(--color-whatsapp)" }} />
                  Chat on WhatsApp — Fastest Response
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-3 px-5 py-3.5 rounded-xl text-sm font-medium transition-all hover:opacity-90"
                  style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", color: "var(--color-text-primary)" }}
                >
                  <Mail size={18} style={{ color: "var(--color-accent)" }} />
                  {CONTACT_EMAIL}
                </a>
                <a
                  href={SOCIAL.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3.5 rounded-xl text-sm font-medium transition-all hover:opacity-90"
                  style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", color: "var(--color-text-primary)" }}
                >
                  <LinkedInIcon size={18} style={{ color: "#0a66c2" }} />
                  Connect on LinkedIn
                </a>
                <a
                  href="/links"
                  className="flex items-center gap-3 px-5 py-3.5 rounded-xl text-sm font-medium transition-all hover:opacity-90"
                  style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", color: "var(--color-text-primary)" }}
                >
                  <Globe size={18} style={{ color: "var(--color-accent)" }} />
                  All Links — One Page
                </a>
              </div>

              {/* Contact details */}
              <div className="flex flex-col gap-3 pt-2">
                <div className="flex items-center gap-2 text-sm" style={{ color: "var(--color-text-secondary)" }}>
                  <Globe size={14} style={{ color: "var(--color-accent)" }} />
                  Available Globally · Remote-First
                </div>
                <div className="flex items-center gap-2 text-sm" style={{ color: "var(--color-text-secondary)" }}>
                  <Clock size={14} style={{ color: "var(--color-accent)" }} />
                  Responds within 24 hours on business days
                </div>
              </div>
            </motion.div>

            {/* Right: contact form */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

type FormStatus = "idle" | "loading" | "success" | "error";

function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      role: (form.elements.namedItem("role") as HTMLSelectElement).value,
      challenge: (form.elements.namedItem("challenge") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        setErrorMsg(json.error ?? "Something went wrong.");
        setStatus("error");
      } else {
        setStatus("success");
        form.reset();
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="flex flex-col items-center justify-center gap-5 p-12 rounded-2xl text-center min-h-[400px]"
        style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
      >
        <CheckCircle size={48} style={{ color: "var(--color-success)" }} />
        <div>
          <p className="text-xl font-bold mb-2" style={{ fontFamily: "Cabinet Grotesk, sans-serif", color: "var(--color-text-primary)" }}>
            Message Sent.
          </p>
          <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
            I&apos;ll review your message and get back to you within 24 hours.
          </p>
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm underline"
          style={{ color: "var(--color-accent)" }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 p-8 rounded-2xl"
      style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
    >
      <h3
        className="text-lg font-bold mb-1"
        style={{ fontFamily: "Cabinet Grotesk, sans-serif", color: "var(--color-text-primary)" }}
      >
        Send a Direct Message
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField label="Your Name" name="name" placeholder="Jane Smith" required />
        <FormField label="Company / Organisation" name="company" placeholder="Acme Corp" />
      </div>
      <FormField label="Email Address" name="email" type="email" placeholder="you@company.com" required />

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium" style={{ color: "var(--color-text-secondary)" }}>
          What best describes you?
        </label>
        <select
          name="role"
          className="w-full rounded-lg px-4 py-3.5 text-sm appearance-none"
          style={{
            background: "var(--color-surface-raised)",
            border: "1px solid var(--color-border)",
            color: "var(--color-text-primary)",
          }}
        >
          <option value="">Select a role...</option>
          <option value="founder">Startup Founder</option>
          <option value="cto">CTO / Tech Leader</option>
          <option value="agency">Agency Owner</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium" style={{ color: "var(--color-text-secondary)" }}>
          What&apos;s your biggest technical challenge right now?
        </label>
        <textarea
          name="challenge"
          rows={4}
          placeholder="Tell me what you're trying to build or solve..."
          className="w-full rounded-lg px-4 py-3.5 text-sm resize-none"
          style={{
            background: "var(--color-surface-raised)",
            border: "1px solid var(--color-border)",
            color: "var(--color-text-primary)",
          }}
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-sm px-4 py-3 rounded-lg" style={{ background: "rgba(239,68,68,0.08)", color: "var(--color-error)" }}>
          <AlertCircle size={16} />
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 rounded-lg text-sm font-medium gradient-accent text-[#0a0a0f] hover:brightness-110 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending…" : "Submit → Let's Talk"}
      </button>
    </form>
  );
}

function FormField({
  label, name, type = "text", placeholder, required,
}: {
  label: string; name: string; type?: string; placeholder?: string; required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium" style={{ color: "var(--color-text-secondary)" }}>
        {label} {required && <span style={{ color: "var(--color-error)" }}>*</span>}
      </label>
      <input
        id={name} name={name} type={type} placeholder={placeholder} required={required}
        className="w-full rounded-lg px-4 py-3.5 text-sm"
        style={{
          background: "var(--color-surface-raised)",
          border: "1px solid var(--color-border)",
          color: "var(--color-text-primary)",
        }}
      />
    </div>
  );
}
