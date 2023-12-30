import type { Meta, StoryObj } from "@storybook/react";

import CustomMarquee from "./CustomMarquee";

const meta =  {
  title: 'Layout/Marquee',
  component: CustomMarquee
  
} satisfies Meta<typeof CustomMarquee>

export default meta

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
  }
}
