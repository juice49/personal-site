import React from 'react'
import { Toc } from '@stefanprobst/rehype-extract-toc'
import { styled } from '../stitches.config'
import HeadingLevel from './heading-level'
import Box from './box'
import Text from './text'

interface Props {
  children: Toc
}

const TableOfContents: React.FC<Props> = ({ children }) => (
  <Box
    css={{
      stackBlock: '$small',
      '@i2': {
        padding: '$medium',
        border: '4px double $accentA',
      },
    }}
  >
    <HeadingLevel>
      <Text size='milli' weight='bold'>
        Table of contents
      </Text>
    </HeadingLevel>
    <ListContainer>{children}</ListContainer>
  </Box>
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

const List = styled('ol', {
  $$gap: '0.5em',
  marginInlineStart: '$medium',
  listStyle: 'square',
  stackBlock: '$$gap',
  ol: {
    listStyle: 'circle',
  },
})

const Item = styled(Text, {
  stackBlock: '$$gap',
  defaultVariants: {
    size: 'micro',
    variant: 'mono',
  },
})
