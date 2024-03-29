const typographyPlugin = require('@tailwindcss/typography')

const DEFAULT_FONTS =
  'system-ui, -apple-system, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        default: [DEFAULT_FONTS],
        sans: ['Computer Modern Sans', 'LXGW WenKai', DEFAULT_FONTS]
      },
      textColor: {
        primary: '#2AC2AC',
        muted: '#999999'
      },
      backgroundColor: {
        primary: '#2AC2AC'
      }
    }
  },
  darkMode: ['class'],
  plugins: [typographyPlugin]
}
