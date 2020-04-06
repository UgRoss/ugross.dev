/** All the data for layout */
import jsImg from '~/images/tools/js.png';
import nodeImg from '~/images/tools/nodejs.png';
import prettierImg from '~/images/tools/prettier.png';
import reactImg from '~/images/tools/react.png';
import reduxImg from '~/images/tools/redux.png';
import sketchImg from '~/images/tools/sketch.png';
import typescriptImg from '~/images/tools/typescript.png';

import avatar from '~/images/avatar.jpg';

export const siteConfig = {
  name: 'Rostyslav Ugryniuk',
  jobTitle: 'Front-end Developer',
  shortBio: 'Front-end Developer and CS student. Living and coding in Ukraine.',
  email: 'contact@ugross.dev',
  avatar,
  // SEO
  siteUrl: 'https://ugross.space',
  twitter: '@ug_ross',
  siteLanguage: 'en',
  defaultDescription: 'Front-end Developer and CS student. Living and coding in Ukraine.',
  defaultTitle: 'Rostyslav Ugryniuk | Front-end Developer',
  // Navigation items
  navItems: [
    { href: '/', name: 'About', partiallyActive: false },
    { href: '/blog', name: 'Blog', partiallyActive: true },
    { href: '/projects', name: 'Projects', partiallyActive: false },
  ],
  // Footer text
  footerText: '',
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
