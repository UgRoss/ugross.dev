import { makeSource, defineDatabase } from 'contentlayer-source-notion';
import * as notion from '@notionhq/client';

console.log("process.env.NOTION_TOKEN", process.env.NOTION_TOKEN)
const client = new notion.Client({ auth: process.env.NOTION_TOKEN });

export const TIL = defineDatabase(() => ({
  name: 'TIL',
  databaseId: 'e06ecf3f4f2b419796dea4efbdb8a5a8',
  query: {
    filter: {
      property: 'Status',
      status: {
        equals: 'Published',
      },
    },
  },
  properties: {
    date: {
      name: 'Publish Date',
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/posts/${post._id}`,
    },
  },
}));

export default makeSource({
  client,
  databaseTypes: [],
});
