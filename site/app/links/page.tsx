import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, Globe, ExternalLink } from "lucide-react";
import { LinkedInIcon, GitHubIcon, XIcon, MediumIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";
import { CONTACT_EMAIL, SOCIAL, WHATSAPP_URL, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Links — Mr. Fish",
  description: "All links for Mr. Fish — Data Scientist, Generative AI Engineer & Full-Stack Consultant.",
};

const links = [
  {
    icon: Globe,
    label: "Website",
    description: "Full portfolio & consulting services",
    href: SITE_URL,
    external: true,
    accent: true,
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp — Start a Conversation",
    description: "Fastest way to reach me",
    href: WHATSAPP_URL,
    external: true,
    whatsapp: true,
  },
  {
    icon: Mail,
    label: "Email",
    description: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    external: false,
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    description: "Work history & professional updates",
    href: SOCIAL.linkedin,
    external: true,
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    description: "Open source code & projects",
    href: SOCIAL.github,
    external: true,
  },
  {
    icon: XIcon,
    label: "Twitter / X",
    description: "@fish0_16 — AI & data science takes",
    href: SOCIAL.twitter,
    external: true,
  },
  {
    icon: MediumIcon,
    label: "Medium",
    description: "Long-form writing on AI & engineering",
    href: SOCIAL.medium,
    external: true,
  },
  {
    icon: Globe,
    label: "Google Sites Portfolio",
    description: "Earlier project showcase",
    href: SOCIAL.portfolio,
    external: true,
  },
];

export default function LinksPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start py-20 px-4"
      style={{ background: "var(--color-bg)" }}
    >
      {/* Profile */}
      <div className="flex flex-col items-center gap-3 mb-10">
        <div
          className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0"
          style={{ border: "2px solid var(--color-border)" }}
        >
          <img
            src="/images/profile.png"
            alt="Mr. Fish — Fisseha Estifanos"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="text-center">
          <h1
            className="text-2xl font-bold"
            style={{ fontFamily: "Clash Display, sans-serif", color: "var(--color-text-primary)" }}
          >
            Mr. Fish
          </h1>
          <p className="text-sm mt-1" style={{ color: "var(--color-text-secondary)" }}>
            Data Scientist · Generative AI Engineer · Full-Stack Consultant
          </p>
          <p className="text-xs mt-1" style={{ color: "var(--color-text-tertiary)", fontFamily: "JetBrains Mono, monospace" }}>
            Addis Ababa, Ethiopia · Global
          </p>
        </div>
      </div>

      {/* Links */}
      <div className="w-full max-w-md flex flex-col gap-3">
        {links.map(({ icon: Icon, label, description, href, external, accent, whatsapp }) => {
          const borderColor = accent
            ? "var(--color-accent-border-strong)"
            : whatsapp
            ? "rgba(37,211,102,0.3)"
            : "var(--color-border)";
          const iconColor = accent
            ? "var(--color-accent)"
            : whatsapp
            ? "var(--color-whatsapp)"
            : "var(--color-text-secondary)";

          const inner = (
            <div
              className="links-card flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-150"
              style={{
                background: "var(--color-surface)",
                border: `1px solid ${borderColor}`,
              }}
            >
              <Icon size={20} style={{ color: iconColor, flexShrink: 0 }} />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold" style={{ color: "var(--color-text-primary)" }}>
                  {label}
                </p>
                {description && (
                  <p className="text-xs mt-0.5 truncate" style={{ color: "var(--color-text-tertiary)" }}>
                    {description}
                  </p>
                )}
              </div>
              <ExternalLink size={14} style={{ color: "var(--color-text-tertiary)", flexShrink: 0 }} />
            </div>
          );

          return external ? (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="block">
              {inner}
            </a>
          ) : (
            <a key={label} href={href} className="block">
              {inner}
            </a>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-12 text-center">
        <Link
          href="/"
          className="text-xs hover:underline"
          style={{ color: "var(--color-text-tertiary)", fontFamily: "JetBrains Mono, monospace" }}
        >
          fish.pro.et
        </Link>
      </div>
    </div>
  );
}
