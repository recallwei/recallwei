import clsx from 'clsx'
import React from 'react'

import { MoonIcon, SunIcon } from '@/components'
import { SITE_META } from '@/configs'
import { useTheme } from '@/hooks'
import type { NavItem } from '@/types'

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

  const { theme, selectDarkTheme, selectLightTheme } = useTheme()

  const navTo = (href: string) => {
    window.location.href = href
  }

  const renderNavItem = (navItem: NavItem): JSX.Element => {
    if (navItem.onlyIcon) {
      return (
        <li
          key={navItem.title}
          className="text-muted cursor-pointer dark:text-white"
          onClick={() => navTo(navItem.href)}
        >
          {navItem.icon}
        </li>
      )
    }

    return (
      <div key={navItem.title}>
        {/* Mobile UI */}
        <li
          className="text-muted cursor-pointer dark:text-white sm:hidden"
          onClick={() => navTo(navItem.href)}
        >
          {navItem.icon}
        </li>
        {/* Desktop UI */}
        <li
          className={clsx(
            'hidden cursor-pointer sm:block',
            window.location.pathname === navItem.href || `/${window.location.pathname.split('/')[1]}` === navItem.href
              ? 'text-primary underline decoration-wavy underline-offset-4'
              : 'text-muted dark:text-white'
          )}
          onClick={() => navTo(navItem.href)}
        >
          {navItem.title}
        </li>
      </div>
    )
  }

  const renderThemeSwitchIcon = () => (
    <li
      key="Theme"
      className="text-muted cursor-pointer dark:text-white"
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
        className="flex cursor-pointer items-center space-x-2"
        onClick={() => {
          window.location.href = '/'
        }}
      >
        <img
          className="h-8"
          src="/images/logo.png"
          alt={SITE_META.author}
          loading="eager"
        />
        <span className="font-default hover:text-primary animate-pulse text-lg transition-all active:opacity-75">
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
