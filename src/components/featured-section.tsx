import React from 'react'
import styled from 'styled-components'
import Box from './box'
import Text from './text'

const FeaturedSection: React.FC = ({ children }) => (
  <FeaturedSectionBox>
    <Inner>
      {children}
    </Inner>
  </FeaturedSectionBox>
)

export default FeaturedSection

const FeaturedSectionBox = styled.div`
  --link-focus-outline-color: var(--accent-color-b);
  position: relative;
  margin-left: var(--space2);
  margin-right: var(--space2);

  &::before {
    content: '';
    position: absolute;

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: skew(0.7deg, 0.7deg);
    background-color: var(--featured-section-bg, #1e58fa);
    content: '';
  }
`

const Inner = styled.div`
  position: relative;
`

export const FeaturedSectionHeading: React.FC = ({ children }) => (
  <Box
    pb={1}
    css={`
      color: var(--accent-color-b);
      border-bottom: 1px dashed currentColor;
    `}
  >
    <Text
      as='h2'
      variant='mono'
      size='milli'
    >
      {children}
    </Text>
  </Box>
)
