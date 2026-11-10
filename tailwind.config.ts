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
          light: '#FFE5E5',
          DEFAULT: '#FFB3BA',
          dark: '#FF8FA3',
        },
        secondary: {
          light: '#E5F3FF',
          DEFAULT: '#BAE1FF',
          dark: '#8FCDFF',
        },
        accent: {
          light: '#FFF5E5',
          DEFAULT: '#FFE1BA',
          dark: '#FFD18F',
        },
      },
    },
  },
  plugins: [],
}
export default config
