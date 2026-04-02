"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Theme = "dark" | "light" | "system";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue>({ theme: "dark", setTheme: () => {} });

function resolveTheme(theme: Theme): "dark" | "light" {
  if (theme !== "system") return theme;
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");

  // Read stored preference on mount
  useEffect(() => {
    const stored = localStorage.getItem("mrfish-theme") as Theme | null;
    if (stored && ["dark", "light", "system"].includes(stored)) {
      setThemeState(stored);
    }
  }, []);

  // Apply resolved theme to <html data-theme>
  useEffect(() => {
    const resolved = resolveTheme(theme);
    document.documentElement.setAttribute("data-theme", resolved);
    localStorage.setItem("mrfish-theme", theme);

    // For system: re-resolve if OS preference changes
    if (theme === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = (e: MediaQueryListEvent) => {
        document.documentElement.setAttribute("data-theme", e.matches ? "dark" : "light");
      };
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: setThemeState }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
