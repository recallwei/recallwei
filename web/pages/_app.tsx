import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import "../styles/global.sass";

import { RecoilRoot } from "recoil";
import { NextUIProvider } from "@nextui-org/react";

import { commonTheme } from "@themes";
import {
  Layout,
  Heading,
  Paragraph,
  Pre,
  InlineCode,
  Image,
} from "@components";

const markdownComponents = {
  h1: Heading.H1,
  h2: Heading.H2,
  h3: Heading.H3,
  h4: Heading.H4,
  h5: Heading.H5,
  h6: Heading.H6,
  p: Paragraph,
  pre: Pre,
  code: InlineCode,
  img: Image,
};

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <NextUIProvider theme={commonTheme}>
        <Layout>
          <MDXProvider components={markdownComponents}>
            <Component {...pageProps} />
          </MDXProvider>
        </Layout>
      </NextUIProvider>
    </RecoilRoot>
  );
}

export default MyApp;
