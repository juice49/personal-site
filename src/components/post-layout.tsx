import Head from 'next/head'
import React from 'react'
import { styled } from '../stitches.config'
import { PostMeta } from '../types/post'
import Layout from './layout'
import StandardGrid, { StandardGridContent } from './standard-grid'
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
        mw='1'
        css={{
          marginInline: 'auto',
          paddingInline: '$medium',
        }}
      >
        <PostHeader date={meta.date} column={meta.column}>
          {meta.title}
        </PostHeader>
      </Box>
      <Box>
        <StandardGrid>
          <StandardGridContent>
            <Box
              css={{
                stackBlock: '$5',
              }}
            >
              {children}
            </Box>
          </StandardGridContent>
        </StandardGrid>
      </Box>
      <Tags>
        {(meta.tags ?? []).map(tag => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </Layout>
  )
}

export default PostLayout

const Tags = styled('div', {
  textAlign: 'center',
  stackInline: '$small',
})
