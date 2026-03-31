export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  company: string;
  tags: string[];
}

// Placeholder testimonials — replace with real client quotes (see TODO.md Phase 1)
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Mr. Fish took our half-built prototype and transformed it into a fully functioning, data-driven platform. What would have taken our previous agency months — and three times the budget — was done with surgical precision. For the first time, I actually understood our own technical stack.",
    name: "[Client Name]",
    title: "Founder & CEO",
    company: "[Company / Industry]",
    tags: ["MVP Development", "Full-Stack Architecture"],
  },
  {
    id: "t2",
    quote:
      "We had years of siloed, legacy data that our team had no capacity to restructure. Mr. Fish came in, audited everything, built a custom analytics pipeline, and delivered a dashboard that our executive team now uses weekly for strategic decisions. The ROI was visible within the first quarter.",
    name: "[Client Name]",
    title: "CTO",
    company: "[Company / Industry]",
    tags: ["Data Architecture", "Predictive Analytics", "Technical Audit"],
  },
  {
    id: "t3",
    quote:
      "We nearly lost a major client when the scope expanded into advanced backend architecture and data visualisation. Mr. Fish handled everything flawlessly as our behind-the-scenes partner. Our client was thrilled and we retained the contract. We now have him on speed dial.",
    name: "[Client Name]",
    title: "Managing Director",
    company: "[Agency Name]",
    tags: ["White-Label Consulting", "Full-Stack", "Agency Partnership"],
  },
];

export const stats = [
  { value: "10+", label: "Projects Shipped" },
  { value: "5+", label: "Global Clients" },
  { value: "5+", label: "Industries Served" },
  { value: "100%", label: "Direct Senior Access" },
];
