const businessTypes = ["Salons","Restaurants","Dental Offices","Real Estate Firms","Sales Teams","Med Spas","Law Firms"];

export default function Hero() {
  return (
    <section className="grain bg-bg pt-[128px] pb-28 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1120px] px-8 text-center">

        {/* Eyebrow pill */}
        <div className="inline-flex items-center gap-2 rounded-tag bg-[rgba(106,175,194,0.15)] border border-[rgba(106,175,194,0.25)] px-4 py-1.5 mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-sky" />
          <span className="text-[12px] font-semibold tracking-[0.07em] uppercase text-sky">
            AI for local businesses &amp; sales teams
          </span>
        </div>

        {/* Split-weight H1 */}
        <h1 className="mx-auto max-w-2xl mb-6" style={{ fontSize: "clamp(42px, 6.5vw, 68px)", lineHeight: 1.08, letterSpacing: "-0.025em" }}>
          <span className="font-normal text-muted">Your business,</span>
          <br />
          <span className="font-bold text-ink">powered by AI.</span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto max-w-xl text-[18px] text-muted leading-[1.7] mb-10">
          We build your AI receptionist, smart website, and sales outreach system.
          Done for you in 48 hours. You focus on your work.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14">
          <a href="/contact"
            className="inline-flex items-center rounded-btn bg-terra px-7 py-3.5 text-[15px] font-semibold text-white hover:bg-[#c0613f] transition-all hover:-translate-y-px shadow-sm">
            Book a Free Call
          </a>
          <a href="/products"
            className="inline-flex items-center gap-1.5 rounded-btn border border-[rgba(26,26,26,0.12)] bg-surface px-7 py-3.5 text-[15px] font-medium text-muted hover:border-[rgba(26,26,26,0.2)] hover:text-ink transition-colors">
            See what we build
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
              <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd"/>
            </svg>
          </a>
        </div>

        {/* Social proof pills */}
        <div>
          <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-dim mb-4">Trusted by</p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {businessTypes.map((t) => (
              <span key={t}
                className="rounded-tag border border-[rgba(26,26,26,0.1)] bg-surface px-4 py-1.5 text-[13px] font-medium text-muted">
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
