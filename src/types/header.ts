export interface NavItem {
  title: string
  href: string
  icon: astroHTML.JSX.Element
  onlyLabel?: boolean
  onlyIcon?: boolean
}
