import Link from "next/link";
import Image from "next/image";
import { Globe } from "lucide-react";
import {
  LinkedInIcon,
  GitHubIcon,
  XIcon,
  MediumIcon,
  WhatsAppIcon,
} from "@/components/ui/SocialIcons";
import { NAV_LINKS, SOCIAL, SITE_NAME, CONTACT_EMAIL } from "@/lib/constants";

const socialPlatforms = [
  {
    icon: LinkedInIcon,
    href: SOCIAL.linkedin,
    label: "LinkedIn",
    color: "#0A66C2",
  },
  {
    icon: GitHubIcon,
    href: SOCIAL.github,
    label: "GitHub",
    color: "var(--color-text-secondary)",
  },
  {
    icon: XIcon,
    href: SOCIAL.twitter,
    label: "Twitter / X",
    color: "var(--color-text-secondary)",
  },
  {
    icon: MediumIcon,
    href: SOCIAL.medium,
    label: "Medium",
    color: "var(--color-text-secondary)",
  },
  {
    icon: WhatsAppIcon,
    href: SOCIAL.whatsapp,
    label: "WhatsApp",
    color: "#25D366",
  },
  {
    icon: Globe,
    href: "/links",
    label: "All Links",
    color: "var(--color-accent)",
  },
];

export function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        borderColor: "var(--color-border)",
        background: "var(--color-surface)",
      }}
    >
      <div className="content-wrapper py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <p
              className="text-2xl font-bold mb-3"
              style={{
                fontFamily: "Clash Display, sans-serif",
                color: "var(--color-text-primary)",
              }}
            >
              Mr. Fish 🦈
            </p>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Apex Data Science and Analytics & Full-Stack Consulting.
              <br />
              Building intelligent, scalable systems for ambitious companies
              worldwide.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm hover:underline"
              style={{ color: "var(--color-accent)" }}
            >
              {CONTACT_EMAIL}
            </a>
            <div className="mt-6 flex items-center gap-3">
              <Image
                src="/images/Ethiopian flag.png"
                alt="Ethiopian flag"
                height={128}
                width={0}
                className="h-32 object-contain"
                style={{ width: "auto", opacity: 0.85 }}
              />
              <Image
                src="/images/Mr. Fish logo Dark Theme.png"
                alt="Mr. Fish logo"
                height={128}
                width={0}
                className="theme-logo-dark h-32 object-contain"
                style={{ width: "auto", opacity: 0.85 }}
              />
              <Image
                src="/images/Mr. Fish logo Light Theme.png"
                alt="Mr. Fish logo"
                height={128}
                width={0}
                className="theme-logo-light h-32 object-contain"
                style={{ width: "auto", opacity: 0.85 }}
              />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="text-xs font-medium uppercase tracking-widest mb-4"
              style={{
                fontFamily: "JetBrains Mono, monospace",
                color: "var(--color-accent)",
              }}
            >
              Navigation
            </p>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-150 hover:opacity-100"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p
              className="text-xs font-medium uppercase tracking-widest mb-4"
              style={{
                fontFamily: "JetBrains Mono, monospace",
                color: "var(--color-accent)",
              }}
            >
              Connect & Follow
            </p>
            <ul className="flex flex-col gap-3">
              {socialPlatforms.map(({ icon: Icon, href, label, color }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm transition-colors duration-150 group"
                    style={{ color: "var(--color-text-secondary)" }}
                    aria-label={label}
                  >
                    <Icon
                      size={16}
                      className="flex-shrink-0"
                      style={{ color }}
                    />
                    <span className="group-hover:underline">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-12 border-t"
          style={{ borderColor: "var(--color-border)" }}
        />

        {/* SEO copy + legal */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <p
            className="text-xs leading-relaxed max-w-2xl"
            style={{ color: "var(--color-text-tertiary)" }}
          >
            Mr. Fish is a global Data Science and Full-Stack Software Consultant
            specialising in predictive analytics, machine learning, end-to-end
            system architecture, and fractional CTO services. Serving startups,
            enterprise innovation teams, and digital agencies across North
            America, Europe, Asia-Pacific, and the Middle East.
          </p>
          <div className="flex flex-col gap-1 text-right">
            <div
              className="flex gap-4 text-xs justify-end"
              style={{ color: "var(--color-text-tertiary)" }}
            >
              <Link href="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:underline">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:underline">
                Cookie Policy
              </Link>
            </div>
            <p
              className="text-xs mt-1"
              style={{ color: "var(--color-text-tertiary)" }}
            >
              © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
