import React from "react"
import { DocsThemeConfig } from "nextra-theme-docs"

const config: DocsThemeConfig = {
  logo: <span>Bruce Song</span>,
  project: { link: "https://github.com/recallwei/recallwei" },
  // chat: { link: "https://discord.com" },
  docsRepositoryBase: "https://github.com/recallwei/recallwei",
  sidebar: { defaultMenuCollapseLevel: 0 },
  footer: { text: "Bruce Song" }
}

export default config
