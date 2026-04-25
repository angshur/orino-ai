import { FadeUp } from "@/components/ui/FadeUp";

const plans = [
  { name: "Starter",    audience: "Local businesses",           price: "$299/mo" },
  { name: "Growth",     audience: "Multi-location & mid-market", price: "$599/mo" },
  { name: "Sales Team", audience: "B2B outreach & SDR",         price: "$999/mo" },
];

export default function Pricing() {
  return (
    <section className="bg-white border-t border-[rgba(0,0,0,0.08)] py-24">
      <div className="mx-auto max-w-[1120px] px-10 text-center">

        <FadeUp>
          <span className="block text-[11px] font-semibold tracking-[0.1em] uppercase text-accent mb-4">
            Pricing
          </span>
          <h2 className="text-[clamp(26px,4vw,36px)] font-bold tracking-[-0.02em] leading-[1.12] text-ink mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-[17px] text-muted mb-12 mx-auto max-w-md">
            Plans start at $299/month. Everything included. No surprise bills.
          </p>
        </FadeUp>

        {/* Plan pills */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          {plans.map((p, i) => (
            <FadeUp key={p.name} delay={i * 80}>
              <div className="flex items-center gap-5 rounded-pill border border-[rgba(0,0,0,0.08)] bg-[#f8f8f7] px-6 py-3.5 hover:border-[rgba(0,0,0,0.12)] hover:bg-white transition-colors">
                <div className="text-left">
                  <p className="text-[15px] font-semibold text-ink">{p.name}</p>
                  <p className="text-[12px] text-muted">{p.audience}</p>
                </div>
                <span className="text-[14px] font-bold text-ink whitespace-nowrap">from {p.price}</span>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={280}>
          <a href="/contact"
            className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-accent hover:text-[#006fd4] transition-colors mb-4">
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
