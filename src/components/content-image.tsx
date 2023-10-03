import React from 'react'
import Image, { ImageProps } from 'next/image'
import { note } from '../styles/note.css'
import { imageContainer } from '../styles/content-image.css'
import { stack, stackBlockGapVar } from '../styles/stack.css'
import { vars } from '../theme.css'

type Props = ImageProps & {
  caption?: React.ReactNode
}

const ContentImage: React.FC<Props> = ({ caption, ...props }) => (
  <figure
    className={stack({ block: true })}
    style={{
      [stackBlockGapVar]: vars.space.small,
    }}
  >
    <div
      style={{
        marginInline: `calc(${vars.space.medium} * -1)`,
      }}
    >
      <div className={imageContainer()}>
        <Image {...props} />
      </div>
    </div>
    {caption && <figcaption className={note()}>{caption}</figcaption>}
  </figure>
)

export default ContentImage
