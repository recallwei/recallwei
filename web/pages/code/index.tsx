import type { ReactElement } from "react";
import Head from "next/head";
import type { NextPageWithLayout } from "@interfaces";

import { Layout } from "@components";
import { RouterConfig } from "@constants";

const Code: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>{RouterConfig.title.code}</title>
      </Head>
      <main></main>
    </>
  );
};

Code.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Code;
