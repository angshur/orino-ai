const columns = [
  {
    heading: "Products",
    links: [
      { label: "AI Receptionist", href: "/products" },
      { label: "Smart Website",   href: "/products" },
      { label: "AI SDR",          href: "/products" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "How It Works", href: "/#how-it-works" },
      { label: "About",        href: "/" },
      { label: "Blog",         href: "/" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "Book a Free Call", href: "/contact" },
      { label: "hello@orino.ai",   href: "mailto:hello@orino.ai" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-white border-t-2 border-accent">
      <div className="mx-auto max-w-[1120px] px-10 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-[5px] bg-accent text-white text-[12px] font-bold">O</span>
              <span className="text-[17px] font-bold tracking-[-0.03em]">Orino</span>
            </div>
            <p className="text-[14px] text-[rgba(255,255,255,0.4)] leading-relaxed">
              Done-for-you AI. Set up in 48 hours.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[rgba(255,255,255,0.3)] mb-5">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}
                      className="text-[14px] text-[rgba(255,255,255,0.5)] hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-[rgba(255,255,255,0.08)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[13px] text-[rgba(255,255,255,0.25)]">© 2026 Orino.ai</p>
          <p className="text-[13px] text-[rgba(255,255,255,0.25)]">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
