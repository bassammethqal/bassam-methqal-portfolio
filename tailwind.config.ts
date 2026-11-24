import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cyber: {
          canvas: "#06090E",      // Deep Obsidian Void
          panel: "#0A0F1D",       // Chassis Panel
          card: "#0E1526",        // Hardware Card / Rack
          elevated: "#131C31",    // Raised Telemetry Bay
          border: "#1E293B",      // Standard Perimeter
          "border-bright": "#334155",
          "border-accent": "rgba(16, 185, 129, 0.3)",
          primary: "#F8FAFC",     // High-contrast readout white
          secondary: "#94A3B8",   // Slate technical text
          muted: "#64748B",       // Engineering annotation gray
          dim: "#475569",         // Sub-circuit marker
          emerald: "#10B981",     // Phosphor Emerald (Core accent)
          "emerald-glow": "#34D399",
          cyan: "#06B6D4",        // Data Bus Cyan
          "cyan-glow": "#22D3EE",
          amber: "#F59E0B",       // Warning / Telemetry Pip
          violet: "#8B5CF6",      // Neural Pipeline Violet
        },
        // Backwards compatibility aliases mapped to the new dark cyber palette
        luxury: {
          bg: "#06090E",
          "bg-elevated": "#0A0F1D",
          "bg-card": "#0E1526",
          "bg-subtle": "#131C31",
          border: "#1E293B",
          "border-dark": "#334155",
          primary: "#F8FAFC",
          secondary: "#94A3B8",
          muted: "#64748B",
          accent: "#10B981",          // Emerald Phosphor
          "accent-light": "#34D399",
          beige: "#131C31",
          "beige-light": "#0E1526",
          "brown-dark": "#05080E",
          "brown-rich": "#0A0F1D",
        },
      },
      fontFamily: {
        thmanyah: ["var(--font-thmanyah-sans)", "system-ui", "-apple-system", "sans-serif"],
        serifDisplay: ["var(--font-thmanyah-serif-display)", "var(--font-thmanyah-sans)", "serif"],
        serifText: ["var(--font-thmanyah-serif-text)", "var(--font-thmanyah-sans)", "serif"],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "'Liberation Mono'",
          "'Courier New'",
          "monospace",
        ],
      },
      boxShadow: {
        cyber: "0 0 25px -5px rgba(16, 185, 129, 0.15), 0 8px 16px -6px rgba(0, 0, 0, 0.5)",
        "cyber-cyan": "0 0 25px -5px rgba(6, 182, 212, 0.2), 0 8px 16px -6px rgba(0, 0, 0, 0.5)",
        "cyber-glow": "0 0 30px rgba(16, 185, 129, 0.25)",
        luxury: "0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 15px -3px rgba(16, 185, 129, 0.08)",
        "luxury-hover": "0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 25px -2px rgba(16, 185, 129, 0.2)",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
