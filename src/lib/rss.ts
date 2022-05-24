import fs from 'fs';
import { Feed } from 'feed';
import { getAllPosts, getAuthorById } from '~/lib/graphcms';
import { siteConfig } from '~/configs/site.config';

export const generateRssFeed = async () => {
  const posts = await getAllPosts();
  const author = await getAuthorById('cl3ai8i5iayo70bui31uk0u32');
  const { siteUrl } = siteConfig;
  const date = new Date();

  const postAuthor = {
    name: author?.name,
    email: author?.email,
    link: author?.twitterUrl,
  };

  const feed = new Feed({
    title: 'Rostyslav Ugryniuk - Blog',
    description: '',
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/logo.svg`,
    favicon: `${siteUrl}/favicon.png`,
    copyright: `All rights reserved ${date.getFullYear()}, Rostyslav Ugryniuk`,
    updated: date,
    generator: 'Feed for Node.js',
    feedLinks: {
      rss2: `${siteUrl}/rss/feed.xml`,
      json: `${siteUrl}/rss/feed.json`,
      atom: `${siteUrl}/rss/atom.xml`,
    },
    author: postAuthor,
  });
  feed.addCategory('Technology');

  posts.forEach((post) => {
    const url = `${siteUrl}/blog/${post.slug}`;
    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.excerpt,
      content: post.excerpt,
      author: [postAuthor],
      contributor: [postAuthor],
      date: new Date(post.date),
    });
  });

  fs.mkdirSync('./public/rss', { recursive: true });
  fs.writeFileSync('./public/rss/feed.xml', feed.rss2());
  fs.writeFileSync('./public/rss/atom.xml', feed.atom1());
  fs.writeFileSync('./public/rss/feed.json', feed.json1());
};
