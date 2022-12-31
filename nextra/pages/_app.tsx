import type { ReactElement } from "react"
import type { AppProps } from "next/app"

import "@style/global.css"

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />
}
