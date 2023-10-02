import type { CollectionEntry } from 'astro:content'

interface Props {
  data: CollectionEntry<'post'>[]
}

export default function RelatedPosts(props: Props): React.JSX.Element {
  return (
    <>
      <div className="mt-6 text-2xl font-semibold">Related Posts</div>
      <ul className="mt-2">
        {props.data.map((post, index) => (
          <li key={index}>
            <a
              href={`/posts/${post.slug}`}
              className="underline-offset-4 hover:underline"
            >
              {post.data.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}
