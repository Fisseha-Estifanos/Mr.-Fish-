import type { Testimonial } from "@/data/testimonials";
import { TagPill } from "./TagPill";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div
      className="flex flex-col gap-5 p-7 rounded-xl"
      style={{
        background: "var(--color-surface)",
        borderLeft: "3px solid var(--color-accent)",
        border: "1px solid var(--color-border)",
        borderLeftWidth: "3px",
        borderLeftColor: "var(--color-accent)",
      }}
    >
      {/* Quote mark */}
      <span
        className="text-5xl leading-none select-none"
        style={{ color: "var(--color-accent)", fontFamily: "Clash Display, sans-serif" }}
        aria-hidden
      >
        "
      </span>

      {/* Quote */}
      <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--color-text-secondary)" }}>
        {testimonial.quote}
      </p>

      {/* Attribution */}
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-sm font-semibold" style={{ color: "var(--color-text-primary)" }}>
            {testimonial.name}
          </p>
          <p className="text-xs" style={{ color: "var(--color-text-secondary)" }}>
            {testimonial.title} · {testimonial.company}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {testimonial.tags.map((tag) => (
            <TagPill key={tag} variant="category" className="text-[10px]">
              {tag}
            </TagPill>
          ))}
        </div>
      </div>
    </div>
  );
}
