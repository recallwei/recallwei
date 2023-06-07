import { defineCollection } from 'astro:content'

import { postSchema } from './_schemas'

const postCollection = defineCollection({
  type: 'content',
  schema: postSchema
})

export const collections = {
  post: postCollection
}
