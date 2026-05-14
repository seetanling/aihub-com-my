import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-cream-300/60"
            style={{ backgroundColor: 'var(--color-forest)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span
                className="w-8 h-8 rounded-xl flex items-center justify-center text-white text-sm font-bold font-display"
                style={{ backgroundColor: 'var(--color-terracotta)' }}
              >
                AI
              </span>
              <span className="font-display font-semibold text-lg text-white">
                AIHub <span style={{ color: 'var(--color-terracotta)' }}>MY</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(244,237,228,0.7)' }}>
              Malaysia's warmest AI community. Events, workshops, and real connections for the people building the future.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-display font-semibold text-white mb-3 text-sm uppercase tracking-wider">Explore</p>
            <ul className="space-y-2">
              {[
                { href: '/events',    label: 'Upcoming Events'   },
                { href: '/community', label: 'Join the Community' },
                { href: '/about',     label: 'About AIHub'        },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: 'rgba(244,237,228,0.65)' }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <p className="font-display font-semibold text-white mb-3 text-sm uppercase tracking-wider">Community</p>
            <ul className="space-y-2">
              {[
                { href: process.env.NEXT_PUBLIC_DISCORD_URL  || '#', label: '💬 Discord'  },
                { href: process.env.NEXT_PUBLIC_TELEGRAM_URL || '#', label: '✈️ Telegram' },
              ].map(({ href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: 'rgba(244,237,228,0.65)' }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal line */}
        <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-2"
             style={{ borderColor: 'rgba(244,237,228,0.12)' }}>
          <p className="text-xs" style={{ color: 'rgba(244,237,228,0.45)' }}>
            © {year} AITG Sdn Bhd · 202601016521 (1678618-W)
          </p>
          <div className="flex gap-4 text-xs" style={{ color: 'rgba(244,237,228,0.45)' }}>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms"   className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
