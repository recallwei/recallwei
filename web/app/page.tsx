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

      <div className="w-[700px]">
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="relative w-10 cursor-pointer rounded-full transition-all duration-300 hover:animate-spin">
              <Image
                src="/favicon.png"
                alt=""
                width="40"
                height="40"
              />
            </div>
          </div>
          <div className="chat-header mb-1 opacity-90">{'Bruce Song <recall4056@gmail.com>'}</div>
          <div className="chat-bubble flex w-[230px] items-center whitespace-nowrap">🚀 博客正在搭建中......</div>
          <div className="chat-footer opacity-50"></div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 cursor-pointer rounded-full transition-all duration-300 hover:animate-spin">
              <Image
                src="/favicon.png"
                alt=""
                width="40"
                height="40"
              />
            </div>
          </div>
          <div className="chat-header mb-1 opacity-90">{'Bruce Song <recall4056@gmail.com>'}</div>
          <div className="chat-bubble flex w-[380px] items-center whitespace-nowrap">
            如果觉得不错，请在 GitHub 上 ⭐ 这个项目！
          </div>
          <div className="chat-footer opacity-50"></div>
        </div>
      </div>

      <div className="mockup-code h-[200px] w-[800px]">
        <pre data-prefix="$">
          <code>cd recallwei</code>
        </pre>
      </div>

      <Link href="/projects">
        <button className="btn-primary btn normal-case">Get Started</button>
      </Link>
    </main>
  )
}
