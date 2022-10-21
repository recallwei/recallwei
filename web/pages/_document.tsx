import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import { CssBaseline } from "@nextui-org/react";
import { Children } from "react";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: Children.toArray([initialProps.styles]),
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&family=Noto+Sans+SC:wght@100;300;400;500;700;900&family=Signika+Negative:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" type="image/svg+xml" href="/favicon.png" />
          <meta
            name="description"
            content="Bruce Song's personal blog to record problems and solution in daily development."
          />
          {CssBaseline.flush()}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
