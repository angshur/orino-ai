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
        bg:      "#ede8de",
        surface: "#f4f0e7",
        warm:    "#e5dfd4",
        ink:     "#1c1814",
        muted:   "#6e6560",
        dim:     "#9B948D",
        sky:     "#6AAFC2",
        terra:   "#C87050",
        sage:    "#7AADA8",
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
        card:         "0 1px 4px rgba(26,26,26,0.06), 0 6px 20px rgba(26,26,26,0.05)",
        "card-hover": "0 4px 28px rgba(26,26,26,0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
