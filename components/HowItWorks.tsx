"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    n: "1",
    title: "Tell us about your business",
    body: "10 minutes. We learn your services, hours, and goals.",
  },
  {
    n: "2",
    title: "We build your AI layer",
    body: "48 hours. Receptionist configured, website live, SDR ready.",
  },
  {
    n: "3",
    title: "Watch it work",
    body: "Leads captured. Calls answered. Meetings booked. You focus on delivery.",
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="uppercase text-teal font-semibold mb-4"
            style={{ fontSize: "13px", letterSpacing: "0.08em" }}>
            The process
          </p>
          <h2
            className="font-heading font-bold text-ink"
            style={{ fontSize: "clamp(28px, 4vw, 36px)", letterSpacing: "-0.01em", lineHeight: 1.2 }}
          >
            Up and running in 48 hours
          </h2>
        </div>

        {/* Steps */}
        <div ref={ref} className="relative">

          {/* Dashed connector line — desktop only */}
          <div
            className="hidden md:block absolute top-10 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px"
            style={{
              borderTop: "2px dashed #0F766E",
              opacity: 0.3,
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {steps.map((step, i) => (
              <div
                key={step.n}
                className="relative flex flex-col items-center text-center"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 0.55s ease ${i * 120}ms, transform 0.55s ease ${i * 120}ms`,
                }}
              >
                {/* Number circle */}
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-teal-light border-2 border-teal/20 mb-6">
                  <span
                    className="font-heading font-light text-teal select-none"
                    style={{ fontSize: "40px", lineHeight: 1 }}
                  >
                    {step.n}
                  </span>
                </div>

                <h3
                  className="font-heading font-semibold text-ink mb-3"
                  style={{ fontSize: "18px" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed max-w-[220px]">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA nudge */}
        <div className="mt-14 text-center">
          <a
            href="/contact"
            className="inline-flex items-center rounded-btn bg-amber px-7 py-3.5 text-base font-bold text-ink shadow-sm hover:bg-amber-dark transition-all hover:-translate-y-px"
          >
            Get started in 10 minutes
          </a>
        </div>
      </div>
    </section>
  );
}
