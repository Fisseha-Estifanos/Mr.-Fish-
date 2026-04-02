"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { X, Menu, MessageCircle } from "lucide-react";
import { LinkedInIcon, GitHubIcon, XIcon, MediumIcon } from "@/components/ui/SocialIcons";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { NAV_LINKS, SOCIAL, WHATSAPP_URL } from "@/lib/constants";

const socialLinks = [
  { icon: LinkedInIcon, href: SOCIAL.linkedin, label: "LinkedIn" },
  { icon: GitHubIcon, href: SOCIAL.github, label: "GitHub" },
  { icon: XIcon, href: SOCIAL.twitter, label: "Twitter / X" },
  { icon: MediumIcon, href: SOCIAL.medium, label: "Medium" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: "var(--color-nav-bg)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: scrolled
            ? "1px solid var(--color-nav-border)"
            : "1px solid var(--color-nav-border-subtle)",
        }}
      >
        <nav className="content-wrapper flex items-center justify-between h-[72px] gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
            style={{ fontFamily: "Clash Display, sans-serif", color: "var(--color-text-primary)" }}
          >
            Mr. Fish 🦈
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-medium transition-colors duration-150 pb-1"
                  style={{
                    color: isActive ? "var(--color-text-primary)" : "var(--color-text-secondary)",
                    fontFamily: "Inter, sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = isActive ? "var(--color-text-primary)" : "var(--color-text-secondary)";
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{ background: "var(--color-accent)", opacity: 0.7 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop right: theme toggle + social icons + WhatsApp CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <div className="w-px h-4 mx-1" style={{ background: "var(--color-border)" }} />
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="transition-all duration-150 hover:scale-110"
                style={{ color: "var(--color-text-secondary)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text-primary)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text-secondary)";
                }}
              >
                <Icon size={18} />
              </a>
            ))}

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-white text-xs font-medium transition-all duration-150 hover:brightness-110 ml-2"
              style={{ background: "var(--color-whatsapp)", fontFamily: "Inter, sans-serif" }}
            >
              <MessageCircle size={14} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md transition-colors"
            style={{ color: "var(--color-text-primary)" }}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </nav>
      </header>

      {/* Mobile overlay menu */}
      <div
        className="lg:hidden fixed inset-0 z-[100] flex flex-col transition-opacity duration-300"
        style={{
          background: "var(--color-nav-bg)",
          backdropFilter: "blur(24px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
        }}
        aria-hidden={!open}
      >
        {/* Close button */}
        <div className="flex justify-between items-center px-6 h-[64px]">
          <span
            className="text-xl font-bold"
            style={{ fontFamily: "Clash Display, sans-serif", color: "var(--color-text-primary)" }}
          >
            Mr. Fish 🦈
          </span>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              style={{ color: "var(--color-text-primary)" }}
              className="p-2"
            >
              <X size={22} />
            </button>
          </div>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-2 px-6 pt-8 flex-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 text-3xl font-bold py-3 border-b transition-colors duration-150"
                style={{
                  fontFamily: "Clash Display, sans-serif",
                  color: isActive ? "var(--color-text-primary)" : "var(--color-text-secondary)",
                  borderColor: "var(--color-border)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-opacity duration-150"
                  style={{
                    background: "var(--color-accent)",
                    opacity: isActive ? 0.8 : 0,
                  }}
                />
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile bottom: social icons + WhatsApp */}
        <div className="px-6 pb-12 flex flex-col gap-6">
          <div className="flex items-center gap-5">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{ color: "var(--color-text-secondary)" }}
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-4 rounded-full text-white font-medium transition-all hover:brightness-110"
            style={{ background: "var(--color-whatsapp)" }}
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
