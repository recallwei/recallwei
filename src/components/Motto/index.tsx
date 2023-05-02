import React from 'react'

import { SITE_META } from '@/configs'

export default function Motto(): JSX.Element {
  const { motto } = SITE_META

  // TODO: How to use utils function
  const handleClick = () => {
    const w: Window | null = window.open('about:blank')
    if (w) {
      w.opener = null
      w.location.href = motto.link
    }
  }

  return (
    <blockquote>
      <p>{motto.text}</p>
      <p
        className="hover:text-primary cursor-pointer text-right transition-all active:opacity-90"
        onClick={() => handleClick()}
      >
        {motto.fromText}
      </p>
    </blockquote>
  )
}
