import { GraphQLClient } from 'graphql-request';
import { GetPageBySlug } from '~/queries/pages.graphql';
import {
  GetAllPosts,
  GetAllPostsWithTags,
  GetPostBySlug,
  GetPostsByTag,
} from '~/queries/posts.graphql';
import {
  GetAllPostsQuery,
  GetPageBySlugQuery,
  GetPostBySlugQuery,
  GetPostsByTagQuery,
  GetAllPostsWithTagsQuery,
  GetAuthorByIdQuery,
} from '~/types/graphql';
import { GetAuthorById } from '~/queries/authors.graphql';

const graphcmsClient = new GraphQLClient(process.env.GRAPHCMS_PROJECT_API || '', {
  headers: {
    Authorization: `Bearer ${process.env.GRAPHCMS_PROD_AUTH_TOKEN}`,
  },
});

export async function getPostBySlug(slug: string): Promise<GetPostBySlugQuery['post'] | null> {
  const { post }: GetPostBySlugQuery = await graphcmsClient.request(GetPostBySlug, { slug });

  return post ?? null;
}

export async function getAllPosts(): Promise<GetAllPostsQuery['posts']> {
  const { posts }: GetAllPostsQuery = await graphcmsClient.request(GetAllPosts);

  return posts;
}

export async function getAllUniqueTags(): Promise<string[]> {
  const { posts }: GetAllPostsWithTagsQuery = await graphcmsClient.request(GetAllPostsWithTags);

  const allTags: string[] = posts.flatMap((post) => post?.tags ?? []);
  const uniqueTags = new Set(allTags);

  return Array.from(uniqueTags);
}

export async function getPostsByTag(tag: string): Promise<GetPostsByTagQuery['posts']> {
  const { posts }: GetPostsByTagQuery = await graphcmsClient.request(GetPostsByTag, {
    tag,
  });

  return posts;
}

export async function getPageBySlug(slug: string): Promise<GetPageBySlugQuery['page']> {
  const data: GetPageBySlugQuery = await graphcmsClient.request(GetPageBySlug, { slug });

  return data?.page;
}

export async function getAuthorById(id: string): Promise<GetAuthorByIdQuery['author']> {
  const data: GetAuthorByIdQuery = await graphcmsClient.request(GetAuthorById, { id });

  return data?.author;
}
