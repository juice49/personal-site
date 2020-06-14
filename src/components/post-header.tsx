import React from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
import Stack from './stack'
import Tag from './tag'
import FeaturedSection from './featured-section'

interface Props {
  date?: string,
  column?: string
}

const PostHeader: React.FC<Props> = ({ children, date, column }) => (
  <Container>
    <Stack gap={2}>
      {date && (
        <div>
          <Time dateTime={date}>
            {date}
          </Time>
        </div>
      )}
      <Heading>
        {children}
      </Heading>
      {column && (
        <div>
          <Tag>
            {column}
          </Tag>
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
    <TimeContainer dateTime={dateTime}>
      {format(date, 'dd/MM/yyyy')}
    </TimeContainer>
  )
}

const TimeContainer = styled.time`
  font-family: Arnold;
  font-size: 0.55rem;
  color: #5c5c5c;
`

const Heading = styled.p`
  font-family: 'Zangezi Sans';
  font-weight: 700;
  color: var(--accent-color);
  line-height: 1.06;
  font-size: 2.2rem;
  font-size: clamp(2.6rem, 7.2vw, 5.6rem);
  text-align: center;
`
