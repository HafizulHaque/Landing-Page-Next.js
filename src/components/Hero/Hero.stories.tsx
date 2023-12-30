import type { Meta, StoryObj } from "@storybook/react";

import Hero from "./Hero";

const meta =  {
  title: 'Layout/Hero Section',
  component: Hero
  
} satisfies Meta<typeof Hero>

export default meta

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
  }
}
