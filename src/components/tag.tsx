import React, { FC, PropsWithChildren } from 'react'
import { styled } from '../stitches.config'
import Text from './text'

const Tag: FC<PropsWithChildren> = ({ children }) => (
  <Text as={TagBox} variant='mono' size='micro'>
    #{children}
  </Text>
)

export default Tag

const TagBox = styled('span', {
  display: 'inline-block',
  padding: '0.25rem',
  backgroundColor: '#000',
  color: '#fff',
})
