'use client'
import Header from '../Header'
import { useAppSelector } from '@/hooks'
import { type ReactOnlyChildrenProps } from '@/types'

export default function Layout({ children }: ReactOnlyChildrenProps): JSX.Element {
  const themeMode = useAppSelector((state) => state.header.themeMode)
  return (
    <html
      lang="en"
      data-theme={themeMode}
    >
      <body className="scrollbar overflow-x-hidden overflow-y-scroll">
        <Header />
        {children}
      </body>
    </html>
  )
}
