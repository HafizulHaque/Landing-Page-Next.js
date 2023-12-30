import type { Meta, StoryObj } from "@storybook/react";

import MobileNav from "./MobileNav";

const meta =  {
  title: 'Layout/Mobile Navbar Section',
  component: MobileNav
  
} satisfies Meta<typeof MobileNav>

export default meta

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
  }
}
