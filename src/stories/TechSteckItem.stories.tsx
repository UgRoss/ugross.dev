import type { Meta, StoryObj } from '@storybook/react';
import { TechStackItem } from '~/components/TechStackItem';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof TechStackItem> = {
  argTypes: {},
  component: TechStackItem,
  decorators: [
    (Story) => (
      <div className="container py-5">
        <Story />
      </div>
    ),
  ],
  tags: [],
  title: 'Example/TechStackItem',
};

export default meta;
type Story = StoryObj<typeof TechStackItem>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    description: 'Text Editor',
    imgUrl: './stack/vscode.webp',
    title: 'VSCode',
  },
};

const items = [
  { description: 'AI', imgUrl: '/stack/chatgpt.png', title: 'ChatGPT' },
  { description: 'ORM', imgUrl: '/stack/prisma.png', title: 'Prisma' },
  { description: 'Editor', imgUrl: '/stack/vscode.webp', title: 'VSCode' },
  { description: 'CSS Framework', imgUrl: '/stack/tailwindcss.webp', title: 'TailwindCSS' },
];

export const MultipleItems: Story = {
  render: () => {
    return (
      <div className="flex gap-4">
        {items.map(({ description, imgUrl, title }) => (
          <TechStackItem description={description} imgUrl={imgUrl} key={title} title={title} />
        ))}
      </div>
    );
  },
};
