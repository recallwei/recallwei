import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "./index.module.sass";

import { AppConfig } from "@config";
import { getTitleByRouterId } from "@utils";

const DocsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>{getTitleByRouterId("DOCS")}</title>
      </Head>
      <main>
        <div className={styles.listWrapper}>
          {AppConfig.docs.items.map((item) => {
            if (!item.draft)
              return (
                <div key={item.id} className={styles.card}>
                  <Link href={item.id} className={styles.title}>
                    {item.title}
                  </Link>
                  <div className={styles.description}>{item.description}</div>
                  <div className={styles.time}>{item.finishedAt}</div>
                </div>
              );
          })}
        </div>
      </main>
    </>
  );
};

export default DocsPage;
