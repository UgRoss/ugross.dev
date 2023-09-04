import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '~/components/Avatar';

const meta: Meta<typeof Avatar> = {
  argTypes: {
    alt: {
      control: { type: 'text' },
    },
    size: {
      control: { options: ['sm', 'md', 'lg'], type: 'select' },
    },
    src: {
      control: { type: 'text' },
    },
  },
  component: Avatar,
  decorators: [
    (Story) => (
      <div className="container py-5">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/Avatar',
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    alt: 'Me',
    size: 'md',
    src: '/me.webp',
  },
};

export const Large: Story = {
  args: {
    alt: 'Me',
    size: 'lg',
    src: '/me.webp',
  },
};
