import React from 'react'
import { Toc } from '@stefanprobst/rehype-extract-toc'
import HeadingLevel from './heading-level'
import text from '../styles/text.css'
import { tableOfContents } from '../styles/table-of-contents.css'
import { stack, stackBlockGapVar } from '../styles/stack.css'
import { vars } from '../theme.css'

interface Props {
  children: Toc
}

const TableOfContents: React.FC<Props> = ({ children }) => (
  <div
    className={[tableOfContents(), stack({ block: true })].join(' ')}
    style={{
      [stackBlockGapVar]: vars.space.small,
    }}
  >
    <HeadingLevel>
      <span className={text({ size: 'milli', weight: 'bold' })}>
        Table of contents
      </span>
    </HeadingLevel>
    <ListContainer>{children}</ListContainer>
  </div>
)

export default TableOfContents

const ListContainer: React.FC<Props> = ({ children }) => (
  <List>
    {children.map(entry => (
      <Item key={entry.id} as='li'>
        <a href={`#${entry.id}`}>{entry.value}</a>
        {entry.children && <ListContainer>{entry.children}</ListContainer>}
      </Item>
    ))}
  </List>
)

// FIXME
const List = 'ol'
// const List = styled('ol', {
//   $$gap: '0.5em',
//   marginInlineStart: '$medium',
//   listStyle: 'square',
//   stackBlock: '$$gap',
//   ol: {
//     listStyle: 'circle',
//   },
// })

// FIXME
const Item = 'span'
// const Item = styled(Text, {
//   stackBlock: '$$gap',
//   defaultVariants: {
//     size: 'micro',
//     variant: 'mono',
//   },
// })
