import {
  Layers,
  BarChart2,
  Search,
  Zap,
  Briefcase,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  body: string;
  benefits: string[];
  idealFor: string[];
  cta: { label: string; href: string };
}

export const services: Service[] = [
  {
    id: "full-stack-architecture",
    icon: Layers,
    title: "Full-Stack System Architecture",
    tagline: "Build Once. Scale Indefinitely.",
    body: "Your product should be an asset, not a liability. I design and build complete, integrated technology systems — front-end interfaces, RESTful APIs, database schemas, cloud infrastructure, and the data pipelines connecting them all. You get a unified architecture without the overhead of managing multiple specialised hires.",
    benefits: [
      "Faster time to market with fewer integration failures",
      "One point of accountability for the entire technical stack",
      "Systems built to scale from 100 users to 100,000+",
      "Reduced long-term technical debt from day one",
    ],
    idealFor: ["Funded startups", "SaaS products", "Digital agencies"],
    cta: { label: "Discuss Your Architecture", href: "/contact" },
  },
  {
    id: "predictive-analytics",
    icon: BarChart2,
    title: "Predictive Analytics & Custom Data Modeling",
    tagline: "Turn Your Data Into Your Most Powerful Business Tool.",
    body: "You're already generating data — the question is whether it's working for you. I design custom machine learning models, predictive algorithms, and interactive analytics dashboards that transform your raw data into strategic insight. Stop guessing what your customers will do next. Start knowing.",
    benefits: [
      "Unlock hidden revenue streams buried in your existing data",
      "Replace gut-feel decisions with data-backed confidence",
      "Custom models built around your specific business logic",
      "Interactive dashboards your non-technical team can actually use",
    ],
    idealFor: ["Growth-stage startups", "Enterprise analytics teams", "E-commerce"],
    cta: { label: "Explore Analytics Solutions", href: "/contact" },
  },
  {
    id: "technical-audits",
    icon: Search,
    title: "Technical Audits & Architecture Roadmaps",
    tagline: "Know Exactly Where You Stand — Before It Costs You.",
    body: "Before you scale, you need to know what you're scaling on. I conduct deep-dive reviews of your existing codebase, data infrastructure, and system architecture — identifying bottlenecks, security vulnerabilities, and costly technical debt before they become catastrophic. You'll receive a clear, prioritised roadmap your team can execute immediately.",
    benefits: [
      "Identify expensive technical debt before it derails your growth",
      "Get a clear, prioritised action plan — not just a list of problems",
      "Impartial, senior-level review with no internal politics",
      "Discovery fee credited toward full project execution",
    ],
    idealFor: [
      "Pre-funding startups",
      "Enterprises inheriting legacy systems",
      "Acquisitions & due diligence",
    ],
    cta: { label: "Request a Technical Audit", href: "/contact" },
  },
  {
    id: "rapid-mvp",
    icon: Zap,
    title: "Rapid MVP Development",
    tagline: "Test Your Idea in the Real World — Before You Burn Your Runway.",
    body: "Speed is your competitive advantage. I build intelligent, data-driven minimum viable products and prototypes that are designed not just to function — but to validate. Get a working product in front of real users, secure early investor traction, and make confident go/no-go decisions without burning months of funding on the wrong direction.",
    benefits: [
      "Go from concept to deployed product in weeks, not months",
      "Built with production-grade architecture — no expensive rewrites later",
      "Data instrumentation baked in from day one to capture user behaviour",
      "Designed to iterate rapidly based on real user feedback",
    ],
    idealFor: ["Pre-seed to Series A founders", "Agency overflow projects"],
    cta: { label: "Start Building Your MVP", href: "/contact" },
  },
  {
    id: "fractional-cto",
    icon: Briefcase,
    title: "Fractional CTO & Ongoing Technical Advisory",
    tagline: "Executive-Level Technical Leadership. Without the Executive Price Tag.",
    body: "Access a world-class Chief Technology Officer for a fraction of the cost of a full-time hire. As your Fractional CTO, I embed into your business to own your technical vision, lead your engineering decisions, mentor your team, and ensure your infrastructure scales with your growth. No 6-month hiring process. No $250,000 annual salary. Just direct, senior expertise exactly when and where you need it.",
    benefits: [
      "Strategic technical direction aligned with your business goals",
      "Predictable monthly retainer — scale up or down as needed",
      "Credibility booster for investor decks and enterprise sales",
      "Full-stack + data science oversight under one roof",
    ],
    idealFor: ["Seed-stage companies", "Scaling tech teams", "Founders without a CTO"],
    cta: { label: "Explore Fractional CTO Partnership", href: "/contact" },
  },
];
