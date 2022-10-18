import type { NextPage } from "next";
import Head from "next/head";

import { RouterConfig } from "@constants";

const Blog: NextPage = () => {
  return (
    <>
      <Head>
        <title>{RouterConfig.title.blog}</title>
      </Head>
      <main></main>
    </>
  );
};

export default Blog;
