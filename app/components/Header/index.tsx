import BrandIcon from './BrandIcon'
import Navbar from './Navbar'
import ThemeSwitcher from './ThemeSwitcher'

export default function Header(): JSX.Element {
  return (
    <main className="relative z-50 flex h-[64px] w-full items-center justify-end space-x-8 p-2 sm:px-8">
      <BrandIcon />
      <Navbar />
      <ThemeSwitcher />
    </main>
  )
}
