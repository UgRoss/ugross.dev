import notionClient from '../notionClient.mjs';

export async function getAllTILsFromNotion() {
  return notionClient.databases
    .query({
      database_id: process.env.NOTION_TIL_DATABASE_ID,
      filter: {
        property: 'Status',
        status: { equals: 'Published' },
      },
    })
    .then((res) => res.results.map((page) => transformNotionPageIntoTIL(page)));
}

function transformNotionPageIntoTIL(page) {
  const getTags = (tags) => tags.map((tag) => tag.name);

  return {
    date: page.properties.Date.date.start,
    description: page.properties.Description.rich_text[0].plain_text,
    id: page.id,
    slug: page.properties.Slug.rich_text[0].plain_text,
    tags: getTags(page.properties.Tags.multi_select),
    title: page.properties.Name.title[0].plain_text,
  };
}
