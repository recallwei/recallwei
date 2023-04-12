'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import NProgress from 'nprogress'

NProgress.configure({ showSpinner: false })

export default function useNProgress() {
  const pathName = usePathname()
  useEffect(() => {
    NProgress.start()
    setTimeout(() => {
      NProgress.done()
    }, 150)
  }, [pathName])
}
