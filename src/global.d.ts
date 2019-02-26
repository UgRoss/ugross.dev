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
// tslint:disable: interface-name no-namespace
declare namespace IGraphQL {
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
    edges: Array<{ node: Post }>;
  }
}
// tslint:enable: interface-name no-namespace

declare module 'react-protected-mailto';
