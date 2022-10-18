import Head from "next/head";
import styles from "./index.module.scss";

import { AppConfig, RouterConfig } from "@constants";

const Home = () => {
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

export default Home;
