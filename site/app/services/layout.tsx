import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Full-Stack Architecture, Predictive Analytics, Technical Audits, Rapid MVP, and Fractional CTO services from Mr. Fish — senior-level consulting with zero hand-offs.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
