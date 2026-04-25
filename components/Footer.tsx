const columns = [
  {
    heading: "Products",
    links: [
      { label: "AI Receptionist", href: "/products/ai-receptionist" },
      { label: "Smart Website",   href: "/products/smart-website" },
      { label: "AI SDR",          href: "/products/ai-sdr" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "How It Works", href: "/#how-it-works" },
      { label: "About",        href: "/about" },
      { label: "Blog",         href: "/blog" },
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
    <footer className="bg-ink text-white border-t-2 border-teal">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        {/* Top row */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="font-heading font-bold text-2xl text-teal">Orino</span>
            <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed">
              Done-for-you AI. Set up in 48 hours.
            </p>
          </div>

          {/* Columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <p className="text-label uppercase tracking-[0.08em] text-[#94A3B8] mb-4">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-[#CBD5E1] hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-[#64748B]">
            © 2026 Orino.ai
          </p>
          <p className="text-sm text-[#64748B]">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
