import type { Meta, StoryObj } from '@storybook/react';
import { Link } from '~/components/Link';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Link> = {
  argTypes: {
    href: {
      control: { type: 'text' },
    },
  },
  component: Link,
  tags: [],
  title: 'Components/Link',
};

export default meta;
type Story = StoryObj<typeof Link>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: 'Simply dummy text',
    href: '#',
  },
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
};

export const ExternalLink: Story = {
  args: {
    children: 'External link',
    href: 'https://google.com',
    target: '_blank',
  },
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
};
