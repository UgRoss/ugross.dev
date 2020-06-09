declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

declare module '*.scss' {
  const content: any;
  export default content;
}

declare module '*.css' {
  const content: any;
  export default content;
}

declare module 'netlify-cms-app';

declare module 'snarkdown' {
  interface Links {
    [index: string]: string;
  }

  export default function parse(md: string, prevLinks?: Links): string;
}

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
  }
  // AllMarkdownRemark
  interface AllMarkdownRemark {
    totalCount: number;
    edges: { node: Post }[];
  }

  interface PageContext {
    previous: Post;
    next: Post;
    slug: string;
  }
}
