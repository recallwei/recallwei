import React, { useEffect } from 'react'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

type Props = {
  children: React.ReactNode
}

export default function NProgressProvider({ children }: Props): JSX.Element {
  useEffect(() => {
    window.addEventListener('beforeunload', () => NProgress.start().inc())
    window.addEventListener('DOMContentLoaded ', () => NProgress.done())
    return () => {
      window.removeEventListener('beforeunload', () => NProgress.start().inc())
      window.removeEventListener('DOMContentLoaded', () => NProgress.done())
    }
  }, [])
  return <>{children}</>
}
