import "../styles/globals.css";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import { RecoilRoot } from "recoil";
import { NextUIProvider } from "@nextui-org/react";

import { commonTheme } from "@themes";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <RecoilRoot>
      <NextUIProvider theme={commonTheme}>
        {getLayout(<Component {...pageProps} />)}
      </NextUIProvider>
    </RecoilRoot>
  );
}

export default MyApp;
