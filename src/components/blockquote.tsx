import React, { FC, PropsWithChildren, Fragment } from 'react'
import { note } from '../styles/note.css'
import { blockquoteText } from '../styles/blockquote.css'

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
    <figure
      style={{
        stackBlock: '$small',
      }}
    >
      <blockquote
        style={{
          '@i3': {
            marginInline: 'calc($medium * -1)',
          },
        }}
        cite={citeUrl}
      >
        <div className={blockquoteText()}>{children}</div>
      </blockquote>
      {(author || cite) && (
        <figcaption className={note()}>
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
        </figcaption>
      )}
    </figure>
  )
}

export default Blockquote
