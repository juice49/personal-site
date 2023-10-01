import React, { FC, PropsWithChildren } from 'react'
import text from '../styles/text.css'

const Tag: FC<PropsWithChildren> = ({ children }) => (
  <TagBox className={text({ variant: 'mono', size: 'micro' })}>
    #{children}
  </TagBox>
)

export default Tag

// FIXME
const TagBox = 'span'
// const TagBox = styled('span', {
//   display: 'inline-block',
//   padding: '0.25rem',
//   backgroundColor: '#000',
//   color: '#fff',
// })
