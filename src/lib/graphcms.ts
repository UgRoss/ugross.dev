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
  GetAllTilsWithCategoriesQuery,
  GetAllTilsQuery,
  GetTilBySlugQuery,
} from '~/types/graphql';
import { GetAuthorById } from '~/queries/authors.graphql';
import { GetAllTilsWithCategories, GetAllTils, GetTilBySlug } from '~/queries/tils.graphql';
import { siteConfig } from '~/configs/site.config';

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

export async function getProfileDetails(): Promise<GetAuthorByIdQuery['author']> {
  return getAuthorById(siteConfig.graphCMSAuthorID);
}

export async function getAllTils(): Promise<GetAllTilsQuery['tils']> {
  const data: GetAllTilsQuery = await graphcmsClient.request(GetAllTils);

  return data.tils;
}

export async function getTilCategories(): Promise<string[]> {
  const data: GetAllTilsWithCategoriesQuery = await graphcmsClient.request(
    GetAllTilsWithCategories
  );
  const categories: string[] = data.tils.flatMap((til) => til.categories);
  const uniqueCategories = new Set(categories);

  return Array.from(uniqueCategories).sort();
}

export async function getTilBySlug(slug: string): Promise<GetTilBySlugQuery['til']> {
  const data: GetTilBySlugQuery = await graphcmsClient.request(GetTilBySlug, { slug });

  return data.til;
}
