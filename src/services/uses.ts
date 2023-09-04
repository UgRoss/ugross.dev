import { cache } from 'react';
import type { GetPageResponse } from '~/notion';
import type { UsesPageContent } from '~/types/UsesPage';
import { n2m, notion } from '~/notion';

export const getUsesPageContentFromNotion = cache(async (): Promise<UsesPageContent | null> => {
  try {
    const usesPageId = process.env.NOTION_USES_PAGE_ID!;

    const page: GetPageResponse = await notion.pages.retrieve({
      page_id: usesPageId,
    });

    if ('properties' in page) {
      const mdBlocks = await n2m.pageToMarkdown(usesPageId);
      const mdString = n2m.toMarkdownString(mdBlocks);

      return {
        createdTime: page.created_time,
        id: page.id,
        lastEditedTime: page.last_edited_time,
        markdown: mdString.parent,
        title:
          page.properties.title.type === 'title' ? page.properties?.title.title[0].plain_text : '',
      };
    } else {
      throw new Error('Uses page does not have properties. Check your Notion page.');
    }
  } catch (err) {
    console.log('❌ Error fetching uses page content from Notion: ', err);

    return null;
  }
});
