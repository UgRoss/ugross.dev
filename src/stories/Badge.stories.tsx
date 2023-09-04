import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '~/components/Badge';

const meta: Meta<typeof Badge> = {
  argTypes: {},
  component: Badge,
  decorators: [
    (Story) => (
      <div className="container py-5">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/Badge',
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

export const Variants: Story = {
  render: () => {
    return (
      <div className="flex flex-wrap gap-3">
        <Badge clickable variant="primary">
          Badge
        </Badge>
        <Badge clickable variant="secondary">
          Badge
        </Badge>
        <Badge clickable variant="red">
          Badge
        </Badge>
        <Badge clickable variant="green">
          Badge
        </Badge>
        <Badge clickable variant="yellow">
          Badge
        </Badge>
        <Badge clickable variant="indigo">
          Badge
        </Badge>
        <Badge clickable variant="purple">
          Badge
        </Badge>
        <Badge clickable variant="pink">
          Badge
        </Badge>
      </div>
    );
  },
};
