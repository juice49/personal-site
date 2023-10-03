import Head from 'next/head'
import React, { FC, PropsWithChildren } from 'react'
// import { Level } from 'react-accessible-headings'
import { Toc } from '@stefanprobst/rehype-extract-toc'
import { PostMeta } from '../types/post'
import Layout from './layout'
import { standardGrid, standardGridContent } from '../styles/standard-grid.css'
import box from '../styles/box.css'
import PostHeader from './post-header'
import Tag from './tag'
import OgImageMeta from './og-image-meta'
import TableOfContents from './table-of-contents'
import { tableOfContentsContainer } from '../styles/post-layout.css'
import { stack, stackBlockGapVar } from '../styles/stack.css'
import { vars } from '../theme.css'

interface Props {
  meta: PostMeta
  tableOfContents: Toc
}

// FIXME-APP-DIR
const Level = ({ children }) => <>{children}</>

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
        <div
          className={box({ mw: 1 })}
          style={{
            marginInline: 'auto',
            paddingInline: vars.space.medium,
          }}
        >
          <PostHeader date={meta.date} column={meta.column}>
            {meta.title}
          </PostHeader>
        </div>
        <div>
          <div className={standardGrid()}>
            <div className={standardGridContent()}>
              <div
                className={stack({ block: true })}
                style={{
                  [stackBlockGapVar]: vars.space[5],
                }}
              >
                {tableOfContents.length !== 0 && (
                  <div className={tableOfContentsContainer()}>
                    <TableOfContents>{tableOfContents}</TableOfContents>
                  </div>
                )}
                {children}
              </div>
            </div>
          </div>
        </div>
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

// FIXME
const Tags = 'div'
// const Tags = styled('div', {
//   textAlign: 'center',
//   stackInline: '$small',
// })
