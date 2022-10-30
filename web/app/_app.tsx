import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import { Provider as ReduxStoreProvider } from "react-redux";
import "../styles/global.sass";

import { store } from "@store";
import { Heading, Paragraph, Pre, InlineCode, Image } from "@components";

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

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ReduxStoreProvider store={store}>
      <MDXProvider components={markdownComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </ReduxStoreProvider>
  );
}

export default App;
