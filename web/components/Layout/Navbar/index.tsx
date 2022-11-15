import Link from "next/link";
import styles from "./index.module.scss";

import { useAppConfig } from "@hooks";
import { AppConfig } from "@interfaces";

export default function Navbar(): JSX.Element {
  const appConfig: AppConfig = useAppConfig();
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.navbar}>
        <div className={styles.navItems}>
          {appConfig.navbar.items.map((navItem, index) => (
            <Link href={navItem.href} key={index} className={styles.navItem}>
              {navItem.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
