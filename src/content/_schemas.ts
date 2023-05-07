import { z } from 'astro:content'

import { SITE_META } from '@/configs'
import { TagList } from '@/types'

export const postSchema = z
  .object({
    title: z.string(),
    author: z.string().default(SITE_META.author),
    tags: z.array(z.enum(TagList)).optional(),
    top: z.number().optional(),
    draft: z.boolean().default(false)
  })
  .strict()

export type PostFrontmatter = z.infer<typeof postSchema>
