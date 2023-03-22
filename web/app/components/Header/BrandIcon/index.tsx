import Link from 'next/link'
import Image from 'next/image'
import { AppData } from '@/constants'

export default function BrandIcon(): JSX.Element {
  return (
    <Link
      href="/"
      className="fixed left-8 flex cursor-pointer select-none items-center space-x-2 transition-opacity duration-300 hover:opacity-90 active:opacity-75"
    >
      <Image
        src="/favicon.png"
        alt="Logo"
        width={36}
        height={36}
        priority
      />
      <div className="font-mono text-xl">{AppData.author}</div>
    </Link>
  )
}
