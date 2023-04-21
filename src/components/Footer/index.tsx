import React from 'react'
import clsx from 'clsx'
import { SITE_META } from '@/configs'

export default function Footer(): JSX.Element {
  const { email, copyright } = SITE_META

  return (
    <footer className={clsx(['absolute bottom-0 left-0 right-0 h-fit select-none p-4 text-center', 'sm:p-6'])}>
      <a
        className="cursor-pointer text-gray-500"
        href={'mailto:' + email}
        target="_blank"
        rel="noopener noreferrer"
      >
        {copyright}
      </a>
    </footer>
  )
}
