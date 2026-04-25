"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Products",     href: "/products" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Book a Call",  href: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 bg-white transition-all duration-200 ${
          scrolled ? "border-b border-[#E2E8F0] shadow-[0_1px_8px_rgba(0,0,0,0.06)]" : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-8">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <span className="font-heading font-bold text-xl text-teal tracking-tight">
                Orino
              </span>
              <span
                className="hidden sm:block text-[13px] text-[#94A3B8] leading-none pt-px"
                style={{ fontFamily: "var(--font-body)" }}
              >
                AI for your business
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-7 flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-[#475569] hover:text-teal transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <a
              href="/contact"
              className="hidden md:inline-flex items-center rounded-btn bg-amber px-5 py-2.5 text-sm font-bold text-ink hover:bg-amber-dark transition-all hover:-translate-y-px shadow-sm"
            >
              Get Started
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-md hover:bg-[#F1F5F9] transition-colors"
              aria-label="Open menu"
            >
              <span className="block h-0.5 w-5 bg-[#0F172A] rounded-full" />
              <span className="block h-0.5 w-5 bg-[#0F172A] rounded-full" />
              <span className="block h-0.5 w-4 bg-[#0F172A] rounded-full self-start ml-0.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-white flex flex-col transition-all duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Overlay header */}
        <div className="flex h-16 items-center justify-between px-6 border-b border-[#E2E8F0]">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="font-heading font-bold text-xl text-teal"
          >
            Orino
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="flex items-center justify-center w-9 h-9 rounded-md hover:bg-[#F1F5F9] transition-colors"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
            </svg>
          </button>
        </div>

        {/* Overlay links */}
        <nav className="flex flex-col gap-1 px-4 pt-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3.5 text-lg font-semibold text-[#0F172A] hover:bg-[#F8FAFC] rounded-lg transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto px-6 pb-10">
          <a
            href="/contact"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center w-full rounded-btn bg-amber px-5 py-3.5 text-base font-bold text-ink hover:bg-amber-dark transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </>
  );
}
