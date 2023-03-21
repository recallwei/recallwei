/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,md,mdx}'],
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
