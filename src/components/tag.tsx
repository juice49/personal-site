import React from 'react'
import styled from 'styled-components'

const Tag: React.FC = ({ children }) => (
  <TagBox>
    #{children}
  </TagBox>
)

export default Tag

const TagBox = styled.span`
  display: inline-block;
  padding: 0.25rem;
  font-family: Arnold;
  font-size: 0.55rem;
  background-color: #000;
  color: #fff;
`
