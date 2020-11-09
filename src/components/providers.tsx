import React from 'react'
import { MonsteraContext, MonsteraConfig, CssValue } from 'monstera'
import { ThemeProvider } from 'styled-components'
import { MDXProvider } from '@mdx-js/react'
import { CodeBlocksContext } from '../components/code'
import PostLayout from '../components/post-layout'
import Code from '../components/code'
import Box from '../components/box'
import Heading from '../components/heading'

const breakpoints: CssValue[] = [
  [30, 'em'],
  [45, 'em'],
  [65, 'em'],
  [72, 'em'],
]

const monsteraConfig: MonsteraConfig = {
  breakpoints,
}

const theme = {
  breakpoints: breakpoints.map(value => value.join('')),
}

const MDXComponents = {
  wrapper: PostLayout,
  pre: ({ children }) => children,
  code: ({ className, children }) => (
    <Box mx={-2}>
      <Code code={children} language={className.replace(/language-/, '')} />
    </Box>
  ),
  h1: props => <Heading as='h1' {...props} />,
  h2: props => <Heading as='h2' {...props} />,
  h3: props => <Heading as='h3' {...props} />,
  h4: props => <Heading as='h4' {...props} />,
  h5: props => <Heading as='h5' {...props} />,
  h6: props => <Heading as='h6' {...props} />,
}

interface Props {
  pageProps?: any
}

const Providers: React.FC<Props> = ({ children, pageProps }) => (
  <MonsteraContext.Provider value={monsteraConfig}>
    <ThemeProvider theme={theme}>
      <CodeBlocksContext.Provider value={pageProps?.__nextSsgCodeBlocks || {}}>
        <MDXProvider components={MDXComponents}>{children}</MDXProvider>
      </CodeBlocksContext.Provider>
    </ThemeProvider>
  </MonsteraContext.Provider>
)

export default Providers
