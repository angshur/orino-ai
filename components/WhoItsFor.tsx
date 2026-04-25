import { FadeUp } from "@/components/ui/FadeUp";

const tiles = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-sky"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    title: "Local Businesses",
    subtitle: "Salons, restaurants, roofers, dental offices",
    body: "Get found, get called, get booked.",
    delay: 0,
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-sky"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>,
    title: "Growing Companies",
    subtitle: "Real estate firms, med spas, universities",
    body: "Manage more customers across more locations.",
    delay: 80,
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-sky"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
    title: "B2B Sales Teams",
    subtitle: "Adtech, media, SaaS companies",
    body: "Find leads, reach out faster, close more deals.",
    delay: 160,
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-sky"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: "Agency Partners",
    subtitle: "Agencies with hungry sales reps",
    body: "Add AI services to your portfolio. Earn recurring commission.",
    delay: 240,
  },
];

export default function WhoItsFor() {
  return (
    <section className="bg-surface border-t border-[rgba(26,26,26,0.07)] py-24">
      <div className="mx-auto max-w-[1120px] px-8">

        <FadeUp>
          <div className="text-center mb-14">
            <span className="inline-flex items-center rounded-tag bg-[rgba(212,113,78,0.1)] border border-[rgba(212,113,78,0.2)] px-3.5 py-1 text-[11px] font-semibold tracking-[0.08em] uppercase text-terra mb-5">
              Who we serve
            </span>
            <h2 className="mx-auto max-w-xl" style={{ fontSize: "clamp(26px,4vw,38px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              <span className="text-muted font-normal">From your neighborhood salon </span>
              <span className="text-ink font-bold">to your sales team</span>
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {tiles.map((t) => (
            <FadeUp key={t.title} delay={t.delay}>
              <div className="group flex gap-4 rounded-card border border-[rgba(26,26,26,0.08)] bg-bg p-7
                hover:bg-surface hover:border-[rgba(26,26,26,0.14)] hover:shadow-card-hover transition-all duration-200 cursor-default">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[rgba(122,181,212,0.12)]">
                  {t.icon}
                </div>
                <div>
                  <h3 className="text-[16px] font-bold text-ink mb-0.5">{t.title}</h3>
                  <p className="text-[12px] text-dim font-medium mb-2">{t.subtitle}</p>
                  <p className="text-[14px] text-muted leading-[1.7]">{t.body}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}
