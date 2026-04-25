import { FadeUp } from "@/components/ui/FadeUp";

export default function FinalCTA() {
  return (
    <section className="bg-ink py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">

        <FadeUp>
          <h2
            className="font-heading font-bold text-white mb-5"
            style={{ fontSize: "clamp(30px, 5vw, 48px)", letterSpacing: "-0.02em", lineHeight: 1.15 }}
          >
            Ready to stop missing customers?
          </h2>
          <p className="text-[#94A3B8] mb-10 mx-auto max-w-lg" style={{ fontSize: "18px", lineHeight: 1.6 }}>
            Book a free 15-minute call. We&apos;ll show you exactly what we&apos;d build
            for your business.
          </p>
        </FadeUp>

        <FadeUp delay={100}>
          <a
            href="/contact"
            className="inline-flex items-center rounded-btn bg-amber px-10 py-4 text-lg font-bold text-ink
              shadow-lg hover:bg-amber-dark transition-all hover:-translate-y-0.5 mb-8"
          >
            Book Your Free Call
          </a>
        </FadeUp>

        <FadeUp delay={180}>
          <div className="flex items-center justify-center gap-3">
            {/* Avatar */}
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal text-white font-heading font-bold text-sm">
              B
            </div>
            <p className="text-sm text-[#64748B]">
              <a
                href="https://www.linkedin.com/in/bipashahr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94A3B8] hover:text-white transition-colors"
              >
                Bipasha
              </a>
              {" "}· Orino.ai · Response within 24 hours
            </p>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
