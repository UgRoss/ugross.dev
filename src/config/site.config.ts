/** All the data for layout */
import jsImg from '~/images/tools/js.png';
import nodeImg from '~/images/tools/nodejs.png';
import reactImg from '~/images/tools/react.png';
import reduxImg from '~/images/tools/redux.png';
import typescriptImg from '~/images/tools/typescript.png';
import graphQlImg from '~/images/tools/graphql.png';

import avatar from '~/images/avatar.jpg';

const NAME = 'Rostyslav Ugryniuk';
const JOB_TITLE = 'Front-end Developer';
const CURRENT_YEAR = new Date().getFullYear();

const NAV_ITEMS = [
  { href: '/', name: 'About', partiallyActive: false },
  { href: '/blog/', name: 'Blog', partiallyActive: true },
  { href: '/projects/', name: 'Projects', partiallyActive: false },
  { href: '/contact/', name: 'Contact', partiallyActive: false },
];

const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/UgRoss' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/rostyslav-ugryniuk-7b7466102/' },
];

const TOOLS_LIST = [
  { name: 'JavaScript', img: jsImg },
  { name: 'TypeScript', img: typescriptImg },
  { name: 'React', img: reactImg },
  { name: 'GraphQL', img: graphQlImg },
  { name: 'Redux', img: reduxImg },
  { name: 'NodeJS', img: nodeImg },
];

export const siteConfig = {
  name: NAME,
  jobTitle: JOB_TITLE,
  shortBio: `${JOB_TITLE} and CS student. Living and coding in Ukraine.`,
  email: 'contact@ugross.dev',
  avatar,
  // SEO
  siteUrl: 'https://ugross.space',
  twitter: '@ug_ross',
  siteLanguage: 'en',
  defaultDescription: `${JOB_TITLE} and CS student. Living and coding in Ukraine.`,
  defaultTitle: `${NAME} | ${JOB_TITLE}`,
  // Navigation items
  navItems: NAV_ITEMS,
  // Footer text
  footerText: `© Copyright ${CURRENT_YEAR} ${NAME}`,
  socialLinks: SOCIAL_LINKS,
  // List of tools that I use
  mainToolsList: TOOLS_LIST,
};
