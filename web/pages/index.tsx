import type { ReactElement } from "react";
import Head from "next/head";
import styles from "./index.module.css";
import type { NextPageWithLayout } from "./_app";

import { Layout } from "@components";
import { AppConfig } from "@constants";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>{AppConfig.name}</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.hero_title}>{AppConfig.name}</div>
        {/* <div className={styles.title}>{"Portfolio"}</div> */}
        <div className={styles.description}>Taskward is a Task&Todo app.</div>
        <div>你好，我叫布鲁斯</div>
      </main>

      <footer className={styles.footer}></footer>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
