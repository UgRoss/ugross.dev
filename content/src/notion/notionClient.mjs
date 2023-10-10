import { Client } from '@notionhq/client';

const notionClient = new Client({
  auth: process.env.NOTION_TOKEN,
});

export default notionClient;
