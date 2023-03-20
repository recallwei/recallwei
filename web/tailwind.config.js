/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: ['light', 'dark']
  },
  plugins: [require('daisyui')]
}
