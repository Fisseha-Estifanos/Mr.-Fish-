type TagVariant = "tech" | "category" | "segment" | "success";

interface TagPillProps {
  children: React.ReactNode;
  variant?: TagVariant;
  className?: string;
}

const variantStyles: Record<TagVariant, React.CSSProperties> = {
  tech: {
    background: "var(--color-accent-subtle)",
    border: "1px solid var(--color-accent-border)",
    color: "var(--color-accent)",
  },
  category: {
    background: "rgba(124,58,237,0.12)",
    border: "1px solid rgba(124,58,237,0.25)",
    color: "#a78bfa",
  },
  segment: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid var(--color-border)",
    color: "var(--color-text-secondary)",
  },
  success: {
    background: "rgba(34,197,94,0.12)",
    border: "1px solid rgba(34,197,94,0.25)",
    color: "#22c55e",
  },
};

export function TagPill({ children, variant = "tech", className = "" }: TagPillProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${className}`}
      style={{
        fontFamily: "JetBrains Mono, monospace",
        ...variantStyles[variant],
      }}
    >
      {children}
    </span>
  );
}
