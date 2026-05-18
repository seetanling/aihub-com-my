export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: 'Events' | 'Resources' | 'Tips' | 'News' | 'Challenges' | 'Community';
  publishedAt: string; // ISO 8601
  authorName: string;
  tags: string[];
  telegramLink?: string;
}

export interface NewsStore {
  items: NewsItem[];
  updatedAt: string;
}
