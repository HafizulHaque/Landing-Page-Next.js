import type { Meta, StoryObj } from "@storybook/react";

import Navbar from "./Navbar";

const meta =  {
  title: 'Layout/Navbar Section',
  component: Navbar
  
} satisfies Meta<typeof Navbar>

export default meta

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
  }
}
