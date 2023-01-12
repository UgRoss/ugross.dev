import avatar from '~/images/avatar.webp';

const NAME = 'Marc Swan';
const JOB_TITLE = 'Salesforce Consultant';
const CURRENT_YEAR = new Date().getFullYear();
const IS_DEV = process.env.NODE_ENV === 'development';

const NAV_ITEMS = [
  { url: '/', name: 'About', partiallyActive: false },
  { url: '/blog/', name: 'Blog', partiallyActive: true },
  { url: '/uses/', name: 'Uses', partiallyActive: false },
];

const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/marceswan' },
  
];

export const siteConfig = {
  name: NAME,
  jobTitle: JOB_TITLE,
  shortBio: `${JOB_TITLE} and Wedding Videographer. Living and working in New Mexico.`,
  email: 'marc@marccinema.com',
  avatar,
  // SEO
  siteUrl: IS_DEV ? 'http://localhost:8000' : 'https://ugross.dev',
  twitter: '@marc_cinema',
  github: 'https://github.com/marceswan',
  rss: '/rss.xml',
  siteLanguage: 'en',
  defaultDescription: `${JOB_TITLE} and Wedding Videographer. Living and working in New Mexico.`,
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
