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
        bg:      "#f8f8f7",
        surface: "#ffffff",
        ink:     "#0d0d0d",
        muted:   "#6b7280",
        dim:     "#9ca3af",
        accent:  "#0081f2",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "12px",
        btn:  "8px",
        pill: "100px",
      },
      boxShadow: {
        "card-hover": "0 4px 20px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
