import Link from 'next/link';
import Image from 'next/image';
import { getFeaturedEvents, getEvents, formatEventDate } from '@/lib/events';
import EventCard from '@/components/EventCard';
import CommunityJoin from '@/components/CommunityJoin';
import { orgJsonLd } from '@/lib/seo';

export default function HomePage() {
  const featured = getFeaturedEvents().slice(0, 3);
  const upcoming = getEvents().slice(0, 6);

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      {/* ── Hero ──────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-16 pb-20 bg-hero-pattern">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full -translate-y-1/2 translate-x-1/3 opacity-15"
             style={{ backgroundColor: 'var(--color-terracotta)' }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full translate-y-1/2 -translate-x-1/4 opacity-10"
             style={{ backgroundColor: 'var(--color-forest)' }} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-2xl">
            <span className="section-label">Malaysia's AI Community</span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-semibold mb-6 leading-[1.1]"
                style={{ color: 'var(--color-forest)' }}>
              Where AI builders{' '}
              <span className="gradient-text">come together.</span>
            </h1>

            <p className="text-xl mb-8 leading-relaxed" style={{ color: '#4A5568' }}>
              Meetups, workshops, hackathons, and real conversations — for everyone
              shaping the future of AI in Malaysia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/events" className="btn-primary text-base py-3.5">
                Browse Upcoming Events
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="/community" className="btn-outline text-base py-3.5">
                Join the Community
              </Link>
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-14 flex flex-wrap gap-8">
            {[
              { value: '400+', label: 'Community Members' },
              { value: '6',    label: 'Events This Quarter' },
              { value: '12+',  label: 'Cities Represented' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-3xl font-display font-bold gradient-text">{value}</p>
                <p className="text-sm mt-0.5" style={{ color: '#6B7280' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured events ─────────────────────────── */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="section-label">Don't miss out</span>
            <h2 className="text-3xl font-display font-semibold" style={{ color: 'var(--color-forest)' }}>
              Featured Events
            </h2>
          </div>
          <Link href="/events" className="btn-ghost text-sm hidden sm:inline-flex">
            View all
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((event, i) => (
            <EventCard key={event.id} event={event} featured={i === 0} />
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <Link href="/events" className="btn-outline w-full justify-center text-sm">
            View all events
          </Link>
        </div>
      </section>

      {/* ── Faces strip ─────────────────────────────── */}
      <section className="py-14 overflow-hidden"
               style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <span className="section-label">People make it</span>
            <h2 className="text-3xl font-display font-semibold" style={{ color: 'var(--color-forest)' }}>
              Some of our regulars
            </h2>
          </div>

          {/* Scrolling avatar row */}
          <div className="flex gap-4 overflow-x-auto pb-2 snap-x scrollbar-hide">
            {[
              { seed: 'aisha',  name: 'Aisha Rahman',   role: 'ML Engineer',     bg: 'E07856' },
              { seed: 'wei',    name: 'Wei Liang',       role: 'Founder',         bg: '264E36' },
              { seed: 'priya',  name: 'Priya Nair',      role: 'Product Manager', bg: 'C96840' },
              { seed: 'hafiz',  name: 'Hafiz Zakaria',   role: 'Data Scientist',  bg: '3D7152' },
              { seed: 'mei',    name: 'Mei Shan',         role: 'UX Researcher',   bg: '5C9571' },
              { seed: 'rajan',  name: 'Rajan Kumar',     role: 'Software Eng.',   bg: 'E07856' },
              { seed: 'farah',  name: 'Farah Izzati',    role: 'AI Researcher',   bg: '7E321F' },
              { seed: 'daniel', name: 'Daniel Tan',      role: 'CTO',             bg: '264E36' },
            ].map(({ seed, name, role, bg }) => (
              <div key={seed} className="flex-shrink-0 snap-start text-center w-28">
                <img
                  src={`https://api.dicebear.com/9.x/thumbs/svg?seed=${seed}&backgroundColor=${bg}`}
                  alt={name}
                  className="w-16 h-16 rounded-full mx-auto mb-2 border-3 border-white"
                  style={{ boxShadow: 'var(--shadow-card)' }}
                />
                <p className="text-xs font-semibold font-display leading-tight" style={{ color: 'var(--color-forest)' }}>
                  {name}
                </p>
                <p className="text-xs mt-0.5" style={{ color: '#888' }}>{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Upcoming events list ─────────────────────── */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="section-label">Coming up</span>
            <h2 className="text-3xl font-display font-semibold" style={{ color: 'var(--color-forest)' }}>
              Upcoming Events
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {upcoming.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      {/* ── Community CTA ────────────────────────────── */}
      <section className="pb-20 max-w-6xl mx-auto px-4 sm:px-6">
        <CommunityJoin />
      </section>
    </>
  );
}
