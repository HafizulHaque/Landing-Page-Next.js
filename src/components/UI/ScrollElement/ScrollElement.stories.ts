import type { Meta, StoryObj } from "@storybook/react";

import ScrollElement from "./ScrollElement";

 const meta = {
  title: 'UI/Scroll Element',
  component: ScrollElement
} satisfies Meta<typeof ScrollElement>

export default meta

type Story = StoryObj<typeof meta>


export const Base: Story = {
  args: { 
    country1: 'australia', 
    currency1: 'AUD', 
    country2: 'singapore', 
    currency2: 'SGD', 
    currentRate: '-0.4321', 
    rateChange: '-0.8765', 
    changePercentage: '-23.45'
  }
}