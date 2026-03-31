interface Stat {
  value: string;
  label: string;
}

interface StatStripProps {
  stats: Stat[];
  className?: string;
}

export function StatStrip({ stats, className = "" }: StatStripProps) {
  return (
    <div className={`flex flex-wrap justify-center gap-0 ${className}`}>
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          className="flex flex-col items-center px-8 py-4"
          style={{
            borderRight: i < stats.length - 1 ? "1px solid var(--color-border)" : "none",
          }}
        >
          <span
            className="text-4xl font-bold leading-none"
            style={{ fontFamily: "Clash Display, sans-serif", color: "var(--color-accent)" }}
          >
            {stat.value}
          </span>
          <span
            className="text-sm mt-1 text-center"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
