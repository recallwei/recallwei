import { z } from 'astro:content'
import { SITE_META } from '@/configs'

export const postSchema = z
  .object({
    title: z.string(),
    author: z.string().default(SITE_META.author),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional()
  })
  .strict()

export type PostFrontmatter = z.infer<typeof postSchema>
