import type { Metadata } from 'next'
import type { ReactOnlyChildrenProps } from '@/types'
import { MarkdownContentLayout } from './components'

export const metadata: Metadata = {
  title: {
    default: '文档',
    template: '%s | 文档'
  }
}

export default function Layout({ children }: ReactOnlyChildrenProps): JSX.Element {
  return <MarkdownContentLayout>{children}</MarkdownContentLayout>
}
