import type { NavbarItem } from '@/types'

export const NavbarList: NavbarItem[] = [
  {
    text: '测试 Markdown 渲染',
    href: '/blogs',
    type: 'innerLink'
  },
  {
    text: '字体测试',
    href: '/fonts',
    type: 'innerLink'
  },
  {
    text: '项目',
    href: '/projects',
    type: 'innerLink'
  },
  {
    text: 'GitHub',
    href: 'https://github.com/recallwei',
    type: 'outerLink'
  }
]
