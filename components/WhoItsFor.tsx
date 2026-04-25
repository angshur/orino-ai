"use client";

import { useEffect, useRef, useState } from "react";

const tiles = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"
        className="h-6 w-6 text-teal">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: "Local Businesses",
    subtitle: "Salons, restaurants, roofers, dental offices",
    body: "Get found, get called, get booked.",
    delay: "0ms",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"
        className="h-6 w-6 text-teal">
        <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/>
        <path d="M9 22v-4h6v4"/>
        <path d="M8 6h.01"/>
        <path d="M16 6h.01"/>
        <path d="M12 6h.01"/>
        <path d="M12 10h.01"/>
        <path d="M12 14h.01"/>
        <path d="M16 10h.01"/>
        <path d="M16 14h.01"/>
        <path d="M8 10h.01"/>
        <path d="M8 14h.01"/>
      </svg>
    ),
    title: "Growing Companies",
    subtitle: "Real estate firms, med spas, universities",
    body: "Manage more customers across more locations.",
    delay: "80ms",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"
        className="h-6 w-6 text-teal">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="6"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    ),
    title: "B2B Sales Teams",
    subtitle: "Adtech, media, SaaS companies",
    body: "Find leads, reach out faster, close more deals.",
    delay: "160ms",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"
        className="h-6 w-6 text-teal">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Agency Partners",
    subtitle: "Agencies with hungry sales reps",
    body: "Add AI services to your portfolio. Earn recurring commission.",
    delay: "240ms",
  },
];

export default function WhoItsFor() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="uppercase text-teal font-semibold mb-4"
            style={{ fontSize: "13px", letterSpacing: "0.08em" }}>
            Who we serve
          </p>
          <h2
            className="font-heading font-bold text-ink"
            style={{ fontSize: "clamp(28px, 4vw, 36px)", letterSpacing: "-0.01em", lineHeight: 1.2 }}
          >
            From your neighborhood salon to your sales team
          </h2>
        </div>

        {/* 2×2 grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {tiles.map((tile) => (
            <div
              key={tile.title}
              className="group flex flex-col gap-3 rounded-card border border-[#E2E8F0] bg-[#F8FAFC] p-7
                hover:bg-white hover:border-teal hover:shadow-card-hover transition-all duration-200 cursor-default"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${tile.delay}, transform 0.5s ease ${tile.delay}`,
              }}
            >
              {/* Icon */}
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-light">
                {tile.icon}
              </div>

              <div>
                <h3 className="font-heading font-semibold text-ink mb-1" style={{ fontSize: "17px" }}>
                  {tile.title}
                </h3>
                <p className="text-xs text-[#94A3B8] font-medium mb-2">{tile.subtitle}</p>
                <p className="text-sm text-[#475569] leading-relaxed">{tile.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
