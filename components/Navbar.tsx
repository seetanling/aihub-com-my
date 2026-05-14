'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { href: '/events',    label: 'Events'    },
  { href: '/community', label: 'Community' },
  { href: '/about',     label: 'About'     },
];

export default function Navbar() {
  const pathname  = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cream-300/60 backdrop-blur-md"
            style={{ backgroundColor: 'rgba(244,237,228,0.92)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <span
            className="w-8 h-8 rounded-xl flex items-center justify-center text-white text-sm font-bold font-display transition-transform group-hover:scale-110"
            style={{ backgroundColor: 'var(--color-terracotta)' }}
          >
            AI
          </span>
          <span className="font-display font-semibold text-lg" style={{ color: 'var(--color-forest)' }}>
            AIHub <span className="text-terracotta">MY</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'px-4 py-2 rounded-xl text-sm font-medium font-display transition-all duration-150',
                pathname === href || pathname.startsWith(href + '/')
                  ? 'text-white'
                  : 'hover:bg-terracotta-50'
              )}
              style={
                pathname === href || pathname.startsWith(href + '/')
                  ? { backgroundColor: 'var(--color-terracotta)', color: 'white' }
                  : { color: 'var(--color-forest)' }
              }
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/events"
            className="hidden sm:inline-flex btn-primary text-sm py-2 px-4"
          >
            Join an Event
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-terracotta-50 transition-colors"
            aria-label="Toggle menu"
            style={{ color: 'var(--color-forest)' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-cream-300/60 px-4 py-3 flex flex-col gap-1"
             style={{ backgroundColor: 'rgba(244,237,228,0.97)' }}>
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={cn(
                'px-4 py-2.5 rounded-xl text-sm font-medium font-display transition-all',
                pathname === href
                  ? 'text-white'
                  : 'hover:bg-terracotta-50'
              )}
              style={
                pathname === href
                  ? { backgroundColor: 'var(--color-terracotta)', color: 'white' }
                  : { color: 'var(--color-forest)' }
              }
            >
              {label}
            </Link>
          ))}
          <Link
            href="/events"
            onClick={() => setOpen(false)}
            className="btn-primary text-sm py-2.5 mt-1 justify-center"
          >
            Join an Event
          </Link>
        </div>
      )}
    </header>
  );
}
