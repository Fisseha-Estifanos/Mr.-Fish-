import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "History",
  description: "Career timeline, education, skills, and featured projects of Fisseha Estifanos — Data Scientist, Generative AI Engineer, and Full-Stack Consultant.",
};

export default function HistoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
