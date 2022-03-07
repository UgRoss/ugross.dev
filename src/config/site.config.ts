import avatar from '~/images/avatar.webp';

const NAME = 'Rostyslav Ugryniuk';
const JOB_TITLE = 'Front-end Developer';
const CURRENT_YEAR = new Date().getFullYear();
const IS_DEV = process.env.NODE_ENV === 'development';

const NAV_ITEMS = [
  { url: '/', name: 'About', partiallyActive: false },
  { url: '/blog/', name: 'Articles', partiallyActive: true },
  { url: '/uses/', name: 'Uses', partiallyActive: false },
];

const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/UgRoss' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/rostyslav-ugryniuk-7b7466102/' },
];

export const siteConfig = {
  name: NAME,
  jobTitle: JOB_TITLE,
  shortBio: `${JOB_TITLE} and CS student. Living and coding in Ukraine.`,
  email: 'contact@ugross.dev',
  avatar,
  // SEO
  siteUrl: IS_DEV ? 'http://localhost:8000' : 'https://ugross.dev',
  twitter: '@ug_ross',
  github: 'https://github.com/UgRoss',
  rss: '/rss.xml',
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
