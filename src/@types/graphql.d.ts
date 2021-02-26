declare namespace IGraphQL {
  // Frontmatter
  interface Frontmatter {
    date: string;
    pubDate?: string;
    title: string;
    spoiler?: string;
  }
  // POST
  interface Post {
    id: number;
    excerpt: string;
    html: string;
    frontmatter: Frontmatter;
    fields: {
      slug: string;
    };
    timeToRead: number;
    body: string;
  }
  // AllMarkdownRemark
  interface AllMarkdownRemark {
    totalCount: number;
    edges: { node: Post }[];
  }
  interface AllMdx {
    totalCount: number;
    edges: { node: Post }[];
  }

  interface PageContext {
    previous: Post;
    next: Post;
    slug: string;
  }
}
