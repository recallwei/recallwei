import React from 'react'
import { siteMetaData } from '@/constants'

export default function Header(): JSX.Element {
  const { author } = siteMetaData
  return (
    <header className="absolute left-0 right-0 top-0 z-30 flex h-20 items-center justify-start p-4">
      <a
        className="text-lg font-semibold"
        href="/"
      >
        {author}
      </a>
    </header>
  )
}
