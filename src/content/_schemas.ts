import { z } from 'astro:content'
import { siteMetaData } from '@/constants'

export const blogSchema = z
  .object({
    title: z.string(),
    author: z.string().default(siteMetaData.author),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional()
  })
  .strict()

export type BlogFrontmatter = z.infer<typeof blogSchema>
