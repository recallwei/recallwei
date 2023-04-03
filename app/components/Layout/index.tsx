'use client'
import Header from '../Header'
import { useNProgress, useAppSelector } from '@/hooks'
import { type ReactOnlyChildrenProps } from '@/types'
import { inconsolata, roboto_mono } from '@/fonts'

export default function Layout({ children }: ReactOnlyChildrenProps): JSX.Element {
  // useNProgress()

  const themeMode = useAppSelector((state) => state.header.themeMode)

  return (
    <html
      lang="en"
      data-theme={themeMode}
      className={`${inconsolata.variable} ${roboto_mono.variable}`}
    >
      <body className="scrollbar overflow-x-hidden overflow-y-scroll text-base">
        <Header />
        {children}
      </body>
    </html>
  )
}
