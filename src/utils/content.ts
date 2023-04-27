import { getCollection } from 'astro:content'

import type { Lang } from '@/types'

// TODO: Filter draft posts
export const getPosts = async (lang?: Lang) =>
  getCollection(
    'post',
    ({ id, data }) => (lang ? id.startsWith(`${lang}/`) : true) && true
    // !data.draft
  )
