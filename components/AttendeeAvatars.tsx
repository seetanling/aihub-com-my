'use client';

/**
 * AttendeeAvatars — the "Who's coming?" hook
 *
 * Renders a warm, animated strip of attendee avatars with names/roles.
 * Currently uses mock data passed via props.
 *
 * Future upgrade path:
 * - Replace static `attendees` prop with a Supabase Realtime subscription
 * - Use the `useEffect` below (currently commented out) to subscribe to RSVP inserts
 * - Env vars: NEXT_PUBLIC_SUPABASE_URL + NEXT_PUBLIC_SUPABASE_ANON_KEY
 */

import { useState } from 'react';
import { cn } from '@/lib/utils';
import type { Attendee } from '@/lib/events';

type Props = {
  attendees: Attendee[];
  totalRsvp: number;
  capacity:  number;
  className?: string;
};

export default function AttendeeAvatars({
  attendees,
  totalRsvp,
  capacity,
  className,
}: Props) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const spotsLeft = capacity - totalRsvp;
  const fillPct   = Math.min(Math.round((totalRsvp / capacity) * 100), 100);

  return (
    <div className={cn('rounded-2xl p-5', className)}
         style={{ backgroundColor: 'rgba(38,78,54,0.06)', border: '1px solid rgba(38,78,54,0.12)' }}>

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="live-dot" />
          <span className="text-sm font-semibold font-display" style={{ color: 'var(--color-forest)' }}>
            Who's coming?
          </span>
        </div>
        <span className="text-xs font-medium px-2.5 py-1 rounded-full"
              style={{ backgroundColor: 'rgba(224,120,86,0.12)', color: 'var(--color-terracotta)' }}>
          {totalRsvp} / {capacity} going
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 rounded-full mb-5 overflow-hidden"
           style={{ backgroundColor: 'rgba(38,78,54,0.12)' }}>
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${fillPct}%`, backgroundColor: 'var(--color-terracotta)' }}
        />
      </div>

      {/* Avatar grid */}
      <div className="flex flex-wrap gap-3">
        {attendees.map((person) => (
          <div
            key={person.id}
            className="relative"
            onMouseEnter={() => setHoveredId(person.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <img
              src={person.avatarUrl}
              alt={person.name}
              className="w-10 h-10 rounded-full border-2 border-white cursor-pointer
                         transition-transform duration-150 hover:scale-110 hover:z-10"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
            />

            {/* Tooltip */}
            {hoveredId === person.id && (
              <div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 w-max max-w-[140px]
                           rounded-xl px-3 py-2 text-center pointer-events-none animate-fade-in"
                style={{
                  backgroundColor: 'var(--color-forest)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                }}
              >
                <p className="text-white text-xs font-semibold font-display leading-tight">
                  {person.name}
                </p>
                <p className="text-xs leading-tight mt-0.5"
                   style={{ color: 'rgba(244,237,228,0.7)' }}>
                  {person.role}
                </p>
                {/* Arrow */}
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45"
                     style={{ backgroundColor: 'var(--color-forest)' }} />
              </div>
            )}
          </div>
        ))}

        {/* +N more */}
        {totalRsvp > attendees.length && (
          <div
            className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center
                       text-xs font-semibold font-display cursor-default"
            style={{
              backgroundColor: 'var(--color-cream)',
              color: 'var(--color-forest)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            }}
          >
            +{totalRsvp - attendees.length}
          </div>
        )}
      </div>

      {/* Spots left nudge */}
      {spotsLeft > 0 && spotsLeft <= 15 && (
        <p className="mt-4 text-xs font-medium text-center"
           style={{ color: 'var(--color-terracotta)' }}>
          Only {spotsLeft} spot{spotsLeft === 1 ? '' : 's'} left — grab yours now!
        </p>
      )}

      {/* Future realtime upgrade note (dev only) */}
      {/* To add realtime: subscribe to Supabase channel "rsvps:event_id=eq.<id>"
          and push new attendees into local state on INSERT events. */}
    </div>
  );
}
