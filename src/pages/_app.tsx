import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import * as gtag from '../lib/gtag'
import Providers from '../components/providers'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url)
    }
    Router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return (
    <Providers pageProps={pageProps}>
      <Head>
        <title>Ash - full stack web developer</title>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </Providers>
  )
}

export default App
