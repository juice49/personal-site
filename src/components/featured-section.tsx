import React, { FC, PropsWithChildren } from 'react'
import text from '../styles/text.css'
import HeadingLevel from './heading-level'
import { featuredSectionBox, inner } from '../styles/featured-section.css'

const FeaturedSection: FC<PropsWithChildren> = ({ children }) => (
  <div className={featuredSectionBox()}>
    <div className={inner()}>{children}</div>
  </div>
)

export default FeaturedSection

export const FeaturedSectionHeading: FC<PropsWithChildren> = ({ children }) => (
  <div
    style={{
      paddingBlockEnd: '$small',
      color: '$accentB',
      borderBlockEnd: '1px dashed currentColor',
    }}
  >
    <HeadingLevel>
      <span className={text({ variant: 'mono', size: 'milli' })}>
        {children}
      </span>
    </HeadingLevel>
  </div>
)
