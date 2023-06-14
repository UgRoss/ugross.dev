import type { Meta, StoryObj } from '@storybook/react';
import { ContentSection } from '~/components/ContentSection';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ContentSection> = {
  title: 'Example/ContentSection',
  component: ContentSection,
  decorators: [
    (Story) => (
      <div className="container py-5">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    link: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof ContentSection>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    title: 'Content Section Title',
    link: '#',
    children: (
      <>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      </>
    ),
  },
};