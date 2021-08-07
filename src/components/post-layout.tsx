import Head from 'next/head'
import styled from 'styled-components'
import React from 'react'
import { PostMeta } from '../types/post'
import Layout from './layout'
import StandardGrid, { StandardGridContent } from './standard-grid'
import Stack from './stack'
import Box from './box'
import PostHeader from './post-header'
import Tag from './tag'
import OgImageMeta from './og-image-meta'

interface Props {
  meta: PostMeta
}

const PostLayout: React.FC<Props> = ({ children, meta }) => {
  const title = `${meta.title} - Ash`

  return (
    <Layout as='main'>
      <Head>
        <title>{title}</title>
        <meta key='og:title' property='og:title' content={title} />
      </Head>
      <OgImageMeta title={meta.title} date={meta.date} />
      <Box
        px={2}
        mw={1}
        css={`
          margin-left: auto;
          margin-right: auto;
        `}
      >
        <PostHeader date={meta.date} column={meta.column}>
          {meta.title}
        </PostHeader>
      </Box>
      <Box>
        <StandardGrid>
          <StandardGridContent>
            <Stack gap={5}>{children}</Stack>
          </StandardGridContent>
        </StandardGrid>
      </Box>
      <Tags>
        <Stack direction='inline' gap={1}>
          {(meta.tags ?? []).map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Stack>
      </Tags>
    </Layout>
  )
}

export default PostLayout

const Tags = styled.div`
  text-align: center;
`
