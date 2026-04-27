import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Viao.ai — Done-for-you AI. Set up in 48 hours.",
  description:
    "We build your AI receptionist, smart website, and sales outreach system. Done for you in 48 hours. You focus on your work.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-bg text-ink">
        <Nav />
        {children}
      </body>
    </html>
  );
}
