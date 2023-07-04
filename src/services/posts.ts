import { cache } from 'react';
import { notion, getToday, fetchPageBlocks, PageObjectResponse, n2m } from '~/notion';
import { Post, PostWithContent } from '~/types/Post';
import { siteConfig } from '~/config';

export const getAllPostsFromNotion = cache(async () => {
  const notionPostsDB = await notion.databases.query({
    database_id: process.env.NOTION_BLOG_DATABASE_ID!,
    // filter: {
    //   property: 'Status',
    //   select: {
    //     equals: 'Published',
    //   },
    // },
  });

  const allPostsPages = notionPostsDB.results;

  return allPostsPages.map((page) => transformNotionPageIntoBlogPost(page));
});

export const getRecentPostsFromNotion = cache(async (numberOfItems: number) => {
  return notion.databases
    .query({
      database_id: process.env.NOTION_BLOG_DATABASE_ID!,
      page_size: numberOfItems,
      sorts: [{ property: 'Date', direction: 'ascending' }],
    })
    .then((res) => res.results.map((page) => transformNotionPageIntoBlogPost(page)));
});

export const getPostBySlugFromNotion = cache(
  async (slug: string): Promise<PostWithContent | undefined> => {
    try {
      const notionPost = await notion.databases
        .query({
          database_id: process.env.NOTION_BLOG_DATABASE_ID!,
          filter: {
            property: 'Slug',
            rich_text: { equals: slug },
          },
        })
        .then((res) => res.results[0] as PageObjectResponse | undefined);

      if (!notionPost?.id) {
        throw new Error('Post not found');
      }

      const blocks = await fetchPageBlocks(notionPost.id);
      const mdblocks = await n2m.pageToMarkdown(notionPost.id);
      const mdString = n2m.toMarkdownString(mdblocks);

      return {
        ...transformNotionPageIntoBlogPost(notionPost),
        blocks,
        markdown: mdString.parent,
      };
    } catch (err) {
      return undefined;
    }
  }
);

function transformNotionPageIntoBlogPost(page: any): Post {
  const getTags = (tags: any[]) => {
    const allTags = tags.map((tag) => {
      return tag.name;
    });

    return allTags;
  };

  return {
    id: page.id,
    title: page.properties.Name.title[0].plain_text,
    img: page.cover?.external?.url || siteConfig.defaultArticleImage,
    tags: getTags(page.properties.Tags.multi_select),
    description: page.properties.Description.rich_text[0].plain_text,
    date: page.properties.Date.date.start,
    lastUpdateDate: page.properties.Updated?.date
      ? getToday(page.properties.Updated.date.start)
      : undefined,
    slug: page.properties.Slug.rich_text[0].plain_text,
  };
}
