import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "./index.module.sass";

import { RouterConfig } from "@constants";

const Blog: NextPage = () => {
  return (
    <>
      <Head>
        <title>{RouterConfig.title.blog}</title>
      </Head>
      <main>
        <div className={styles.listWrapper}>
          <Link href="/front-end/file-structure">测试 Markdown 渲染结构</Link>
          <Link href="/front-end/engineering">前端工程化</Link>
        </div>
      </main>
    </>
  );
};

export default Blog;
