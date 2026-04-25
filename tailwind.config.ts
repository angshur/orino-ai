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
        teal: {
          DEFAULT: "#0F766E",
          light:   "#CCFBF1",
          dark:    "#0D5F58",
        },
        amber: {
          DEFAULT: "#F59E0B",
          light:   "#FEF3C7",
          dark:    "#D97706",
        },
        ink: "#0F172A",
      },
      fontFamily: {
        heading: ["var(--font-jakarta)", "Plus Jakarta Sans", "sans-serif"],
        body:    ["var(--font-dm)",      "DM Sans",           "sans-serif"],
      },
      fontSize: {
        label: ["13px", { fontWeight: "600", letterSpacing: "0.08em", lineHeight: "1" }],
      },
      borderRadius: {
        card:   "12px",
        btn:    "8px",
        pill:   "24px",
      },
      boxShadow: {
        card:       "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)",
        "card-hover": "0 4px 24px rgba(15,118,110,0.12)",
      },
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease both",
      },
    },
  },
  plugins: [],
};

export default config;
