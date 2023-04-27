import { rehypeHeadingIds } from '@astrojs/markdown-remark'
import type { RehypePlugins } from 'astro'
import rehypeExternalLinks from 'rehype-external-links'

export const rehypePlugins: RehypePlugins = [
  rehypeHeadingIds,
  [
    rehypeExternalLinks,
    {
      target: '_blank',
      rel: 'noopener noreferrer',
      content: { type: 'text', value: '🔗' }
    }
  ]
]
