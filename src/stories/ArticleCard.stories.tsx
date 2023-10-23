import type { Meta, StoryObj } from '@storybook/react';
import { ArticleCard } from '~/components/ArticleCard';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ArticleCard> = {
  argTypes: {
    title: { control: 'text' },
  },
  component: ArticleCard,
  decorators: [
    (Story) => (
      <div className="container">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/ArticleCard',
};

export default meta;
type Story = StoryObj<typeof ArticleCard>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    description: `A Queue is a linear data structure that keeps its elements in a queue. It uses FIFO (first-in-first-out) ordering in which elements are added to the "end" and are removed from the "front".`,
    imageSrc: '/default/article.jpg',
    title: 'Data Structures: Queue',
    url: '#',
  },
};

export const WithTags: Story = {
  args: {
    description: `A Queue is a linear data structure that keeps its elements in a queue. It uses FIFO (first-in-first-out) ordering in which elements are added to the "end" and are removed from the "front".`,
    imageSrc: '/default/article.jpg',
    tags: [
      { href: '#ts', title: 'TypeScript' },
      { href: '#ts', title: 'Data Structures' },
    ],
    title: 'Data Structures: Queue',
    url: '#',
  },
};
