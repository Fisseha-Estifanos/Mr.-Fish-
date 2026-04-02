import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "The story behind Mr. Fish — Fisseha Estifanos, Data Scientist and Generative AI Engineer based in Addis Ababa, Ethiopia.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
