import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { MDXProvider } from '@mdx-js/react'
import Providers from '../components/providers'
import OgImageMeta from '../components/og-image-meta'
import PostLayout from '../components/post-layout'
import MDXComponents from '../mdx-components'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const title = 'Ash - full stack web developer'

  return (
    <Providers pageProps={pageProps}>
      <MDXProvider components={{ ...MDXComponents, wrapper: PostLayout }}>
        <Head>
          <title>{title}</title>
          <meta name='twitter:site' content='@juice49' />
          <meta key='og:title' property='og:title' content={title} />
        </Head>
        <OgImageMeta title='I like to make things&mdash;usually with web technologies, and usually <em>for</em> the web.' />
        <Component {...pageProps} />
      </MDXProvider>
    </Providers>
  )
}

export default App
