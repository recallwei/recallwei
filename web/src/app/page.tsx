import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { ActionButton } from './components'

const inter = Inter({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

export const metadata: Metadata = {
  description: 'This is my home page.'
}

export default function Home() {
  const WELCOME_TEXT = '🎉 欢迎来到我的博客 🎉'
  return (
    <main className="absolute top-0 right-0 bottom-0 left-0 m-auto flex h-1/3 w-1/3 flex-col items-center justify-center space-y-4">
      <div className={inter.className}>{WELCOME_TEXT}</div>
      <div className="mockup-code">
        <pre data-prefix="$">
          <code>cd recallwei</code>
        </pre>
      </div>
      <Link
        href="/projects"
        className={inter.className}
      >
        <button className="btn-primary btn-sm btn">开始</button>
      </Link>
      <Link
        href="/blogs"
        className={inter.className}
      >
        <button className="btn-secondary btn-sm btn">测试 Markdown 渲染</button>
      </Link>
      {false && <ActionButton />}
    </main>
  )
}
