'use client'
// TODO: Try to remove `use client`
// import { Router } from 'next/router'
// import NProgress from 'nprogress'
import { StoreProvider, Layout } from '@/components'
import './globals.css'
import 'nprogress/nprogress.css'

// TODO: NProgress Configuration
// NProgress.configure({ showSpinner: false })
// Router.events.on('routeChangeStart', NProgress.start)
// Router.events.on('routeChangeComplete', NProgress.done)
// Router.events.on('routeChangeError', NProgress.done)

export const metadata = {
  title: 'Bruce Song',
  description: 'My personal blog.'
}

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <StoreProvider>
      <Layout>{children}</Layout>
    </StoreProvider>
  )
}
