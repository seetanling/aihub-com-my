import { NextRequest, NextResponse } from 'next/server';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import type { NewsItem, NewsStore } from '@/lib/news';

const DATA_DIR = join(process.cwd(), 'data');
const NEWS_FILE = join(DATA_DIR, 'news.json');
const API_SECRET = process.env.NEWS_API_SECRET || 'aihubmy-news-secret-change-me';

function ensureDataDir() {
  if (!existsSync(DATA_DIR)) {
    mkdirSync(DATA_DIR, { recursive: true });
  }
}

function readStore(): NewsStore {
  ensureDataDir();
  if (!existsSync(NEWS_FILE)) {
    return { items: [], updatedAt: new Date().toISOString() };
  }
  return JSON.parse(readFileSync(NEWS_FILE, 'utf-8'));
}

function writeStore(items: NewsItem[]): void {
  ensureDataDir();
  const store: NewsStore = {
    items: items.sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    ),
    updatedAt: new Date().toISOString(),
  };
  writeFileSync(NEWS_FILE, JSON.stringify(store, null, 2));
}

// GET /api/news — public, returns all news
export async function GET() {
  const store = readStore();
  return NextResponse.json(store);
}

// POST /api/news — requires secret, adds a news item
export async function POST(request: NextRequest) {
  const secret = request.headers.get('x-api-secret');
  if (secret !== API_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: Partial<NewsItem>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  if (!body.title || !body.content) {
    return NextResponse.json(
      { error: 'title and content are required' },
      { status: 400 }
    );
  }

  const store = readStore();

  const newItem: NewsItem = {
    id: `news-${Date.now()}`,
    title: body.title,
    slug: body.slug || body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    excerpt: body.excerpt || body.content.substring(0, 150).replace(/\n/g, ' ') + '...',
    content: body.content,
    category: body.category || 'News',
    publishedAt: body.publishedAt || new Date().toISOString(),
    authorName: body.authorName || 'AI Hub Malaysia',
    tags: body.tags || [],
    telegramLink: body.telegramLink,
  };

  store.items.unshift(newItem);
  writeStore(store.items);

  return NextResponse.json({ success: true, item: newItem }, { status: 201 });
}
