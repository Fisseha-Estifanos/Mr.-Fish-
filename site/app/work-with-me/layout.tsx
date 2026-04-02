import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work With Me",
  description: "Engagement models for working with Mr. Fish — Paid Discovery, Project Engagement, Fractional CTO Retainer, and Equity Hybrid options.",
};

export default function WorkWithMeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
