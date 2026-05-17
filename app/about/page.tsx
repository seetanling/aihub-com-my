import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title:       'About — AIHub Malaysia',
  description: 'AIHub Malaysia is the community gathering place for people building with AI in Malaysia. Learn about our mission and the team behind it.',
  path:        '/about',
  keywords:    ['about AIHub Malaysia', 'AI community Malaysia', 'AITG Sdn Bhd'],
});

const VALUES = [
  {
    title: 'Warmth first',
    desc: 'AI can feel intimidating. We work hard to make every event and every message in our community feel like you\'re walking into a room of friends who are genuinely excited to meet you.',
  },
  {
    title: 'Malaysian context',
    desc: 'Global AI conversations often miss the nuances of Southeast Asia — multilingual datasets, rural connectivity, PDPA compliance, or simply what it means to build for a Malaysian user. We put that front and centre.',
  },
  {
    title: 'Builders over spectators',
    desc: 'We celebrate people who are making things — even half-finished things. Every event has space for demos, WIPs, and "I tried this and it didn\'t work" stories.',
  },
  {
    title: 'Openness',
    desc: 'No gatekeeping. No exclusive clique. Whether you\'re a PhD researcher, a fresh bootcamp grad, or a curious accountant who wants to understand what everyone\'s talking about — you belong here.',
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

      {/* Hero */}
      <div className="mb-14">
        <span className="section-label">Our story</span>
        <h1 className="text-4xl sm:text-5xl font-display font-semibold mb-6"
            style={{ color: 'var(--color-forest)' }}>
          We started as a group chat.
        </h1>
        <div className="prose prose-lg max-w-none space-y-4">
          <p style={{ color: '#4B5563', lineHeight: '1.75' }}>
            AIHub Malaysia grew out of a Telegram group where a few people in KL were sharing
            papers, tools, and "did you see this?!" links about AI. Within a month, it had
            300 members. Within three months, someone organised a meetup. 60 people showed up.
          </p>
          <p style={{ color: '#4B5563', lineHeight: '1.75' }}>
            Since then we've run meetups across KL, Penang, and Johor — workshops on everything
            from LLM fine-tuning to AI ethics in Bahasa Malaysia, hackathons, and casual Friday
            demo sessions where people share what they've been building.
          </p>
          <p style={{ color: '#4B5563', lineHeight: '1.75' }}>
            AIHub.com.my is the home base: a place to find events, join the community, and connect
            with the people making AI happen in Malaysia.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="mb-16">
        <span className="section-label">What we believe</span>
        <h2 className="text-3xl font-display font-semibold mb-8" style={{ color: 'var(--color-forest)' }}>
          Our values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {VALUES.map(({ title, desc }, i) => (
            <div key={title} className="card p-6">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold font-display mb-3"
                   style={{ backgroundColor: 'var(--color-terracotta)' }}>
                {i + 1}
              </div>
              <h3 className="font-display font-semibold mb-2" style={{ color: 'var(--color-forest)' }}>
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Entity */}
      <div className="rounded-2xl p-6 mb-12"
           style={{ backgroundColor: 'var(--color-cream)', border: '1px solid rgba(38,78,54,0.1)' }}>
        <p className="text-xs font-semibold uppercase tracking-widest mb-2 font-display"
           style={{ color: 'var(--color-terracotta)' }}>
          Legal entity
        </p>
        <p className="text-sm" style={{ color: '#6B7280' }}>
          AIHub Malaysia is operated by{' '}
          <strong style={{ color: 'var(--color-forest)' }}>AITG Sdn Bhd</strong>
          {' · '}202601016521 (1678618-W), a Malaysian technology company building
          AI products and communities across the region.
        </p>
      </div>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/events" className="btn-primary">
          Join an upcoming event
        </Link>
        <Link href="/community" className="btn-outline">
          Join the community
        </Link>
      </div>
    </div>
  );
}
