import { useEffect, useState } from 'react'

export const useTheme = (): {
  theme: 'light' | 'dark'
  selectDarkTheme: () => void
  selectLightTheme: () => void
} => {
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
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  return { theme, selectDarkTheme, selectLightTheme }
}
