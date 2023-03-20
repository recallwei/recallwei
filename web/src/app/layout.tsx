// TODO: Try to remove `use client`
// import { Router } from 'next/router'
// import NProgress from 'nprogress'\
import type { Metadata } from 'next'
import { StoreProvider } from '@/components'
import { Layout } from './components'
import './globals.scss'
// import 'nprogress/nprogress.css'

// TODO: NProgress Configuration
// NProgress.configure({ showSpinner: false })
// Router.events.on('routeChangeStart', NProgress.start)
// Router.events.on('routeChangeComplete', NProgress.done)
// Router.events.on('routeChangeError', NProgress.done)

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
