import type { ReactElement } from "react";
import Head from "next/head";
import styles from "./index.module.scss";
import type { NextPageWithLayout } from "./_app";

import { Layout } from "@components";
import { AppConfig, RouterConfig } from "@constants";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>{RouterConfig.title.home}</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.hero_title}>{AppConfig.info.name}</div>
        <div className={styles.description}>{AppConfig.info.description}</div>
      </main>

      <footer className={styles.footer}></footer>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
