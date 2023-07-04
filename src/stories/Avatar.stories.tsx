import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '~/components/Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  decorators: [
    (Story) => (
      <div className="container py-5">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: { type: 'text' },
    },
    alt: {
      control: { type: 'text' },
    },
    size: {
      control: { type: 'select', options: ['sm', 'md', 'lg'] },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: '/me.webp',
    alt: 'Me',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    alt: 'Me',
    src: '/me.webp',
    size: 'lg',
  },
};
