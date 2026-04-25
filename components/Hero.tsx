const businessTypes = ["Salons","Restaurants","Dental Offices","Real Estate Firms","Sales Teams","Med Spas","Law Firms"];

export default function Hero() {
  return (
    <section className="bg-[#f8f8f7] pt-[120px] pb-24">
      <div className="mx-auto max-w-[1120px] px-10 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-pill bg-[rgba(0,129,242,0.08)] px-[14px] py-[6px] mb-7">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="text-[12px] font-semibold tracking-[0.08em] uppercase text-accent">
            AI for local businesses &amp; sales teams
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-[clamp(40px,6vw,64px)] font-bold tracking-[-0.02em] leading-[1.1] text-ink mb-6 mx-auto max-w-3xl">
          Your business,<br />powered by AI.
        </h1>

        {/* Subheadline */}
        <p className="text-[18px] text-muted leading-[1.65] mb-10 mx-auto max-w-xl">
          We build your AI receptionist, smart website, and sales outreach system.
          Done for you in 48 hours. You focus on your work.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14">
          <a href="/contact"
            className="inline-flex items-center rounded-btn bg-ink px-[22px] py-[11px] text-[15px] font-semibold text-white hover:bg-[#1a1a1a] transition-all hover:-translate-y-px">
            Book a Free Call
          </a>
          <a href="/products"
            className="inline-flex items-center gap-1.5 rounded-btn border border-[rgba(0,0,0,0.12)] bg-white px-[22px] py-[11px] text-[15px] font-medium text-muted hover:border-accent hover:text-accent transition-colors">
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
                className="rounded-pill border border-[rgba(0,0,0,0.08)] bg-white px-4 py-1.5 text-[13px] font-medium text-muted">
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
