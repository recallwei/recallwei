export type AppConfig = {
  appName: string;
  navbar: Navbar;
};

// 导航栏相关
type Navbar = {
  items: NavbarItem[];
};

type NavbarItem = {
  text: string;
  href: string;
};
