import type { Meta, StoryObj } from "@storybook/react";

import Features from "./Features";

const meta =  {
  title: 'Layout/Features Section',
  component: Features
  
} satisfies Meta<typeof Features>

export default meta

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
  }
}
