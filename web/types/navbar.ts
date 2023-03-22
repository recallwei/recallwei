export type NavbarItemType = NavbarItemTextType | NavbarItemLinkType

export type NavbarItemTextType = 'text'

export type NavbarItemLinkType = 'innerLink' | 'outerLink'

export type NavbarItem =
  | {
      text: string
      href?: string
      type: NavbarItemTextType
    }
  | { text: string; href: string; type: NavbarItemLinkType }
