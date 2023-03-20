import type { Metadata } from 'next'
import { MarkdownContentLayout } from './components'

export const metadata: Metadata = {
  title: {
    default: 'Blog | Bruce Song',
    template: '%s | Blog'
  },
  description: 'My personal blog.'
}

export default function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  return <MarkdownContentLayout>{children}</MarkdownContentLayout>
}
