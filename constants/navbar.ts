import type { NavbarItem } from '@/types'

export const NavbarList: NavbarItem[] = [
  {
    text: '测试 Markdown 渲染',
    href: '/blogs',
    type: 'innerLink'
  },
  {
    text: 'Projects',
    href: '/projects',
    type: 'innerLink'
  },
  {
    text: 'GitHub',
    href: 'https://github.com/recallwei',
    type: 'outerLink'
  }
]
