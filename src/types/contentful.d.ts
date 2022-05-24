interface ContentfulImage {
  title?: string;
  description?: string;
  width: number;
  height: number;
  url: string;
}

export interface ContentfulAuthor {
  name: string;
  url: string;
  picture: ContentfulImage;
}

export interface ContentfulBlogPost {
  title: string;
  slug: string;
  coverImage?: ContentfulImage;
  author: ContentfulAuthor;
  publishDate: string;
  lastUpdate: string;
  tags?: string[];
}

export interface ContentfulPage {
  title: string;
  subtitle?: string;
  primaryImage?: ContentfulImage;
  content: string;
  id: string;
}
