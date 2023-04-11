'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import NProgress from 'nprogress'

export default function useNProgress() {
  const pathName = usePathname()
  NProgress.configure({ showSpinner: false })
  useEffect(() => {
    NProgress.start()
    setTimeout(() => {
      NProgress.done()
    }, 150)
  }, [pathName])
}
