export type AppConfig = {
  /** 应用名称 */
  appName: string;
  /** 导航栏 */
  navbar: Navbar;
};

// 导航栏相关
export type Navbar = {
  /** 导航栏图标 */
  icon: NavbarIcon;
  /** 导航栏元素列表 */
  items: NavbarItem[];
};

export type NavbarIcon = {
  /** 标题 */
  text?: string;
  /** 图片 */
  src: string;
  /** 链接 */
  href?: string;
  /** 图片宽度 */
  width?: number;
  /** 图片高度 */
  height?: number;
  alt?: string;
};

export type NavbarItem = {
  /** 文字 */
  text: string;
  /** 链接 */
  href: string;
  /** 导航栏元素类型 */
  type: NavbarItemType;
  /** 导航栏元素的位置，居左或居右。
   * @default left
   * */
  position?: NavbarItemPosition;
  // type === "icon" only
  /** 图片 */
  src?: string;
  /** 图片宽度 */
  width?: number;
  /** 图片高度 */
  height?: number;
  alt?: string;
};

export type NavbarItemType = "link" | "icon";
export type NavbarItemPosition = "left" | "right";
