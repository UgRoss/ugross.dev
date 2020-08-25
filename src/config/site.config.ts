/** All the data for layout */
import jsImg from '~/images/tools/js.png';
import nodeImg from '~/images/tools/nodejs.png';
import prettierImg from '~/images/tools/prettier.png';
import reactImg from '~/images/tools/react.png';
import reduxImg from '~/images/tools/redux.png';
import sketchImg from '~/images/tools/sketch.png';
import typescriptImg from '~/images/tools/typescript.png';

import avatar from '~/images/avatar.jpg';

const NAME = 'Rostyslav Ugryniuk';
const JOB_TITLE = 'Front-end Developer';
const CURRENT_YEAR = new Date().getFullYear();

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
  navItems: [
    { href: '/', name: 'About', partiallyActive: false },
    { href: '/blog', name: 'Blog', partiallyActive: true },
    { href: '/projects', name: 'Projects', partiallyActive: false },
    { href: '/contact', name: 'Contact', partiallyActive: false },
  ],
  // Footer text
  footerText: `© Copyright ${CURRENT_YEAR} ${NAME}`,
  socialLinks: [
    { name: 'facebook', url: 'https://www.facebook.com/ugr.ross' },
    { name: 'github', url: 'https://github.com/UgRoss' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/rostyslav-ugryniuk-7b7466102/' },
  ],
  // List of tools that I use
  mainToolsList: [
    { name: 'JavaScript', img: jsImg },
    { name: 'React', img: reactImg },
    { name: 'Redux', img: reduxImg },
    { name: 'TypeScript', img: typescriptImg },
    { name: 'NodeJS', img: nodeImg },
    { name: 'Prettier', img: prettierImg },
    { name: 'Sketch', img: sketchImg },
  ],
  secondaryToolsList: [
    'Emmet',
    'Jest',
    'Next.js',
    'GatsbyJS',
    'Git',
    'MobX',
    'GraphQL',
    'Pug',
    'SASS',
    'and more...',
  ],
};
