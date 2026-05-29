import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';

async function getPost(slug: string) {
  try {
    const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const res = await fetch(`${base}/api/blog`, { next: { revalidate: 60 } });
    const data = await res.json();
    return (data.posts || []).find((p: any) => p.slug === slug) || null;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return { title: 'Not Found' };
  return {
    title: post.seoTitle || `${post.title} — AI Hub Malaysia Blog`,
    description: post.seoDescription || post.excerpt,
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.authorName],
    },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <Link href="/blog" className="text-[13px] text-text-muted hover:text-accent-bright transition-colors mb-6 inline-block">
        ← Back to Blog
      </Link>

      <article>
        <div className="mb-8">
          <span className="text-[11px] font-medium uppercase px-2.5 py-1 rounded-full text-accent-bright"
                style={{ backgroundColor: 'rgba(94,106,210,0.10)' }}>
            {post.category}
          </span>
          <h1 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-semibold text-text-primary mt-4 mb-3 tracking-[-0.02em]">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-[13px] text-text-muted">
            <span>{post.authorName}</span>
            <span>·</span>
            <time>{new Date(post.publishedAt).toLocaleDateString('en-MY', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
          </div>
        </div>

        <div className="prose-custom text-[15px] leading-relaxed text-text-tertiary space-y-4"
             dangerouslySetInnerHTML={{ __html: post.content.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br/>').replace(/^/, '<p>').replace(/$/, '</p>') }} />

        <div className="mt-8 pt-6 flex flex-wrap gap-2" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          {(post.tags || []).map((tag: string) => (
            <span key={tag} className="tag-chip">#{tag}</span>
          ))}
        </div>
      </article>
    </div>
  );
}
