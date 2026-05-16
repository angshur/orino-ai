import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Vision — Viao.ai",
  description:
    "Every small business deserves the operational infrastructure that only large companies could afford. That's what we're building.",
};

export default function VisionPage() {
  return (
    <>
      <main className="min-h-screen" style={{ background: "var(--bg)" }}>

        {/* Header */}
        <section className="max-w-2xl mx-auto px-6 pt-24 pb-8">
          <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: "var(--terra)" }}>
            Our Mission
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-6" style={{ color: "var(--text)" }}>
            Every business deserves a concierge.
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
            Banks have them. Airlines have them. Fortune 500 companies have entire teams whose only job is to make sure no customer slips through the cracks. Until now, small businesses couldn't afford any of it.
          </p>
        </section>

        {/* Divider */}
        <div className="max-w-2xl mx-auto px-6">
          <div className="h-px" style={{ background: "var(--border)" }} />
        </div>

        {/* Section 1 — The inequality */}
        <section className="max-w-2xl mx-auto px-6 py-14">
          <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "var(--muted)" }}>
            The problem
          </p>
          <div className="space-y-5 text-base leading-relaxed" style={{ color: "var(--text)" }}>
            <p>
              Banks have concierges. Airlines have concierges. Fortune 500 companies have entire teams whose only job is to make sure no customer slips through the cracks.
            </p>
            <p>
              Your roofer doesn&apos;t. Your salon doesn&apos;t. Your neighborhood restaurant doesn&apos;t.
            </p>
            <p className="font-semibold text-lg">
              Not because they don&apos;t deserve it. Because they couldn&apos;t afford it. Until now.
            </p>
          </div>
        </section>

        {/* Section 2 — Why now */}
        <section className="max-w-2xl mx-auto px-6 py-14" style={{ borderTop: "1px solid var(--border)" }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "var(--muted)" }}>
            Why now
          </p>
          <div className="space-y-5 text-base leading-relaxed" style={{ color: "var(--text)" }}>
            <p>
              AI has changed the unit economics of operational infrastructure. What cost $50,000 a year in staff now costs $299 a month — the receptionist who answers every call, the system that follows up on every lead, the outreach that finds new customers before your competitor does.
            </p>
            <p>
              This isn&apos;t about replacing the personal touch. A roofer who shows up on time and does honest work will always win on character. Viao just makes sure the phone gets answered when he&apos;s on the roof.
            </p>
          </div>
        </section>

        {/* Section 3 — What Viao does */}
        <section className="max-w-2xl mx-auto px-6 py-14" style={{ borderTop: "1px solid var(--border)" }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "var(--muted)" }}>
            What we build
          </p>
          <p className="text-base leading-relaxed mb-10" style={{ color: "var(--text)" }}>
            We build the AI concierge layer for local businesses — done for you, set up in 48 hours.
          </p>
          <div className="space-y-6">
            {[
              {
                label: "Every call answered.",
                body: "Sara, your AI receptionist, handles inbound 24/7 — books appointments, captures leads, answers FAQs. No voicemail. No missed jobs.",
              },
              {
                label: "Every lead followed up.",
                body: "No more missed calls becoming lost revenue. Every inquiry gets a response, automatically.",
              },
              {
                label: "New customers found.",
                body: "Your AI SDR identifies prospects, reaches out, and puts booked meetings on your calendar. You just show up.",
              },
            ].map(({ label, body }) => (
              <div key={label} className="flex gap-4">
                <div className="mt-1 w-2 h-2 rounded-full flex-shrink-0" style={{ background: "var(--terra)" }} />
                <p className="text-base leading-relaxed" style={{ color: "var(--text)" }}>
                  <span className="font-semibold">{label}</span>{" "}{body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 — The bigger vision */}
        <section
          className="max-w-2xl mx-auto px-6 py-14 rounded-2xl my-8"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "var(--muted)" }}>
            The bigger vision
          </p>
          <div className="space-y-5 text-base leading-relaxed" style={{ color: "var(--text)" }}>
            <p>
              Small businesses have always been asked to do more with less — serve customers, manage staff, handle the books, answer the phones, find new work. All at once, all the time.
            </p>
            <p>
              Large companies solve this by building systems. Dedicated teams, specialized software, processes that run whether or not the owner is in the room. Small businesses were never given access to any of that.
            </p>
            <p>
              Viao changes that. Not by turning a family-owned roofing company into a corporation — but by giving it the operational backbone that lets the owner focus on the craft. The systems handle the overhead. The business stays personal.
            </p>
            <p className="font-semibold text-lg pt-2" style={{ color: "var(--text)" }}>
              That&apos;s the mission: every small business with the support, efficiency, and operational guidance that only large companies could afford before.
            </p>
          </div>
        </section>

        {/* Section 5 — Where we are */}
        <section className="max-w-2xl mx-auto px-6 py-14" style={{ borderTop: "1px solid var(--border)" }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "var(--muted)" }}>
            Where we are
          </p>
          <div className="space-y-5 text-base leading-relaxed mb-10" style={{ color: "var(--text)" }}>
            <p>
              We&apos;re taking our first design partners now — local businesses who want to be ahead of this curve. Steep discount in exchange for honest feedback.
            </p>
            <p>
              If you run a local business or know someone who does — book a free 15-minute call. We&apos;ll pull up your business ahead of time so you can see exactly what we&apos;d build for you.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm transition-all hover:-translate-y-0.5"
              style={{ background: "var(--terra)", color: "#fff" }}
            >
              Book a free call →
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm transition-all hover:-translate-y-0.5"
              style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text)" }}
            >
              Partner with us as an agency →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
