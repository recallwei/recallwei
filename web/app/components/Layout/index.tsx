'use client'
import Header from '../Header'
import { useNProgress, useAppSelector } from '@/hooks'
import { type ReactOnlyChildrenProps } from '@/types'
import { NotoSans, InputMono } from '@/fonts'

export default function Layout({ children }: ReactOnlyChildrenProps): JSX.Element {
  useNProgress()

  const themeMode = useAppSelector((state) => state.header.themeMode)

  return (
    <html
      lang="en"
      data-theme={themeMode}
      className={`${NotoSans.variable} ${InputMono.variable} font-sans`}
    >
      <body className="scrollbar overflow-x-hidden overflow-y-scroll">
        <Header />
        {children}
      </body>
    </html>
  )
}
