import { cache } from 'react';
import { n2m, notion, GetPageResponse } from '~/notion';
import { UsesPageContent } from '~/types/UsesPage';

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
        id: page.id,
        title:
          page.properties.title.type === 'title' ? page.properties?.title.title[0].plain_text : '',
        lastEditedTime: page.last_edited_time,
        createdTime: page.created_time,
        markdown: mdString.parent,
      };
    } else {
      throw new Error('Uses page does not have properties. Check your Notion page.');
    }
  } catch (err) {
    console.log('❌ Error fetching uses page content from Notion: ', err);

    return null;
  }
});
