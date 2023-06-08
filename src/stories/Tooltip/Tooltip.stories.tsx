import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../components/Tooltip';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof TooltipProvider> = {
  title: 'Example/Tooltip',
  component: TooltipProvider,
  decorators: [
    (Story) => (
      <div className="container py-5">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    delayDuration: {
      control: 'number',
    },
    skipDelayDuration: {
      control: 'number',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TooltipProvider>;

export const Default: Story = {
  render: (args) => (
    <TooltipProvider {...args}>
      <Tooltip>
        <TooltipTrigger>
          <p className="dark:text-white">Hover</p>
        </TooltipTrigger>
        <TooltipContent>
          <p>Popover Content</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
  args: {
    delayDuration: 50,
  },
};
