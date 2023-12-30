import type { Meta, StoryObj } from "@storybook/react";

import Statistics from "./Statistics";

const meta =  {
  title: 'Layout/Statistic Section',
  component: Statistics
  
} satisfies Meta<typeof Statistics>

export default meta

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
  }
}
