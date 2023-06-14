import type { Meta, StoryObj } from '@storybook/react';
import { TILPreviewItem } from '~/components/TILPreviewItem';

const meta: Meta<typeof TILPreviewItem> = {
  title: 'Components/TILPreviewItem',
  component: TILPreviewItem,
  decorators: [
    (Story) => (
      <div className="container py-5">
        <ul>
          <Story />
        </ul>
      </div>
    ),
  ],
  tags: ['autodocs'],
  parameters: {
      docsOnly: true,
    },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof TILPreviewItem>;

export const Default: Story = {
  args: {
    title: 'Fixed vs Growth Mindset',
    tag: { title: 'Personal Growth', href: '#' },
    href: '/til/fixed-vs-growth-mindset',
  },
};

export const WithAnimatedList: Story = {
  render: () => (
    <ul className="animated-list">
      <TILPreviewItem
        title="Fixed vs Growth Mindset"
        tag={{ title: 'Personal Growth', href: '#' }}
        href="/til/fixed-vs-growth-mindset"
      />
      <TILPreviewItem
        title="The unknown type"
        tag={{ title: 'TypeScript', href: '#' }}
        href="/til/the-unknown-type"
      />
      <TILPreviewItem
        title="Maps & @each directive"
        tag={{ title: 'SASS', href: '#' }}
        href="/til/maps-and-each-directive"
      />
    </ul>
  ),
};
