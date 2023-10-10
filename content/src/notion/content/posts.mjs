import notionClient from '../notionClient.mjs';

export async function getAllPostsFromNotion() {
  const notionPostsDB = await notionClient.databases.query({
    database_id: process.env.NOTION_BLOG_DATABASE_ID,
    filter: {
      property: 'Status',
      status: { equals: 'Published' },
    },
  });

  const allPostsPages = notionPostsDB.results;

  // console.log('allPostsPages', allPostsPages);
  return allPostsPages.map(transformNotionPageIntoBlogPost);
}

function transformNotionPageIntoBlogPost(page) {
  const getTags = (tags) =>
    tags.map((tag) => {
      return tag.name;
    });

  return {
    date: page.properties.Date.date.start,
    description: page.properties.Description.rich_text[0].plain_text,
    id: page.id,
    img: page.cover?.external?.url,
    lastUpdateDate: page.properties.Updated?.date?.start,
    slug: page.properties.Slug.rich_text[0].plain_text,
    tags: getTags(page.properties.Tags.multi_select),
    title: page.properties.Name.title[0].plain_text,
  };
}
