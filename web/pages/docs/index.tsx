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
            return (
              <Link key={item.id} href={item.id}>
                {item.title}
              </Link>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default DocsPage;
