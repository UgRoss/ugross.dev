import { cache } from 'react';
import type { PageObjectResponse } from '~/notion';
import type { TIL, TILWithContent } from '~/types/TIL';
import { fetchPageBlocks, getToday, n2m, notion } from '~/notion';

export const getAllTILsFromNotion = cache(async () => {
  return notion.databases
    .query({
      database_id: process.env.NOTION_TIL_DATABASE_ID!,
      // filter: {
      //   property: 'Status',
      //   select: {
      //     equals: 'Published',
      //   },
      // },
    })
    .then((res) => res.results.map((page) => transformNotionPageIntoTIL(page)));
});

export const getRecentTILsFromNotion = cache(async (numberOfItems: number) => {
  return notion.databases
    .query({
      database_id: process.env.NOTION_TIL_DATABASE_ID!,
      page_size: numberOfItems,
      sorts: [{ direction: 'ascending', property: 'Date' }],
    })
    .then((res) => res.results.map((page) => transformNotionPageIntoTIL(page)));
});

export const getTILBySlugFromNotion = cache(
  async (slug: string): Promise<TILWithContent | undefined> => {
    try {
      const notionPost = await notion.databases
        .query({
          database_id: process.env.NOTION_TIL_DATABASE_ID!,
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
        ...transformNotionPageIntoTIL(notionPost),
        blocks,
        markdown: mdString.parent,
      };
    } catch (err) {
      return undefined;
    }
  }
);

function transformNotionPageIntoTIL(page: any): TIL {
  const getTags = (tags: any[]) => {
    const allTags = tags.map((tag) => {
      return tag.name;
    });

    return allTags;
  };

  return {
    date: getToday(page.properties.Date.last_edited_time),
    description: page.properties.Description.rich_text[0].plain_text,
    id: page.id,
    slug: page.properties.Slug.rich_text[0].plain_text,
    tags: getTags(page.properties.Tags.multi_select),
    title: page.properties.Name.title[0].plain_text,
  };
}