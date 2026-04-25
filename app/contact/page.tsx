import Footer from "@/components/Footer";
import { FadeUp } from "@/components/ui/FadeUp";

const checkItems = [
  "No commitment required",
  "We come prepared with your business already researched",
  "You'll leave with a clear plan",
];

export default function ContactPage() {
  return (
    <>
      <main className="pt-24 bg-white">
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

              {/* Left — context */}
              <FadeUp>
                <div>
                  <p className="uppercase text-teal font-semibold mb-5"
                    style={{ fontSize: "13px", letterSpacing: "0.08em" }}>
                    Let&apos;s talk
                  </p>
                  <h1
                    className="font-heading font-bold text-ink mb-5"
                    style={{ fontSize: "clamp(32px, 4vw, 44px)", letterSpacing: "-0.02em", lineHeight: 1.15 }}
                  >
                    Let&apos;s build your AI layer
                  </h1>
                  <p className="text-[#475569] mb-10 leading-relaxed" style={{ fontSize: "17px" }}>
                    15 minutes. We&apos;ll learn about your business and show you
                    exactly what we&apos;d build.
                  </p>

                  {/* Checklist */}
                  <ul className="flex flex-col gap-4 mb-12">
                    {checkItems.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-light">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3 text-teal">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd"/>
                          </svg>
                        </span>
                        <span className="text-[#475569] text-base">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Team */}
                  <div className="flex items-center gap-4 pt-8 border-t border-[#E2E8F0]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-teal text-white font-heading font-bold text-base">
                      B
                    </div>
                    <div>
                      <a
                        href="https://www.linkedin.com/in/bipashahr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-ink hover:text-teal transition-colors text-sm"
                      >
                        Bipasha ↗
                      </a>
                      <p className="text-xs text-[#94A3B8]">Orino.ai</p>
                    </div>
                  </div>
                </div>
              </FadeUp>

              {/* Right — Calendly placeholder */}
              <FadeUp delay={120}>
                <div className="rounded-[20px] border-2 border-teal/25 bg-[#F8FAFC] overflow-hidden shadow-card">
                  {/* Header */}
                  <div className="border-b border-[#E2E8F0] bg-white px-8 py-6">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-light">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-teal">
                          <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
                        </svg>
                      </span>
                      <div>
                        <p className="font-heading font-bold text-ink text-sm">Book your 15-minute call</p>
                        <p className="text-xs text-[#94A3B8]">Pick a time that works for you</p>
                      </div>
                    </div>
                  </div>

                  {/* Calendly embed area */}
                  <div className="px-8 py-10 text-center">
                    <div className="mb-8">
                      <p className="text-[#94A3B8] text-sm mb-1">Embed your Calendly widget here.</p>
                      <p className="text-[#CBD5E1] text-xs">Replace the button below with your Calendly inline embed script.</p>
                    </div>

                    {/* Mock calendar grid */}
                    <div className="rounded-xl border border-[#E2E8F0] bg-white p-4 mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold text-ink">May 2026</span>
                        <div className="flex gap-2">
                          <div className="h-6 w-6 rounded bg-[#F1F5F9]" />
                          <div className="h-6 w-6 rounded bg-[#F1F5F9]" />
                        </div>
                      </div>
                      <div className="grid grid-cols-7 gap-1 text-center mb-2">
                        {["S","M","T","W","T","F","S"].map((d, i) => (
                          <span key={i} className="text-[10px] font-semibold text-[#94A3B8]">{d}</span>
                        ))}
                      </div>
                      <div className="grid grid-cols-7 gap-1 text-center">
                        {Array.from({ length: 35 }, (_, i) => {
                          const day = i - 2;
                          const isAvailable = [2, 5, 7, 9, 12, 14, 16, 19, 21].includes(day);
                          const isSelected = day === 7;
                          return (
                            <div
                              key={i}
                              className={`rounded-lg h-7 flex items-center justify-center text-[11px] font-medium
                                ${day < 1 || day > 31 ? "text-transparent" : ""}
                                ${isSelected ? "bg-teal text-white" : isAvailable ? "bg-teal-light text-teal cursor-pointer hover:bg-teal hover:text-white transition-colors" : "text-[#CBD5E1]"}
                              `}
                            >
                              {day >= 1 && day <= 31 ? day : ""}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <a
                      href="[YOUR_CALENDLY_URL]"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full rounded-btn bg-amber px-6 py-3.5 text-base font-bold text-ink hover:bg-amber-dark transition-all hover:-translate-y-px shadow-sm"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
                      </svg>
                      Book Your Free Call
                    </a>

                    <p className="mt-4 text-xs text-[#94A3B8]">Response within 24 hours</p>
                  </div>
                </div>
              </FadeUp>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
