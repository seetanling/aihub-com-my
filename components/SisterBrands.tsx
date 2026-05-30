import { PORTFOLIO, SITE } from '@/lib/seo';

/**
 * SisterBrands — renders the other AITG Sdn Bhd portfolio sites.
 * Excluded: the current site (aihub.com.my).
 * Styled: purple #A78BFA on dark #0B0B0F.
 * Semantic: footer-level landmark with aria-label for screen readers.
 */
export default function SisterBrands() {
  const siblings = PORTFOLIO.filter((p) => (p.url as string) !== (SITE.url as string));

  return (
    <aside
      aria-label="Related AITG sites"
      style={{ backgroundColor: '#0B0B0F', borderTop: '1px solid rgba(167,139,250,0.15)' }}
      className="w-full py-8 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-4 text-center"
          style={{ color: '#A78BFA', opacity: 0.7 }}
        >
          Also by AITG Sdn Bhd
        </p>
        <ul
          className="flex flex-wrap justify-center gap-x-6 gap-y-3"
          role="list"
        >
          {siblings.map((site) => (
            <li key={site.url}>
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                title={site.desc}
                className="text-sm transition-opacity hover:opacity-100"
                style={{ color: '#A78BFA', opacity: 0.65 }}
              >
                {site.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
