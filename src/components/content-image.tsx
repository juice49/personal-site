import React from 'react'
import Image, { ImageProps } from 'next/image'
import { note } from '../styles/note.css'
import { imageContainer } from '../styles/content-image.css'

type Props = ImageProps & {
  caption?: React.ReactNode
}

const ContentImage: React.FC<Props> = ({ caption, ...props }) => (
  <figure
    style={{
      stackBlock: '$small',
    }}
  >
    <div
      style={{
        marginInline: 'calc($medium * -1)',
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
