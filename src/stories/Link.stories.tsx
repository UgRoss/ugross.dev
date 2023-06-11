import type { Meta, StoryObj } from '@storybook/react';
import { Link } from '~/components/Link';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Link> = {
  title: 'Example/Link',
  component: Link,
  tags: [],
  argTypes: {
    href: {
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  render: (args) => {
    return (
      <article className="prose dark:prose-invert">
        <p>
          Lorem Ipsum is <Link {...args} /> of the printing and typesetting industry. Lorem Ipsum
          has been the industry standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book.
        </p>
      </article>
    );
  },
  args: {
    href: '#',
    children: 'Simply dummy text',
  },
};

export const ExternalLink: Story = {
  render: (args) => {
    return (
      <article className="prose dark:prose-invert">
        <p>
          Lorem Ipsum and <Link {...args} />. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the
          1500s
        </p>
      </article>
    );
  },
  args: {
    href: 'https://google.com',
    target: '_blank',
    children: 'External link',
  },
};
