export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;       // Markdown
  coverImage?: string;
  authorName: string;
  category: string;
  tags: string[];
  publishedAt: string;
  seoTitle?: string;
  seoDescription?: string;
};

export type BlogStore = {
  posts: BlogPost[];
  updatedAt: string;
};
