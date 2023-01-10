import Router from "next/router"
import NProgress from "nprogress"
import { useEffect } from "react"

const useNProgress = () => {
  NProgress.configure({ showSpinner: false }) // Hide the spinner of NProgress
  useEffect(() => {
    const handleRouteStart = () => NProgress.start()
    const handleRouteDone = () => NProgress.done()
    Router.events.on("routeChangeStart", handleRouteStart)
    Router.events.on("routeChangeComplete", handleRouteDone)
    Router.events.on("routeChangeError", handleRouteDone)
    return () => {
      Router.events.off("routeChangeStart", handleRouteStart)
      Router.events.off("routeChangeComplete", handleRouteDone)
      Router.events.off("routeChangeError", handleRouteDone)
    }
  }, [])
}

export default useNProgress
