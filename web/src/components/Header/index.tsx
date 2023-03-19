import Image from 'next/image'
import Link from 'next/link'
import ThemeSwitcher from './ThemeSwitcher'

const Header = (): JSX.Element => {
  return (
    <main className="flex h-[64px] w-full items-center justify-between px-8 py-2">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <Image
            className="cursor-pointer"
            src="/favicon.png"
            alt="Logo"
            width={36}
            height={36}
            priority
          />
        </Link>
        <div className="select-none font-mono text-xl font-bold tracking-tight">{'Bruce Song'}</div>
      </div>
      <ThemeSwitcher />
    </main>
  )
}
export default Header
