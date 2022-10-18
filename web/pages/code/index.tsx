import type { NextPage } from "next";
import Head from "next/head";

import { RouterConfig } from "@constants";

const Code: NextPage = () => {
  return (
    <>
      <Head>
        <title>{RouterConfig.title.code}</title>
      </Head>
      <main></main>
    </>
  );
};

export default Code;
