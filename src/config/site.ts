const socialLinks = {
  github: 'https://github.com/UgRoss',
  linkedin: 'https://www.linkedin.com/in/rostyslav-ugryniuk-7b7466102/',
  twitter: 'https://twitter.com/ug_ross',
};

export const siteConfig = {
  url: 'https://ugross.dev',
  language: 'en',
  name: 'Rostyslav Ugryniuk',
  title: 'Software Developer',
  avatarUrl: '/memoji-avatar.png',
  currentYear: new Date().getFullYear(),
  shortBio: `Software Developer and CS student. Living and coding in Ukraine.`,
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
  socialLinks,
  twitter: '@ug_ross',
  codeBlocks: {
    showCopyButton: true,
    showLineNumbers: true,
  },
  footer: {
    links: [
      { href: '/uses', title: 'Uses' },
      { href: socialLinks.github, title: 'Github' },
    ],
  },
  header: {
    items: [
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
    ],
  },
};
