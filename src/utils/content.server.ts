import { type CollectionEntry, getCollection } from 'astro:content'

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
  posts.filter((post) => post.data.tags?.includes(tag))

type TagItem = {
  name: string
  count: number
}

export const getTags = async () => {
  const posts = await getPosts()
  const postsWithTag = posts.filter((p) => p.data.tags && p.data.tags.length > 0)
  const tags: Partial<Record<Tag, TagItem>> = {}
  postsWithTag.forEach((p) => {
    p.data.tags?.forEach((t) => {
      if (Object.hasOwn(tags, t)) {
        tags[t].count += 1
      } else {
        tags[t] = {
          name: t,
          count: 1
        }
      }
    })
  })
  const sortedTags = {}
  Object.keys(tags)
    .sort((a, b) => a.localeCompare(b))
    .forEach((k) => {
      sortedTags[k] = tags[k]
    })
}
