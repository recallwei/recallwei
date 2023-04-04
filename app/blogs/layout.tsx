import type { Metadata } from 'next'
import { MarkdownContentLayout } from './components'

export const metadata: Metadata = {
  title: {
    default: '博客 | Bruce Song',
    template: '%s | 博客'
  },
  description: 'My personal blog.'
}

export default function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  return <MarkdownContentLayout>{children}</MarkdownContentLayout>
}
