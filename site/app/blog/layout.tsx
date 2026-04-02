import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Coming soon — insights on Data Science, Generative AI, Full-Stack Engineering, and technical consulting from Mr. Fish.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
