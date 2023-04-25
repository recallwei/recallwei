import type { Lang } from '@/types'
import { getCollection } from 'astro:content'

export const getPosts = async (lang?: Lang) =>
  await getCollection(
    'post',
    ({ id, data }) => (lang ? id.startsWith(`${lang}/`) : true) && true
    // !data.draft
  )
