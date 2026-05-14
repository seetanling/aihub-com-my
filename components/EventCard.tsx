import Link from 'next/link';
import Image from 'next/image';
import { type Event, formatEventDate, daysUntil } from '@/lib/events';
import { cn } from '@/lib/utils';

type Props = {
  event: Event;
  featured?: boolean;
};

const CATEGORY_COLORS: Record<Event['category'], string> = {
  Meetup:    'bg-terracotta-100 text-terracotta-700',
  Workshop:  'bg-forest-100  text-forest-700',
  Hackathon: 'bg-amber-100   text-amber-700',
  Panel:     'bg-violet-100  text-violet-700',
  Social:    'bg-pink-100    text-pink-700',
};

export default function EventCard({ event, featured = false }: Props) {
  const days   = daysUntil(event.date);
  const isPast = days < 0;
  const urgency = days >= 0 && days <= 7;

  const spotsLeft = event.capacity - event.totalRsvp;
  const almostFull = spotsLeft > 0 && spotsLeft <= 10;

  return (
    <Link
      href={`/events/${event.slug}`}
      className={cn(
        'card group flex flex-col overflow-hidden',
        featured && 'md:flex-row md:items-stretch'
      )}
    >
      {/* Cover image */}
      <div className={cn(
        'relative overflow-hidden',
        featured ? 'md:w-2/5 h-52 md:h-auto' : 'h-44'
      )}>
        <Image
          src={event.coverImage}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes={featured
            ? '(max-width: 768px) 100vw, 40vw'
            : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
          }
        />
        {/* Category badge */}
        <span className={cn(
          'absolute top-3 left-3 text-xs font-semibold font-display px-2.5 py-1 rounded-full',
          CATEGORY_COLORS[event.category]
        )}>
          {event.category}
        </span>

        {/* Urgency banner */}
        {urgency && !isPast && (
          <span className="absolute top-3 right-3 text-xs font-semibold font-display px-2.5 py-1 rounded-full bg-terracotta-500 text-white animate-pulse">
            {days === 0 ? 'Today!' : `${days}d left`}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">

        {/* Date */}
        <p className="text-xs font-medium mb-1.5" style={{ color: 'var(--color-terracotta)' }}>
          {formatEventDate(event.date)} · {event.time}
        </p>

        {/* Title */}
        <h3 className={cn(
          'font-display font-semibold leading-snug mb-1',
          featured ? 'text-xl' : 'text-base'
        )} style={{ color: 'var(--color-ink)' }}>
          {event.title}
        </h3>

        {/* Tagline */}
        <p className="text-sm mb-3 line-clamp-2" style={{ color: '#6B6B6B' }}>
          {event.tagline}
        </p>

        {/* Venue */}
        <div className="flex items-center gap-1.5 text-xs mb-4" style={{ color: '#888' }}>
          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="truncate">{event.venue}</span>
        </div>

        {/* Footer row: avatars + RSVP count */}
        <div className="mt-auto flex items-center justify-between">
          {/* Attendee avatar stack */}
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {event.attendees.slice(0, 5).map((a) => (
                <img
                  key={a.id}
                  src={a.avatarUrl}
                  alt={a.name}
                  title={a.name}
                  className="avatar-ring w-7 h-7"
                  style={{ borderColor: 'white' }}
                />
              ))}
              {event.attendees.length > 5 && (
                <span className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-xs font-medium"
                      style={{ backgroundColor: 'var(--color-cream)', color: 'var(--color-forest)' }}>
                  +{event.totalRsvp - 5}
                </span>
              )}
            </div>
            <span className="text-xs" style={{ color: '#888' }}>
              {event.totalRsvp} going
            </span>
          </div>

          {/* Almost full badge or capacity */}
          {almostFull ? (
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-amber-50 text-amber-700">
              {spotsLeft} spots left
            </span>
          ) : isPast ? (
            <span className="text-xs text-gray-400">Past event</span>
          ) : (
            <span className="text-xs font-display font-semibold" style={{ color: 'var(--color-terracotta)' }}>
              RSVP →
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
