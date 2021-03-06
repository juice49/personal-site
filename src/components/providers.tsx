import React from 'react'
import { Theme } from 'monstera'
import { ThemeProvider } from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import { CodeBlocksContext } from '../components/code'
import PostLayout from '../components/post-layout'
import Code from '../components/code'
import Box from '../components/box'
import Heading from '../components/heading'

const theme: Theme = {
  breakpoints: [
    [30, 'em'],
    [45, 'em'],
    [65, 'em'],
    [72, 'em'],
  ],
}

const MDXComponents = {
  wrapper: PostLayout,
  pre: ({ children }) => children,
  code: function CodeComponent({ className, children }) {
    return (
      <Box mx={-2}>
        <Code code={children} language={className.replace(/language-/, '')} />
      </Box>
    )
  },
  h1: function H1(props) {
    return <Heading as='h1' {...props} />
  },
  h2: function H2(props) {
    return <Heading as='h2' {...props} />
  },
  h3: function H3(props) {
    return <Heading as='h3' {...props} />
  },
  h4: function H4(props) {
    return <Heading as='h4' {...props} />
  },
  h5: function H5(props) {
    return <Heading as='h5' {...props} />
  },
  h6: function H6(props) {
    return <Heading as='h6' {...props} />
  },
}

interface Props {
  pageProps?: any
}

const Providers: React.FC<Props> = ({ children, pageProps }) => (
  <ThemeProvider theme={theme}>
    <CodeBlocksContext.Provider value={pageProps?.__nextSsgCodeBlocks || {}}>
      <MDXProvider components={MDXComponents}>{children}</MDXProvider>
    </CodeBlocksContext.Provider>
  </ThemeProvider>
)

export default Providers
