import React from 'react'
import { styled } from '../stitches.config'
import Box from './box'

const Code: React.FC = ({ children }) => (
  <Container tabIndex={0} as='pre'>
    <code>{children}</code>
  </Container>
)

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
  code: {
    display: 'grid',
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
