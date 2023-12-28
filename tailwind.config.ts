import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        customNavy: '#01002f',
        customViolet: '#442a86',
        primaryButtonColor: '#635bff',
        secondaryButtonColor: '#eeeee',
        offWhite: '#f0f2ff'
      }
    },
  },
  plugins: [],
}
export default config
