import type { Meta, StoryObj } from "@storybook/react";

import Feature from "./Feature";

 const meta = {
  title: 'UI/Feature Element',
  component: Feature
} satisfies Meta<typeof Feature>

export default meta

type Story = StoryObj<typeof meta>


export const Base: Story = {
  args: {
    image: 'icon-1.svg',
    heading: '15% Profit Sharing from Challenge Phase',
    details: 'FundedNext is the only prop firm to offer a 15% profit sharing from the profit you make',
    isPrimary: true
  }
}