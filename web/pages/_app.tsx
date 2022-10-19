import type { AppProps } from "next/app";
import "../styles/globals.scss";

import { RecoilRoot } from "recoil";
import { NextUIProvider } from "@nextui-org/react";

import { commonTheme } from "@themes";
import { Layout } from "@components";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <NextUIProvider theme={commonTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </RecoilRoot>
  );
}

export default MyApp;
