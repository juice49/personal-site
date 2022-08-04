import React, { FC, PropsWithChildren } from 'react'
import { format } from 'date-fns'
import { styled } from '../stitches.config'
import Box from './box'
import Tag from './tag'
import Text from './text'
import FeaturedSection from './featured-section'
import HeadingLevel from './heading-level'

interface Props {
  date?: string
  column?: string
}

const PostHeader: FC<PropsWithChildren<Props>> = ({
  children,
  date,
  column,
}) => (
  <Container>
    <Box
      css={{
        stackBlock: '$medium',
      }}
    >
      {date && (
        <div>
          <Time dateTime={date}>{date}</Time>
        </div>
      )}
      <HeadingLevel>
        <Heading>{children}</Heading>
      </HeadingLevel>
      {column && (
        <div>
          <Tag>{column}</Tag>
        </div>
      )}
    </Box>
  </Container>
)

export default PostHeader

const Container = styled('header', {
  textAlign: 'center',
})

interface DateProps {
  dateTime: string
}

const Time: FC<PropsWithChildren<DateProps>> = ({ dateTime }) => {
  const date = new Date(dateTime)

  return (
    <Text
      as='time'
      dateTime={dateTime}
      variant='mono'
      size='micro'
      css={{
        color: '$bodySubtle',
      }}
    >
      {format(date, 'd MMMM yyyy')}
    </Text>
  )
}

const Heading = styled('h1', {
  fontFamily: 'Zangezi Sans',
  fontWeight: 700,
  color: '$accentA',
  lineHeight: 1.06,
  fontSize: 'clamp(2.6rem, 7.2vw, 5.6rem)',
  textAlign: 'center',
})
