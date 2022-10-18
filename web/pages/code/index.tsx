import Head from "next/head";

import { RouterConfig } from "@constants";

const Code = () => {
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
