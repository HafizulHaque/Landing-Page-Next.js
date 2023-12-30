import type { Meta, StoryObj } from "@storybook/react";

import RootLayout from "./layout";
import Home from "./page";

const meta =  {
  title: 'Page/Landing Page',
  component: RootLayout
  
} satisfies Meta<typeof RootLayout>

export default meta

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    children: <Home/>
  }
}
