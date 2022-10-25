import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react'
import { MDXProvider } from '@mdx-js/react'
import { PostMeta } from '../types/post'
import Box from '../components/box'
import OgImageMeta from '../components/og-image-meta'
import PostLayout from '../components/post-layout'
import ContentImage from '../components/content-image'
import Code from '../components/code'
import InlineCode from '../components/inline-code'
import MDXComponents from '../mdx-components'

const App: React.FC<
  AppProps<{
    meta?: PostMeta
  }>
> = ({ Component, pageProps }) => {
  const title = 'Ash - full stack web developer'

  return (
    <MDXProvider
      components={{
        ...MDXComponents,
        wrapper: props => <PostLayout meta={pageProps.meta} {...props} />,
        Image: ContentImage,
        code: function CodeComponent({ children, ...props }) {
          if (typeof props['data-language'] === 'undefined') {
            return <InlineCode>{children}</InlineCode>
          }

          return (
            <Box
              css={{
                marginInline: 'calc($medium * -1)',
              }}
            >
              <Code>{children}</Code>
            </Box>
          )
        },
      }}
    >
      <Head>
        <title>{title}</title>
        <meta name='twitter:site' content='@juice49' />
        <meta key='og:title' property='og:title' content={title} />
        <link rel='alternate' type='application/feed+json' href='/feed' />
      </Head>
      <OgImageMeta title='I like to make things&mdash;usually with web technologies, and usually <em>for</em> the web.' />
      <Component {...pageProps} />
      <Analytics />
    </MDXProvider>
  )
}

export default App
