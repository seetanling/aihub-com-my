import type { Metadata } from 'next';

const SITE_URL  = 'https://aihub.com.my';
const SITE_NAME = 'AIHub Malaysia';
const DEFAULT_OG = `${SITE_URL}/og-image.png`;

type PageSeoInput = {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  keywords?: string[];
};

/**
 * Build a Metadata object for any page.
 * Usage: export const metadata = buildMetadata({ title: '...', description: '...' })
 */
export function buildMetadata({
  title,
  description,
  path = '',
  ogImage = DEFAULT_OG,
  keywords = [],
}: PageSeoInput): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords: [
      'AI community Malaysia',
      'AI events Malaysia',
      'tech meetup KL',
      ...keywords,
    ],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_MY',
      type: 'website',
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

/**
 * JSON-LD for the organisation (added to root layout or home page)
 */
export const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AIHub Malaysia',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  parentOrganization: {
    '@type': 'Organization',
    name: 'AITG Sdn Bhd',
    legalName: 'AITG Sdn Bhd',
    identifier: '202601016521 (1678618-W)',
  },
};

/**
 * JSON-LD for a single event
 */
export function buildEventJsonLd(event: {
  title: string;
  description: string;
  date: string;
  venue: string;
  slug: string;
  coverImage?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    description: event.description,
    startDate: event.date,
    location: {
      '@type': 'Place',
      name: event.venue,
      address: { '@type': 'PostalAddress', addressCountry: 'MY' },
    },
    organizer: {
      '@type': 'Organization',
      name: 'AIHub Malaysia',
      url: SITE_URL,
    },
    url: `${SITE_URL}/events/${event.slug}`,
    image: event.coverImage,
  };
}

// ── AEO constants (appended 2026-05-29) ───────────────────────────────────
import type { FaqItem } from './faq';

export const SITE = {
  url: 'https://aihub.com.my', name: 'AIHub Malaysia', legalName: 'AITG Sdn Bhd',
  legalRegistration: '202601016521 (1678618-W)',
  tagline: 'Malaysia\'s AI community hub', description: 'AIHub Malaysia is the gathering place for AI practitioners, founders, and enthusiasts in Malaysia. Events, networking, and resources by AITG Sdn Bhd.',
  email: 'admin@aiteragrid.com', logo: '/og-image.svg',
  city: 'George Town', region: 'Penang', regionCode: 'MY-07', country: 'MY',
  geo: { lat: 5.4164, lng: 100.3327 },
  keywords: ['AI community Malaysia', 'AI hub Malaysia', 'AI events Malaysia', 'AI networking Malaysia', 'AITG'],
} as const;

export const PORTFOLIO = [
  { url: 'https://aiteragrid.com', name: 'Ai Teragrid', desc: 'AITG Sdn Bhd — the company' },
  { url: 'https://aiprovider.com.my', name: 'AI Provider', desc: 'The AITG portfolio map' },
  { url: 'https://aiconsulting.com.my', name: 'AI Consulting', desc: 'Enterprise AI consulting' },
  { url: 'https://aihrdf.com.my', name: 'AI HRDF', desc: 'HRD Corp claim guide' },
  { url: 'https://trainai.com.my', name: 'trainai', desc: 'Multi-week AI bootcamps' },
  { url: 'https://aiworkshop.com.my', name: 'aiworkshop', desc: 'One-day AI workshops' },
  { url: 'https://aiagents.com.my', name: 'AI Agents Malaysia', desc: 'Agentic AI deployment' },
  { url: 'https://aibot.com.my', name: 'AIBot', desc: 'AI website chatbot' },
  { url: 'https://aihub.com.my', name: 'AIHub Malaysia', desc: 'AI community hub' },
  { url: 'https://aiwiki.com.my', name: 'AIWiki Malaysia', desc: 'AI knowledge base' },
] as const;

export function sameAsUrls() { return PORTFOLIO.filter(p => p.url !== SITE.url).map(p => p.url); }
export function jsonLdString(data: object) { return JSON.stringify(data); }
export function organizationJsonLd() {
  return { '@context': 'https://schema.org', '@type': ['Organization', 'LocalBusiness'], name: SITE.legalName, alternateName: SITE.name, url: SITE.url, logo: `${SITE.url}${SITE.logo}`, email: SITE.email, address: { '@type': 'PostalAddress', addressLocality: SITE.city, addressRegion: SITE.region, addressCountry: SITE.country }, geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng }, sameAs: sameAsUrls() };
}
export function websiteJsonLd() {
  return { '@context': 'https://schema.org', '@type': 'WebSite', name: SITE.name, url: SITE.url, description: SITE.tagline };
}
export function faqJsonLd(items: FaqItem[]) {
  return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: items.map(item => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) };
}
