import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Providers from '../components/providers'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Providers pageProps={pageProps}>
    <Head>
      <title>Ash - full stack web developer</title>
    </Head>
    <Component {...pageProps} />
  </Providers>
)

export default App
