import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        ink: "var(--ink)",
        primary: "var(--primary)",
        accent: "var(--accent)",
        surface: "var(--surface)",
        border: "var(--border)",
        "result-hero": "var(--result-hero)",
        "type-r": "var(--type-r)",
        "type-i": "var(--type-i)",
        "type-a": "var(--type-a)",
        "type-s": "var(--type-s)",
        "type-o": "var(--type-o)",
        "type-c": "var(--type-c)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
