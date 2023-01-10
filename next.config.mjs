import nextra from "nextra"

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  staticImage: true,
  latex: true,
  flexsearch: {
    codeblocks: false
  },
  defaultShowCopyCode: true
})

export default withNextra({
  reactStrictMode: true
  /** i18n disabled, reason: too hard to maintain */
  // i18n:{
  //   locales: ['en', 'zh-cn'],
  //   defaultLocale: 'en',
  // }
})
