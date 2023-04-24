import { defineCollection } from 'astro:content'
import { postSchema } from './_schemas'

const postCollection = defineCollection({
  schema: postSchema
})

export const collections = {
  post: postCollection
}
