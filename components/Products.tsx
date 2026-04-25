"use client";

import { useEffect, useRef, useState } from "react";

const products = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"
        className="h-6 w-6 text-teal">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.42 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6.18 6.18l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    name: "AI Receptionist",
    description:
      "Sara answers every call 24/7. Books appointments, handles FAQs, captures every lead. You get a log of every conversation.",
    punchline: "Never miss a customer again.",
    tag: "Live today",
    delay: "0ms",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"
        className="h-6 w-6 text-teal">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    name: "Smart Website",
    description:
      "Built from your Google reviews and existing content. Captures leads, shows up on Google, works while you sleep.",
    punchline: "Live in 48 hours.",
    tag: "Live today",
    delay: "100ms",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"
        className="h-6 w-6 text-teal">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    name: "AI SDR",
    description:
      "Finds your prospects, writes the message, sends it, follows up, and puts booked meetings on your calendar. You just show up.",
    punchline: "Outreach that actually executes.",
    tag: "Live today",
    delay: "200ms",
  },
];

function ProductCard({
  product,
  visible,
}: {
  product: (typeof products)[0];
  visible: boolean;
}) {
  return (
    <div
      className="group relative flex flex-col rounded-card bg-white border border-[#E2E8F0] p-7 shadow-card
        hover:shadow-card-hover hover:border-teal transition-all duration-200 cursor-default
        border-l-[3px] border-l-teal"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${product.delay}, transform 0.5s ease ${product.delay}`,
      }}
    >
      {/* Icon */}
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal-light mb-5">
        {product.icon}
      </div>

      {/* Tag */}
      <span className="absolute top-6 right-6 rounded-pill bg-[#F0FDF4] border border-[#BBF7D0] px-3 py-0.5 text-[11px] font-semibold text-emerald-700 uppercase tracking-wide">
        {product.tag}
      </span>

      {/* Name */}
      <h3
        className="font-heading font-semibold text-ink mb-3"
        style={{ fontSize: "20px" }}
      >
        {product.name}
      </h3>

      {/* Description */}
      <p className="text-sm text-[#475569] leading-relaxed flex-1">
        {product.description}
      </p>

      {/* Punchline */}
      <p className="mt-5 text-sm font-bold text-amber">
        {product.punchline}
      </p>
    </div>
  );
}

export default function Products() {
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
    <section id="products" className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <p
            className="uppercase text-teal font-semibold mb-4"
            style={{ fontSize: "13px", letterSpacing: "0.08em" }}
          >
            What we build for you
          </p>
          <h2
            className="font-heading font-bold text-ink mx-auto max-w-xl"
            style={{ fontSize: "clamp(28px, 4vw, 36px)", letterSpacing: "-0.01em", lineHeight: 1.2 }}
          >
            Three things that grow your business on autopilot
          </h2>
        </div>

        {/* Cards grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
