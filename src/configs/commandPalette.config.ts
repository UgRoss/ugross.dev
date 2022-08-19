import { IconType } from 'react-icons/lib';
import { FaGithub, FaLinkedinIn, FaRss } from 'react-icons/fa';
import { GiMoon } from 'react-icons/gi';
import { CgArrowRight } from 'react-icons/cg';

type BaseCommandPaletteItem = {
  title: string;
  keywords: string[];
  icon: IconType;
};

type CommandPaletteLinkItem = BaseCommandPaletteItem & {
  href: string;
  type: 'link';
};

type CommandPaletteActionItem = BaseCommandPaletteItem & {
  action: string;
  type: 'action';
};

export type CommandPaletteItem = {
  category: string;
  items: (CommandPaletteLinkItem | CommandPaletteActionItem)[];
};

export const commandPaletteItemsArr: CommandPaletteItem[] = [
  {
    category: 'Pages',
    items: [
      {
        title: 'Home',
        href: '/',
        keywords: ['index', 'home', 'homepage', 'about', 'pages'],
        icon: CgArrowRight,
        type: 'link',
      },
      {
        title: 'Articles',
        href: '/blog',
        keywords: ['articles', 'blog', 'pages'],
        icon: CgArrowRight,
        type: 'link',
      },
      {
        title: 'Today I Learned',
        href: '/til',
        keywords: ['TIL', 'Today I Learned'],
        icon: CgArrowRight,
        type: 'link',
      },
      {
        title: 'Uses',
        href: '/uses',
        keywords: ['uses', 'software', 'gear', 'pages'],
        icon: CgArrowRight,
        type: 'link',
      },
    ],
  },
  {
    category: 'social',
    items: [
      {
        title: 'GitHub',
        href: 'https://github.com/UgRoss',
        keywords: ['social', 'github'],
        icon: FaGithub,
        type: 'link',
      },
      {
        title: 'LinkedIn',
        href: 'https://www.linkedin.com/in/rostyslav-ugryniuk-7b7466102/',
        keywords: ['social', 'linkedin'],
        icon: FaLinkedinIn,
        type: 'link',
      },
    ],
  },
  {
    category: 'theme',
    items: [
      {
        action: 'theme',
        title: 'Change theme',
        keywords: ['theme', 'mode', 'dark', 'light'],
        icon: GiMoon,
        type: 'action',
      },
    ],
  },
  {
    category: 'other',
    items: [
      {
        title: 'RSS',
        href: '/rss/feed.xml',
        keywords: ['rss', 'feed'],
        icon: FaRss,
        type: 'link',
      },
    ],
  },
];
