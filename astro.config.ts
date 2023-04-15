import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/serverless'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import { rehypeHeadingIds } from '@astrojs/markdown-remark'
import remarkToc from 'remark-toc'
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis'
import rehypePresetMinify from 'rehype-preset-minify'

// https://astro.build/config
export default defineConfig({
  site: 'https://bruceworld.top',
  trailingSlash: 'always',
  output: 'server',
  adapter: vercel(),
  integrations: [
    react(),
    tailwind(),
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        theme: 'dracula'
      },
      remarkPlugins: [rehypeHeadingIds, remarkToc, rehypeAccessibleEmojis],
      rehypePlugins: rehypePresetMinify.plugins,
      remarkRehype: {
        footnoteLabel: 'Footnotes'
      },
      gfm: false
    })
  ]
})
