import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://aihub.com.my'),
  title: {
    default: 'AIHub Malaysia — The AI Community Gathering',
    template: '%s · AIHub Malaysia',
  },
  description:
    'Malaysia\'s warmest AI community. Join events, workshops, and meetups with the people shaping the future of AI in Malaysia. Connect on Discord and Telegram.',
  keywords: [
    'AI community Malaysia',
    'AI events KL',
    'artificial intelligence meetup Malaysia',
    'AI workshop Kuala Lumpur',
    'tech community Malaysia',
    'AIHub Malaysia',
  ],
  authors: [{ name: 'AITG Sdn Bhd' }],
  creator: 'AITG Sdn Bhd',
  openGraph: {
    type: 'website',
    locale: 'en_MY',
    url: 'https://aihub.com.my',
    siteName: 'AIHub Malaysia',
    title: 'AIHub Malaysia — The AI Community Gathering',
    description:
      'Malaysia\'s warmest AI community. Events, meetups, workshops — and the people making it happen.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AIHub Malaysia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIHub Malaysia — The AI Community Gathering',
    description: 'Malaysia\'s warmest AI community. Join the gathering.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-MY">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://aihub.com.my/#organization",
                  "name": "AI Hub Malaysia",
                  "url": "https://aihub.com.my",
                  "logo": "https://aihub.com.my/logo.png",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Penang",
                    "addressCountry": "MY",
                  },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "email": "admin@aiteragrid.com",
                    "contactType": "customer service",
                  },
                  "sameAs": [
                    "https://t.me/aihubmy",
                    "https://discord.gg/CYg6sR93",
                  ],
                  "parentOrganization": {
                    "@type": "Organization",
                    "name": "AITG Sdn Bhd",
                    "url": "https://aiteragrid.com",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://aihub.com.my/#website",
                  "url": "https://aihub.com.my",
                  "name": "AI Hub Malaysia",
                  "description":
                    "Malaysia's premier AI community for builders, founders, and researchers. Join events, workshops, and connect with AI practitioners across Malaysia.",
                  "publisher": { "@id": "https://aihub.com.my/#organization" },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-cream-light">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
