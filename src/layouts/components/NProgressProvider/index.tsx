import 'nprogress/nprogress.css'

import NProgress from 'nprogress'
import { type PropsWithChildren, useEffect } from 'react'

NProgress.configure({ showSpinner: false })

export default function NProgressProvider({
  children
}: PropsWithChildren): React.JSX.Element {
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
