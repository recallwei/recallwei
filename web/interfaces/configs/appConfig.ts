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
  text?: string;
  src: string;
  href?: string;
  width?: number;
  height?: number;
  alt?: string;
};

export type NavbarItem = {
  text: string;
  href: string;
  type: NavbarItemType;
  position?: NavbarItemPosition;
  // type === "icon" only
  src?: string;
  width?: number;
  height?: number;
  alt?: string;
};

export type NavbarItemType = "link" | "icon";
export type NavbarItemPosition = "left" | "right";
