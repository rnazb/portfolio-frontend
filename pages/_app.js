import App from "next/app"
import { useRouter } from "next/router"
import { createContext, useEffect } from "react"
import { getStrapiMedia } from "../lib/media"
import { fetchAPI } from "../lib/api"

import Layout from "../components/Layout/Layout"
import Footer from "../components/Layout/Footer"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/globals.css"

import * as ga from "../lib/ga"

export const GlobalContext = createContext({})

function MyApp({ Component, pageProps }) {
  const { global } = pageProps

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }

    router.events.on("routeChangeComplete", handleRouteChange)

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <GlobalContext.Provider value={global}>
        <Layout>
          <Component {...pageProps} />
          <Footer />
        </Layout>
      </GlobalContext.Provider>
    </>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx)
  // Fetch global site settings from Strapi
  const global = await fetchAPI("/global")
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global } }
}

export default MyApp
