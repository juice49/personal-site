import Link, { LinkProps } from 'next/link'
import React from 'react'
import { format } from 'date-fns'
import Tag from './tag'
import text from '../styles/text.css'
import { heading } from '../styles/heading.css'
import { articleLink, meta } from '../styles/articles.css'
import HeadingLevel from './heading-level'

interface ArticleProps {
  column?: string
  date: string
  title: string
  description: string
  link: LinkProps
}

export const Article: React.FC<ArticleProps> = ({
  link,
  column,
  date,
  title,
  description,
}) => (
  <div
    style={{
      stackBlock: '$small',
    }}
  >
    <div
      className={meta()}
      // FIXME
      // as={Box}
      style={{
        stackInline: '$small',
      }}
    >
      {column && <Tag>{column}</Tag>}
      <DateTime dateTime={date} />
    </div>
    <Link {...link} className={articleLink()}>
      <HeadingLevel>
        <h1 className={heading()}>{title}</h1>
      </HeadingLevel>
    </Link>
    <p
      className={text({ size: 'milli' })}
      style={{
        color: '$accentC',
      }}
    >
      {description}
    </p>
  </div>
)

interface DateTimeProps {
  dateTime: string
}

const DateTime: React.FC<DateTimeProps> = ({ dateTime }) => {
  const date = new Date(dateTime)

  return (
    <time
      className={text({ variant: 'mono', size: 'micro' })}
      dateTime={dateTime}
      style={{
        color: '#fff',
      }}
    >
      {format(date, 'd MMMM yyyy')}
    </time>
  )
}
