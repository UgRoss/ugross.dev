import type { Meta, StoryObj } from '@storybook/react';
import { TechStackItem } from '~/components/TechStackItem';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof TechStackItem> = {
  title: 'Example/TechStackItem',
  component: TechStackItem,
  decorators: [
    (Story) => (
      <div className="container py-5">
        <Story />
      </div>
    ),
  ],
  tags: [],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof TechStackItem>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    title: 'VSCode',
    description: 'Text Editor',
    imgUrl: './stack/vscode.webp',
  },
};

const items = [
  { title: 'ChatGPT', description: 'AI', imgUrl: '/stack/chatgpt.png' },
  { title: 'Prisma', description: 'ORM', imgUrl: '/stack/prisma.png' },
  { title: 'VSCode', description: 'Editor', imgUrl: '/stack/vscode.webp' },
  { title: 'TailwindCSS', description: 'CSS Framework', imgUrl: '/stack/tailwindcss.webp' },
];

export const MultipleItems: Story = {
  render: () => {
    return (
      <div className="flex gap-4">
        {items.map(({ title, description, imgUrl }) => (
          <TechStackItem title={title} description={description} imgUrl={imgUrl} key={title} />
        ))}
      </div>
    );
  },
};
