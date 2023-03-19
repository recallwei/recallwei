'use client'
import Header from '../Header'
import { useAppSelector } from '@/hooks'

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const themeMode = useAppSelector((state) => state.header.themeMode)
  return (
    <html
      lang="en"
      data-theme={themeMode}
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}

export default Layout
