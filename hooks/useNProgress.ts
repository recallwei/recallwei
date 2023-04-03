'use client'
import { useEffect } from 'react'
import { Router } from 'next/router'
import NProgress from 'nprogress'

export default function useNProgress() {
  NProgress.configure({ showSpinner: false }) // Hide the spinner of NProgress
  useEffect(() => {
    Router.events.on('routeChangeStart', (url) => {
      console.log(url)
      NProgress.start()
    })
    Router.events.on('routeChangeComplete', (url) => {
      console.log(url)
      NProgress.done()
    })
    Router.events.on('routeChangeError', (url) => {
      console.log(url)
      NProgress.done()
    })

    console.log(Router.events.on)

    return () => {
      Router.events.off('routeChangeStart', (url) => {
        console.log(url)
        NProgress.start()
      })
      Router.events.off('routeChangeComplete', (url) => {
        console.log(url)
        NProgress.done()
      })
      Router.events.off('routeChangeError', (url) => {
        console.log(url)
        NProgress.done()
      })
    }
  }, [Router])
}
