/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import clsx from 'clsx'

import { SITE_META } from '@/app.config'
import { MoonIcon, SunIcon } from '@/components'
import { useTheme } from '@/hooks'
import type { NavItem } from '@/types'
import { navigateTo } from '@/utils'

interface Props {
  profileIcon?: astroHTML.JSX.Element
  postIcon?: astroHTML.JSX.Element
  // tagIcon?: astroHTML.JSX.Element
  projectIcon?: astroHTML.JSX.Element
  linkIcon?: astroHTML.JSX.Element
  searchIcon?: astroHTML.JSX.Element
}

export default function Header(props: Props): React.JSX.Element {
  const navList: NavItem[] = [
    {
      title: 'Profile',
      href: '/',
      icon: props.profileIcon,
      onlyLabel: true
    },
    {
      title: 'Posts',
      href: '/posts',
      icon: props.postIcon
    },
    // {
    //   title: 'Tags',
    //   href: '/tags',
    //   icon: props.tagIcon
    // },
    {
      title: 'Projects',
      href: '/projects',
      icon: props.projectIcon
    },
    {
      title: 'Links',
      href: '/links',
      icon: props.linkIcon
    },
    {
      title: 'Search',
      href: '/search',
      icon: props.searchIcon,
      onlyIcon: true
    }
  ]

  const { theme, selectDarkTheme, selectLightTheme } = useTheme()

  const renderNavItem = (navItem: NavItem): JSX.Element => {
    if (navItem.onlyIcon) {
      return (
        <li
          key={navItem.title}
          className="cursor-pointer text-muted dark:text-white"
          onClick={() => navigateTo(navItem.href)}
        >
          {navItem.icon}
        </li>
      )
    }

    return (
      <div key={navItem.title}>
        {/* Mobile UI */}
        {!navItem.onlyLabel && (
          <li
            className="cursor-pointer text-muted dark:text-white sm:hidden"
            onClick={() => navigateTo(navItem.href)}
          >
            {navItem.icon}
          </li>
        )}
        {/* Desktop UI */}
        <li
          className={clsx(
            'hidden cursor-pointer sm:block',
            window.location.pathname === navItem.href ||
              `/${window.location.pathname.split('/')[1]}` === navItem.href
              ? 'text-primary underline decoration-wavy underline-offset-4'
              : 'text-muted dark:text-white'
          )}
          onClick={() => navigateTo(navItem.href)}
        >
          {navItem.title}
        </li>
      </div>
    )
  }

  const renderThemeSwitchIcon = () => (
    <li
      key="Theme"
      className="cursor-pointer text-muted dark:text-white"
    >
      {theme === 'light' ? (
        <div
          className="flex items-center justify-center"
          onClick={() => selectDarkTheme()}
        >
          <SunIcon fontSize={21.6} />
        </div>
      ) : (
        <div
          className="flex items-center justify-center"
          onClick={() => selectLightTheme()}
        >
          <MoonIcon fontSize={21.6} />
        </div>
      )}
    </li>
  )

  return (
    <header className="absolute inset-x-0 top-0 z-30 flex h-20 select-none items-center justify-between p-4">
      <div
        className="flex cursor-pointer items-center"
        onClick={() => {
          window.location.href = '/'
        }}
      >
        <span className="text-xl transition-all hover:text-primary active:opacity-75">
          {SITE_META.author}
        </span>
      </div>

      <ul className="flex items-center space-x-4 text-lg sm:space-x-6">
        {navList.map((item) => renderNavItem(item))}
        {renderThemeSwitchIcon()}
      </ul>
    </header>
  )
}
