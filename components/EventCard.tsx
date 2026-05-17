import Link from 'next/link';
import Image from 'next/image';
import { type Event, formatEventDate, daysUntil } from '@/lib/events';

type Props = {
  event: Event;
  featured?: boolean;
};

const CATEGORY_STYLES: Record<Event['category'], { bg: string; color: string; border: string }> = {
  Meetup:    { bg: 'rgba(201,168,76,0.12)',  color: '#E2CA7D',  border: 'rgba(201,168,76,0.30)' },
  Workshop:  { bg: 'rgba(141,164,190,0.12)', color: '#B8CCE0',  border: 'rgba(141,164,190,0.30)' },
  Hackathon: { bg: 'rgba(251,191,36,0.12)',  color: '#FBD34D',  border: 'rgba(251,191,36,0.30)' },
  Panel:     { bg: 'rgba(167,139,250,0.12)', color: '#C4B5FD',  border: 'rgba(167,139,250,0.30)' },
  Social:    { bg: 'rgba(244,114,182,0.12)', color: '#F9A8D4',  border: 'rgba(244,114,182,0.30)' },
};

export default function EventCard({ event, featured = false }: Props) {
  const days   = daysUntil(event.date);
  const isPast = days < 0;
  const urgency = days >= 0 && days <= 7;
  const spotsLeft  = event.capacity - event.totalRsvp;
  const almostFull = spotsLeft > 0 && spotsLeft <= 10;
  const catStyle   = CATEGORY_STYLES[event.category];

  return (
    <Link
      href={`/events/${event.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl transition-all duration-300"
      style={{
        backgroundColor: '#112040',
        border: '1px solid rgba(201,168,76,0.15)',
        flexDirection: featured ? undefined : 'column',
      }}
    >
      {/* Cover image */}
      <div
        className="relative overflow-hidden flex-shrink-0"
        style={{ height: featured ? undefined : '11rem', minHeight: featured ? '13rem' : undefined }}
      >
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

        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(17,32,64,0.8) 100%)' }} />

        {/* Category badge */}
        <span
          className="absolute top-3 left-3 text-xs font-semibold font-display px-2.5 py-1 rounded-full border"
          style={{ backgroundColor: catStyle.bg, color: catStyle.color, borderColor: catStyle.border }}
        >
          {event.category}
        </span>

        {/* Urgency */}
        {urgency && !isPast && (
          <span className="absolute top-3 right-3 text-xs font-semibold font-display px-2.5 py-1 rounded-full"
                style={{ backgroundColor: '#C9A84C', color: '#060E1C' }}>
            {days === 0 ? 'Today!' : `${days}d left`}
          </span>
        )}

        {/* Gold shimmer on hover — bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
             style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">

        {/* Date */}
        <p className="text-xs font-medium mb-1.5" style={{ color: '#C9A84C' }}>
          {formatEventDate(event.date)} · {event.time}
        </p>

        {/* Title */}
        <h3
          className="font-display font-semibold leading-snug mb-1.5 text-white group-hover:text-gold-light transition-colors"
          style={{ fontSize: featured ? '1.125rem' : '0.9375rem' }}
        >
          {event.title}
        </h3>

        {/* Tagline */}
        <p className="text-sm mb-3 line-clamp-2" style={{ color: '#8DA4BE' }}>
          {event.tagline}
        </p>

        {/* Venue */}
        <div className="flex items-center gap-1.5 text-xs mb-4" style={{ color: 'rgba(141,164,190,0.65)' }}>
          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="truncate">{event.venue}</span>
        </div>

        {/* Footer: avatar stack + CTA */}
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {event.attendees.slice(0, 5).map((a) => (
                <img
                  key={a.id}
                  src={a.avatarUrl}
                  alt={a.name}
                  title={a.name}
                  className="w-7 h-7 rounded-full border-2 object-cover"
                  style={{ borderColor: '#112040' }}
                />
              ))}
              {event.attendees.length > 5 && (
                <span className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs 