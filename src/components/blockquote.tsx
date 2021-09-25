import React from 'react'
import styled from 'styled-components'
import Box from '../components/box'
import Stack from '../components/stack'
import Note from '../components/note'

interface Props {
  cite?: string
  citeUrl?: string
  author?: string
}

const Blockquote: React.FC<Props> = ({ children, cite, citeUrl, author }) => {
  const AttributionContainer: React.ComponentType<
    React.AnchorHTMLAttributes<HTMLAnchorElement>
  > = props =>
    citeUrl ? <a {...props} /> : <React.Fragment children={props.children} />

  return (
    <Stack as='figure' gap={1}>
      <Box mx={[0, 0, -2]} as='blockquote' cite={citeUrl}>
        <BlockquoteText>{children}</BlockquoteText>
      </Box>
      {(author || cite) && (
        <Note as='figcaption'>
          &mdash;&thinsp;
          <AttributionContainer href={citeUrl}>
            {([
              author,
              cite ? <cite key='cite'>{cite}</cite> : undefined,
            ] as React.ReactNode[])
              .filter(segment => typeof segment !== 'undefined')
              .map((segment, index) => (
                <React.Fragment key={index}>
                  {index !== 0 && ', '}
                  {segment}
                </React.Fragment>
              ))}
          </AttributionContainer>
        </Note>
      )}
    </Stack>
  )
}

export default Blockquote

const BlockquoteText = styled.div`
  font-size: 1.4rem;
  font-family: 'Zangezi Sans';
  line-height: 1.2;
  color: var(--accent-color);
`
