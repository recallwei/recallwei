import type { NextPage } from "next";
import Head from "next/head";
import clsx from "clsx";
import styles from "./index.module.sass";

import { AppConfig, RouterConfig } from "@constants";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{RouterConfig.title.home}</title>
      </Head>

      <main className={clsx(styles.main, "fontCursive")}>
        <div className={styles.hero_title}>{AppConfig.info.name}</div>
        <div className={styles.description}>{AppConfig.info.description}</div>
      </main>

      <footer className={styles.footer}></footer>
    </>
  );
};

export default Home;
