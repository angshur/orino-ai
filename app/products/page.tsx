import { FadeUp } from "@/components/ui/FadeUp";
import Footer from "@/components/Footer";

// Icons
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-teal">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.42 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6.18 6.18l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-teal">
    <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);
const BellIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-teal">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  </svg>
);
const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-teal">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);
const ImageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-teal">
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
  </svg>
);
const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-teal">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const RefreshIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-teal">
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>
  </svg>
);
const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-teal">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const LayoutIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-teal">
    <rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>
  </svg>
);
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-teal">
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
  </svg>
);
const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-teal">
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
  </svg>
);
const MicIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-teal">
    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>
  </svg>
);
const ListIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-teal">
    <line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/>
  </svg>
);
const BarChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-teal">
    <line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/><line x1="2" x2="22" y1="20" y2="20"/>
  </svg>
);

type Product = {
  icon: React.ReactNode;
  name: string;
  outcome: string;
  status: "live" | "ask";
};

const sectionsData: { label: string; headline: string; products: Product[] }[] = [
  {
    label: "For Local Businesses",
    headline: "Get found, get called, get booked.",
    products: [
      { icon: <PhoneIcon />, name: "AI Receptionist", outcome: "Answers every call 24/7 and books appointments automatically.", status: "live" },
      { icon: <GlobeIcon />, name: "Smart Website", outcome: "Built from your Google reviews. Live in 48 hours.", status: "live" },
      { icon: <BellIcon />, name: "Appointment Reminders", outcome: "SMS and voice reminders that slash no-show rates.", status: "live" },
      { icon: <StarIcon />, name: "Review Request Automation", outcome: "Asks happy customers for reviews automatically after each visit.", status: "live" },
      { icon: <ImageIcon />, name: "Social Media Content Generator", outcome: "One idea becomes a full week of on-brand posts.", status: "ask" },
    ],
  },
  {
    label: "For Growing Companies",
    headline: "Manage more customers across more locations.",
    products: [
      { icon: <UsersIcon />, name: "AI-Powered CRM", outcome: "Track every lead, follow-up, and deal stage in one place.", status: "live" },
      { icon: <RefreshIcon />, name: "Re-engagement Campaigns", outcome: "Bring lapsed customers back with personalized AI outreach.", status: "live" },
      { icon: <MapPinIcon />, name: "Business Listings Sync", outcome: "Keep your info consistent across Google, Yelp, and Facebook.", status: "live" },
      { icon: <LayoutIcon />, name: "Multi-location Dashboard", outcome: "Manage AI tools across every location from one screen.", status: "live" },
      { icon: <SearchIcon />, name: "Local SEO Setup", outcome: "Show up when nearby customers search for what you do.", status: "ask" },
    ],
  },
  {
    label: "For Sales Teams",
    headline: "Find leads, reach out faster, close more deals.",
    products: [
      { icon: <ZapIcon />, name: "AI SDR", outcome: "Finds prospects, writes the outreach, sends it, follows up, books meetings.", status: "live" },
      { icon: <MicIcon />, name: "Outbound Voice Agent", outcome: "Calls lists, qualifies leads, and hands off warm prospects to reps.", status: "live" },
      { icon: <ListIcon />, name: "Prospect List Builder", outcome: "Targeted contact lists built from your exact ICP criteria.", status: "live" },
      { icon: <BellIcon />, name: "Lead Follow-up Sequences", outcome: "Nothing falls through the cracks. Every lead gets followed up.", status: "live" },
      { icon: <BarChartIcon />, name: "Pipeline Reporting Dashboard", outcome: "See what channels and messages are actually closing deals.", status: "ask" },
    ],
  },
];

function StatusTag({ status }: { status: "live" | "ask" }) {
  if (status === "live") {
    return (
      <span className="inline-flex items-center gap-1 rounded-pill bg-[#F0FDF4] border border-[#BBF7D0] px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        Live
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-pill bg-[#F1F5F9] border border-[#E2E8F0] px-2.5 py-0.5 text-[11px] font-semibold text-[#64748B]">
      Ask us
    </span>
  );
}

function ProductCard({ product, delay }: { product: Product; delay: number }) {
  return (
    <FadeUp delay={delay}>
      <div className="group flex flex-col h-full rounded-card border border-[#E2E8F0] bg-white p-6 shadow-card
        hover:shadow-card-hover hover:border-teal transition-all duration-200 cursor-default">
        <div className="flex items-start justify-between mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-light">
            {product.icon}
          </div>
          <StatusTag status={product.status} />
        </div>
        <h3 className="font-heading font-semibold text-ink mb-2" style={{ fontSize: "16px" }}>
          {product.name}
        </h3>
        <p className="text-sm text-[#475569] leading-relaxed flex-1">{product.outcome}</p>
      </div>
    </FadeUp>
  );
}

export default function ProductsPage() {
  return (
    <>
      <main className="pt-24">
        {/* Header */}
        <section className="bg-white py-20 border-b border-[#E2E8F0]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <FadeUp>
              <p className="uppercase text-teal font-semibold mb-4"
                style={{ fontSize: "13px", letterSpacing: "0.08em" }}>
                Full Product Portfolio
              </p>
              <h1 className="font-heading font-bold text-ink mb-5"
                style={{ fontSize: "clamp(32px, 5vw, 48px)", letterSpacing: "-0.02em", lineHeight: 1.15 }}>
                Everything we can build for your business
              </h1>
              <p className="text-[#475569] mx-auto max-w-lg" style={{ fontSize: "18px" }}>
                Mix and match. We configure what you need.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* Product sections */}
        {sectionsData.map((section, si) => (
          <section
            key={section.label}
            className={si % 2 === 0 ? "bg-white py-20" : "bg-[#F8FAFC] py-20"}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <FadeUp>
                <div className="mb-10">
                  <p className="font-heading font-bold text-teal text-xl mb-1
                    relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0
                    after:h-[3px] after:w-full after:bg-amber after:rounded-full">
                    {section.label}
                  </p>
                  <p className="text-[#475569] mt-2 text-base">{section.headline}</p>
                </div>
              </FadeUp>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {section.products.map((product, pi) => (
                  <ProductCard key={product.name} product={product} delay={pi * 80} />
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Bottom CTA */}
        <section className="bg-white py-20 border-t border-[#E2E8F0]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <FadeUp>
              <h2 className="font-heading font-bold text-ink mb-3"
                style={{ fontSize: "clamp(22px, 3vw, 28px)" }}>
                Don&apos;t see what you need? Ask us.
              </h2>
              <p className="text-[#475569] mb-8 text-base">
                We configure custom AI solutions for any business.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-btn bg-amber px-7 py-3.5 text-base font-bold text-ink shadow-sm hover:bg-amber-dark transition-all hover:-translate-y-px"
              >
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
