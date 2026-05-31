'use client';

import { useEffect, useState } from 'react';
import type { NewsItem } from '@/lib/news';
import Link from 'next/link';

const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  Events:     { bg: 'rgba(224,120,86,0.12)',  text: '#E07856' },
  Resources:  { bg: 'rgba(38,78,54,0.10)',    text: '#264E36' },
  Tips:       { bg: 'rgba(201,168,76,0.12)',  text: '#B8902A' },
  News:       { bg: 'rgba(49,102,176,0.10)',  text: '#3166B0' },
  Challenges: { bg: 'rgba(139,69,19,0.10)',   text: '#8B4513' },
  Community:  { bg: 'rgba(93,113,80,0.10)',   text: '#5D7150' },
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-MY', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export default function NewsPage() {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/news')
      .then((r) => r.json())
      .then((data) => {
        setItems(data.items || []);
        setLoading(false);
      })
      .catch(() => {
        setError('Could not load news. Please try again.');
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <span className="section-label">Community Updates</span>
        <h1
          className="text-4xl sm:text-5xl font-display font-semibold mb-3"
          style={{ color: 'var(--color-forest)' }}
        >
          AI Hub News
        </h1>
        <p className="text-lg max-w-xl" style={{ color: '#6B7280' }}>
          Tips, resources, event recaps, and community updates — straight
          from our Telegram and Discord.
        </p>
      </div>

      {/* Loading */}
      {loading && (
        <div className="text-center py-20">
          <p className="text-2xl animate-pulse" style={{ color: '#C9A84C' }}>
            ★
          </p>
          <p className="font-display text-sm mt-3" style={{ color: '#9CA3AF' }}>
            Loading updates...
          </p>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="text-center py-20">
          <p className="text-5xl mb-4">🔌</p>
          <p style={{ color: '#9CA3AF' }}>{error}</p>
        </div>
      )}

      {/* Empty state */}
      {!loading && !error && items.length === 0 && (
        <div className="text-center py-20">
          <p className="text-5xl mb-4">🌱</p>
          <p
            className="font-display font-semibold text-xl mb-2"
            style={{ color: 'var(--color-forest)' }}
          >
            Nothing here yet
          </p>
          <p className="text-sm" style={{ color: '#9CA3AF' }}>
            News and updates will appear here once the community starts
            sharing. Check back soon!
          </p>
        </div>
      )}

      {/* News list */}
      {!loading && items.length > 0 && (
        <div className="space-y-6">
          {items.map((item) => {
            const colors = CATEGORY_COLORS[item.category] || CATEGORY_COLORS.News;
            return (
              <article
                key={item.id}
                className="rounded-xl p-6 transition-shadow hover:shadow-md"
                style={{
                  backgroundColor: 'white',
                  border: '1px solid rgba(38,78,54,0.10)',
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-xs font-semibold font-display uppercase px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: colors.bg,
                      color: colors.text,
                    }}
                  >
                    {item.category}
                  </span>
                  <time
                    className="text-xs"
                    style={{ color: '#9CA3AF' }}
                    dateTime={item.publishedAt}
                  >
                    {formatDate(item.publishedAt)}
                  </time>
                </div>

                <h2
                  className="text-xl font-display font-semibold mb-2"
                  style={{ color: '#1a3a28' }}
                >
                  {item.title}
                </h2>

                <p className="text-sm leading-relaxed mb-3" style={{ color: '#6B7280' }}>
                  {item.excerpt}
                </p>

                <div
                  className="prose prose-sm max-w-none text-sm leading-relaxed"
                  style={{ color: '#374151' }}
                  dangerouslySetInnerHTML={{
                    __html: item.content.replace(/\n/g, '<br/>'),
                  }}
                />

                {/* Tags & Telegram link */}
                <div className="flex flex-wrap items-center gap-2 mt-4 pt-3" style={{ borderTop: '1px solid #F3F4F6' }}>
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded"
                      style={{
                        backgroundColor: '#F3F4F6',
                        color: '#6B7280',
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                  {item.telegramLink && (
                    <a
                      href={item.telegramLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs ml-auto font-medium hover:underline"
                      style={{ color: '#3166B0' }}
                    >
                      View on Telegram →
                    </a>
                  )}
                </div>
              </article>
            );
          })}

          {/* More link */}
          <div className="text-center pt-4">
            <Link
              href="https://t.me/aihubmy"
              target="_blank"
              className="inline-flex items-center gap-2 text-sm font-medium"
              style={{ color: '#264E36' }}
            >
              📢 Follow @aihubmy on Telegram for real-time updates
              <span>→</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
