import type { RemarkPlugins } from 'astro'
import remarkToc from 'remark-toc'

export const remarkPlugins: RemarkPlugins = [remarkToc]
