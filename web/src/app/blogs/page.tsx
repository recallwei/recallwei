import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import TestMarkdown from './test.mdx'

const inter = Inter({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

export const metadata: Metadata = {
  title: 'Blogs'
}

export default function Blogs(): JSX.Element {
  return (
    <main className="">
      <TestMarkdown />
    </main>
  )
}
