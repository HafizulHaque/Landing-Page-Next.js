import type { Meta, StoryObj } from "@storybook/react";

import Stat from "./Stat";

 const meta = {
  title: 'UI/Statistics Element',
  component: Stat
} satisfies Meta<typeof Stat>

export default meta

type Story = StoryObj<typeof meta>


export const Base: Story = {
  args: { 
    count: '151k+',
    text: ['Funded', 'Traders']
  }
}