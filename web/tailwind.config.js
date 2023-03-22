/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './mdx-components.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-default-sans)'],
        mono: ['var(--font-default-mono)']
      }
    }
  },
  daisyui: {
    themes: ['light', 'dark']
  },
  plugins: [require('daisyui')]
}
