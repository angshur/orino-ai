import { FadeUp } from "@/components/ui/FadeUp";
import Footer from "@/components/Footer";

const ic = (path: React.ReactNode) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-accent">
    {path}
  </svg>
);

const Phone   = () => ic(<><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.42 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6.18 6.18l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></>);
const Globe   = () => ic(<><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>);
const Bell    = () => ic(<><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></>);
const Star    = () => ic(<><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></>);
const Image   = () => ic(<><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></>);
const Users   = () => ic(<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>);
const Refresh = () => ic(<><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></>);
const MapPin  = () => ic(<><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></>);
const Layout  = () => ic(<><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></>);
const Search  = () => ic(<><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></>);
const Zap     = () => ic(<><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></>);
const Mic     = () => ic(<><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></>);
const List    = () => ic(<><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></>);
const Chart   = () => ic(<><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/><line x1="2" x2="22" y1="20" y2="20"/></>);

type Product = { icon: React.ReactNode; name: string; outcome: string; status: "live" | "ask" };

const sections: { label: string; headline: string; products: Product[] }[] = [
  {
    label: "For Local Businesses",
    headline: "Get found, get called, get booked.",
    products: [
      { icon: <Phone />, name: "AI Receptionist",              outcome: "Answers every call 24/7 and books appointments automatically.", status: "live" },
      { icon: <Globe />, name: "Smart Website",                outcome: "Built from your Google reviews. Live in 48 hours.",             status: "live" },
      { icon: <Bell  />, name: "Appointment Reminders",        outcome: "SMS and voice reminders that slash no-show rates.",             status: "live" },
      { icon: <Star  />, name: "Review Request Automation",    outcome: "Asks happy customers for reviews automatically after each visit.", status: "live" },
      { icon: <Image />, name: "Social Media Content Generator", outcome: "One idea becomes a full week of on-brand posts.",             status: "ask"  },
    ],
  },
  {
    label: "For Growing Companies",
    headline: "Manage more customers across more locations.",
    products: [
      { icon: <Users   />, name: "AI-Powered CRM",             outcome: "Track every lead, follow-up, and deal stage in one place.",    status: "live" },
      { icon: <Refresh />, name: "Re-engagement Campaigns",    outcome: "Bring lapsed customers back with personalized AI outreach.",    status: "live" },
      { icon: <MapPin  />, name: "Business Listings Sync",     outcome: "Keep your info consistent across Google, Yelp, and Facebook.", status: "live" },
      { icon: <Layout  />, name: "Multi-location Dashboard",   outcome: "Manage AI tools across every location from one screen.",       status: "live" },
      { icon: <Search  />, name: "Local SEO Setup",            outcome: "Show up when nearby customers search for what you do.",        status: "ask"  },
    ],
  },
  {
    label: "For Sales Teams",
    headline: "Find leads, reach out faster, close more deals.",
    products: [
      { icon: <Zap   />, name: "AI SDR",                       outcome: "Finds prospects, writes outreach, sends it, follows up, books meetings.", status: "live" },
      { icon: <Mic   />, name: "Outbound Voice Agent",         outcome: "Calls lists, qualifies leads, and hands off warm prospects to reps.",     status: "live" },
      { icon: <List  />, name: "Prospect List Builder",        outcome: "Targeted contact lists built from your exact ICP criteria.",              status: "live" },
      { icon: <Bell  />, name: "Lead Follow-up Sequences",     outcome: "Nothing falls through the cracks. Every lead gets followed up.",          status: "live" },
      { icon: <Chart />, name: "Pipeline Reporting Dashboard", outcome: "See what channels and messages are actually closing deals.",               status: "ask"  },
    ],
  },
];

function Tag({ status }: { status: "live" | "ask" }) {
  return status === "live" ? (
    <span className="inline-flex items-center gap-1 rounded-pill bg-[rgba(16,185,129,0.08)] border border-[rgba(16,185,129,0.2)] px-2.5 py-0.5 text-[11px] font-semibold text-emerald-600">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />Live
    </span>
  ) : (
    <span className="inline-flex rounded-pill bg-[#f8f8f7] border border-[rgba(0,0,0,0.08)] px-2.5 py-0.5 text-[11px] font-semibold text-dim">
      Ask us
    </span>
  );
}

export default function ProductsPage() {
  return (
    <>
      <main className="pt-[60px]">

        {/* Header */}
        <section className="bg-[#f8f8f7] py-20 border-b border-[rgba(0,0,0,0.08)]">
          <div className="mx-auto max-w-[1120px] px-10 text-center">
            <FadeUp>
              <span className="block text-[11px] font-semibold tracking-[0.1em] uppercase text-accent mb-4">
                Full Product Portfolio
              </span>
              <h1 className="text-[clamp(32px,5vw,52px)] font-bold tracking-[-0.02em] leading-[1.12] text-ink mb-5">
                Everything we can build for your business
              </h1>
              <p className="text-[18px] text-muted mx-auto max-w-md">Mix and match. We configure what you need.</p>
            </FadeUp>
          </div>
        </section>

        {sections.map((section, si) => (
          <section key={section.label} className={`py-20 border-b border-[rgba(0,0,0,0.08)] ${si % 2 === 0 ? "bg-white" : "bg-[#f8f8f7]"}`}>
            <div className="mx-auto max-w-[1120px] px-10">
              <FadeUp>
                <div className="mb-10">
                  <h2 className="text-[22px] font-bold text-ink mb-1 pb-1 border-b-2 border-accent inline-block">
                    {section.label}
                  </h2>
                  <p className="text-[15px] text-muted mt-2">{section.headline}</p>
                </div>
              </FadeUp>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.products.map((p, pi) => (
                  <FadeUp key={p.name} delay={pi * 60}>
                    <div className="group flex flex-col h-full rounded-card border border-[rgba(0,0,0,0.08)] bg-white p-6
                      hover:border-[rgba(0,0,0,0.12)] hover:shadow-card-hover transition-all duration-150">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[rgba(0,129,242,0.08)]">
                          {p.icon}
                        </div>
                        <Tag status={p.status} />
                      </div>
                      <h3 className="text-[15px] font-semibold text-ink mb-2">{p.name}</h3>
                      <p className="text-[13px] text-muted leading-[1.65] flex-1">{p.outcome}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Bottom CTA */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-[1120px] px-10 text-center">
            <FadeUp>
              <h2 className="text-[clamp(20px,3vw,28px)] font-bold tracking-[-0.02em] text-ink mb-3">
                Don&apos;t see what you need? Ask us.
              </h2>
              <p className="text-[15px] text-muted mb-8">We configure custom AI solutions for any business.</p>
              <a href="/contact"
                className="inline-flex items-center gap-1.5 rounded-btn bg-ink px-[22px] py-[11px] text-[15px] font-semibold text-white hover:bg-[#1a1a1a] transition-all hover:-translate-y-px">
                Book a call
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd"/>
                </svg>
              </a>
            </FadeUp>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
