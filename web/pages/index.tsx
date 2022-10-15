import type { ReactElement } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "@styles/Home.module.css";
import type { NextPageWithLayout } from "./_app";
import { Layout } from "@components";

const Home: NextPageWithLayout = () => {
  const TITLE = "Bruce Song";

  return (
    <>
      <Head>
        <title>{TITLE}</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.hero_title}>{TITLE}</div>
        <div className={styles.title}>{"Portfolio"}</div>
        <div className={styles.description}>Taskward is a Task&Todo app.</div>
      </main>

      <footer className={styles.footer}></footer>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
