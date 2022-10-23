import type { NextPage } from "next";
import Head from "next/head";
import styles from "./index.module.sass";

import { AppConfig } from "@config";
import { getTitleByRouterId } from "@utils";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>{getTitleByRouterId("HOME")}</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.hero_title}>{AppConfig.info.name}</div>
        <div className={styles.description}>{AppConfig.info.description}</div>
      </main>

      <footer className={styles.footer}></footer>
    </>
  );
};

export default HomePage;
