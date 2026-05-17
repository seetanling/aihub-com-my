# aihub.com.my — The Community Gathering

**Brand:** Warm, inviting, Eventbrite-meets-Discord community hub for Malaysia's AI scene.  
**Palette:** Terracotta `#E07856` · Deep Forest `#264E36` · Cream `#F4EDE4`  
**Typography:** Clash Display (headings) + Inter (body)  
**Part of:** AITG Sdn Bhd · 202601016521 (1678618-W) 17-domain portfolio

---

## Local Development

```bash
npm install
cp .env.example .env.local
# Fill in .env.local values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Type Check

```bash
npm run build
npm run type-check
npm run lint
```

## Docker (local test)

```bash
docker build -t aihub-com-my .
docker run -p 3000:3000 aihub-com-my
```

## Dokploy Deployment

1. Push to `main` — Dokploy auto-detects the Dockerfile and rebuilds.
2. In Dokploy: **Domains** → add `aihub.com.my` + `www.aihub.com.my`
3. HTTPS is auto-issued via Traefik + Let's Encrypt.
4. Set production env vars in Dokploy's **Environment** tab (never commit secrets).

## Project Structure

```
app/                  Next.js 14 App Router
  layout.tsx          Root layout — fonts, Navbar, Footer
  page.tsx            Home
  events/page.tsx     All events listing
  events/[slug]/      Single event with "Who's coming?" attendees
  community/          Discord + Telegram CTAs
  about/              Mission + team
components/           Domain-specific React components
lib/
  seo.ts              Per-page metadata helpers
  events.ts           Mock event data (swap for DB later)
public/               Logo, favicons, OG images
```

## Key Feature: "Who's Coming?" Attendees

On each event page, a real-time-style attendee avatar strip shows who has RSVP'd.  
Current implementation uses mock data in `lib/events.ts`.  
Future: swap `lib/events.ts` fetch for a Supabase realtime subscription — env vars are already wired (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`).

---

*© 2026 AITG Sdn Bhd · 202601016521 (1678618-W)*
