import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/serverless'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import Icons from 'unplugin-icons/vite'
import { remarkPlugins, rehypePlugins } from './plugins'

export default defineConfig({
  site: 'https://bruceworld.top',
  output: 'server',
  adapter: vercel({ analytics: true }),
  integrations: [react(), tailwind(), mdx()],
  markdown: {
    remarkPlugins,
    rehypePlugins,
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'dracula'
    },
    remarkRehype: {
      footnoteLabel: 'Footnotes'
    }
  },
  vite: {
    plugins: [
      Icons({
        compiler: 'astro'
      })
    ]
  }
})
