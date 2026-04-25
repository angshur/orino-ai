import { FadeUp } from "@/components/ui/FadeUp";

const plans = [
  { name: "Starter",    audience: "Local businesses",           price: "$299/mo", bg: "bg-[rgba(106,175,194,0.08)]", border: "border-[rgba(106,175,194,0.2)]" },
  { name: "Growth",     audience: "Multi-location & mid-market", price: "$599/mo", bg: "bg-[rgba(212,113,78,0.07)]",  border: "border-[rgba(212,113,78,0.2)]"  },
  { name: "Sales Team", audience: "B2B outreach & SDR",         price: "$999/mo", bg: "bg-warm",                     border: "border-[rgba(26,26,26,0.1)]"    },
];

export default function Pricing() {
  return (
    <section className="bg-surface border-t border-[rgba(26,26,26,0.07)] py-24">
      <div className="mx-auto max-w-[1120px] px-8 text-center">

        <FadeUp>
          <span className="inline-flex items-center rounded-tag bg-[rgba(212,113,78,0.1)] border border-[rgba(212,113,78,0.2)] px-3.5 py-1 text-[11px] font-semibold tracking-[0.08em] uppercase text-terra mb-5">
            Pricing
          </span>
          <h2 className="mx-auto max-w-lg mb-4" style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em" }}>
            <span className="text-muted font-normal">Simple, </span>
            <span className="text-ink font-bold">transparent pricing</span>
          </h2>
          <p className="text-[17px] text-muted mb-12 mx-auto max-w-md">
            Plans start at $299/month. Everything included. No surprise bills.
          </p>
        </FadeUp>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          {plans.map((p, i) => (
            <FadeUp key={p.name} delay={i * 80}>
              <div className={`flex items-center gap-5 rounded-tag border ${p.border} ${p.bg} px-6 py-4 hover:shadow-card transition-all duration-200`}>
                <div className="text-left">
                  <p className="text-[15px] font-bold text-ink">{p.name}</p>
                  <p className="text-[12px] text-muted">{p.audience}</p>
                </div>
                <span className="text-[14px] font-bold text-ink whitespace-nowrap">from {p.price}</span>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={280}>
          <a href="/contact"
            className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-terra hover:text-[#c0613f] transition-colors mb-4">
            Book a call to find the right plan
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
              <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd"/>
            </svg>
          </a>
          <p className="text-[13px] text-dim">No contracts. Cancel anytime.</p>
        </FadeUp>

      </div>
    </section>
  );
}
