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

// TODO: maybe replace with apollo client:codegen or graphql-code-generator
declare namespace IGraphQL {
  /* eslint-disable @typescript-eslint/interface-name-prefix */
  // Frontmatter
  interface Frontmatter {
    date: string;
    pubDate?: string;
    title: string;
    // tags: string[];
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
  /* eslint-enable @typescript-eslint/interface-name-prefix */
}

declare module 'react-protected-mailto';
