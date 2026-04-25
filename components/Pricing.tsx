import { FadeUp } from "@/components/ui/FadeUp";

const plans = [
  {
    name: "Starter",
    audience: "Local businesses",
    price: "$299/mo",
    color: "border-teal/30 bg-teal-light/30",
    textColor: "text-teal",
  },
  {
    name: "Growth",
    audience: "Multi-location & mid-market",
    price: "$599/mo",
    color: "border-amber/30 bg-amber-light/30",
    textColor: "text-amber-dark",
  },
  {
    name: "Sales Team",
    audience: "B2B outreach & SDR",
    price: "$999/mo",
    color: "border-[#6366F1]/20 bg-[#EEF2FF]",
    textColor: "text-[#4F46E5]",
  },
];

export default function Pricing() {
  return (
    <section className="bg-[#F8FAFC] py-24 border-t border-[#E2E8F0]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">

        <FadeUp>
          <p className="uppercase text-teal font-semibold mb-4"
            style={{ fontSize: "13px", letterSpacing: "0.08em" }}>
            Pricing
          </p>
          <h2
            className="font-heading font-bold text-ink mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 36px)", letterSpacing: "-0.01em", lineHeight: 1.2 }}
          >
            Simple, transparent pricing
          </h2>
          <p className="text-[#475569] mb-12 mx-auto max-w-lg" style={{ fontSize: "17px" }}>
            Plans start at $299/month. Everything included. No surprise bills.
          </p>
        </FadeUp>

        {/* Plan pills */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          {plans.map((plan, i) => (
            <FadeUp key={plan.name} delay={i * 80}>
              <div
                className={`flex items-center gap-4 rounded-pill border px-6 py-3.5 ${plan.color}`}
              >
                <div className="text-left">
                  <p className={`font-heading font-bold text-base ${plan.textColor}`}>{plan.name}</p>
                  <p className="text-xs text-[#475569]">{plan.audience}</p>
                </div>
                <span className="text-sm font-bold text-ink whitespace-nowrap">
                  from {plan.price}
                </span>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={240}>
          <a
            href="/contact"
            className="inline-flex items-center gap-1.5 font-semibold text-teal hover:text-teal-dark transition-colors text-base mb-5"
          >
            Book a call to find the right plan
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
              <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd"/>
            </svg>
          </a>
          <p className="text-sm text-[#94A3B8]">No contracts. Cancel anytime.</p>
        </FadeUp>

      </div>
    </section>
  );
}
