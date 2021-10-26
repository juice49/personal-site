import React from 'react'
import Image, { ImageProps } from 'next/image'
import { styled } from '../stitches.config'
import Box from '../components/box'
import Note from '../components/note'

type Props = ImageProps & {
  caption?: React.ReactNode
}

const ContentImage: React.FC<Props> = ({ caption, ...props }) => (
  <Box
    as='figure'
    css={{
      stackBlock: '$small',
    }}
  >
    <Box
      css={{
        marginInline: 'calc($medium * -1)',
      }}
    >
      <ImageContainer>
        <Image {...props} />
      </ImageContainer>
    </Box>
    {caption && <Note as='figcaption'>{caption}</Note>}
  </Box>
)

export default ContentImage

const ImageContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
})
