import Head from "next/head";

import { RouterConfig } from "@constants";

const Download = () => {
  return (
    <>
      <Head>
        <title>{RouterConfig.title.download}</title>
      </Head>
      <main></main>
    </>
  );
};

export default Download;
