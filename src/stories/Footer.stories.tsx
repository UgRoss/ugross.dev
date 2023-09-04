import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '~/components/Footer';

const defaultFooterLinks = [
  { href: '#', title: 'Colophon' },
  { href: '#', title: 'Uses' },
  { href: '#', title: 'Github' },
  { href: '#', title: 'RSS' },
];

const meta: Meta<typeof Footer> = {
  component: Footer,
  tags: [],
  title: 'Components/Footer',
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
