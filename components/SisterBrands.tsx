'use client'
import { PORTFOLIO, SITE } from '@/lib/seo'

/**
 * SisterBrands — slim network bar, inherits site colours automatically.
 * color: inherit + opacity lets it blend on both dark and light footers.
 */
export default function SisterBrands() {
  const sisters = PORTFOLIO.filter(
    (p) => (p.url as string) !== (SITE.url as string)
  )

  return (
    <nav
      aria-label="AITG network"
      style={{
        borderTop: '1px solid rgba(128,128,128,0.08)',
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        columnGap: '0',
        rowGap: '4px',
        fontSize: '0.7rem',
      }}
    >
      <span style={{ color: 'inherit', opacity: 0.3, letterSpacing: '0.05em', paddingRight: '10px', whiteSpace: 'nowrap' }}>
        Part of the AITG Network
      </span>
      {sisters.map((site, i) => (
        <span key={site.url} style={{ display: 'flex', alignItems: 'center' }}>
          {i > 0 && (
            <span aria-hidden="true" style={{ color: 'inherit', opacity: 0.15, padding: '0 5px' }}>·</span>
          )}
          <a
            href={site.url}
            title={(site as any).desc ?? (site as any).tagline}
            rel="noopener"
            style={{ color: 'inherit', opacity: 0.42, textDecoration: 'none', whiteSpace: 'nowrap', transition: 'opacity 0.15s' }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.82')}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = '0.42')}
          >
            {site.name}
          </a>
        </span>
      ))}
    </nav>
  )
}
