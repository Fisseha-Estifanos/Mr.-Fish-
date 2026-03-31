import type { Service } from "@/data/services";
import { Check } from "lucide-react";
import { TagPill } from "./TagPill";
import { Button } from "./Button";

interface ServiceCardProps {
  service: Service;
  compact?: boolean;
}

export function ServiceCard({ service, compact = false }: ServiceCardProps) {
  const Icon = service.icon;

  if (compact) {
    return (
      <div className="card p-6 flex flex-col gap-3 h-full">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: "rgba(0,212,255,0.1)" }}
        >
          <Icon size={20} style={{ color: "var(--color-accent)" }} />
        </div>
        <div>
          <h3 className="font-bold text-base mb-1" style={{ fontFamily: "Cabinet Grotesk, sans-serif", color: "var(--color-text-primary)" }}>
            {service.title}
          </h3>
          <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>{service.tagline}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card p-8 flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: "rgba(0,212,255,0.1)" }}
        >
          <Icon size={24} style={{ color: "var(--color-accent)" }} />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "Cabinet Grotesk, sans-serif", color: "var(--color-text-primary)" }}>
            {service.title}
          </h3>
          <p className="text-sm font-medium" style={{ color: "var(--color-accent)" }}>
            {service.tagline}
          </p>
        </div>
      </div>

      {/* Body */}
      <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
        {service.body}
      </p>

      {/* Benefits */}
      <ul className="flex flex-col gap-2">
        {service.benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-2 text-sm" style={{ color: "var(--color-text-secondary)" }}>
            <Check size={14} className="flex-shrink-0 mt-0.5" style={{ color: "var(--color-success)" }} />
            {benefit}
          </li>
        ))}
      </ul>

      {/* Ideal for + CTA */}
      <div className="flex flex-wrap items-center gap-2 pt-2 border-t" style={{ borderColor: "var(--color-border)" }}>
        <span className="text-xs" style={{ color: "var(--color-text-tertiary)" }}>Ideal for:</span>
        {service.idealFor.map((tag) => (
          <TagPill key={tag} variant="segment">{tag}</TagPill>
        ))}
      </div>

      <Button href={service.cta.href} variant="secondary" size="sm" className="self-start">
        {service.cta.label}
      </Button>
    </div>
  );
}
