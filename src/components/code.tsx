import React, { createContext, useContext } from 'react'
import styled from 'styled-components'
import Box from './box'

export const CodeBlocksContext = createContext({})

interface Props {
  code: string,
  language: string
}

const Code: React.FC<Props> = ({ language, code }) => {
  const codeBlocks = useContext(CodeBlocksContext)

  if (typeof codeBlocks[code] !== 'undefined') {
    return (
      <Container dangerouslySetInnerHTML={{ __html: codeBlocks[code] }} />
    )
  }

  const IS_SSG =
    typeof window === 'undefined' &&
    typeof global !== 'undefined' &&
    // @ts-ignore
    global.__nextSsgCodeBlocks

  if (IS_SSG) {  
    // @ts-ignore
    global.__nextSsgCodeBlocks.push({
      code,
      language
    })
  }

  return null
}

export default Code

const Container = styled(Box)`
  padding: var(--space2);
  background-color: #131313;
  font-size: 0.8rem;
  color: #fff;
  overflow: auto;

  code {
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    hyphens: none;
    tab-size: 2;
    font: inherit;
    font-family: Arnold;
  }

  /* .hljs-comment {
    color: #868e96;
  }

  .hljs-function,
  .hljs-function-variable,
  .hljs-selector {
    color: #e599f7;
    font-weight 700;
  }

  .hljs-tag,
  .hljs-property {
    color: #f06595;
  }

  .hljs-keyword {
    color: #20c997;
  }

  .hljs-punctuation {
    color: #ffe066;
  } */
`
