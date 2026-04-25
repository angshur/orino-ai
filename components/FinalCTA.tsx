import { FadeUp } from "@/components/ui/FadeUp";

export default function FinalCTA() {
  return (
    <section className="bg-[#f8f8f7] border-t border-[rgba(0,0,0,0.08)] py-24">
      <div className="mx-auto max-w-[1120px] px-10">
        <FadeUp>
          <div className="rounded-card bg-[#0d0d0d] px-[52px] py-[52px] text-center">
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold tracking-[-0.02em] leading-[1.12] text-white mb-5">
              Ready to stop missing customers?
            </h2>
            <p className="text-[17px] text-[rgba(255,255,255,0.55)] mb-10 mx-auto max-w-md leading-[1.65]">
              Book a free 15-minute call. We&apos;ll show you exactly what we&apos;d build for your business.
            </p>
            <a href="/contact"
              className="inline-flex items-center rounded-btn bg-white px-[26px] py-[13px] text-[16px] font-semibold text-ink hover:bg-[#f0f0f0] transition-all hover:-translate-y-px mb-8">
              Book Your Free Call
            </a>
            <div className="flex items-center justify-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(255,255,255,0.1)] text-white text-[13px] font-semibold">
                B
              </div>
              <p className="text-[13px] text-[rgba(255,255,255,0.4)]">
                <a href="https://www.linkedin.com/in/bipashahr/" target="_blank" rel="noopener noreferrer"
                  className="text-[rgba(255,255,255,0.55)] hover:text-white transition-colors">Bipasha</a>
                {" "}· Orino.ai · Response within 24 hours
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
