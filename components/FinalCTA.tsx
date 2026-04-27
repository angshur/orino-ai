import { FadeUp } from "@/components/ui/FadeUp";

export default function FinalCTA() {
  return (
    <section className="bg-bg border-t border-[rgba(26,26,26,0.07)] py-24">
      <div className="mx-auto max-w-[1120px] px-8">
        <FadeUp>
          <div className="grain rounded-card bg-ink overflow-hidden px-12 py-16 text-center">
            <div className="relative z-10">
              <h2 className="mx-auto max-w-xl mb-5 text-white" style={{ fontSize: "clamp(28px,4vw,46px)", fontWeight: 700, lineHeight: 1.12, letterSpacing: "-0.025em" }}>
                Ready to stop missing customers?
              </h2>
              <p className="text-[17px] text-[rgba(255,255,255,0.5)] mb-10 mx-auto max-w-md leading-[1.7]">
                Book a free 15-minute call. We&apos;ll show you exactly what we&apos;d build for your business.
              </p>
              <a href="/contact"
                className="inline-flex items-center rounded-btn bg-terra px-8 py-4 text-[16px] font-semibold text-white hover:bg-[#c0613f] transition-all hover:-translate-y-px shadow-sm mb-8">
                Book Your Free Call
              </a>
              <div className="flex items-center justify-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(106,175,194,0.2)] text-sky text-[13px] font-semibold">B</div>
                <p className="text-[13px] text-[rgba(255,255,255,0.35)]">
                  <a href="https://www.linkedin.com/in/bipashahr/" target="_blank" rel="noopener noreferrer"
                    className="text-[rgba(255,255,255,0.5)] hover:text-white transition-colors">Bipasha</a>
                  {" "}· Viao.ai · Response within 24 hours
                </p>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
