import React, { createContext, useContext } from 'react'
import djb2a from 'djb2a'
import { styled } from '../stitches.config'
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

const Container = styled(Box, {
  padding: '$2',
  backgroundColor: '#131313',
  fontSize: '0.8rem',
  color: '#fff',
  overflow: 'auto',
  '&:focus': {
    outline: `
      2px auto Highlight;
      0 auto -webkit-focus-ring-color;
    `,
  },
  '.shiki': {
    backgroundColor: 'transparent !important',
  },
  code: {
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    hyphens: 'none',
    tabSize: 2,
    font: 'inherit',
    // fontFamily: 'Arnold',
    fontFamily: 'JetBrains Mono',
  },

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
})
