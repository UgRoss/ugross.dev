import { MetadataRoute } from 'next';
import { siteConfig } from '~/config';
import { pages, posts, tilPosts } from '~/services/contentfulContent';

const URL = siteConfig.url;
const allPostsSiteMap = posts.getAll().map((post) => ({
  lastModified: post.lastUpdateDate ?? new Date(),
  url: `${URL}/blog/${post.slug}`,
}));
const allTilPostsSiteMap = tilPosts.getAll().map((post) => ({
  lastModified: post.lastUpdateDate ?? new Date(),
  url: `${URL}/til/${post.slug}`,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      changeFrequency: 'monthly',
      lastModified: new Date(),
      url: URL,
    },
    {
      changeFrequency: 'monthly',
      lastModified: new Date(),
      url: `${URL}/blog`,
    },
    {
      changeFrequency: 'weekly',
      lastModified: new Date(),
      url: `${URL}/til`,
    },
    {
      changeFrequency: 'monthly',
      lastModified: new Date(),
      url: `${URL}/books`,
    },
    {
      changeFrequency: 'monthly',
      lastModified: pages.getBySlug('uses')?.date ?? new Date(),
      url: `${URL}/uses`,
    },
    ...allPostsSiteMap,
    ...allTilPostsSiteMap,
  ];
}
