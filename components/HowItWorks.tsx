import { FadeUp } from "@/components/ui/FadeUp";

const steps = [
  { n: "01", title: "Tell us about your business", body: "10 minutes. We learn your services, hours, and goals." },
  { n: "02", title: "We build your AI layer",       body: "48 hours. Receptionist configured, website live, SDR ready." },
  { n: "03", title: "Watch it work",                body: "Leads captured. Calls answered. Meetings booked. You focus on delivery." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-bg border-t border-[rgba(26,26,26,0.07)] py-24">
      <div className="mx-auto max-w-[1120px] px-8">

        <FadeUp>
          <div className="text-center mb-14">
            <span className="inline-flex items-center rounded-tag bg-[rgba(122,173,168,0.18)] border border-[rgba(106,175,194,0.2)] px-3.5 py-1 text-[11px] font-semibold tracking-[0.08em] uppercase text-sky mb-5">
              The process
            </span>
            <h2 style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              <span className="text-muted font-normal">Up and running </span>
              <span className="text-ink font-bold">in 48 hours</span>
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <FadeUp key={s.n} delay={i * 90}>
              <div className="rounded-card border border-[rgba(26,26,26,0.08)] bg-surface p-7 shadow-card">
                <span className="inline-block text-[11px] font-bold tracking-[0.1em] text-dim mb-4 bg-warm rounded-tag px-2.5 py-1">
                  {s.n}
                </span>
                <h3 className="text-[17px] font-bold text-ink mb-2">{s.title}</h3>
                <p className="text-[14px] text-muted leading-[1.7]">{s.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={320}>
          <div className="mt-12 text-center">
            <a href="/contact"
              className="inline-flex items-center rounded-btn bg-terra px-7 py-3.5 text-[15px] font-semibold text-white hover:bg-[#c0613f] transition-all hover:-translate-y-px shadow-sm">
              Get started in 10 minutes
            </a>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
