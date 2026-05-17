import { buildMetadata } from '@/lib/seo';
import CommunityJoin from '@/components/CommunityJoin';
import Link from 'next/link';

export const metadata = buildMetadata({
  title:       'Community — AIHub Malaysia',
  description: 'Join Malaysia\'s most active AI community on Discord and Telegram. 400+ builders, researchers, and founders sharing ideas, code, and coffee.',
  path:        '/community',
  keywords:    ['AI Discord Malaysia', 'AI Telegram Malaysia', 'AI community chat'],
});

const COMMUNITY_PERKS = [
  {
    emoji: '🧠',
    title: 'Weekly topic threads',
    desc:  'From LLM fine-tuning tips to Malaysia-specific NLP challenges — someone\'s always started the conversation.',
  },
  {
    emoji: '🔔',
    title: 'Event-first announcements',
    desc:  'Community members get early RSVP access before events go public. Never miss a sold-out workshop again.',
  },
  {
    emoji: '🤝',
    title: 'Collaborator matching',
    desc:  'Looking for a co-founder, a dataset, or a guest speaker? Drop it in #looking-for and watch the community show up.',
  },
  {
    emoji: '📦',
    title: 'Resource drops',
    desc:  'Curated papers, open-source tools, job leads, and grant opportunities — shared when they\'re fresh.',
  },
  {
    emoji: '🎤',
    title: 'Demo Friday',
    desc:  'Every Friday in #show-and-tell: share what you\'re building in one message, screenshot or GIF welcome.',
  },
  {
    emoji: '🌏',
    title: 'Local + global lens',
    desc:  'We care about what\'s happening globally, but we keep the conversation rooted in the Malaysian context.',
  },
];

export default function CommunityPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">

      {/* Header */}
      <div className="text-center mb-14 max-w-2xl mx-auto">
        <span className="section-label">Where we hang out</span>
        <h1 className="text-4xl sm:text-5xl font-display font-semibold mb-4"
            style={{ color: 'var(--color-forest)' }}>
          The conversation doesn't stop<br />after the event.
        </h1>
        <p className="text-lg" style={{ color: '#6B7280' }}>
          400+ AI builders, researchers, students, and founders across Malaysia — all in one place.
          Warm, welcoming, no gatekeeping.
        </p>
      </div>

      {/* Big join CTA */}
      <div className="mb-16">
        <CommunityJoin />
      </div>

      {/* What you'll find */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <span className="section-label">What to expect</span>
          <h2 className="text-3xl font-display font-semibold" style={{ color: 'var(--color-forest)' }}>
            What's inside
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {COMMUNITY_PERKS.map(({ emoji, title, desc }) => (
            <div key={title} className="card p-6">
              <div className="text-3xl mb-3">{emoji}</div>
              <h3 className="font-display font-semibold mb-2" style={{ color: 'var(--color-forest)' }}>
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Community guidelines teaser */}
      <div className="rounded-3xl p-8 text-center"
           style={{ backgroundColor: 'var(--color-cream)', border: '1px solid rgba(38,78,54,0.1)' }}>
        <p className="text-3xl mb-3">🌱</p>
        <h2 className="text-2xl font-display font-semibold mb-2"
            style={{ color: 'var(--color-forest)' }}>
          Kindness is the only rule
        </h2>
        <p className="text-sm max-w-md mx-auto mb-6" style={{ color: '#6B7280' }}>
          We keep this community warm and inclusive. Be generous with what you know.
          Be curious about what you don't. No spam, no self-promotion overload, no gatekeeping.
        </p>
        <CommunityJoin compact />
      </div>

      {/* Events nudge */}
      <div className="mt-12 text-center">
        <p className="text-sm mb-3" style={{ color: '#9CA3AF' }}>
          Prefer meeting in person?
        </p>
        <Link href="/events" className="btn-outline text-sm">
          Browse upcoming events
        </Link>
      </div>
    </div>
  );
}
