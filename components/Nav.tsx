"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Products",      href: "/products" },
  { label: "How It Works",  href: "/#how-it-works" },
  { label: "Book a Call",   href: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 h-[60px] bg-[rgba(248,248,247,0.92)] backdrop-blur-[12px] border-b border-[rgba(0,0,0,0.08)] flex items-center">
        <div className="mx-auto w-full max-w-[1120px] px-10 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-[26px] w-[26px] items-center justify-center rounded-[6px] bg-accent text-white text-[13px] font-bold">
              O
            </span>
            <span className="text-[17px] font-bold tracking-[-0.03em] text-ink">
              Orino
            </span>
            <span className="hidden sm:block text-[13px] text-muted leading-none">
              AI for your business
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href}
                className="text-[14px] font-medium text-muted hover:text-ink transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a href="/contact"
            className="hidden md:inline-flex items-center rounded-btn bg-ink px-[18px] py-2 text-[14px] font-semibold text-white hover:bg-[#1a1a1a] transition-all hover:-translate-y-px">
            Get Started
          </a>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(true)}
            className="md:hidden flex flex-col gap-[5px] w-9 h-9 items-center justify-center rounded-md hover:bg-[rgba(0,0,0,0.05)] transition-colors"
            aria-label="Open menu">
            <span className="block h-0.5 w-5 bg-ink rounded-full" />
            <span className="block h-0.5 w-5 bg-ink rounded-full" />
            <span className="block h-0.5 w-4 bg-ink rounded-full self-start" />
          </button>
        </div>
      </header>

      {/* Full-screen mobile overlay */}
      <div className={`fixed inset-0 z-[100] bg-[#f8f8f7] flex flex-col transition-all duration-200 md:hidden ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="flex h-[60px] items-center justify-between px-6 border-b border-[rgba(0,0,0,0.08)]">
          <Link href="/" onClick={() => setOpen(false)}
            className="text-[17px] font-bold tracking-[-0.03em] text-ink">Orino</Link>
          <button onClick={() => setOpen(false)}
            className="flex items-center justify-center w-9 h-9 rounded-md hover:bg-[rgba(0,0,0,0.05)] transition-colors"
            aria-label="Close menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-4 pt-6">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="px-4 py-3.5 text-[17px] font-semibold text-ink hover:bg-[rgba(0,0,0,0.04)] rounded-lg transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto px-6 pb-10">
          <a href="/contact" onClick={() => setOpen(false)}
            className="flex items-center justify-center w-full rounded-btn bg-ink px-5 py-3.5 text-base font-semibold text-white hover:bg-[#1a1a1a] transition-colors">
            Get Started
          </a>
        </div>
      </div>
    </>
  );
}
