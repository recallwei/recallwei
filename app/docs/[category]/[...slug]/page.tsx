import type { Metadata } from 'next'

type Props = {
  params: {
    category: string
    slug: Array<string>
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = params
  return {
    absolute: `${slug.join(' ')} | ${category}`
  } as any
}

export default function Category({ params }: Props): JSX.Element {
  return <main></main>
}
