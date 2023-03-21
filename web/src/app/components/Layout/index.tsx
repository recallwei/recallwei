'use client'
import { Inter, Roboto_Mono } from 'next/font/google'
import Header from '../Header'
import { useAppSelector } from '@/hooks'
import { type ReactOnlyChildrenProps } from '@/types'

const inter = Inter({
  variable: '--font-inter',
  display: 'swap',
  subsets: ['latin']
})

const roboto_mono = Roboto_Mono({
  variable: '--font-roboto-mono',
  display: 'swap',
  subsets: ['latin']
})

export default function Layout({ children }: ReactOnlyChildrenProps): JSX.Element {
  const themeMode = useAppSelector((state) => state.header.themeMode)
  return (
    <html
      lang="en"
      data-theme={themeMode}
      className={`${inter.variable} ${roboto_mono.variable}`}
    >
      <body className="scrollbar overflow-x-hidden overflow-y-scroll">
        <Header />
        {children}
      </body>
    </html>
  )
}
