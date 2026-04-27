import Footer from "@/components/Footer";
import { FadeUp } from "@/components/ui/FadeUp";

const checks = [
  "No commitment required",
  "We come prepared with your business already researched",
  "You'll leave with a clear plan",
];

export default function ContactPage() {
  return (
    <>
      <main className="pt-[64px] bg-bg">
        <section className="py-20">
          <div className="mx-auto max-w-[1120px] px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* Left */}
              <FadeUp>
                <div>
                  <span className="block text-[11px] font-semibold tracking-[0.1em] uppercase text-sky mb-5">
                    Let&apos;s talk
                  </span>
                  <h1 className="text-[clamp(30px,4vw,44px)] font-bold tracking-[-0.02em] leading-[1.12] text-ink mb-5">
                    Let&apos;s build your AI layer
                  </h1>
                  <p className="text-[17px] text-muted leading-[1.65] mb-10">
                    15 minutes. We&apos;ll learn about your business and show you exactly what we&apos;d build.
                  </p>

                  <ul className="flex flex-col gap-4 mb-12">
                    {checks.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[rgba(122,181,212,0.1)]">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3 text-sky">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd"/>
                          </svg>
                        </span>
                        <span className="text-[15px] text-muted">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Team */}
                  <div className="flex items-center gap-4 pt-8 border-t border-[rgba(26,26,26,0.08)]">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-terra text-white font-semibold text-[15px]">
                      B
                    </div>
                    <div>
                      <a href="https://www.linkedin.com/in/bipashahr/" target="_blank" rel="noopener noreferrer"
                        className="text-[15px] font-semibold text-ink hover:text-sky transition-colors">
                        Bipasha ↗
                      </a>
                      <p className="text-[12px] text-dim">Viao.ai</p>
                    </div>
                  </div>
                </div>
              </FadeUp>

              {/* Right — Calendly */}
              <FadeUp delay={100}>
                <div className="rounded-card border border-[rgba(26,26,26,0.08)] bg-surface overflow-hidden shadow-card-hover">
                  <div className="border-b border-[rgba(26,26,26,0.08)] bg-bg px-7 py-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[rgba(122,181,212,0.08)]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-sky">
                          <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
                        </svg>
                      </span>
                      <div>
                        <p className="text-[15px] font-semibold text-ink">Book your 15-minute call</p>
                        <p className="text-[12px] text-dim">Pick a time that works for you</p>
                      </div>
                    </div>
                  </div>

                  <div className="px-7 py-8">
                    {/* Mock calendar */}
                    <div className="rounded-card border border-[rgba(26,26,26,0.08)] bg-bg p-4 mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[13px] font-semibold text-ink">May 2026</span>
                        <div className="flex gap-2">
                          <div className="h-6 w-6 rounded bg-[rgba(0,0,0,0.06)]" />
                          <div className="h-6 w-6 rounded bg-[rgba(0,0,0,0.06)]" />
                        </div>
                      </div>
                      <div className="grid grid-cols-7 gap-1 text-center mb-2">
                        {["S","M","T","W","T","F","S"].map((d, i) => (
                          <span key={i} className="text-[10px] font-semibold text-dim">{d}</span>
                        ))}
                      </div>
                      <div className="grid grid-cols-7 gap-1 text-center">
                        {Array.from({ length: 35 }, (_, i) => {
                          const day = i - 2;
                          const available = [2,5,7,9,12,14,16,19,21].includes(day);
                          const selected = day === 7;
                          return (
                            <div key={i} className={`rounded-lg h-7 flex items-center justify-center text-[11px] font-medium
                              ${day < 1 || day > 31 ? "text-transparent" : ""}
                              ${selected ? "bg-terra text-white" : available ? "bg-[rgba(122,181,212,0.08)] text-sky cursor-pointer hover:bg-terra hover:text-white transition-colors" : "text-dim"}`}>
                              {day >= 1 && day <= 31 ? day : ""}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <a href="[YOUR_CALENDLY_URL]" target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full rounded-btn bg-ink px-6 py-3.5 text-[15px] font-semibold text-white hover:bg-[#1a1a1a] transition-all hover:-translate-y-px">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
                      </svg>
                      Book Your Free Call
                    </a>
                    <p className="mt-4 text-center text-[12px] text-dim">Response within 24 hours</p>
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
