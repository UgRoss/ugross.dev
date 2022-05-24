
declare module '*/queries/authors.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const AuthorDetails: DocumentNode;
export const GetAuthorById: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/queries/pages.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const PageSeo: DocumentNode;
export const Page: DocumentNode;
export const GetPageBySlug: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/queries/posts.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const PostSeo: DocumentNode;
export const Post: DocumentNode;
export const GetAllPosts: DocumentNode;
export const GetAllPostsWithTags: DocumentNode;
export const GetPostBySlug: DocumentNode;
export const GetPostsByTag: DocumentNode;

  export default defaultDocument;
}
    