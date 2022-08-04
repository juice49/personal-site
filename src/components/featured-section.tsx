import React, { FC, PropsWithChildren } from 'react'
import { styled } from '../stitches.config'
import Box from './box'
import Text from './text'
import HeadingLevel from './heading-level'

const FeaturedSection: FC<PropsWithChildren> = ({ children }) => (
  <FeaturedSectionBox>
    <Inner>{children}</Inner>
  </FeaturedSectionBox>
)

export default FeaturedSection

const FeaturedSectionBox = styled('div', {
  position: 'relative',
  '&::before': {
    content: '',
    position: 'absolute',
    inset: 0,
    transform: 'skew(0.7deg, 0.7deg)',
    backgroundColor: '#1e58fa',
  },
})

const Inner = styled('div', {
  position: 'relative',
})

export const FeaturedSectionHeading: FC<PropsWithChildren> = ({ children }) => (
  <Box
    css={{
      paddingBlockEnd: '$small',
      color: '$accentB',
      borderBlockEnd: '1px dashed currentColor',
    }}
  >
    <HeadingLevel>
      <Text variant='mono' size='milli'>
        {children}
      </Text>
    </HeadingLevel>
  </Box>
)
