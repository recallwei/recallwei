import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description: 'This is my home page.'
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-12">
      <div className="text-4xl font-bold">🎉 欢迎来到我的博客 🎉</div>
      <Link href="/projects">
        <button className="btn-primary btn normal-case">Get Started</button>
      </Link>
    </div>
  )
}
