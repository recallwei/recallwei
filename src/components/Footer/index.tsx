import React from 'react'
import { SITE_META } from '@/configs'

export default function Footer(): JSX.Element {
  const { email, copyright } = SITE_META

  return (
    <footer className="absolute bottom-0 left-0 right-0 h-fit select-none p-4 text-center">
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
