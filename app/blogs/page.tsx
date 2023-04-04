import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import TestMarkdown from './test.mdx'

export const metadata: Metadata = {
  title: '博客'
}

export default function Blogs(): JSX.Element {
  return (
    <main>
      <TestMarkdown />
    </main>
  )
}
