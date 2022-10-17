import type { ReactElement } from "react";
import Head from "next/head";
import type { NextPageWithLayout } from "@interfaces";

import { Layout } from "@components";
import { RouterConfig } from "@constants";

const Blog: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>{RouterConfig.title.blog}</title>
      </Head>
      <main></main>
    </>
  );
};

Blog.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Blog;
