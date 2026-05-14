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
