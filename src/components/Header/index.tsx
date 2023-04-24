import React from 'react'
import { SITE_META } from '@/configs'
import type { NavItem } from '@/types'
import ThemeSwitch from './ThemeSwitch'

interface Props {
  postIcon?: astroHTML.JSX.Element
  projectIcon?: astroHTML.JSX.Element
  searchIcon?: astroHTML.JSX.Element
}

export default function Header(props: Props): JSX.Element {
  const { author } = SITE_META

  const navList: NavItem[] = [
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
          className="cursor-pointer text-lg text-muted dark:text-white"
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
          className="cursor-pointer text-lg text-muted dark:text-white sm:hidden"
          onClick={() => (window.location.href = navItem.href)}
        >
          {navItem.icon}
        </li>
        {/* Desktop UI */}
        <li
          className="hidden cursor-pointer text-lg text-muted dark:text-white sm:block"
          onClick={() => (window.location.href = navItem.href)}
        >
          <span>{navItem.title}</span>
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
        className="cursor-pointer text-xl font-bold"
        onClick={() => {
          window.location.href = '/'
        }}
      >
        {author}
      </div>

      <ul className="flex items-center space-x-6">
        {navList.map((item) => renderNavItem(item))}
        {renderThemeSwitchIcon()}
      </ul>
    </header>
  )
}
