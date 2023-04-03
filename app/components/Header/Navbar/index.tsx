import Link from 'next/link'
import clsx from 'clsx'
import { NavbarList } from '@/constants'

export default function Navbar(): JSX.Element {
  return (
    <div className="flex items-center space-x-8 font-mono text-lg tracking-tight">
      {NavbarList.map((navbarItem) => (
        <div
          key={navbarItem.text}
          className={clsx(
            'relative cursor-pointer transition-all duration-300',
            'hover:text-primary hover:opacity-90',
            'active:text-primary active:opacity-70',
            'after:absolute after:-bottom-[1px] after:m-auto after:block after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 after:content-[""] hover:after:w-full'
          )}
        >
          {navbarItem.type === 'text' && <div>{navbarItem.text}</div>}
          {navbarItem.type === 'innerLink' && (
            <Link
              key={navbarItem.text}
              href={navbarItem.href}
            >
              {navbarItem.text}
            </Link>
          )}
          {navbarItem.type === 'outerLink' && (
            <Link
              key={navbarItem.text}
              href={navbarItem.href}
              target="_blank"
            >
              {navbarItem.text}
            </Link>
          )}
        </div>
      ))}
    </div>
  )
}
