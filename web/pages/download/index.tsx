import type { ReactElement } from "react";
import Head from "next/head";
import type { NextPageWithLayout } from "@interfaces";

import { Layout } from "@components";
import { RouterConfig } from "@constants";

const Download: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>{RouterConfig.title.download}</title>
      </Head>
      <main></main>
    </>
  );
};

Download.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Download;
