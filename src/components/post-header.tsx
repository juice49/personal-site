import React, { FC, PropsWithChildren } from 'react'
import { format } from 'date-fns'
import Tag from './tag'
import text from '../styles/text.css'
import FeaturedSection from './featured-section'
import HeadingLevel from './heading-level'
import { container, postHeading } from '../styles/post-header.css'
import { stack, stackBlockGapVar } from '../styles/stack.css'
import { vars } from '../theme.css'

interface Props {
  date?: string
  column?: string
}

const PostHeader: FC<PropsWithChildren<Props>> = ({
  children,
  date,
  column,
}) => (
  <header className={container()}>
    <div
      className={stack({ block: true })}
      style={{
        [stackBlockGapVar]: vars.space.medium,
      }}
    >
      {date && (
        <div>
          <Time dateTime={date}>{date}</Time>
        </div>
      )}
      <HeadingLevel>
        <h1 className={postHeading()}>{children}</h1>
      </HeadingLevel>
      {column && (
        <div>
          <Tag>{column}</Tag>
        </div>
      )}
    </div>
  </header>
)

export default PostHeader

interface DateProps {
  dateTime: string
}

const Time: FC<PropsWithChildren<DateProps>> = ({ dateTime }) => {
  const date = new Date(dateTime)

  return (
    <time
      className={text({ variant: 'mono', size: 'micro' })}
      dateTime={dateTime}
      style={{
        color: vars.colors.bodySubtle,
      }}
    >
      {format(date, 'd MMMM yyyy')}
    </time>
  )
}
