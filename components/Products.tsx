import { FadeUp } from "@/components/ui/FadeUp";

const products = [
  {
    img: "/image-1-ai-receptionist.html",
    imgAlt: "AI Receptionist — problem and solution overview",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-sky">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.42 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6.18 6.18l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    name: "AI Receptionist",
    description: "Sara answers every call 24/7. Books appointments, handles FAQs, captures every lead. You get a log of every conversation.",
    punchline: "Never miss a customer again.",
    delay: 0,
  },
  {
    img: "/image-2-smart-website.html",
    imgAlt: "Smart Website — built from your reviews in 48 hours",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-sky">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    name: "Smart Website",
    description: "Built from your Google reviews and existing content. Captures leads, shows up on Google, works while you sleep.",
    punchline: "Live in 48 hours.",
    delay: 80,
  },
  {
    img: "/image-3-solution-details.html",
    imgAlt: "AI SDR — one intelligent system, an entire workforce",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-sky">
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
    <section id="products" className="bg-surface border-t border-[rgba(26,26,26,0.07)] py-24">
      <div className="mx-auto max-w-[1120px] px-8">

        <FadeUp>
          <div className="text-center mb-14">
            <span className="inline-flex items-center rounded-tag bg-[rgba(212,113,78,0.1)] border border-[rgba(212,113,78,0.2)] px-3.5 py-1 text-[11px] font-semibold tracking-[0.08em] uppercase text-terra mb-5">
              What we build for you
            </span>
            <h2 className="mx-auto max-w-lg" style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              <span className="text-muted font-normal">Three things that </span>
              <span className="text-ink font-bold">grow your business on autopilot</span>
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {products.map((p) => (
            <FadeUp key={p.name} delay={p.delay}>
              <div className="group flex flex-col h-full rounded-card border border-[rgba(26,26,26,0.08)] bg-surface overflow-hidden
                hover:border-[rgba(26,26,26,0.14)] hover:shadow-card-hover transition-all duration-200 cursor-default">

                {/* Preview */}
                <div className="relative w-full overflow-hidden bg-warm border-b border-[rgba(26,26,26,0.07)]" style={{ aspectRatio: "16/9" }}>
                  <iframe
                    src={p.img}
                    title={p.imgAlt}
                    scrolling="no"
                    className="absolute inset-0 pointer-events-none"
                    style={{ border: "none", width: "1440px", height: "720px", transform: "scale(0.25)", transformOrigin: "top left" }}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[rgba(122,173,168,0.18)] mb-5">
                    {p.icon}
                  </div>
                  <h3 className="text-[17px] font-bold text-ink mb-2">{p.name}</h3>
                  <p className="text-[15px] text-muted leading-[1.7] flex-1">{p.description}</p>
                  <p className="mt-5 text-[13px] font-semibold text-terra">{p.punchline}</p>
                </div>

              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}
