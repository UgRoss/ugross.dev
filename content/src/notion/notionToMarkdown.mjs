import { NotionToMarkdown } from 'notion-to-md';
import notionClient from './notionClient.mjs';

const notionToMarkdown = new NotionToMarkdown({ notionClient });

notionToMarkdown.setCustomTransformer('callout', async (block) => {
  const { callout, has_children } = block;
  const emoji = callout?.icon?.emoji || '💡';

  if (has_children) {
    return false;
  }

  const mdContent = await notionToMarkdown.blockToMarkdown({
    ...callout,
    paragraph: {
      color: 'default',
      rich_text: callout?.rich_text,
    },
    type: 'paragraph',
  });

  /**
   * NOTE: do not change indentation/spacing as it might break
   * the whole markdown rendering 🤷
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

export default notionToMarkdown;
