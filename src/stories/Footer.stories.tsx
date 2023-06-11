import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '~/components/Footer';

const defaultFooterLinks = [
  { title: 'Colophon', href: '#' },
  { title: 'Uses', href: '#' },
  { title: 'Github', href: '#' },
  { title: 'RSS', href: '#' },
];

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Footer> = {
  title: 'Example/Footer',
  component: Footer,
  tags: [],
};

export default meta;
type Story = StoryObj<typeof Footer>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
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
