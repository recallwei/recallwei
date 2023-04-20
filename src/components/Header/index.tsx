import React from 'react'
import clsx from 'clsx'
import { SITE_META } from '@/configs'

export default function Header(): JSX.Element {
  const { author } = SITE_META
  return (
    <header className={clsx('absolute left-0 right-0 top-0 z-30 flex items-center justify-start p-4', 'sm:p-6')}>
      <a
        className="text-xl font-bold"
        href="/"
      >
        {author}
      </a>
    </header>
  )
}
