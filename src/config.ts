import type { HeaderNavItem } from '~/components/Header/HeaderNavItem';

const currentYear = new Date().getFullYear();

export const INFO = {
  name: 'Rostyslav Ugryniuk',
  stack: [
    {
      description: 'Typed JavaScript',
      href: 'https://www.typescriptlang.org/',
      title: 'TypeScript',
    },
    { description: 'JavaScript UI Library', href: 'https://react.dev/', title: 'React' },
    { description: 'Framework for React apps', href: 'https://nextjs.org/', title: 'Next.js' },
    { description: 'Query language for APIs', href: 'https://graphql.org/', title: 'GraphQL' },
  ],
  title: 'Software Developer',
};

export const DEFAULT_META = {
  description: `${INFO.title} and CS student. Living and coding in Ukraine.`,
  template: `%s | ${INFO.name}`,
  title: `${INFO.name} | ${INFO.title}`,
};

const SOCIAL_LINKS = {
  github: 'https://github.com/UgRoss',
  linkedin: 'https://www.linkedin.com/in/rostyslav-ugryniuk-7b7466102/',
  twitter: 'https://twitter.com/ug_ross',
};

export const HEADER_ITEMS: HeaderNavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Articles' },
  { href: '/uses', label: 'Uses' },
  {
    items: [
      { href: '/til', label: 'Today I Learned' },
      { href: '/books', label: 'Books' },
    ],
    label: 'More',
  },
];

export const siteConfig = {
  avatarUrl: '/memoji-avatar.png',
  codeBlocks: {
    showCopyButton: true,
    showLineNumbers: true,
  },
  defaultDescription: `${INFO.title} and CS student. Living and coding in Ukraine.`,
  defaultTitle: `${INFO.name} | ${INFO.title}`,
  email: 'contact@ugross.dev',

  footer: {
    copyright: `© ${currentYear} ${INFO.name}`,
    links: [
      { href: '/uses', title: 'Uses' },
      { href: SOCIAL_LINKS.github, title: 'Github' },
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
    noItems: 'No TIL posts',
    title: 'Today I Learned',
  },
  uses: {
    description: `All of the gear and software I use daily as of ${currentYear}`,
    title: 'Uses',
  },
};
