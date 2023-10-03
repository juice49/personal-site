import React from 'react'
import { Toc } from '@stefanprobst/rehype-extract-toc'
import HeadingLevel from './heading-level'
import text from '../styles/text.css'
import { tableOfContents, list, item } from '../styles/table-of-contents.css'
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
  <ol className={list()}>
    {children.map(entry => (
      <li className={item()} key={entry.id}>
        <a href={`#${entry.id}`}>{entry.value}</a>
        {entry.children && <ListContainer>{entry.children}</ListContainer>}
      </li>
    ))}
  </ol>
)
