import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '~/components/Footer';

const defaultFooterLinks = [
  { title: 'Colophon', href: '#' },
  { title: 'Uses', href: '#' },
  { title: 'Github', href: '#' },
  { title: 'RSS', href: '#' },
];

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  tags: [],
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    links: defaultFooterLinks,
  },
};

export const WithoutLinks: Story = {
  args: {
    links: [],
  },
};
