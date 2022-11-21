import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.scss";

import { useAppConfig } from "@hooks";
import type { AppConfig, NavbarItem } from "@interfaces";

export default function Navbar(): JSX.Element {
  const appConfig: AppConfig = useAppConfig();

  const getItemNode = (
    navItem: NavbarItem,
    index: number
  ): JSX.Element | null => {
    if (navItem.type === "link") {
      return (
        <Link href={navItem.href} key={index} className={styles.navLinkItem}>
          {navItem.text}
        </Link>
      );
    } else if (navItem.type === "icon" && navItem.src) {
      return (
        <Link
          href={navItem.href}
          key={index}
          className={styles.navIconItemWrapper}
        >
          <Image
            className={styles.navIconItem}
            src={navItem.src}
            alt={navItem.alt ?? ""}
            width={navItem.width ?? 24}
            height={navItem.height ?? 24}
          />
        </Link>
      );
    } else {
      return null;
    }
  };

  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.navbar}>
        <Link
          className={styles.iconWrapper}
          href={appConfig.navbar.icon.href ?? "/"}
        >
          <Image
            className={styles.icon}
            src={appConfig.navbar.icon.src}
            alt={appConfig.navbar.icon.alt ?? ""}
            width={appConfig.navbar.icon.width ?? 32}
            height={appConfig.navbar.icon.height ?? 32}
          />
          {appConfig.navbar.icon.text && (
            <div className={styles.text}>{appConfig.navbar.icon.text}</div>
          )}
        </Link>
        <div className={styles.navItems}>
          <div className={styles.leftArea}>
            {appConfig.navbar.items
              .filter((navItem) => navItem.position !== "right")
              .map((navItem, index) => getItemNode(navItem, index))}
          </div>
          <div className={styles.rightArea}>
            {appConfig.navbar.items
              .filter((navItem) => navItem.position === "right")
              .map((navItem, index) => getItemNode(navItem, index))}
          </div>
        </div>
      </div>
    </div>
  );
}
