import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#C5E5F7',
          DEFAULT: '#89CFF0',
          dark: '#5AB9E8',
        },
        secondary: {
          light: '#E8F4FA',
          DEFAULT: '#B8DFF0',
          dark: '#89CFF0',
        },
        accent: {
          light: '#FFE5F0',
          DEFAULT: '#FFB6D9',
          dark: '#FF8FB9',
        },
      },
    },
  },
  plugins: [],
}
export default config
