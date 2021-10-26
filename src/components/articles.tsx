import Link, { LinkProps } from 'next/link'
import React from 'react'
import { format } from 'date-fns'
import { styled } from '../stitches.config'
import Box from './box'
import Tag from './tag'
import Text from './text'
import Heading from './heading'
import HeadingLevel from './heading-level'

const Articles = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(min(14rem, 100%), 1fr))',
  gap: '$4',
})

export default Articles

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
  <Box
    css={{
      stackBlock: '$small',
    }}
  >
    <Meta
      as={Box}
      css={{
        stackInline: '$small',
      }}
    >
      {column && <Tag>{column}</Tag>}
      <DateTime dateTime={date} />
    </Meta>
    <Link passHref {...link}>
      <ArticleLink>
        <HeadingLevel>
          <Heading>{title}</Heading>
        </HeadingLevel>
      </ArticleLink>
    </Link>
    <Text
      as='p'
      size='milli'
      css={{
        color: '$accentC',
      }}
    >
      {description}
    </Text>
  </Box>
)

interface DateTimeProps {
  dateTime: string
}

const DateTime: React.FC<DateTimeProps> = ({ dateTime }) => {
  const date = new Date(dateTime)

  return (
    <Text
      as='time'
      variant='mono'
      size='micro'
      dateTime={dateTime}
      css={{
        color: '#fff',
      }}
    >
      {format(date, 'd MMMM yyyy')}
    </Text>
  )
}

const ArticleLink = styled('a', {
  [`& ${Heading}`]: {
    color: '$accentC',
  },
  '&:hover, &:focus': {
    [`& ${Heading}`]: {
      color: '$accentB',
    },
  },
})

const Meta = styled('div', {
  display: 'flex',
  alignItems: 'center',
})
