import type { Meta, StoryObj } from '@storybook/react';
import { TILPreviewItem } from '~/components/TILPreviewItem';

const meta: Meta<typeof TILPreviewItem> = {
  argTypes: {},
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
  parameters: {
    docsOnly: true,
  },
  tags: ['autodocs'],
  title: 'Components/TILPreviewItem',
};

export default meta;
type Story = StoryObj<typeof TILPreviewItem>;

export const Default: Story = {
  args: {
    href: '/til/fixed-vs-growth-mindset',
    tags: [{ href: '#', title: 'Personal Growth' }],
    title: 'Fixed vs Growth Mindset',
  },
};

export const WithAnimatedList: Story = {
  render: () => (
    <ul className="animated-list">
      <TILPreviewItem
        href="/til/fixed-vs-growth-mindset"
        tags={[{ href: '#', title: 'Personal Growth' }]}
        title="Fixed vs Growth Mindset"
      />
      <TILPreviewItem
        href="/til/the-unknown-type"
        tags={[{ href: '#', title: 'TypeScript' }]}
        title="The unknown type"
      />
      <TILPreviewItem
        href="/til/maps-and-each-directive"
        tags={[{ href: '#', title: 'SASS' }]}
        title="Maps & @each directive"
      />
    </ul>
  ),
};
