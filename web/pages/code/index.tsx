import type { NextPage } from "next";
import Head from "next/head";

import { RouterConfig } from "@constants";

const CodePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>{RouterConfig.title.code}</title>
      </Head>
      <main></main>
    </>
  );
};

export default CodePage;
