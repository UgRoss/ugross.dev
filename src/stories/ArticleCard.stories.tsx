import type { Meta, StoryObj } from '@storybook/react';
import { ArticleCard } from '~/components/ArticleCard';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ArticleCard> = {
  title: 'Components/ArticleCard',
  component: ArticleCard,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="container">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    title: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof ArticleCard>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    title: 'Data Structures: Queue',
    description: `A Queue is a linear data structure that keeps its elements in a queue. It uses FIFO (first-in-first-out) ordering in which elements are added to the "end" and are removed from the "front".`,
    imageSrc: '/storybook/article-image-demo.avif',
    tags: ['TypeScript'],
  },
};
