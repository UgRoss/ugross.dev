const NAME = 'Rostyslav Ugryniuk';
const JOB_TITLE = 'Front-end Developer';
const CURRENT_YEAR = new Date().getFullYear();

export const NAV_ITEMS = [
  { url: '/', name: 'About', activePaths: ['/'] },
  { url: '/blog', name: 'Articles', activePaths: ['/blog', '/blog/[slug]'] },
  { url: '/uses', name: 'Uses', activePaths: ['/uses'] },
];

const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/UgRoss' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/rostyslav-ugryniuk-7b7466102/' },
];

export const siteConfig = {
  graphCMSAuthorID: 'cl3ai8i5iayo70bui31uk0u32',
  name: NAME,
  jobTitle: JOB_TITLE,
  shortBio: `Front-end developer and CS student. Living and coding in Ukraine.`,
  avatarUrl: '/images/me.webp',
  // SEO
  siteUrl: 'https://ugross.dev',
  twitter: '@ug_ross',
  github: 'https://github.com/UgRoss',
  rss: '/rss/feed.xml',
  siteLanguage: 'en',
  defaultDescription: `${JOB_TITLE} and CS student. Living and coding in Ukraine.`,
  defaultTitle: `${NAME} | ${JOB_TITLE}`,
  // Navigation items
  navItems: NAV_ITEMS,
  // Footer text
  footerText: `© Copyright ${CURRENT_YEAR} ${NAME}`,
  socialLinks: SOCIAL_LINKS,
  codeBlocks: {
    showLineNumbers: true,
    showCopyButton: true,
  },
};
