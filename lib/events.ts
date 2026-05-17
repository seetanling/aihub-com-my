/* ─────────────────────────────────────────────────────────────
   lib/events.ts — Mock event data for aihub.com.my
   Replace the `getEvents` / `getEventBySlug` functions with
   Supabase / Prisma calls once the backend is ready.
   ───────────────────────────────────────────────────────────── */

export type Attendee = {
  id: string;
  name: string;
  avatarUrl: string;
  role: string;
};

export type Event = {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  date: string;          // ISO 8601
  time: string;          // display string e.g. "7:00 PM – 10:00 PM"
  venue: string;
  venueMapUrl?: string;
  category: 'Meetup' | 'Workshop' | 'Hackathon' | 'Panel' | 'Social';
  coverImage: string;
  description: string;
  speakerNames?: string[];
  tags: string[];
  attendees: Attendee[];
  totalRsvp: number;
  capacity: number;
  rsvpUrl: string;
  isFeatured?: boolean;
};

// ── Seeded attendee pool ─────────────────────────────────────
const SEED_ATTENDEES: Attendee[] = [
  { id: 'a1',  name: 'Aisha Rahman',     avatarUrl: 'https://api.dicebear.com/9.x/thumbs/svg?seed=aisha&backgroundColor=E07856',     role: 'ML Engineer'       },
  { id: 'a2',  name: 'Wei Liang',        avatarUrl: 'https://api.dicebear.com/9.x/thumbs/svg?seed=weiliang&backgroundColor=264E36',  role: 'Founder'           },
  { id: 'a3',  name: 'Priya Nair',       avatarUrl: 'https://api.dicebear.com/9.x/thumbs/svg?seed=priya&backgroundColor=C96840',     role: 'Product Manager'   },
  { id: 'a4',  name: 'Hafiz Zakaria',    avatarUrl: 'https://api.dicebear.com/9.x/thumbs/svg?seed=hafiz&backgroundColor=3D7152',     role: 'Data Scientist'    },
  { id: 'a5',  name: 'Mei Shan',         avatarUrl: 'https://api.dicebear.com/9.x/thumbs/svg?seed=meishan&backgroundColor=5C9571',   role: 'UX Researcher'     },
  { id: 'a6',  name: 'Rajan Kumar',      avatarUrl: 'https://api.dicebear.com/9.x/thumbs/svg?seed=rajan&backgroundColor=E07856',     role: 'Software Engineer' },
  { id: 'a7',  name: 'Farah Izzati',     avatarUrl: 'https://api.dicebear.com/9.x/thumbs/svg?seed=farah&backgroundColor=7E321F',     role: 'AI Researcher'     },
  { id: 'a8',  name: 'Daniel Tan',       avatarUrl: 'https://api.dicebear.com/9.x/thumbs/svg?seed=daniel&backgroundColor=264E36',    role: 'CTO'               },
  { id: 'a9',  name: 'Nurul Hidayah',    avatarUrl: 'https://api.dicebear.com/9.x/thumbs/svg?seed=nurul&backgroundColor=EAD9C6',     role: 'Lecturer'          },
  { id: 'a10', name: 'Chong Wei Kiat',   avatarUrl: 'https://api.dicebear.com/9.x/thumbs/svg?seed=chong&backgroundColor=C8DDD0',     role: 'DevRel Engineer'   },
  { id: 'a11', name: 'Siti Zulaikha',    avatarUrl: 'https://api.dicebear.com/9.x/thumbs/svg?seed=siti&backgroundColor=F4C4AC',      role: 'Investor'          },
  { id: 'a12', name: 'Aaron Lim',        avatarUrl: 'https://api.dicebear.com/9.x/thumbs/svg?seed=aaron&backgroundColor=264E36',     role: 'Startup Advisor'   },
  { id: 'a13', name: 'Kasthuri Balan',   avatarUrl: 'https://api.dicebear.com/9.x/thumbs/svg?seed=kash&backgroundColor=A8452A',      role: 'NLP Engineer'      },
  { id: 'a14', name: 'Tan Xin Yi',       avatarUrl: 'https://api.dicebear.com/9.x/thumbs/svg?seed=xinyi&backgroundColor=3D7152',     role: 'Computer Vision'   },
  { id: 'a15', name: 'Mohd Azri',        avatarUrl: 'https://api.dicebear.com/9.x/thumbs/svg?seed=azri&backgroundColor=E07856',      role: 'AI Ethics Lead'    },
];

// ── Events ───────────────────────────────────────────────────
export const EVENTS: Event[] = [
  {
    id:  'ev-001',
    slug: 'kl-ai-builders-june-2026',
    title: 'KL AI Builders Meetup — June',
    tagline: 'What are you building with AI this month?',
    date: '2026-06-18',
    time: '7:00 PM – 10:00 PM',
    venue: 'Common Ground TTDI, Kuala Lumpur',
    venueMapUrl: 'https://maps.google.com/?q=Common+Ground+TTDI+Kuala+Lumpur',
    category: 'Meetup',
    coverImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    description:
      'Our monthly casual gathering for people building with AI. Three 10-minute demos from community members, then open floor. No slides required — just ship and share. All levels welcome. Free drinks on arrival.',
    speakerNames: ['Wei Liang', 'Farah Izzati', 'Daniel Tan'],
    tags: ['Builders', 'Demos', 'Networking', 'Monthly'],
    attendees: SEED_ATTENDEES.slice(0, 12),
    totalRsvp: 87,
    capacity: 100,
    rsvpUrl: '#rsvp',
    isFeatured: true,
  },
  {
    id:  'ev-002',
    slug: 'llm-fine-tuning-workshop-july-2026',
    title: 'Hands-On: Fine-Tuning Your First LLM',
    tagline: 'From zero to a custom model — in one afternoon.',
    date: '2026-07-05',
    time: '1:00 PM – 6:00 PM',
    venue: 'myCoSpace Bangsar South, KL',
    category: 'Workshop',
    coverImage: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=800&q=80',
    description:
      'A deep-hands-on workshop where you fine-tune an open-source LLM on a Malaysian dataset. Bring your laptop. We provide GPU credits, starter notebooks, and a lot of coffee. Limited to 30 participants.',
    speakerNames: ['Kasthuri Balan', 'Aisha Rahman'],
    tags: ['LLM', 'Fine-tuning', 'Workshop', 'Technical'],
    attendees: SEED_ATTENDEES.slice(2, 11),
    totalRsvp: 28,
    capacity: 30,
    rsvpUrl: '#rsvp',
    isFeatured: true,
  },
  {
    id:  'ev-003',
    slug: 'ai-startup-panel-july-2026',
    title: 'Founder Roundtable: Building AI Startups in Malaysia',
    tagline: 'The realities nobody puts in the pitch deck.',
    date: '2026-07-15',
    time: '6:30 PM – 9:00 PM',
    venue: 'Pintu Space, Damansara Heights',
    category: 'Panel',
    coverImage: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
    description:
      'Four Malaysian AI founders in a room with no slides — just a moderator and your questions. Topics: fundraising, hiring AI talent locally, regulatory landscape, and what they wish they knew in year one.',
    speakerNames: ['Siti Zulaikha', 'Aaron Lim', 'Priya Nair'],
    tags: ['Startups', 'Founders', 'Panel', 'Fundraising'],
    attendees: SEED_ATTENDEES.slice(4, 14),
    totalRsvp: 64,
    capacity: 80,
    rsvpUrl: '#rsvp',
    isFeatured: false,
  },
  {
    id:  'ev-004',
    slug: 'ai-for-good-hackathon-aug-2026',
    title: 'AI for Good Malaysia — 24h Hackathon',
    tagline: 'Build something that actually helps people.',
    date: '2026-08-02',
    time: '9:00 AM Sat – 9:00 AM Sun',
    venue: 'Impact Hub KL, Bukit Tunku',
    category: 'Hackathon',
    coverImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
    description:
      'A 24-hour hackathon focused on AI solutions for Malaysian social challenges — healthcare access, vernacular language NLP, financial inclusion. Cash prizes, mentorship, and direct pitch to impact investors. Teams of 2–5.',
    tags: ['Hackathon', 'Social Impact', '24h', 'Prize'],
    attendees: SEED_ATTENDEES.slice(0, 15),
    totalRsvp: 120,
    capacity: 150,
    rsvpUrl: '#rsvp',
    isFeatured: true,
  },
  {
    id:  'ev-005',
    slug: 'ai-product-showcase-aug-2026',
    title: 'Community Demo Day — August',
    tagline: 'Six community members. Six 5-minute demos. One stage.',
    date: '2026-08-20',
    time: '7:00 PM – 9:30 PM',
    venue: 'StartupKL, Menara Shell',
    category: 'Social',
    coverImage: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80',
    description:
      'Our monthly showcase for community members to demo what they\'ve built. Six slots, five minutes each, open Q&A. Past topics: BM chatbots, CV screening tools, AI-assisted batik design, and a surprisingly good durian classifier.',
    speakerNames: ['Hafiz Zakaria', 'Mei Shan', 'Rajan Kumar'],
    tags: ['Demo Day', 'Showcase', 'Community', 'Monthly'],
    attendees: SEED_ATTENDEES.slice(1, 10),
    totalRsvp: 55,
    capacity: 60,
    rsvpUrl: '#rsvp',
    isFeatured: false,
  },
  {
    id:  'ev-006',
    slug: 'responsible-ai-talk-sept-2026',
    title: 'Responsible AI in the Malaysian Context',
    tagline: 'Ethics aren\'t a Western luxury. Let\'s talk about ours.',
    date: '2026-09-10',
    time: '6:00 PM – 8:30 PM',
    venue: 'Perdana Leadership Foundation, Putrajaya',
    category: 'Panel',
    coverImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
    description:
      'A frank conversation about AI ethics, bias, and governance in Southeast Asia. Local experts discuss Malaysia\'s draft AI framework, religious considerations in algorithm design, and how to build trust with Malay, Chinese, and Indian user bases.',
    speakerNames: ['Mohd Azri', 'Nurul Hidayah', 'Chong Wei Kiat'],
    tags: ['Ethics', 'Responsible AI', 'Policy', 'Governance'],
    attendees: SEED_ATTENDEES.slice(5, 13),
    totalRsvp: 48,
    capacity: 100,
    rsvpUrl: '#rsvp',
    isFeatured: false,
  },
];

// ── Data access helpers ───────────────────────────────────────

/** All events, sorted by date ascending */
export function getEvents(): Event[] {
  return [...EVENTS].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
}

/** Featured events only */
export function getFeaturedEvents(): Event[] {
  return getEvents().filter((e) => e.isFeatured);
}

/** Single event by slug */
export function getEventBySlug(slug: string): Event | undefined {
  return EVENTS.find((e) => e.slug === slug);
}

/** Events by category */
export function getEventsByCategory(
  category: Event['category']
): Event[] {
  return getEvents().filter((e) => e.category === category);
}

/** All unique categories */
export function getCategories(): Event['category'][] {
  return Array.from(new Set(EVENTS.map((e) => e.category)));
}

/** Format date for display, e.g. "Thu, 18 June 2026" */
export function formatEventDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString('en-MY', {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/** Days until event, returns negative if past */
export function daysUntil(isoDate: string): number {
  const now  = new Date();
  const then = new Date(isoDate);
  return Math.round((then.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
}
