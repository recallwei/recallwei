import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description: 'This is my home page.'
}

export default function Home() {
  return (
    <main className="absolute top-0 right-0 bottom-0 left-0 m-auto flex flex-col items-center justify-center space-y-12">
      <div className="text-4xl font-bold">🎉 欢迎来到我的博客 🎉</div>

      <div className="font-sans">hello world</div>
      <div className="font-serif">hello world</div>
      <div className="font-mono">hello world</div>
      <Link href="/projects">
        <button className="btn-primary btn normal-case">Get Started</button>
      </Link>
    </main>
  )
}
