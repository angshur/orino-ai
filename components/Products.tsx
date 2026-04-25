"use client";

import { FadeUp } from "@/components/ui/FadeUp";

const products = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-accent">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.42 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6.18 6.18l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    name: "AI Receptionist",
    description: "Sara answers every call 24/7. Books appointments, handles FAQs, captures every lead. You get a log of every conversation.",
    punchline: "Never miss a customer again.",
    delay: 0,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-accent">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    name: "Smart Website",
    description: "Built from your Google reviews and existing content. Captures leads, shows up on Google, works while you sleep.",
    punchline: "Live in 48 hours.",
    delay: 80,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-accent">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    name: "AI SDR",
    description: "Finds your prospects, writes the message, sends it, follows up, and puts booked meetings on your calendar. You just show up.",
    punchline: "Outreach that actually executes.",
    delay: 160,
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-white border-t border-[rgba(0,0,0,0.08)] py-24">
      <div className="mx-auto max-w-[1120px] px-10">

        <FadeUp>
          <div className="text-center mb-14">
            <span className="block text-[11px] font-semibold tracking-[0.1em] uppercase text-accent mb-4">
              What we build for you
            </span>
            <h2 className="text-[clamp(26px,4vw,36px)] font-bold tracking-[-0.02em] leading-[1.12] text-ink mx-auto max-w-lg">
              Three things that grow your business on autopilot
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {products.map((p) => (
            <FadeUp key={p.name} delay={p.delay}>
              <div className="group flex flex-col h-full rounded-card border border-[rgba(0,0,0,0.08)] bg-white p-7
                hover:border-[rgba(0,0,0,0.12)] hover:shadow-card-hover transition-all duration-150 cursor-default">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(0,129,242,0.08)] mb-5">
                  {p.icon}
                </div>
                <h3 className="text-[17px] font-semibold text-ink mb-2">{p.name}</h3>
                <p className="text-[15px] text-muted leading-[1.65] flex-1">{p.description}</p>
                <p className="mt-5 text-[13px] font-semibold text-accent">{p.punchline}</p>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}
