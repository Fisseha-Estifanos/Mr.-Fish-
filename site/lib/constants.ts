// ── Site config ──────────────────────────────────────────────
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://fish.pro.et";
export const SITE_NAME = "Mr. Fish";
export const SITE_TAGLINE = "Apex Data Science & Full-Stack Consulting";

// ── Contact ───────────────────────────────────────────────────
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "fisseha.137@gmail.com";
// Ethiopian number in international format (no + or spaces) for wa.me links
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "251921307745";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Mr.%20Fish%2C%20I%27d%20like%20to%20discuss%20a%20project.`;
// TODO: Add Calendly URL when ready
export const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL ?? ""; // to be added

// ── Social links ──────────────────────────────────────────────
export const SOCIAL = {
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN ?? "https://www.linkedin.com/in/fisseha-estifanos-109ba6199/",
  github: process.env.NEXT_PUBLIC_GITHUB ?? "https://github.com/Fisseha-Estifanos",
  twitter: process.env.NEXT_PUBLIC_TWITTER ?? "https://x.com/fish0_16",
  medium: process.env.NEXT_PUBLIC_MEDIUM ?? "https://medium.com/@rasfish5",
  portfolio: "https://sites.google.com/view/fisseha-estifanos",
  whatsapp: WHATSAPP_URL,
} as const;

// ── Navigation ────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "History", href: "/history" },
  { label: "About", href: "/about" },
  { label: "Work With Me", href: "/work-with-me" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
] as const;

// ── Analytics ─────────────────────────────────────────────────
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
