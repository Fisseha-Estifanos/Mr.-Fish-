import type { Metadata } from "next";
import { Hero } from "@/components/sections/home/Hero";
import { TrustStrip } from "@/components/sections/home/TrustStrip";
import { ValueProp } from "@/components/sections/home/ValueProp";
import { ProblemSolution } from "@/components/sections/home/ProblemSolution";
import { ServicesPreview } from "@/components/sections/home/ServicesPreview";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { WhyNotAlternatives } from "@/components/sections/home/WhyNotAlternatives";
import { PageCTA } from "@/components/sections/shared/PageCTA";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mr. Fish | Apex Data Science & Full-Stack Consulting",
  description:
    "Stop managing fragmented freelancers and guessing from messy data. Mr. Fish is your apex consulting partner — combining full-stack engineering and advanced data science to build intelligent, scalable systems that drive real growth.",
  openGraph: {
    title: "Mr. Fish | Apex Data Science & Full-Stack Consulting",
    description:
      "Stop managing fragmented freelancers and guessing from messy data. Mr. Fish is your apex consulting partner — combining full-stack engineering and advanced data science to build intelligent, scalable systems that drive real growth.",
    url: SITE_URL,
    images: [{ url: "/og/home.png", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ValueProp />
      <ProblemSolution />
      <ServicesPreview />
      <Testimonials />
      <WhyNotAlternatives />
      <PageCTA
        headline="The Gap Between Where You Are and Where You Want to Be Is Usually Technical. Let's Close It."
        subheadline="Book a free 30-minute Discovery Call. I'll listen to what you're building, ask the right questions, and give you my honest assessment of the best path forward. No pressure. No pitch. Just clarity."
        primaryLabel="Book Your Free 30-Minute Discovery Call"
        secondaryLabel="Explore Services"
        secondaryHref="/services"
      />
    </>
  );
}
