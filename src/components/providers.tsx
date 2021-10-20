import React from 'react'
import { CodeBlocksContext } from '../components/code'

interface Props {
  pageProps?: {
    __nextSsgCodeBlocks?: NextSsgCodeBlock[]
  }
}

const Providers: React.FC<Props> = ({ children, pageProps }) => (
  <CodeBlocksContext.Provider value={pageProps?.__nextSsgCodeBlocks || {}}>
    {children}
  </CodeBlocksContext.Provider>
)

export default Providers
