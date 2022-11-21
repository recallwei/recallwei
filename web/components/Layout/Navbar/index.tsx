import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.scss";

import { useAppConfig } from "@hooks";
import type { AppConfig, NavbarItem, NavbarItemType } from "@interfaces";

export default function Navbar(): JSX.Element {
  const appConfig: AppConfig = useAppConfig();

  const getItemNode = (navItem: NavbarItem, index: number) => {
    if (navItem.type === "link") {
      return (
        <Link href={navItem.href} key={index} className={styles.navItem}>
          {navItem.text}
        </Link>
      );
    }
  };

  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.navbar}>
        <div className={styles.icon}>
          <Image
            src={appConfig.navbar.icon.src}
            alt={appConfig.navbar.icon.alt}
            width={appConfig.navbar.icon.width}
            height={appConfig.navbar.icon.height}
          />
          <div className={styles.text}>{appConfig.navbar.icon.text}</div>
        </div>
        <div className={styles.navItems}>
          <div className={styles.leftArea}>
            {appConfig.navbar.items
              .filter((navItem) => navItem.position === "left")
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
