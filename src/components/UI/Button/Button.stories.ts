import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta =  {
  component: Button,
  title: 'UI/Button',
  
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'primary',
    text: 'Click Me!',
    onClick: () => {}
  }
}

export const Secondary: Story = {
  args: {
    type: 'secondary',
    text: 'Secondary',
    onClick: () => {}
  }
}