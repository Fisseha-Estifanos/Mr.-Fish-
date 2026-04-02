import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { PageCTA } from "@/components/sections/shared/PageCTA";
import { faqs } from "@/data/faq";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to the most common questions about working with Mr. Fish — from how Discovery Calls work to IP ownership, white-label consulting, and project timelines.",
  alternates: { canonical: `${SITE_URL}/faq` },
};

// FAQ JSON-LD schema for Google rich results
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="pt-[120px] pb-12" style={{ background: "var(--color-surface)" }}>
        <div className="content-wrapper max-w-3xl">
          <SectionLabel>Frequently Asked Questions</SectionLabel>
          <h1
            className="text-[clamp(2rem,5vw,3.5rem)] font-bold"
            style={{ fontFamily: "Clash Display, sans-serif", color: "var(--color-text-primary)" }}
          >
            Your Questions, Answered Directly.
          </h1>
        </div>
      </section>

      {/* FAQ list */}
      <section className="section-padding">
        <div className="content-wrapper max-w-3xl">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <PageCTA
        headline="Still Have Questions?"
        subheadline="Book a free 30-minute call and ask them directly. No pitch, no pressure."
      />
    </>
  );
}
