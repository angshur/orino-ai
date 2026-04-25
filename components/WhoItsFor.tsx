import { FadeUp } from "@/components/ui/FadeUp";

const tiles = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-accent"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    title: "Local Businesses",
    subtitle: "Salons, restaurants, roofers, dental offices",
    body: "Get found, get called, get booked.",
    delay: 0,
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-accent"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>,
    title: "Growing Companies",
    subtitle: "Real estate firms, med spas, universities",
    body: "Manage more customers across more locations.",
    delay: 80,
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-accent"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
    title: "B2B Sales Teams",
    subtitle: "Adtech, media, SaaS companies",
    body: "Find leads, reach out faster, close more deals.",
    delay: 160,
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-accent"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: "Agency Partners",
    subtitle: "Agencies with hungry sales reps",
    body: "Add AI services to your portfolio. Earn recurring commission.",
    delay: 240,
  },
];

export default function WhoItsFor() {
  return (
    <section className="bg-white border-t border-[rgba(0,0,0,0.08)] py-24">
      <div className="mx-auto max-w-[1120px] px-10">

        <FadeUp>
          <div className="text-center mb-14">
            <span className="block text-[11px] font-semibold tracking-[0.1em] uppercase text-accent mb-4">
              Who we serve
            </span>
            <h2 className="text-[clamp(26px,4vw,36px)] font-bold tracking-[-0.02em] leading-[1.12] text-ink mx-auto max-w-xl">
              From your neighborhood salon to your sales team
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {tiles.map((t) => (
            <FadeUp key={t.title} delay={t.delay}>
              <div className="group flex gap-4 rounded-card border border-[rgba(0,0,0,0.08)] bg-[#f8f8f7] p-7
                hover:bg-white hover:border-[rgba(0,0,0,0.12)] hover:shadow-card-hover transition-all duration-150 cursor-default">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[rgba(0,129,242,0.08)]">
                  {t.icon}
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold text-ink mb-0.5">{t.title}</h3>
                  <p className="text-[12px] text-dim font-medium mb-2">{t.subtitle}</p>
                  <p className="text-[14px] text-muted leading-[1.65]">{t.body}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}
