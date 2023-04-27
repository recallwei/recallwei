import React from 'react'
import clsx from 'clsx'
import { SITE_META } from '@/configs'
import type { NavItem } from '@/types'
import ThemeSwitch from './ThemeSwitch'

interface Props {
  profileIcon?: astroHTML.JSX.Element
  postIcon?: astroHTML.JSX.Element
  projectIcon?: astroHTML.JSX.Element
  searchIcon?: astroHTML.JSX.Element
}

export default function Header(props: Props): JSX.Element {
  const navList: NavItem[] = [
    {
      title: 'Profile',
      href: '/',
      icon: props.profileIcon
    },
    {
      title: 'Posts',
      href: '/posts',
      icon: props.postIcon
    },
    {
      title: 'Projects',
      href: '/projects',
      icon: props.projectIcon
    },
    {
      title: 'Search',
      href: '/search',
      icon: props.searchIcon,
      onlyIcon: true
    }
  ]

  const renderNavItem = (navItem: NavItem): JSX.Element => {
    if (navItem.onlyIcon) {
      return (
        <li
          key={navItem.title}
          className="cursor-pointer text-muted dark:text-white"
          onClick={() => (window.location.href = navItem.href)}
        >
          {navItem.icon}
        </li>
      )
    }

    return (
      <div key={navItem.title}>
        {/* Mobile UI */}
        <li
          className="cursor-pointer text-muted dark:text-white sm:hidden"
          onClick={() => (window.location.href = navItem.href)}
        >
          {navItem.icon}
        </li>
        {/* Desktop UI */}
        <li
          className={clsx(
            'hidden cursor-pointer sm:block',
            window.location.pathname === navItem.href
              ? 'text-primary underline decoration-wavy underline-offset-4'
              : 'text-muted dark:text-white'
          )}
          onClick={() => (window.location.href = navItem.href)}
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
      <ThemeSwitch />
    </li>
  )

  return (
    <header className="absolute left-0 right-0 top-0 z-30 flex items-center justify-between p-4">
      <div
        className="mt-1 cursor-pointer text-xl font-bold"
        onClick={() => {
          window.location.href = '/'
        }}
      >
        {SITE_META.app.name}
      </div>

      <ul className="flex items-center space-x-4 text-lg sm:space-x-6">
        {navList.map((item) => renderNavItem(item))}
        {renderThemeSwitchIcon()}
      </ul>
    </header>
  )
}
