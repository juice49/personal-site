import React from 'react'
import { Theme } from 'monstera'
import { ThemeProvider } from 'styled-components'
import { CodeBlocksContext } from '../components/code'

const theme: Theme = {
  breakpoints: [
    [30, 'em'],
    [45, 'em'],
    [65, 'em'],
    [72, 'em'],
  ],
}

interface Props {
  pageProps?: {
    __nextSsgCodeBlocks?: NextSsgCodeBlock[]
  }
}

const Providers: React.FC<Props> = ({ children, pageProps }) => (
  <ThemeProvider theme={theme}>
    <CodeBlocksContext.Provider value={pageProps?.__nextSsgCodeBlocks || {}}>
      {children}
    </CodeBlocksContext.Provider>
  </ThemeProvider>
)

export default Providers
