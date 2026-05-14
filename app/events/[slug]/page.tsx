import { notFound }  from 'next/navigation';
import Image from 'next/image';
import Link  from 'next/link';
import {
  getEventBySlug,
  getEvents,
  formatEventDate,
  daysUntil,
} from '@/lib/events';
import { buildMetadata, buildEventJsonLd } from '@/lib/seo';
import AttendeeAvatars from '@/components/AttendeeAvatars';

/* ── Static params ─────────────────────────────── */
export async function generateStaticParams() {
  return getEvents().map((e) => ({ slug: e.slug }));
}

/* ── Metadata ──────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const event = getEventBySlug(params.slug);
  if (!event) return {};
  return buildMetadata({
    title:       event.title,
    description: event.tagline,
    path:        `/events/${event.slug}`,
    ogImage:     event.coverImage,
    keywords:    event.tags,
  });
}

/* ── Page ──────────────────────────────────────── */
export default function EventPage({ params }: { params: { slug: string } }) {
  const event = getEventBySlug(params.slug);
  if (!event) notFound();

  const days      = daysUntil(event.date);
  const isPast    = days < 0;
  const spotsLeft = event.capacity - event.totalRsvp;
  const jsonLd    = buildEventJsonLd({
    title:       event.title,
    description: event.description,
    date:        event.date,
    venue:       event.venue,
    slug:        event.slug,
    coverImage:  event.coverImage,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">

        {/* Breadcrumb */}
        <nav className="text-sm mb-6 flex items-center gap-2" style={{ color: '#9CA3AF' }}>
          <Link href="/" className="hover:text-terracotta transition-colors">Home</Link>
          <span>/</span>
          <Link href="/events" className="hover:text-terracotta transition-colors">Events</Link>
          <span>/</span>
          <span className="truncate max-w-[200px]" style={{ color: 'var(--color-ink)' }}>
            {event.title}
          </span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ── Left: main content ─────────────────── */}
          <div className="lg:col-span-2">

            {/* Cover */}
            <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden mb-6">
              <Image
                src={event.coverImage}
                alt={event.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              {/* Category + urgency badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="text-xs font-semibold font-display px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm"
                      style={{ color: 'var(--color-forest)' }}>
                  {event.category}
                </span>
                {!isPast && days >= 0 && days <= 7 && (
                  <span className="text-xs font-semibold font-display px-3 py-1 rounded-full text-white animate-pulse"
                        style={{ backgroundColor: 'var(--color-terracotta)' }}>
                    {days === 0 ? 'Today!' : `In ${days} days`}
                  </span>
                )}
              </div>
            </div>

            {/* Title block */}
            <h1 className="text-3xl sm:text-4xl font-display font-semibold mb-2"
                style={{ color: 'var(--color-forest)' }}>
              {event.title}
            </h1>
            <p className="text-xl mb-6" style={{ color: '#6B7280' }}>{event.tagline}</p>

            {/* Meta row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl mb-8"
                 style={{ backgroundColor: 'var(--color-cream)', border: '1px solid rgba(38,78,54,0.1)' }}>
              <MetaItem
                icon={<CalendarIcon />}
                label="Date & Time"
                value={`${formatEventDate(event.date)} · ${event.time}`}
              />
              <MetaItem
                icon={<PinIcon />}
                label="Venue"
                value={event.venue}
                href={event.venueMapUrl}
              />
              <MetaItem
                icon={<TicketIcon />}
                label="Capacity"
                value={`${event.totalRsvp} / ${event.capacity} registered`}
              />
              {event.speakerNames && event.speakerNames.length > 0 && (
                <MetaItem
                  icon={<MicIcon />}
                  label="Speakers"
                  value={event.speakerNames.join(', ')}
                />
              )}
            </div>

            {/* Description */}
            <div className="prose prose-lg max-w-none mb-8">
              <h2 className="text-xl font-display font-semibold mb-3"
                  style={{ color: 'var(--color-forest)' }}>
                About this event
              </h2>
              <p className="leading-relaxed" style={{ color: '#4B5563' }}>
                {event.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {event.tags.map((tag) => (
                <span key={tag} className="tag-chip">{tag}</span>
              ))}
            </div>
          </div>

          {/* ── Right: sticky sidebar ──────────────── */}
          <div className="lg:sticky lg:top-24 lg:self-start space-y-5">

            {/* RSVP card */}
            <div className="card p-6">
              {isPast ? (
                <div className="text-center py-4">
                  <p className="text-4xl mb-2">📸</p>
                  <p className="font-display font-semibold mb-1"
                     style={{ color: 'var(--color-forest)' }}>
                    This event has passed
                  </p>
                  <p className="text-sm mb-4" style={{ color: '#9CA3AF' }}>
                    Missed it? Join the community so you never miss the next one.
                  </p>
                  <Link href="/community" className="btn-primary w-full justify-center text-sm">
                    Join Community
                  </Link>
                </div>
              ) : (
                <>
                  <div className="mb-5">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium" style={{ color: 'var(--color-forest)' }}>
                        Spots filling up
                      </span>
                      <span className="text-sm font-semibold" style={{ color: 'var(--color-terracotta)' }}>
                        {spotsLeft > 0 ? `${spotsLeft} left` : 'Full'}
                      </span>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden"
                         style={{ backgroundColor: 'rgba(38,78,54,0.1)' }}>
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${Math.min((event.totalRsvp / event.capacity) * 100, 100)}%`,
                          backgroundColor: 'var(--color-terracotta)',
                        }}
                      />
                    </div>
                  </div>

                  <a
                    href={event.rsvpUrl}
                    className={`btn-primary w-full justify-center mb-3 ${spotsLeft === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {spotsLeft === 0 ? 'Join Waitlist' : 'RSVP — It\'s Free'}
                  </a>
                  <p className="text-xs text-center" style={{ color: '#9CA3AF' }}>
                    Free to attend · No credit card required
                  </p>
                </>
              )}
            </div>

            {/* Who's coming — THE HOOK */}
            <AttendeeAvatars
              attendees={event.attendees}
              totalRsvp={event.totalRsvp}
              capacity={event.capacity}
            />

            {/* Share */}
            <div className="card p-5">
              <p className="text-sm font-semibold font-display mb-3" style={{ color: 'var(--color-forest)' }}>
                Share this event
              </p>
              <div className="flex gap-2">
                <ShareButton
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(event.title + ' — ' + event.tagline)}&url=${encodeURIComponent('https://aihub.com.my/events/' + event.slug)}`}
                  label="Twitter / X"
                  color="#1DA1F2"
                />
                <ShareButton
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://aihub.com.my/events/' + event.slug)}`}
                  label="LinkedIn"
                  color="#0A66C2"
                />
                <ShareButton
                  href={`https://t.me/share/url?url=${encodeURIComponent('https://aihub.com.my/events/' + event.slug)}&text=${encodeURIComponent(event.title)}`}
                  label="Telegram"
                  color="#26A5E4"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-12">
          <Link href="/events" className="btn-ghost">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all events
          </Link>
        </div>
      </div>
    </>
  );
}

/* ── Sub-components ──────────────────────────────────────────── */

function MetaItem({
  icon, label, value, href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
            style={{ backgroundColor: 'rgba(224,120,86,0.12)', color: 'var(--color-terracotta)' }}>
        {icon}
      </span>
      <div>
        <p className="text-xs font-medium mb-0.5" style={{ color: '#9CA3AF' }}>{label}</p>
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer"
             className="text-sm font-medium underline decoration-dotted hover:no-underline"
             style={{ color: 'var(--color-forest)' }}>
            {value}
          </a>
        ) : (
          <p className="text-sm font-medium" style={{ color: 'var(--color-ink)' }}>{value}</p>
        )}
      </div>
    </div>
  );
}

function ShareButton({
  href, label, color,
}: {
  href: string;
  label: string;
  color: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 py-2 px-3 rounded-xl text-center text-white text-xs font-semibold font-display
                 transition-all hover:scale-[1.03] hover:shadow-md"
      style={{ backgroundColor: color }}
    >
      {label}
    </a>
  );
}

function CalendarIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
function TicketIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
    </svg>
  );
}
function MicIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 016 0v6a3 3 0 01-3 3z" />
    </svg>
  );
}
