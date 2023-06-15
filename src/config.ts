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
  avatarUrl: '/emoji-avatar.png',

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
