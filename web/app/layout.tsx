import type { Metadata } from 'next'
import { StoreProvider } from '@/components'
import { Layout } from './components'
import './globals.scss'
import 'nprogress/nprogress.css'

export const metadata: Metadata = {
  title: {
    default: 'Bruce Song',
    template: '%s | Bruce Song'
  },
  description: 'My personal blog.'
}

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <StoreProvider>
      <Layout>{children}</Layout>
    </StoreProvider>
  )
}
