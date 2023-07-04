export const INFO = {
  name: 'Rostyslav Ugryniuk',
  title: 'Software Developer',
};

export const DEFAULT_META = {
  title: `${INFO.name} | ${INFO.title}`,
  description: `${INFO.title} and CS student. Living and coding in Ukraine.`,
};

const SOCIAL_LINKS = {
  github: 'https://github.com/UgRoss',
  linkedin: 'https://www.linkedin.com/in/rostyslav-ugryniuk-7b7466102/',
  twitter: 'https://twitter.com/ug_ross',
};

export const siteConfig = {
  name: INFO.name,
  jobTitle: INFO.title,
  shortBio: `${INFO.title} and CS student. Living and coding in Ukraine.`,
  email: 'contact@ugross.dev',
  avatarUrl: '/memoji-avatar.png',
  defaultArticleImage: '/default-article-image.jpg',

  url: 'https://ugross.dev',
  twitter: '@ug_ross',
  github: SOCIAL_LINKS.github,
  rss: '/rss.xml',
  language: 'en',
  defaultDescription: `${INFO.title} and CS student. Living and coding in Ukraine.`,
  defaultTitle: `${INFO.name} | ${INFO.title}`,

  footer: {
    copyright: `© ${new Date().getFullYear()} ${INFO.title}`,
    links: [
      { title: 'Colophon', href: '/colophon' },
      { title: 'Uses', href: '/uses' },
      { title: 'Github', href: SOCIAL_LINKS.github },
      { title: 'RSS', href: '/rss.xml' },
    ],
  },
  footerText: `© Copyright ${new Date().getFullYear()} ${INFO.title}`,
  codeBlocks: {
    showLineNumbers: true,
    showCopyButton: true,
  },
};

export const messages = {
  til: {
    title: 'Today I Learned',
    description: `A collection of concise write-ups on small things I learn day to day across a variety of
    languages and technologies. These are things that don't really warrant a full blog post.`,
    emptySearch: 'No results found',
  },
};
