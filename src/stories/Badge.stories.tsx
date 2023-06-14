import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '~/components/Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  decorators: [
    (Story) => (
      <div className="container py-5">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {},
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
        <Badge variant="primary" clickable>
          Badge
        </Badge>
        <Badge variant="secondary" clickable>
          Badge
        </Badge>
        <Badge variant="red" clickable>
          Badge
        </Badge>
        <Badge variant="green" clickable>
          Badge
        </Badge>
        <Badge variant="yellow" clickable>
          Badge
        </Badge>
        <Badge variant="indigo" clickable>
          Badge
        </Badge>
        <Badge variant="purple" clickable>
          Badge
        </Badge>
        <Badge variant="pink" clickable>
          Badge
        </Badge>
      </div>
    );
  },
};
