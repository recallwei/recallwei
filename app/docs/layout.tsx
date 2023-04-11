import type { Metadata } from 'next'
import { MarkdownContentLayout } from './components'

export const metadata: Metadata = {
  title: {
    default: '文档',
    template: '%s | 文档'
  }
}

export default function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  return <MarkdownContentLayout>{children}</MarkdownContentLayout>
}
