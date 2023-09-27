import { cache } from 'react';
import type { PageObjectResponse } from '~/notion';
import { fetchPageBlocks, getToday, n2m, notion } from '~/notion';
import { Book } from '~/types/Book';

export const getAllBooksFromNotion = cache(async () => {
  const notionPostsDB = await notion.databases.query({
    database_id: process.env.NOTION_BOOKS_DATABASE_ID!,
    filter: {
      property: 'Status',
      status: {
        equals: 'Visible',
      },
    },
  });

  const allBooksPages = notionPostsDB.results;

  return allBooksPages.map(transformNotionPageIntoBookItem);
});

function transformNotionPageIntoBookItem(page: any): Book {
  return {
    author: page.properties.Author.rich_text[0].plain_text,
    id: page.id,
    img: page.properties.cover.files[0].file.url,
    rating: page.properties.Rating.number,
    title: page.properties.Name.title[0].plain_text,
    url: page.properties.URL.url,
  };
}
