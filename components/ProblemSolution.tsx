import { FadeUp } from "@/components/ui/FadeUp";
import { ScaledFrame } from "@/components/ui/ScaledFrame";

const sections = [
  {
    tag: "AI Receptionist",
    tagColor: "bg-[rgba(106,175,194,0.13)] border-[rgba(106,175,194,0.25)] text-sky",
    problem: {
      label: "The problem",
      headline: "You're with a client.\nThe phone rings.\nYou can't answer.",
      body: "So you miss the call. That customer waits 30 seconds, then calls your competitor down the street. This happens 8–12 times a day at the average salon or restaurant — and you never even know.",
    },
    solution: {
      label: "The solution",
      headline: "Sara answers every call.\n24/7. Never on hold.",
      body: "Sara — your AI receptionist — picks up instantly. She books appointments, answers your FAQs, and captures every lead. You get a full log of every conversation in your inbox each morning.",
    },
    frameSrc: "/image-1-ai-receptionist.html",
    frameTitle: "AI Receptionist — problem and solution",
    imageRight: true,
  },
  {
    tag: "Smart Website",
    tagColor: "bg-[rgba(122,173,168,0.13)] border-[rgba(122,173,168,0.25)] text-sage",
    problem: {
      label: "The problem",
      headline: "Your website is three years old\nand buried on page 4 of Google.",
      body: "Customers search 'best salon near me' and you don't show up. The ones who do find you land on a page that hasn't been updated since 2021 — no reviews, no booking, no reason to stay.",
    },
    solution: {
      label: "The solution",
      headline: "A new site, built from your\nreviews, live in 48 hours.",
      body: "We pull your Google reviews, your services, and your story — and turn them into a fast, modern website that ranks locally. It captures leads, shows your hours, and books appointments while you sleep.",
    },
    frameSrc: "/image-2-smart-website.html",
    frameTitle: "Smart Website — built from your reviews",
    imageRight: false,
  },
  {
    tag: "AI SDR",
    tagColor: "bg-[rgba(200,112,80,0.10)] border-[rgba(200,112,80,0.22)] text-terra",
    problem: {
      label: "The problem",
      headline: "Your sales reps spend\nhours on outreach.\nMost emails go unanswered.",
      body: "Prospecting is slow, inconsistent, and demoralizing. Your team writes emails from scratch, follows up manually, and loses track of who's been contacted. Pipelines stall. Quota slips.",
    },
    solution: {
      label: "The solution",
      headline: "Your AI SDR works the list\nwhile your team closes deals.",
      body: "It finds the right prospects, writes a personalized message, hits send, and follows up automatically. When someone's ready to talk, it puts a booked meeting on your calendar. Your rep just shows up.",
    },
    frameSrc: "/image-3-solution-details.html",
    frameTitle: "AI SDR — intelligent outreach workflow",
    imageRight: true,
  },
];

export default function ProblemSolution() {
  return (
    <section id="products" className="bg-surface border-t border-[rgba(26,26,26,0.07)]">
      {sections.map((s, i) => (
        <div
          key={s.tag}
          className={`border-b border-[rgba(26,26,26,0.07)] py-20 ${i % 2 === 0 ? "bg-surface" : "bg-bg"}`}
        >
          <div className="mx-auto max-w-[1120px] px-8">
            <FadeUp>
              <span className={`inline-flex items-center rounded-tag border px-3.5 py-1 text-[11px] font-semibold tracking-[0.08em] uppercase mb-10 ${s.tagColor}`}>
                {s.tag}
              </span>
            </FadeUp>

            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start ${!s.imageRight ? "lg:[&>*:first-child]:order-2" : ""}`}>

              {/* Text side */}
              <div className="flex flex-col gap-10">

                {/* Problem */}
                <FadeUp delay={60}>
                  <div className="rounded-card border border-[rgba(200,112,80,0.18)] bg-[rgba(200,112,80,0.04)] p-7">
                    <span className="inline-block rounded-tag bg-[rgba(200,112,80,0.10)] border border-[rgba(200,112,80,0.2)] px-3 py-0.5 text-[10px] font-bold tracking-[0.1em] uppercase text-terra mb-4">
                      {s.problem.label}
                    </span>
                    <h3
                      className="text-ink font-bold mb-3 whitespace-pre-line"
                      style={{ fontSize: "clamp(20px,2.5vw,26px)", lineHeight: 1.25, letterSpacing: "-0.015em" }}
                    >
                      {s.problem.headline}
                    </h3>
                    <p className="text-[15px] text-muted leading-[1.75]">{s.problem.body}</p>
                  </div>
                </FadeUp>

                {/* Arrow connector */}
                <FadeUp delay={120}>
                  <div className="flex items-center gap-3 px-2">
                    <div className="h-px flex-1 bg-[rgba(26,26,26,0.1)]" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-dim rotate-90">
                      <path d="M12 5v14M5 12l7 7 7-7"/>
                    </svg>
                    <div className="h-px flex-1 bg-[rgba(26,26,26,0.1)]" />
                  </div>
                </FadeUp>

                {/* Solution */}
                <FadeUp delay={180}>
                  <div className="rounded-card border border-[rgba(106,175,194,0.2)] bg-[rgba(106,175,194,0.05)] p-7">
                    <span className="inline-block rounded-tag bg-[rgba(106,175,194,0.12)] border border-[rgba(106,175,194,0.22)] px-3 py-0.5 text-[10px] font-bold tracking-[0.1em] uppercase text-sky mb-4">
                      {s.solution.label}
                    </span>
                    <h3
                      className="text-ink font-bold mb-3 whitespace-pre-line"
                      style={{ fontSize: "clamp(20px,2.5vw,26px)", lineHeight: 1.25, letterSpacing: "-0.015em" }}
                    >
                      {s.solution.headline}
                    </h3>
                    <p className="text-[15px] text-muted leading-[1.75]">{s.solution.body}</p>
                  </div>
                </FadeUp>

                {/* CTA */}
                <FadeUp delay={240}>
                  <a href="/contact"
                    className="inline-flex items-center gap-2 rounded-btn bg-terra px-6 py-3 text-[14px] font-semibold text-white hover:bg-[#b5603e] transition-all hover:-translate-y-px self-start shadow-sm">
                    Get {s.tag} for your business
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd"/>
                    </svg>
                  </a>
                </FadeUp>
              </div>

              {/* Frame side */}
              <FadeUp delay={100}>
                <div className={`w-full ${!s.imageRight ? "lg:order-1" : ""}`}>
                  <ScaledFrame src={s.frameSrc} title={s.frameTitle} />
                </div>
              </FadeUp>

            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
