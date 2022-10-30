import styles from "./page.module.sass";

import { AppConfig } from "@config";

export default async function HomePage() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.hero_title}>{AppConfig.info.name}</div>
        <div className={styles.description}>{AppConfig.info.description}</div>
      </main>

      <footer className={styles.footer}></footer>
    </>
  );
}
