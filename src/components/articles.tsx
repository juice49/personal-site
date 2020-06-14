import Link, { LinkProps } from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
import Stack from './stack'
import Tag from './tag'
import Text from './text'
import Heading from './heading'

const Articles = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(14rem, 100%), 1fr)
  );
  grid-gap: var(--space4);
`

export default Articles

interface ArticleProps {
  column?: string,
  date: string,
  title: string,
  description: string,
  link: LinkProps
}

export const Article: React.FC<ArticleProps> = ({
  link,
  column,
  date,
  title,
  description
}) => (
  <Stack gap={1}>
    <Meta as={Stack} direction='inline' gap={1}>
      {column && (
        <Tag>
          {column}
        </Tag>
      )}
      <DateTime dateTime={date} />
    </Meta>
    <Link passHref {...link}>
      <ArticleLink>
        <Heading as='h3'>
          {title}
        </Heading>
      </ArticleLink>
    </Link>
    <Text
      as='p'
      size='milli'
      css={`
        color: var(--accent-color-c);
      `}
    >
      {description}
    </Text>
  </Stack>
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
      css={`
        color: #fff;
      `}
    >
      {format(date, 'dd/MM/yyyy')}
    </Text>
  )
}

const ArticleLink = styled.a`
  ${Heading} {
    color: var(--accent-color-c);
  }

  &:hover,
  &:focus {
    ${Heading} {
      color: var(--accent-color-b);
    }
  }
`

const Meta = styled.div`
  display: flex;
  align-items: center;
`
