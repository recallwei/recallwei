import 'nprogress/nprogress.css'

import NProgress from 'nprogress'
import { useEffect } from 'react'

NProgress.configure({ showSpinner: false })

type Props = {
  children: React.ReactNode
}

export default function NProgressProvider({ children }: Props): JSX.Element {
  useEffect(() => {
    window.addEventListener('beforeunload', () => NProgress.start())
    window.addEventListener('DOMContentLoaded ', () => NProgress.done())
    return () => {
      window.removeEventListener('beforeunload', () => NProgress.start())
      window.removeEventListener('DOMContentLoaded', () => NProgress.done())
    }
  }, [])
  return <>{children}</>
}
