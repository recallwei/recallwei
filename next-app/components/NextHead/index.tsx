import Head from "next/head";

import { NextHeadProps } from "@interfaces";

export default function NextHead({ title }: NextHeadProps): JSX.Element {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}
