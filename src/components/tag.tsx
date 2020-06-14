import React from 'react'
import styled from 'styled-components'
import Text from './text'

const Tag: React.FC = ({ children }) => (
  <Text as={TagBox} variant='mono' size='micro'>
    #{children}
  </Text>
)

export default Tag

const TagBox = styled.span`
  display: inline-block;
  padding: 0.25rem;
  background-color: #000;
  color: #fff;
`
