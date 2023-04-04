'use client'
import Header from '../Header'
import { useNProgress, useAppSelector } from '@/hooks'
import { type ReactOnlyChildrenProps } from '@/types'
import { petrona, open_sans, roboto_mono } from '@/fonts'

export default function Layout({ children }: ReactOnlyChildrenProps): JSX.Element {
  // useNProgress()

  const themeMode = useAppSelector((state) => state.header.themeMode)

  return (
    <html
      lang="en"
      data-theme={themeMode}
      className={`${petrona.variable} ${open_sans.variable} ${roboto_mono.variable}`}
    >
      <body className="scrollbar overflow-x-hidden overflow-y-scroll text-base font-serif">
        <Header />
        {children}
      </body>
    </html>
  )
}
