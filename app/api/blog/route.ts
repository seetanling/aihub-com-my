import { NextRequest, NextResponse } from 'next/server';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import type { BlogPost, BlogStore } from '@/lib/blog';

const DATA_DIR = join(process.cwd(), 'data');
const BLOG_FILE = join(DATA_DIR, 'blog.json');
const API_SECRET = process.env.NEWS_API_SECRET || 'aihubmy-news-secret-change-me';

function ensureDir() {
  if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });
}

function readStore(): BlogStore {
  ensureDir();
  if (!existsSync(BLOG_FILE)) return { posts: [], updatedAt: new Date().toISOString() };
  return JSON.parse(readFileSync(BLOG_FILE, 'utf-8'));
}

function writeStore(posts: BlogPost[]): void {
  ensureDir();
  const store: BlogStore = {
    posts: posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()),
    updatedAt: new Date().toISOString(),
  };
  writeFileSync(BLOG_FILE, JSON.stringify(store, null, 2));
}

// GET /api/blog — public
export async function GET() {
  const store = readStore();
  return NextResponse.json(store);
}

// POST /api/blog — requires secret
export async function POST(request: NextRequest) {
  const secret = request.headers.get('x-api-secret');
  if (secret !== API_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  let body: Partial<BlogPost>;
  try { body = await request.json(); } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }
  if (!body.title || !body.content) {
    return NextResponse.json({ error: 'title and content required' }, { status: 400 });
  }
  const store = readStore();
  const post: BlogPost = {
    id: `blog-${Date.now()}`,
    slug: body.slug || body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    title: body.title,
    excerpt: body.excerpt || body.content.substring(0, 200).replace(/\n/g, ' ') + '...',
    content: body.content,
    coverImage: body.coverImage,
    authorName: body.authorName || 'AI Hub Malaysia',
    category: body.category || 'AI',
    tags: body.tags || [],
    publishedAt: body.publishedAt || new Date().toISOString(),
    seoTitle: body.seoTitle,
    seoDescription: body.seoDescription,
  };
  store.posts.unshift(post);
  writeStore(store.posts);
  return NextResponse.json({ success: true, post }, { status: 201 });
}
