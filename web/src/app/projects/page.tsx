import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects'
}

export default function Projects(): JSX.Element {
  return (
    <main className="absolute top-0 right-0 bottom-0 left-0 m-auto flex w-1/3 flex-col items-center justify-center space-y-4">
      <div>{'🚀 正在维护中'}</div>
      <progress className="progress progress-primary w-60" />
      <div className="mockup-code">
        <pre data-prefix="$">
          <code>cd ..</code>
        </pre>
      </div>
      <Link href="/">
        <button className="btn-primary btn-sm btn">{'返回'}</button>
      </Link>
    </main>
  )
}
