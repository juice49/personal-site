import React, { createContext, useContext } from 'react'
import styled from 'styled-components'
import djb2a from 'djb2a'
import Box from './box'

export const CodeBlocksContext = createContext({})

interface Props {
  code: string
  language: string
}

const Code: React.FC<Props> = ({ language, code }) => {
  const codeBlocks = useContext(CodeBlocksContext)
  const hash = djb2a(code)

  if (typeof codeBlocks[hash] !== 'undefined') {
    return (
      <Container
        dangerouslySetInnerHTML={{ __html: codeBlocks[hash] }}
        tabIndex={0}
      />
    )
  }

  const IS_SSG =
    typeof window === 'undefined' &&
    typeof global !== 'undefined' &&
    global.__nextSsgCodeBlocks

  if (IS_SSG) {
    global.__nextSsgCodeBlocks.push({
      code,
      language,
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

  &:focus {
    outline: 2px auto Highlight;
    outline: 0 auto -webkit-focus-ring-color;
  }

  .shiki {
    background-color: transparent !important;
  }

  code {
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    hyphens: none;
    tab-size: 2;
    font: inherit;
    font-family: Arnold;
    font-family: 'JetBrains Mono';
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
