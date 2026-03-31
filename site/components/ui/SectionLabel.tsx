interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p
      className={`text-xs font-medium uppercase tracking-[0.12em] mb-4 ${className}`}
      style={{
        fontFamily: "JetBrains Mono, monospace",
        color: "var(--color-accent)",
      }}
    >
      {children}
    </p>
  );
}
