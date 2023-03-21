import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import TestMarkdown from './test.mdx'

export const metadata: Metadata = {
  title: 'Blogs'
}

export default function Blogs(): JSX.Element {
  return (
    <main>
      <TestMarkdown />
    </main>
  )
}
