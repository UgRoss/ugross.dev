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

declare module '@mdx-js/react' {
  import * as React from 'react';

  type ComponentType =
    | 'a'
    | 'blockquote'
    | 'code'
    | 'delete'
    | 'em'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'hr'
    | 'img'
    | 'inlineCode'
    | 'li'
    | 'ol'
    | 'p'
    | 'pre'
    | 'strong'
    | 'sup'
    | 'table'
    | 'td'
    | 'thematicBreak'
    | 'tr'
    | 'ul';
  export type Components = {
    [key in ComponentType]?: React.ComponentType<{ children: React.ReactNode }>;
  };
  export interface MDXProviderProps {
    children: React.ReactElement;
    components?: Components;
  }
  export class MDXProvider extends React.Component<MDXProviderProps> {}
}

declare namespace IGraphQL {
  // Frontmatter
  interface Frontmatter {
    date: string;
    pubDate: string;
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
