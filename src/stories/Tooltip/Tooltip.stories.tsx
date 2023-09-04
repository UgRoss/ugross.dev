import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../components/Tooltip';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof TooltipProvider> = {
  argTypes: {
    delayDuration: {
      control: 'number',
    },
    skipDelayDuration: {
      control: 'number',
    },
  },
  component: TooltipProvider,
  decorators: [
    (Story) => (
      <div className="container py-5">
        <Story />
      </div>
    ),
  ],
  title: 'Components/Tooltip',
};

export default meta;
type Story = StoryObj<typeof TooltipProvider>;

export const Default: Story = {
  args: {
    delayDuration: 50,
  },
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
};
