export type AppConfig = {
  appName: string;
  navbar: Navbar;
};

// 导航栏相关
export type Navbar = {
  icon: NavbarIcon;
  items: NavbarItem[];
};

export type NavbarIcon = {
  text: string;
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type NavbarItem = {
  text: string;
  href: string;
  type: NavbarItemType;
  position: NavbarItemPosition;
};

export type NavbarItemType = "link" | "outside-link" | "icon";
export type NavbarItemPosition = "left" | "right";
