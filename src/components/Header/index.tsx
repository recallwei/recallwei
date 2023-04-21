import React, { useRef } from 'react'
import clsx from 'clsx'
import { SITE_META } from '@/configs'

export default function Header(): JSX.Element {
  const { author } = SITE_META
  const audioRef = useRef<HTMLAudioElement>(new Audio('/audio/button-click.mp3'))

  return (
    <header className={clsx('absolute left-0 right-0 top-0 z-30 flex items-center justify-start p-4', 'sm:p-6')}>
      <div
        className="cursor-pointer text-xl font-bold"
        onClick={() => {
          audioRef.current.play()
          audioRef.current.onended = () => {
            window.location.href = '/'
          }
        }}
      >
        {author}
      </div>
    </header>
  )
}
