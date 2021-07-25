import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Providers from '../components/providers'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const title = 'Ash - full stack web developer'

  return (
    <Providers pageProps={pageProps}>
      <Head>
        <title>{title}</title>
        <meta name='twitter:site' content='@juice49' />
        <meta property='og:title' content={title} />
      </Head>
      <Component {...pageProps} />
    </Providers>
  )
}

export default App
