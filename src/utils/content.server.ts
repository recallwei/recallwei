import { type CollectionEntry, getCollection } from 'astro:content'

import { TagList } from '@/constants'
import type { Lang, Tag } from '@/types'

const getPostDate = (id: string): string => id.split('/').pop()!.substring(0, 10)

export const getPosts = async (lang?: Lang): Promise<CollectionEntry<'post'>[]> =>
  getCollection(
    'post',
    ({ id, data }) => (lang ? id.startsWith(`${lang}/`) : true) && (import.meta.env.PROD ? !data.draft : true)
  )

export const withSortedByDate = (posts: CollectionEntry<'post'>[]): CollectionEntry<'post'>[] =>
  posts.sort((pre, cur) => getPostDate(cur.id).localeCompare(getPostDate(pre.id)))

export const withGroupedByYear = (posts: CollectionEntry<'post'>[]): Record<string, CollectionEntry<'post'>[]> => {
  const sortedPosts = withSortedByDate(posts)
  const map: Record<string, CollectionEntry<'post'>[]> = {}
  sortedPosts.forEach((p) => {
    const y = getPostDate(p.id).substring(0, 4)
    if (Object.hasOwn(map, y)) {
      map[y].push(p)
    } else {
      map[y] = [p]
    }
  })
  return map
}

export const getPostsByTag = (posts: CollectionEntry<'post'>[], tag: Tag): CollectionEntry<'post'>[] =>
  posts.filter((post) => post.data.tags?.includes(tag) && (import.meta.env.PROD ? !post.data.draft : true))

export const getTags = async () => {
  const posts = await getPosts()
  const tags: Partial<Record<Tag, number>> = {}
  TagList.forEach((t) => {
    const postNum = getPostsByTag(posts, t).length
    if (postNum > 0) {
      tags[t] = postNum
    }
  })
  return tags
}
