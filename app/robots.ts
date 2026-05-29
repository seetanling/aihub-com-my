import type { MetadataRoute } from 'next';

const siteUrl = 'https://aihub.com.my';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // General crawlers — full access
      { userAgent: '*', allow: '/' },

      // LLM / AI crawlers — full access (AEO: allow indexing for AI engines)
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'Claude-Web', allow: '/' },
      { userAgent: 'anthropic-ai', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Perplexity-User', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
      { userAgent: 'Bytespider', allow: '/' },
      { userAgent: 'Meta-ExternalAgent', allow: '/' },
      { userAgent: 'FacebookBot', allow: '/' },
      { userAgent: 'cohere-ai', allow: '/' },
      { userAgent: 'MistralAI-User', allow: '/' },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
