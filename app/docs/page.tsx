import type { Metadata } from 'next'
import TestMarkdown from './test.mdx'

export const metadata: Metadata = {
  title: '文档'
}

export default function Docs(): JSX.Element {
  return (
    <main>
      <TestMarkdown />
    </main>
  )
}
