'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import type { BlogPost } from '@/lib/blog';

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blog')
      .then((r) => r.json())
      .then((data) => { setPosts(data.posts || []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <div className="mb-10">
        <span className="section-label mb-4 inline-block">AI Hub Blog</span>
        <h1 className="text-[clamp(2rem,4vw,3rem)] font-semibold text-text-primary mb-3 tracking-[-0.02em]">
          AI in Malaysia
        </h1>
        <p className="text-[15px] text-text-tertiary max-w-xl">
          Guides, insights, and resources for building with AI in Malaysia — for beginners and practitioners alike.
        </p>
      </div>

      {loading && (
        <div className="text-center py-20">
          <div className="w-8 h-8 mx-auto mb-4 rounded-full border-2 border-accent-bright border-t-transparent animate-spin" />
        </div>
      )}

      {!loading && posts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-4xl mb-4">📝</p>
          <p className="font-semibold text-xl text-text-primary mb-2">Blog coming soon</p>
          <p className="text-[13px] text-text-tertiary">We're working on in-depth guides for AI builders in Malaysia.</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="card p-6 flex flex-col gap-3 group"
          >
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-medium uppercase px-2 py-0.5 rounded-full text-accent-bright"
                    style={{ backgroundColor: 'rgba(94,106,210,0.10)' }}>
                {post.category}
              </span>
              <time className="text-[12px] text-text-muted">
                {new Date(post.publishedAt).toLocaleDateString('en-MY', { day: 'numeric', month: 'short', year: 'numeric' })}
              </time>
            </div>
            <h2 className="font-semibold text-text-primary text-[17px] tracking-[-0.01em] group-hover:text-accent-bright transition-colors">
              {post.title}
            </h2>
            <p className="text-[13px] text-text-tertiary leading-relaxed">{post.excerpt}</p>
            <span className="text-[12px] font-medium text-accent-bright mt-auto group-hover:underline">
              Read more →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
