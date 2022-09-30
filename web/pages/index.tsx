import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "@styles/Home.module.css";

const Home: NextPage = () => {
  const TITLE = "Bruce Song's Blog";
  return (
    <div className={styles.container}>
      <Head>
        <title>{TITLE}</title>
        <meta
          name="description"
          content="Bruce Song's personal blog to record problems and solution in daily development."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.hero_title}>{TITLE}</div>
        <div className={styles.title}>{"Portfolio"}</div>
        <div className={styles.description}>Taskward is a Task&Todo app.</div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
