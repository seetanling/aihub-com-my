'use client';

import { useState } from 'react';
import { getEvents, getCategories, type Event } from '@/lib/events';
import EventCard from '@/components/EventCard';

export default function EventsPage() {
  const all        = getEvents();
  const categories = ['All', ...getCategories()];
  const [active, setActive] = useState<string>('All');

  const filtered = active === 'All'
    ? all
    : all.filter((e) => e.category === active);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">

      {/* Header */}
      <div className="mb-10">
        <span className="section-label">Malaysia AI community</span>
        <h1 className="text-4xl sm:text-5xl font-display font-semibold mb-3"
            style={{ color: 'var(--color-forest)' }}>
          Upcoming Events
        </h1>
        <p className="text-lg max-w-xl" style={{ color: '#6B7280' }}>
          Meetups, workshops, panels, and hackathons — all in one place.
          Find your next gathering.
        </p>
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className="px-4 py-2 rounded-full text-sm font-semibold font-display transition-all duration-150"
            style={
              active === cat
                ? { backgroundColor: 'var(--color-terracotta)', color: 'white' }
                : {
                    backgroundColor: 'rgba(38,78,54,0.08)',
                    color: 'var(--color-forest)',
                  }
            }
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-sm mb-6" style={{ color: '#9CA3AF' }}>
        {filtered.length} event{filtered.length !== 1 ? 's' : ''}
        {active !== 'All' ? ` in ${active}` : ''}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-5xl mb-4">🌱</p>
          <p className="font-display font-semibold text-xl mb-2"
             style={{ color: 'var(--color-forest)' }}>
            Nothing here yet
          </p>
          <p className="text-sm" style={{ color: '#9CA3AF' }}>
            No events in this category right now. Check back soon!
          </p>
        </div>
      )}
    </div>
  );
}
