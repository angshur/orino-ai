import { FadeUp } from "@/components/ui/FadeUp";

export default function CaseStudy() {
  return (
    <section className="bg-[#f8f8f7] border-t border-[rgba(0,0,0,0.08)] py-24">
      <div className="mx-auto max-w-[1120px] px-10">

        <FadeUp>
          <div className="text-center mb-14">
            <span className="block text-[11px] font-semibold tracking-[0.1em] uppercase text-accent mb-4">
              Real example
            </span>
            <h2 className="text-[clamp(26px,4vw,36px)] font-bold tracking-[-0.02em] leading-[1.12] text-ink">
              What Orino did for Star Image Studio
            </h2>
          </div>
        </FadeUp>

        <FadeUp delay={80}>
          <div className="rounded-card border border-[rgba(0,0,0,0.08)] bg-white overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* Left — story */}
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                {/* Business badge */}
                <div className="flex items-center gap-3 mb-10">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[rgba(0,129,242,0.08)] text-accent text-[16px] font-bold">
                    S
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold text-ink">Star Image Studio</p>
                    <p className="text-[13px] text-dim">Beauty Salon · San Jose, CA</p>
                  </div>
                </div>

                {/* Problem */}
                <div className="mb-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-dim mb-2">The problem</p>
                  <p className="text-[15px] text-muted leading-[1.65]">
                    Sharmila was missing calls during peak hours. No way to follow up. No lead capture on her website.
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-dim mb-2">The solution</p>
                  <p className="text-[15px] text-muted leading-[1.65]">
                    We set up Sara — her AI receptionist — and rebuilt her website from her Google reviews. In 48 hours.
                  </p>
                </div>

                {/* Result */}
                <div className="rounded-card border border-[rgba(0,0,0,0.08)] bg-[#f8f8f7] px-5 py-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-accent mb-1">The result</p>
                  <p className="text-[16px] font-semibold text-ink">Every call answered. Every lead captured.</p>
                </div>
              </div>

              {/* Right — website mockup */}
              <div className="flex items-center justify-center p-8 lg:p-12 bg-[#f8f8f7] border-t lg:border-t-0 lg:border-l border-[rgba(0,0,0,0.08)]">
                <div className="w-full max-w-sm rounded-card border border-[rgba(0,129,242,0.2)] bg-white overflow-hidden shadow-card-hover">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-1.5 border-b border-[rgba(0,0,0,0.08)] bg-[#f8f8f7] px-4 py-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[rgba(0,0,0,0.15)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[rgba(0,0,0,0.15)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[rgba(0,0,0,0.15)]" />
                    <div className="ml-3 flex-1 rounded bg-[rgba(0,0,0,0.08)] h-4 max-w-[160px]" />
                  </div>
                  {/* Fake site */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-5">
                      <div className="h-4 w-28 rounded bg-[rgba(0,129,242,0.15)]" />
                      <div className="h-7 w-20 rounded-lg bg-ink/10" />
                    </div>
                    <div className="rounded-lg bg-[rgba(0,129,242,0.05)] border border-[rgba(0,129,242,0.1)] p-4 mb-4">
                      <div className="h-3 w-16 rounded bg-accent/20 mb-2" />
                      <div className="h-5 w-40 rounded bg-ink/10 mb-1" />
                      <div className="h-3 w-48 rounded bg-muted/20 mb-3" />
                      <div className="h-8 w-28 rounded-lg bg-ink/10" />
                    </div>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {["Haircut","Color","Styling"].map((s) => (
                        <div key={s} className="rounded-lg border border-[rgba(0,0,0,0.08)] bg-[#f8f8f7] p-2 text-center">
                          <div className="h-5 w-5 rounded bg-[rgba(0,129,242,0.1)] mx-auto mb-1" />
                          <p className="text-[10px] font-medium text-muted">{s}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_,i) => (
                          <svg key={i} className="h-3 w-3 text-[#f59e0b]" fill="currentColor" viewBox="0 0 20 20">
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
