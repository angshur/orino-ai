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
        bg:      "#F9F7F2",
        surface: "#FFFFFF",
        warm:    "#F2EFE8",
        ink:     "#1A1A1A",
        muted:   "#6B6560",
        dim:     "#9B948D",
        sky:     "#7AB5D4",
        terra:   "#D4714E",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card:  "20px",
        btn:   "100px",
        tag:   "100px",
        inner: "12px",
      },
      boxShadow: {
        card:       "0 1px 4px rgba(26,26,26,0.06), 0 6px 20px rgba(26,26,26,0.05)",
        "card-hover": "0 4px 28px rgba(26,26,26,0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
