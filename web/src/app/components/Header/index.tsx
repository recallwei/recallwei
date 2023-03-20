import BrandIcon from './BrandIcon'
import ThemeSwitcher from './ThemeSwitcher'

export default function Header(): JSX.Element {
  return (
    <main className="relative flex h-[64px] w-full items-center justify-end px-8 py-2">
      <BrandIcon />
      <ThemeSwitcher />
    </main>
  )
}
