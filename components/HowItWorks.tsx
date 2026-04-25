import { FadeUp } from "@/components/ui/FadeUp";

const steps = [
  { n: "01", title: "Tell us about your business", body: "10 minutes. We learn your services, hours, and goals." },
  { n: "02", title: "We build your AI layer",       body: "48 hours. Receptionist configured, website live, SDR ready." },
  { n: "03", title: "Watch it work",                body: "Leads captured. Calls answered. Meetings booked. You focus on delivery." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#f8f8f7] border-t border-[rgba(0,0,0,0.08)] py-24">
      <div className="mx-auto max-w-[1120px] px-10">

        <FadeUp>
          <div className="text-center mb-14">
            <span className="block text-[11px] font-semibold tracking-[0.1em] uppercase text-accent mb-4">
              The process
            </span>
            <h2 className="text-[clamp(26px,4vw,36px)] font-bold tracking-[-0.02em] leading-[1.12] text-ink">
              Up and running in 48 hours
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <FadeUp key={s.n} delay={i * 80}>
              <div className="flex gap-4 rounded-card border border-[rgba(0,0,0,0.08)] bg-white p-6">
                <span className="text-[12px] font-bold text-dim min-w-[28px] pt-0.5">{s.n}</span>
                <div>
                  <h3 className="text-[16px] font-semibold text-ink mb-2">{s.title}</h3>
                  <p className="text-[14px] text-muted leading-[1.65]">{s.body}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={320}>
          <div className="mt-12 text-center">
            <a href="/contact"
              className="inline-flex items-center rounded-btn bg-ink px-[22px] py-[11px] text-[15px] font-semibold text-white hover:bg-[#1a1a1a] transition-all hover:-translate-y-px">
              Get started in 10 minutes
            </a>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
