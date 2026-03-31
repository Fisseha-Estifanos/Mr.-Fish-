import { Inter, JetBrains_Mono } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

// Clash Display and Cabinet Grotesk are from Fontshare.
// They are loaded via <link> in layout.tsx since next/font
// doesn't support Fontshare natively.
// Variables injected here for reference:
export const FONT_VARS = {
  clashDisplay: "--font-clash",
  cabinetGrotesk: "--font-cabinet",
} as const;
