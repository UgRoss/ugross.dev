import React from 'react';
import { Client } from '@notionhq/client';
import { BlockObjectResponse, PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { NotionToMarkdown } from 'notion-to-md';
import 'server-only';

export type {
  BlockObjectResponse,
  GetPageResponse,
  PageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const n2m = new NotionToMarkdown({ notionClient: notion });

n2m.setCustomTransformer('callout', async (block) => {
  const { callout, has_children } = block as any;
  const emoji = callout?.icon?.emoji || '💡';

  if (has_children) {
    return false;
  }

  const mdContent = await n2m.blockToMarkdown({
    ...callout,
    paragraph: {
      color: 'default',
      rich_text: callout?.rich_text,
    },
    type: 'paragraph',
  });

  /**
   * NOTE: do not change indentation/spacing as it might break
   * the whole markdown rendering 🤷‍♂️
   */
  return `<div className="callout">
  <div className="callout__icon">
      ${emoji}
    </div>
  <div className="callout__content">

${mdContent}

  </div>
</div>`;
});

function getTextValue(property: any): string | undefined {
  return property?.rich_text?.[0]?.plain_text ?? undefined;
}

function getDateValue(property: any): string | undefined {
  return property?.date?.start ?? undefined;
}

function getMultiSelectValues(property: any): string[] | undefined {
  return property.multi_select.map((item: any) => item.name) ?? undefined;
}

function getTitleValue(property: any): string | undefined {
  return property?.title?.map((item: any) => item.plain_text).join('') ?? undefined;
}

export const fetchPageBySlug = React.cache((slug: string) => {
  return notion.databases
    .query({
      database_id: process.env.NOTION_TIL_DATABASE_ID!,
      filter: {
        property: 'Slug',
        rich_text: {
          equals: slug,
        },
      },
    })
    .then((res) => res.results[0] as PageObjectResponse | undefined);
});

export const fetchPageBlocks = React.cache((pageId: string) => {
  return notion.blocks.children
    .list({ block_id: pageId })
    .then((res) => res.results as BlockObjectResponse[]);
});

export const notionBlocksToHTML = (blocks: BlockObjectResponse[]) => {};

export function getToday(datestring: any) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  let date = new Date();

  if (datestring) {
    date = new Date(datestring);
  }

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  let today = `${month} ${day}, ${year}`;

  return today;
}
