import React from "react"
import { useConfig, DocsThemeConfig } from "nextra-theme-docs"

const config: DocsThemeConfig = {
  logo: <span>Bruce Song</span>,
  project: { link: "https://github.com/recallwei/recallwei" },
  // chat: { link: "https://discord.com" },
  docsRepositoryBase: "https://github.com/recallwei/recallwei",
  head: (): JSX.Element => {
    const { frontMatter } = useConfig()
    const APP_NAME = "Bruce Song"
    return (
      <>
        <title>{frontMatter.title ? `${frontMatter.title} | ${APP_NAME}` : APP_NAME}</title>
        <meta charSet="UTF-8" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/favicon.png"
        />
        <meta
          name="description"
          content="I am Bruce Song, this is my personal website."
        />
        <meta
          name="keywords"
          content="Bruce Song, Blog, Doc, Personal Website"
        />
        <meta
          name="author"
          content="Bruce Song"
        />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0"
        />
      </>
    )
  },
  sidebar: { defaultMenuCollapseLevel: 0 },
  footer: { text: "Bruce Song" }
}

export default config
