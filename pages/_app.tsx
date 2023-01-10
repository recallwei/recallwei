import { type ReactElement } from "react"
import type { AppProps } from "next/app"

import "@style/global.css"
import "nprogress/nprogress.css"
import { useNProgress } from "@modules"

export default function App({ Component, pageProps }: AppProps): ReactElement {
  useNProgress()
  return <Component {...pageProps} />
}
