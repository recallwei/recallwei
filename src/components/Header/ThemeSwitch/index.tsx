import React, { useEffect, useState } from 'react'

import { MoonIcon, SunIcon } from '@/components'

export default function ThemeSwitch(): JSX.Element {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const selectDarkTheme = () => {
    setTheme('dark')
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }

  const selectLightTheme = () => {
    setTheme('light')
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      selectDarkTheme()
    } else {
      selectLightTheme()
    }
  }, [])

  return (
    <>
      {theme === 'light' ? (
        <div
          className="flex items-center justify-center"
          onClick={() => selectDarkTheme()}
        >
          <SunIcon fontSize={21.6} />
        </div>
      ) : (
        <div
          className="flex items-center justify-center"
          onClick={() => selectLightTheme()}
        >
          <MoonIcon fontSize={21.6} />
        </div>
      )}
    </>
  )
}
