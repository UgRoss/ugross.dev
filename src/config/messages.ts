import { siteConfig } from './site';

export const messagesConfig = {
  til: {
    description: `A collection of concise write-ups on small things I learn day to day across a variety of
    languages and technologies. These are things that don't really warrant a full blog post.`,
    emptySearch: 'No results found',
    noItems: 'No TIL posts',
    title: 'Today I Learned',
  },
  uses: {
    description: `All of the gear and software I use daily as of ${siteConfig.currentYear}`,
    title: 'Uses',
  },
  copyright: `© Copyright ${siteConfig.currentYear} ${siteConfig.title}`,
};
