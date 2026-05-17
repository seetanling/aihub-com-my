import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 relative overflow-hidden" style={{ backgroundColor: '#060E1C' }}>

      {/* Gold top rule */}
      <div className="gold-rule" />

      {/* Hex pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 66L0 50V16L28 0l28 16v34L28 66zm0-4l24-14V18L28 4 4 18v30l24 14z' fill='%23C9A84C'/%3E%3Cpath d='M28 100L0 84V66l28 16 28-16v18L28 100z' fill='%23C9A84C'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-14">

        {/* Top: Brand + links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand block */}
          <div>
            {/* Logo mark */}
            <div className="flex items-center gap-3 mb-4">
              <svg viewBox="0 0 40 40" className="w-10 h-10 flex-shrink-0">
                <polygon points="20,1 38,10 38,30 20,39 2,30 2,10"
                  fill="none" stroke="#C9A84C" strokeWidth="1.5" />
                <polygon points="20,8 32,15 32,25 20,32 8,25 8,15"
                  fill="rgba(201,168,76,0.10)" stroke="rgba(201,168,76,0.4)" strokeWidth="0.8" />
                <circle cx="20" cy="20" r="2.5" fill="#C9A84C" />
                <line x1="20" y1="8"  x2="20" y2="16" stroke="#C9A84C" strokeWidth="0.8" opacity="0.6"/>
                <line x1="20" y1="24" x2="20" y2="32" stroke="#C9A84C" strokeWidth="0.8" opacity="0.6"/>
                <line x1="32" y1="15" x2="24" y2="18" stroke="#C9A84C" strokeWidth="0.8" opacity="0.6"/>
                <line x1="8"  y1="15" x2="16" y2="18" stroke="#C9A84C" strokeWidth="0.8" opacity="0.6"/>
              </svg>
              <div>
                <p className="font-display font-bold text-white tracking-wide leading-none">AI HUB</p>
                <p className="font-display font-semibold text-[10px] tracking-[0.2em] uppercase leading-none mt-0.5"
                   style={{ color: '#C9A84C' }}>MALAYSIA</p>
              </div>
            </div>

            <p className="text-sm leading-relaxed" style={{ color: 'rgba(184,204,224,0.65)' }}>
              Malaysia's premier AI community. Events, workshops, and real connections for builders shaping the AI future.
            </p>

            {/* Stars separator */}
            <div className="mt-5 flex items-center gap-2" style={{ color: '#C9A84C' }}>
              <span className="text-xs">★</span>
              <span className="text-xs" style={{ color: 'rgba(201,168,76,0.35)' }}>— Penang, Malaysia —</span>
              <span className="text-xs">★</span>
            </div>
          </div>

          {/* Explore links */}
          <div>
            <p className="font-display font-semibold text-xs uppercase tracking-widest mb-4"
               style={{ color: 'rgba(184,204,224,0.4)' }}>Explore</p>
            <ul className="space-y-2.5">
              {[
                { href: '/community', label: 'Join the Community' },
                { href: '/about',     label: 'About AI Hub MY'    },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm transition-colors hover:text-white flex items-center gap-2 group"
                    style={{ color: 'rgba(184,204,224,0.60)' }}
                  >
                    <span className="w-1 h-1 rounded-full flex-shrink-0 transition-all group-hover:w-2"
                          style={{ backgroundColor: '#C9A84C' }} />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <p className="font-display font-semibold text-xs uppercase tracking-widest mb-4"
               style={{ color: 'rgba(184,204,224,0.4)' }}>Community</p>
            <ul className="space-y-2.5">
              {[
                { href: process.env.NEXT_PUBLIC_DISCORD_URL  || '#',                        label: 'Discord Community' },
                { href: process.env.NEXT_PUBLIC_TELEGRAM_URL || 'https://t.me/aihubmy', label: 'Telegram Channel'  },
              ].map(({ href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm transition-colors hover:text-white flex items-center gap-2 group"
                    style={{ color: 'rgba(184,204,224,0.60)' }}
                  >
                    <span className="w-1 h-1 rounded-full flex-shrink-0 transition-all group-hover:w-2"
                          style={{ backgroundColor: '#C9A84C' }} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 rounded-xl border" style={{ borderColor: 'rgba(201,168,76,0.20)', backgroundColor: 'rgba(201,168,76,0.05)' }}>
              <p className="text-xs font-semibold mb-1" style={{ color: '#C9A84C' }}>Stay Updated</p>
              <p className="text-xs" style={{ color: 'rgba(184,204,224,0.55)' }}>
                Follow us for the latest AI events, workshops, and news across Malaysia.
              </p>
            </div>
          </div>
        </div>

        {/* Gold rule */}
        <div className="gold-rule mb-6" />

        {/* Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs" style={{ color: 'rgba(184,204,224,0.35)' }}>
            © {year} AITG Sdn Bhd · 202601016521 (1678618-W)
          </p>
          <div className="flex items-center gap-5 text-xs" style={{ color: 'rgba(184,204,224,0.35)' }}>
            <span className="text-[10px]" style={{ color: 'rgba(201,168,76,0.40)' }}>★ AI HUB MALAYSIA ★</span>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms"   className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
