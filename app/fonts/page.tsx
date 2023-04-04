import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '字体测试'
}

export default function Fonts(): JSX.Element {
  return (
    <main className="absolute bottom-0 left-0 right-0 top-0 m-auto flex w-fit flex-col items-start justify-center space-y-12">
      <div className="text-base">
        <div className="font-sans">Sans: Hello World!</div>
        <div className="font-serif">Sans Serif: Hello World!</div>
        <div className="font-mono">MonoSpace: Hello World!</div>
      </div>
      <div className="text-xl">
        <div className="font-sans">Sans: Hello World!</div>
        <div className="font-serif">Sans Serif: Hello World!</div>
        <div className="font-mono">MonoSpace: Hello World!</div>
      </div>
      <div className="text-4xl">
        <div className="font-sans">Sans: Hello World!</div>
        <div className="font-serif">Sans Serif: Hello World!</div>
        <div className="font-mono">MonoSpace: Hello World!</div>
      </div>
    </main>
  )
}
