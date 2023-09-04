const currentYear = new Date().getFullYear();

export const INFO = {
  name: 'Rostyslav Ugryniuk',
  title: 'Software Developer',
};

export const DEFAULT_META = {
  description: `${INFO.title} and CS student. Living and coding in Ukraine.`,
  title: `${INFO.name} | ${INFO.title}`,
};

const SOCIAL_LINKS = {
  github: 'https://github.com/UgRoss',
  linkedin: 'https://www.linkedin.com/in/rostyslav-ugryniuk-7b7466102/',
  twitter: 'https://twitter.com/ug_ross',
};

export const siteConfig = {
  avatarUrl: '/memoji-avatar.png',
  codeBlocks: {
    showCopyButton: true,
    showLineNumbers: true,
  },
  defaultArticleImage: '/default-article-image.jpg',
  defaultDescription: `${INFO.title} and CS student. Living and coding in Ukraine.`,
  defaultTitle: `${INFO.name} | ${INFO.title}`,
  email: 'contact@ugross.dev',

  footer: {
    copyright: `© ${currentYear} ${INFO.name}`,
    links: [
      { href: '/colophon', title: 'Colophon' },
      { href: '/uses', title: 'Uses' },
      { href: SOCIAL_LINKS.github, title: 'Github' },
      { href: '/rss.xml', title: 'RSS' },
    ],
  },
  footerText: `© Copyright ${currentYear} ${INFO.title}`,
  github: SOCIAL_LINKS.github,
  jobTitle: INFO.title,
  language: 'en',
  name: INFO.name,
  rss: '/rss.xml',

  shortBio: `${INFO.title} and CS student. Living and coding in Ukraine.`,
  twitter: '@ug_ross',
  url: 'https://ugross.dev',
};

export const messages = {
  til: {
    description: `A collection of concise write-ups on small things I learn day to day across a variety of
    languages and technologies. These are things that don't really warrant a full blog post.`,
    emptySearch: 'No results found',
    title: 'Today I Learned',
  },
  uses: {
    description: `All of the gear and software I use daily as of ${currentYear}`,
    title: 'Uses',
  },
};
