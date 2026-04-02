"use client";

import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme, type Theme } from "@/lib/theme";

const themes: { value: Theme; icon: typeof Sun; label: string }[] = [
  { value: "light", icon: Sun, label: "Light" },
  { value: "system", icon: Monitor, label: "System" },
  { value: "dark", icon: Moon, label: "Dark" },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  function cycle() {
    const idx = themes.findIndex((t) => t.value === theme);
    const next = themes[(idx + 1) % themes.length];
    setTheme(next.value);
  }

  const current = themes.find((t) => t.value === theme) ?? themes[2];
  const Icon = current.icon;

  return (
    <button
      onClick={cycle}
      aria-label={`Switch theme (current: ${current.label})`}
      title={`Theme: ${current.label}`}
      className="flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-150 hover:opacity-100"
      style={{ color: "var(--color-text-secondary)" }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "var(--color-text-primary)"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "var(--color-text-secondary)"; }}
    >
      <Icon size={17} />
    </button>
  );
}
