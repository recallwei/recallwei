import mdx from '@astrojs/mdx'
import prefetch from '@astrojs/prefetch'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'
import { defineConfig } from 'astro/config'
import Icons from 'unplugin-icons/vite'

import { rehypePlugins, remarkPlugins } from './plugins'

// https://astro.build/config
export default defineConfig({
  site: 'https://brucesong.xyz',
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    speedInsights: {
      enabled: true
    }
  }),
  integrations: [react(), tailwind(), mdx(), prefetch()],
  markdown: {
    gfm: true,
    smartypants: true,
    remarkPlugins,
    rehypePlugins,
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'dracula'
    },
    remarkRehype: {
      footnoteLabel: 'Footnotes',
      footnoteBackLabel: 'Back to content'
    }
  },
  vite: {
    plugins: [
      Icons({
        compiler: 'astro'
      })
    ]
  },
  server: {
    port: 4056
  }
})
