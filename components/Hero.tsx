const businessTypes = [
  "Salons",
  "Restaurants",
  "Dental Offices",
  "Real Estate Firms",
  "Sales Teams",
  "Med Spas",
  "Law Firms",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-[120px] pb-28">
      {/* Teal radial at top-left, very low opacity */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(15,118,110,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 rounded-pill bg-teal-light px-4 py-1.5 mb-8">
          <span
            className="text-label uppercase text-teal"
            style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.08em" }}
          >
            AI for local businesses &amp; sales teams
          </span>
        </div>

        {/* H1 */}
        <h1
          className="font-heading font-bold text-ink mx-auto max-w-2xl"
          style={{
            fontSize: "clamp(40px, 6vw, 56px)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Your business,
          <br />
          powered by AI.
        </h1>

        {/* Sub-headline */}
        <p
          className="mt-6 mx-auto max-w-xl text-[#475569]"
          style={{ fontSize: "18px", lineHeight: 1.7 }}
        >
          We build your AI receptionist, smart website, and sales outreach
          system. Done for you in 48 hours. You focus on your work.
        </p>

        {/* CTA row */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center rounded-btn bg-amber px-7 py-3.5 text-base font-bold text-ink shadow-sm hover:bg-amber-dark transition-all hover:-translate-y-px"
          >
            Book a Free Call
          </a>
          <a
            href="/products"
            className="inline-flex items-center gap-1.5 text-base font-semibold text-teal hover:text-teal-dark transition-colors"
          >
            See what we build
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        {/* Social proof strip */}
        <div className="mt-12">
          <p className="text-[13px] text-[#94A3B8] mb-4 uppercase tracking-widest font-semibold">
            Trusted by
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 overflow-x-auto pb-1">
            {businessTypes.map((type) => (
              <span
                key={type}
                className="whitespace-nowrap rounded-pill border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-1.5 text-sm font-medium text-[#475569]"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
