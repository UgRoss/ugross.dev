import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '~/components/Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  decorators: [
    (Story) => (
      <div className="container py-5">
        <Story />

        <p className="my-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum,
          voluptatibus, quibusdam, quia voluptate voluptas voluptatem quos quod quas quidem?
          Quisquam voluptatum, voluptatibus, quibusdam, quia voluptate voluptas voluptatem quos quod
          quas quidem? Quisquam voluptatum, voluptatibus, quibusdam, quia voluptate voluptas
          voluptatem quos quod quas quidem? Quisquam voluptatum, voluptatibus, quibusdam, quia
          voluptate voluptas voluptatem quos quod quas quidem? Quisquam voluptatum, voluptatibus,
          quibusdam, quia voluptate voluptas voluptatem quos quod quas quidem? Quisquam voluptatum,
          voluptatibus, quibusdam, quia voluptate voluptas voluptatem quos quod quas quidem?
          Quisquam voluptatum, voluptatibus, quibusdam, quia voluptate voluptas voluptatem quos quod
          quas quidem? Quisquam voluptatum, voluptatibus, quibusdam, quia voluptate voluptas
          voluptatem quos quod quas quidem? Quisquam voluptatum, voluptatibus, quibusdam, quia
          voluptate voluptas voluptatem quos quod quas quidem? Quisquam voluptatum, voluptatibus,
          quibusdam, quia voluptate voluptas voluptatem quos quod quas quidem?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum,
          voluptatibus, quibusdam, quia voluptate voluptas voluptatem quos quod quas quidem?
          Quisquam voluptatum, voluptatibus, quibusdam, quia voluptate voluptas voluptatem quos quod
          quas quidem? Quisquam voluptatum, voluptatibus, quibusdam, quia voluptate voluptas
          voluptatem quos quod quas quidem? Quisquam voluptatum, voluptatibus, quibusdam, quia
          voluptate voluptas voluptatem quos quod quas quidem? Quisquam voluptatum, voluptatibus,
          quibusdam, quia voluptate voluptas voluptatem quos quod quas quidem? Quisquam voluptatum,
          voluptatibus, quibusdam, quia voluptate voluptas voluptatem quos quod quas quidem?
          Quisquam voluptatum, voluptatibus, quibusdam, quia voluptate voluptas voluptatem quos quod
          quas quidem? Quisquam voluptatum, voluptatibus, quibusdam, quia voluptate voluptas
          voluptatem quos quod quas quidem? Quisquam voluptatum, voluptatibus, quibusdam, quia
          voluptate voluptas voluptatem quos quod quas quidem? Quisquam voluptatum, voluptatibus,
          quibusdam, quia voluptate voluptas voluptatem quos quod quas quidem?
        </p>
      </div>
    ),
  ],
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};

export const LoggedOut: Story = {};
