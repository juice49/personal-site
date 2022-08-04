import Head from 'next/head'
import React, { FC, PropsWithChildren } from 'react'
import { Level } from 'react-accessible-headings'
import { Toc } from '@stefanprobst/rehype-extract-toc'
import { styled } from '../stitches.config'
import { PostMeta } from '../types/post'
import Layout from './layout'
import StandardGrid, { StandardGridContent } from './standard-grid'
import Text from './text'
import Box from './box'
import PostHeader from './post-header'
import Tag from './tag'
import OgImageMeta from './og-image-meta'
import TableOfContents from './table-of-contents'

interface Props {
  meta: PostMeta
  tableOfContents: Toc
}

const PostLayout: FC<PropsWithChildren<Props>> = ({
  children,
  meta,
  tableOfContents,
}) => {
  const title = `${meta.title} - Ash`

  return (
    <Layout as='main'>
      <Level>
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
                {tableOfContents.length !== 0 && (
                  <Box
                    css={{
                      '@i2': {
                        marginInline: 'calc($medium * -1)',
                      },
                    }}
                  >
                    <TableOfContents>{tableOfContents}</TableOfContents>
                  </Box>
                )}
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
      </Level>
    </Layout>
  )
}

export default PostLayout

const Tags = styled('div', {
  textAlign: 'center',
  stackInline: '$small',
})
