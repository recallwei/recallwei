import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects'
}

export default function Projects(): JSX.Element {
  return (
    <main className="absolute top-0 right-0 bottom-0 left-0 m-auto flex w-1/3 flex-col items-center justify-center space-y-12">
      <div className="text-4xl font-bold">🚀 正在维护中</div>

      <progress className="progress progress-primary w-[400px]" />

      <Link href="/">
        <button className="btn-primary btn normal-case">Back</button>
      </Link>
    </main>
  )
}
