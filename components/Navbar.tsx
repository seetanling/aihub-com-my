'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const NAV_LINKS = [
  { href: '/community', label: 'Community' },
  { href: '/about',     label: 'About'     },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/');

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md border-b"
      style={{
        backgroundColor: 'rgba(6,14,28,0.92)',
        borderColor: 'rgba(201,168,76,0.15)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* ── Logo ───────────────────────────────── */}
        <Link href="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          {/* Hex emblem */}
          <div className="relative w-9 h-9 flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 36 36" className="absolute inset-0 w-full h-full transition-transform duration-300 group-hover:scale-110">
              {/* Outer hex */}
              <polygon
                points="18,1 34,9.5 34,26.5 18,35 2,26.5 2,9.5"
                fill="none"
                stroke="#C9A84C"
                strokeWidth="1.5"
              />
              {/* Inner hex */}
              <polygon
                points="18,7 29,13 29,23 18,29 7,23 7,13"
                fill="rgba(201,168,76,0.12)"
                stroke="rgba(201,168,76,0.5)"
                strokeWidth="0.8"
              />
              {/* Circuit dots */}
              <circle cx="18" cy="18" r="2" fill="#C9A84C" />
              <line x1="18" y1="7"  x2="18" y2="14" stroke="#C9A84C" strokeWidth="0.8" opacity="0.6" />
              <line x1="18" y1="22" x2="18" y2="29" stroke="#C9A84C" strokeWidth="0.8" opacity="0.6" />
              <line x1="29" y1="13" x2="22" y2="16" stroke="#C9A84C" strokeWidth="0.8" opacity="0.6" />
              <line x1="7"  y1="13" x2="14" y2="16" stroke="#C9A84C" strokeWidth="0.8" opacity="0.6" />
            </svg>
          </div>

          <div className="leading-none">
            <span className="block font-display font-bold text-base tracking-wide text-white group-hover:text-gold transition-colors" style={{ color: 'white' }}>
              AI HUB
            </span>
            <span className="block font-display font-semibold text-[10px] tracking-[0.2em] uppercase" style={{ color: '#C9A84C' }}>
              MALAYSIA
            </span>
          </div>
        </Link>

        {/* ── Desktop nav ────────────────────────── */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="px-4 py-2 rounded-lg text-sm font-medium font-display transition-all duration-150"
              style={
                isActive(href)
                  ? { color: '#C9A84C', backgroundColor: 'rgba(201,168,76,0.12)' }
                  : { color: '#B8CCE0' }
              }
              onMouseEnter={e => {
                if (!isActive(href)) {
                  (e.target as HTMLElement).style.color = 'white';
                  (e.target as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.06)';
                }
              }}
              onMouseLeave={e => {
                if (!isActive(href)) {
                  (e.target as HTMLElement).style.color = '#B8CCE0';
                  (e.target as HTMLElement).style.backgroundColor = 'transparent';
                }
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* ── CTA + hamburger ─────────────────────── */}
        <div className="flex items-center gap-3">
          <Link href="/community" className="hidden sm:inline-flex btn-primary text-sm py-2 px-5">
            Join the Community
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: '#B8CCE0' }}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* ── Mobile menu ─────────────────────────── */}
      {open && (
        <div
          className="md:hidden border-t px-4 py-3 flex flex-col gap-1"
          style={{ backgroundColor: 'rgba(6,14,28,0.98)', borderColor: 'rgba(201,168,76,0.15)' }}
        >
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="px-4 py-2.5 rounded-lg text-sm font-medium font-display transition-all"
              style={
                isActive(href)
                  ? { color: '#C9A84C', backgroundColor: 'rgba(201,168,76,0.10)' }
                  : { color: '#B8CCE0' }
              }
            >
              {label}
            </Link>
          ))}
          <Link
            href="/community"
            onClick={() => setOpen(false)}
            className="btn-primary text-sm py-2.5 mt-1 justify-center"
          >
            Join the Community
          </Link>
        </div>
      )}
    </header>
  );
}
