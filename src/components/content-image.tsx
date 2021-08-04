import React from 'react'
import Image, { ImageProps } from 'next/image'
import styled from 'styled-components'
import Box from '../components/box'
import Stack from '../components/stack'
import Note from '../components/note'

type Props = ImageProps & {
  caption?: React.ReactNode
}

const ContentImage: React.FC<Props> = ({ caption, ...props }) => (
  <Stack as='figure' gap={1}>
    <Box mx={-2}>
      <ImageContainer>
        <Image {...props} />
      </ImageContainer>
    </Box>
    {caption && <Note as='figcaption'>{caption}</Note>}
  </Stack>
)

export default ContentImage

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`
