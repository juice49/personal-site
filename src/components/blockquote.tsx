import React, { FC, PropsWithChildren, Fragment } from 'react'
import { styled } from '../stitches.config'
import Box from '../components/box'
import Note from '../components/note'

interface Props {
  cite?: string
  citeUrl?: string
  author?: string
}

const Blockquote: FC<PropsWithChildren<Props>> = ({
  children,
  cite,
  citeUrl,
  author,
}) => {
  const AttributionContainer: React.ComponentType<
    React.AnchorHTMLAttributes<HTMLAnchorElement>
  > = props =>
    citeUrl ? <a {...props} /> : <Fragment>{props.children}</Fragment>

  return (
    <Box
      as='figure'
      css={{
        stackBlock: '$small',
      }}
    >
      <Box
        css={{
          '@i3': {
            marginInline: 'calc($medium * -1)',
          },
        }}
        as='blockquote'
        cite={citeUrl}
      >
        <BlockquoteText>{children}</BlockquoteText>
      </Box>
      {(author || cite) && (
        <Note as='figcaption'>
          &mdash;&thinsp;
          <AttributionContainer href={citeUrl}>
            {(
              [
                author,
                cite ? <cite key='cite'>{cite}</cite> : undefined,
              ] as React.ReactNode[]
            )
              .filter(segment => typeof segment !== 'undefined')
              .map((segment, index) => (
                <Fragment key={index}>
                  {index !== 0 && ', '}
                  {segment}
                </Fragment>
              ))}
          </AttributionContainer>
        </Note>
      )}
    </Box>
  )
}

export default Blockquote

const BlockquoteText = styled('div', {
  fontSize: '1.4rem',
  fontFamily: 'Zangezi Sans',
  lineHeight: 1.2,
  color: '$accentA',
})
