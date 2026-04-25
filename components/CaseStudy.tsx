import { FadeUp } from "@/components/ui/FadeUp";

export default function CaseStudy() {
  return (
    <section className="bg-bg border-t border-[rgba(26,26,26,0.07)] py-24">
      <div className="mx-auto max-w-[1120px] px-8">

        <FadeUp>
          <div className="text-center mb-14">
            <span className="inline-flex items-center rounded-tag bg-[rgba(122,173,168,0.18)] border border-[rgba(106,175,194,0.2)] px-3.5 py-1 text-[11px] font-semibold tracking-[0.08em] uppercase text-sky mb-5">
              Real example
            </span>
            <h2 style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              <span className="text-muted font-normal">What Orino did for </span>
              <span className="text-ink font-bold">Star Image Studio</span>
            </h2>
          </div>
        </FadeUp>

        <FadeUp delay={80}>
          <div className="grain rounded-card border border-[rgba(26,26,26,0.08)] bg-surface overflow-hidden shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* Left */}
              <div className="relative z-10 p-10 lg:p-14 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-10">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[rgba(122,173,168,0.18)] text-sky text-[17px] font-bold">S</div>
                  <div>
                    <p className="text-[15px] font-bold text-ink">Star Image Studio</p>
                    <p className="text-[13px] text-dim">Beauty Salon · San Jose, CA</p>
                  </div>
                </div>

                <div className="mb-6">
                  <span className="inline-block rounded-tag bg-[rgba(212,113,78,0.1)] border border-[rgba(212,113,78,0.2)] px-3 py-1 text-[10px] font-bold tracking-[0.1em] uppercase text-terra mb-3">
                    The problem
                  </span>
                  <p className="text-[15px] text-muted leading-[1.7]">
                    Sharmila was missing calls during peak hours. No way to follow up. No lead capture on her website.
                  </p>
                </div>

                <div className="mb-6">
                  <span className="inline-block rounded-tag bg-[rgba(122,173,168,0.18)] border border-[rgba(106,175,194,0.2)] px-3 py-1 text-[10px] font-bold tracking-[0.1em] uppercase text-sky mb-3">
                    The solution
                  </span>
                  <p className="text-[15px] text-muted leading-[1.7]">
                    We set up Sara — her AI receptionist — and rebuilt her website from her Google reviews. In 48 hours.
                  </p>
                </div>

                <div className="rounded-[16px] border border-[rgba(94,158,126,0.2)] bg-[rgba(94,158,126,0.06)] px-5 py-4">
                  <span className="inline-block rounded-tag bg-[rgba(94,158,126,0.15)] border border-[rgba(94,158,126,0.25)] px-3 py-1 text-[10px] font-bold tracking-[0.1em] uppercase text-[#5E9E7E] mb-2">
                    The result
                  </span>
                  <p className="text-[17px] font-bold text-ink">Every call answered. Every lead captured.</p>
                </div>
              </div>

              {/* Right — mockup */}
              <div className="flex items-center justify-center p-8 lg:p-12 bg-warm border-t lg:border-t-0 lg:border-l border-[rgba(26,26,26,0.07)]">
                <div className="w-full max-w-sm rounded-card border border-[rgba(106,175,194,0.25)] bg-surface overflow-hidden shadow-card-hover">
                  <div className="flex items-center gap-1.5 border-b border-[rgba(26,26,26,0.07)] bg-bg px-4 py-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[rgba(26,26,26,0.12)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[rgba(26,26,26,0.12)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[rgba(26,26,26,0.12)]" />
                    <div className="ml-3 flex-1 rounded-full bg-[rgba(26,26,26,0.07)] h-4 max-w-[160px]" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-5">
                      <div className="h-4 w-28 rounded-full bg-[rgba(106,175,194,0.2)]" />
                      <div className="h-7 w-20 rounded-full bg-terra/15" />
                    </div>
                    <div className="rounded-[14px] bg-bg border border-[rgba(26,26,26,0.07)] p-4 mb-4">
                      <div className="h-3 w-16 rounded-full bg-sky/20 mb-2" />
                      <div className="h-5 w-40 rounded-full bg-ink/8 mb-1" />
                      <div className="h-3 w-48 rounded-full bg-muted/15 mb-3" />
                      <div className="h-8 w-28 rounded-full bg-terra/20" />
                    </div>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {["Haircut","Color","Styling"].map((s) => (
                        <div key={s} className="rounded-[10px] border border-[rgba(26,26,26,0.08)] bg-bg p-2 text-center">
                          <div className="h-5 w-5 rounded-lg bg-sky/15 mx-auto mb-1" />
                          <p className="text-[10px] font-medium text-muted">{s}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_,i) => (
                          <svg key={i} className="h-3 w-3 text-terra" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"/>
                          </svg>
                        ))}
                      </div>
                      <p className="text-[10px] text-dim">4.9 · 127 reviews</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
