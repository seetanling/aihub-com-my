import Link from 'next/link';
import { getFeaturedEvents, getEvents, formatEventDate } from '@/lib/events';
import EventCard from '@/components/EventCard';
import CommunityJoin from '@/components/CommunityJoin';
import { orgJsonLd } from '@/lib/seo';

export default function HomePage() {
  const featured = getFeaturedEvents().slice(0, 3);
  const upcoming = getEvents().slice(0, 6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      {/* ── HERO ───────────────────────────────────────── */}
      <section className="relative overflow-hidden hex-bg" style={{ minHeight: '90vh' }}>

        {/* Radial gold glow behind content */}
        <div className="absolute inset-0 pointer-events-none"
             style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 0%, rgba(201,168,76,0.10) 0%, transparent 65%)' }} />

        {/* Animated circuit nodes — decorative */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          {[
            { x: '12%', y: '18%', size: 3, delay: '0s'   },
            { x: '88%', y: '22%', size: 2, delay: '0.8s' },
            { x: '75%', y: '55%', size: 4, delay: '1.5s' },
            { x: '8%',  y: '65%', size: 2, delay: '2.1s' },
            { x: '55%', y: '80%', size: 3, delay: '0.4s' },
            { x: '92%', y: '78%', size: 2, delay: '1.2s' },
          ].map((dot, i) => (
            <div
              key={i}
              className="absolute rounded-full pulse-gold"
              style={{
                left: dot.x, top: dot.y,
                width: dot.size + 'px', height: dot.size + 'px',
                backgroundColor: '#C9A84C',
                animationDelay: dot.delay,
                boxShadow: '0 0 8px #C9A84C',
              }}
            />
          ))}

          {/* Connecting line SVG */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.06]" preserveAspectRatio="none">
            <line x1="12%" y1="18%" x2="55%" y2="80%" stroke="#C9A84C" strokeWidth="0.5"/>
            <line x1="88%" y1="22%" x2="75%" y2="55%" stroke="#C9A84C" strokeWidth="0.5"/>
            <line x1="75%" y1="55%" x2="55%" y2="80%" stroke="#C9A84C" strokeWidth="0.5"/>
            <line x1="8%"  y1="65%" x2="12%" y2="18%" stroke="#C9A84C" strokeWidth="0.5"/>
            <line x1="92%" y1="78%" x2="75%" y2="55%" stroke="#C9A84C" strokeWidth="0.5"/>
          </svg>
        </div>

        {/* KL Skyline SVG — bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none overflow-hidden">
          <svg viewBox="0 0 1200 180" xmlns="http://www.w3.org/2000/svg"
               className="w-full" preserveAspectRatio="xMidYMax slice">
            {/* City skyline silhouette */}
            <g fill="rgba(201,168,76,0.06)" stroke="rgba(201,168,76,0.12)" strokeWidth="0.5">
              {/* Background buildings */}
              <rect x="0"   y="110" width="60"  height="70" />
              <rect x="50"  y="95"  width="45"  height="85" />
              <rect x="90"  y="120" width="35"  height="60" />
              <rect x="120" y="85"  width="50"  height="95" />
              <rect x="165" y="105" width="40"  height="75" />
              <rect x="900" y="100" width="55"  height="80" />
              <rect x="945" y="90"  width="40"  height="90" />
              <rect x="980" y="115" width="45"  height="65" />
              <rect x="1020" y="85" width="60"  height="95" />
              <rect x="1075" y="105" width="50" height="75" />
              <rect x="1120" y="95"  width="80" height="85" />
            </g>

            {/* Petronas Twin Towers — center pride of place */}
            <g fill="rgba(201,168,76,0.09)" stroke="rgba(201,168,76,0.22)" strokeWidth="0.6">
              {/* Left tower */}
              <rect x="510" y="10" width="44" height="170" />
              {/* Left tower spire */}
              <polygon points="532,0 522,16 542,16" />
              {/* Left tower skybridge connection */}
              <rect x="510" y="80" width="44" height="6" />
              {/* Right tower */}
              <rect x="646" y="10" width="44" height="170" />
              {/* Right tower spire */}
              <polygon points="668,0 658,16 678,16" />
              {/* Right tower skybridge connection */}
              <rect x="646" y="80" width="44" height="6" />
              {/* Skybridge */}
              <rect x="554" y="76" width="92" height="14" rx="2" />
              <rect x="560" y="80" width="80" height="6" />
            </g>

            {/* KL Tower (Menara KL) */}
            <g fill="rgba(201,168,76,0.07)" stroke="rgba(201,168,76,0.18)" strokeWidth="0.5">
              <rect x="592" y="28" width="16" height="152" />
              {/* Observation pod */}
              <rect x="584" y="28" width="32" height="22" rx="3" />
              {/* Antenna tip */}
              <line x1="600" y1="0" x2="600" y2="28" stroke="rgba(201,168,76,0.25)" strokeWidth="1.5"/>
            </g>

            {/* Mid-ground buildings */}
            <g fill="rgba(201,168,76,0.05)" stroke="rgba(201,168,76,0.12)" strokeWidth="0.4">
              <rect x="200" y="70"  width="65"  height="110" />
              <rect x="260" y="90"  width="50"  height="90"  />
              <rect x="305" y="60"  width="75"  height="120" />
              <rect x="375" y="80"  width="55"  height="100" />
              <rect x="425" y="100" width="40"  height="80"  />
              <rect x="460" y="75"  width="55"  height="105" />
              <rect x="700" y="75"  width="55"  height="105" />
              <rect x="750" y="90"  width="45"  height="90"  />
              <rect x="790" y="65"  width="65"  height="115" />
              <rect x="850" y="85"  width="55"  height="95"  />
            </g>

            {/* Ground line */}
            <rect x="0" y="178" width="1200" height="2" fill="rgba(201,168,76,0.15)" />

            {/* Node dots on tower tips */}
            <circle cx="532" cy="2"  r="2" fill="#C9A84C" opacity="0.5" />
            <circle cx="668" cy="2"  r="2" fill="#C9A84C" opacity="0.5" />
            <circle cx="600" cy="0"  r="1.5" fill="#C9A84C" opacity="0.6" />
          </svg>

          {/* Ground gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-16"
               style={{ background: 'linear-gradient(to top, rgba(6,14,28,0.6), transparent)' }} />
        </div>

        {/* ── Hero content ─────────────────────── */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-48 sm:pb-52">

          {/* Badge */}
          <div className="flex items-center gap-3 mb-8">
            <span className="w-1.5 h-1.5 rounded-full pulse-gold" style={{ backgroundColor: '#C9A84C' }} />
            <span className="section-label">Malaysia's AI Community</span>
            <span className="w-1.5 h-1.5 rounded-full pulse-gold" style={{ backgroundColor: '#C9A84C', animationDelay: '0.5s' }} />
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-[1.05] max-w-3xl">
            Where AI builders<br />
            <span className="gold-text">come together.</span>
          </h1>

          <p className="text-xl mb-10 leading-relaxed max-w-xl" style={{ color: '#B8CCE0' }}>
            Meetups, workshops, hackathons, and real conversations — for everyone
            shaping the future of AI in Malaysia.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link href="/events" className="btn-primary text-base py-3.5 px-7">
              Browse Events
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link href="/community" className="btn-outline text-base py-3.5 px-7">
              Join the Community
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10">
            {[
              { value: '400+', label: 'Community Members' },
              { value: '6',    label: 'Events This Quarter' },
              { value: '12+',  label: 'Cities Represented' },
            ].map(({ value, label }) => (
              <div key={label} className="relative">
                <p className="text-3xl font-display font-bold gold-text">{value}</p>
                <p className="text-sm mt-0.5" style={{ color: '#8DA4BE' }}>{label}</p>
                {/* Vertical rule right */}
                <div className="absolute top-1 -right-5 w-px h-8 hidden sm:block"
                     style={{ background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.3), transparent)' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED EVENTS ────────────────────────────── */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6">

        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs" style={{ color: '#C9A84C' }}>★</span>
              <span className="text-xs font-display font-semibold uppercase tracking-widest" style={{ color: '#C9A84C' }}>Don&apos;t miss out</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-white">Featured Events</h2>
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

      {/* ── COMMUNITY FACES ────────────────────────────── */}
      <section className="py-16 overflow-hidden" style={{ backgroundColor: '#0C1C35' }}>
        {/* Top gold rule */}
        <div className="gold-rule mb-12" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span style={{ color: '#C9A84C' }}>★</span>
              <span className="text-xs font-display font-semibold uppercase tracking-widest" style={{ color: '#C9A84C' }}>People make it</span>
              <span style={{ color: '#C9A84C' }}>★</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-white">Some of our regulars</h2>
          </div>

          <div className="flex gap-5 overflow-x-auto pb-3 snap-x" style={{ scrollbarWidth: 'none' }}>
            {[
              { seed: 'aisha',  name: 'Aisha Rahman',  role: 'ML Engineer',     bg: 'C9A84C' },
              { seed: 'wei',    name: 'Wei Liang',      role: 'Founder',         bg: '162A50' },
              { seed: 'priya',  name: 'Priya Nair',     role: 'Product Manager', bg: 'B8902A' },
              { seed: 'hafiz',  name: 'Hafiz Zakaria',  role: 'Data Scientist',  bg: '1E3A5F' },
              { seed: 'mei',    name: 'Mei Shan',        role: 'UX Researcher',   bg: '8DA4BE' },
              { seed: 'rajan',  name: 'Rajan Kumar',    role: 'Software Eng.',   bg: 'C9A84C' },
              { seed: 'farah',  name: 'Farah Izzati',   role: 'AI Researcher',   bg: '0C2A55' },
              { seed: 'daniel', name: 'Daniel Tan',     role: 'CTO',             bg: '162A50' },
            ].map(({ seed, name, role, bg }) => (
              <div key={seed} className="flex-shrink-0 snap-start text-center w-28">
                <div className="relative mx-auto mb-3" style={{ width: 64, height: 64 }}>
                  {/* Gold hex ring */}
                  <svg viewBox="0 0 64 64" className="absolute inset-0 w-full h-full">
                    <polygon points="32,2 60,17 60,47 32,62 4,47 4,17"
                      fill="none" stroke="#C9A84C" strokeWidth="1.5" opacity="0.5" />
                  </svg>
                  <img
                    src={`https://api.dicebear.com/9.x/thumbs/svg?seed=${seed}&backgroundColor=${bg}`}
                    alt={name}
                    className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-full object-cover"
                  />
                </div>
                <p className="text-xs font-semibold font-display leading-tight text-white">{name}</p>
                <p className="text-xs mt-0.5" style={{ color: '#8DA4BE' }}>{role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="gold-rule mt-12" />
      </section>

      {/* ── UPCOMING EVENTS ────────────────────────────── */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs" style={{ color: '#C9A84C' }}>★</span>
              <span className="text-xs font-display font-semibold uppercase tracking-widest" style={{ color: '#C9A84C' }}>Coming up</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-white">Upcoming Events</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {upcoming.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      {/* ── COMMUNITY CTA ──────────────────────────────── */}
      <section className="pb-24 max-w-6xl mx-auto px-4 sm:px-6">
        <CommunityJoin />
      </section>
    </>
  );
}
