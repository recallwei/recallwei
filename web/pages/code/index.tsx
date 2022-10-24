import type { NextPage } from "next";
import Head from "next/head";

import { getTitleByRouterId } from "@utils";

const CodePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>{getTitleByRouterId("HOME")}</title>
      </Head>
      <main></main>
    </>
  );
};

export default CodePage;
