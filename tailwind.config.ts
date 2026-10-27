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
        draft: {
          bg: "#f4f4f0",
          card: "#ffffff",
          darkBg: "#0d0e11",
          darkCard: "#13151a",
          darkBorder: "#232730",
          ink: "#111111",
          border: "#111111",
          muted: "rgba(17, 17, 17, 0.6)",
          darkMuted: "rgba(244, 244, 240, 0.6)",
        },
        terminal: {
          green: "#22c55e",
          glow: "#4ade80",
          cyan: "#06b6d4",
          amber: "#f59e0b",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "JetBrains Mono", "Fira Code", "monospace"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      boxShadow: {
        brutal: "4px 4px 0px 0px #111111",
        "brutal-sm": "2px 2px 0px 0px #111111",
        "brutal-dark": "4px 4px 0px 0px #22c55e",
        "brutal-cyan": "4px 4px 0px 0px #06b6d4",
      },
    },
  },
  plugins: [],
};
export default config;
