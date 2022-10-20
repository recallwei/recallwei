import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { RouterConfig } from "@constants";

const Blog: NextPage = () => {
  return (
    <>
      <Head>
        <title>{RouterConfig.title.blog}</title>
      </Head>
      <main>
        <Link href="/front-end/file-structure">测试</Link>
      </main>
    </>
  );
};

export default Blog;
