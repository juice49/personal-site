import React from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
import Stack from './stack'
import Tag from './tag'
import Text from './text'
import FeaturedSection from './featured-section'

interface Props {
  date?: string
  column?: string
}

const PostHeader: React.FC<Props> = ({ children, date, column }) => (
  <Container>
    <Stack gap={2}>
      {date && (
        <div>
          <Time dateTime={date}>{date}</Time>
        </div>
      )}
      <Heading>{children}</Heading>
      {column && (
        <div>
          <Tag>{column}</Tag>
        </div>
      )}
    </Stack>
  </Container>
)

export default PostHeader

const Container = styled.header`
  text-align: center;
`

interface DateProps {
  dateTime: string
}

const Time: React.FC<DateProps> = ({ dateTime }) => {
  const date = new Date(dateTime)

  return (
    <Text
      as='time'
      dateTime={dateTime}
      variant='mono'
      size='micro'
      css={`
        color: var(--body-color-subtle);
      `}
    >
      {format(date, 'd MMMM yyyy')}
    </Text>
  )
}

const Heading = styled.h1`
  font-family: 'Zangezi Sans';
  font-weight: 700;
  color: var(--accent-color);
  line-height: 1.06;
  font-size: 2.2rem;
  font-size: clamp(2.6rem, 7.2vw, 5.6rem);
  text-align: center;
`
