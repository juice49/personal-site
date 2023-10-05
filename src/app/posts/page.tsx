import React, { type ComponentType } from 'react'
import Link from 'next/link'
// import { Level } from 'react-accessible-headings'
import * as postApi from '../../lib/post-api'
import usePostsByYear from '../../lib/use-posts-by-year'
import { heading } from '../../styles/heading.css'
import Layout from '../../components/layout'
import {
  standardGrid,
  standardGridContent,
} from '../../styles/standard-grid.css'
import box from '../../styles/box.css'
import FeaturedSection, {
  FeaturedSectionHeading,
} from '../../components/featured-section'
import { Article } from '../../components/articles'
import { articles } from '../../styles/articles.css'
import HeadingLevel from '../../components/heading-level'
import { stack, stackBlockGapVar } from '../../styles/stack.css'
import { vars } from '../../theme.css'

// FIXME-APP-DIR
const Level = ({ children }) => <>{children}</>

// FIXME-APP-DIR
const Page: ComponentType = async () => {
  const posts = (await postApi.getAll()).map(post => post.meta)
  const featurePostLimit = 6
  const { sortedYears, postsByYear } = usePostsByYear(posts)

  return (
    <Layout as='main'>
      <div
        style={{
          paddingInline: vars.space.medium,
        }}
      >
        <HeadingLevel>
          <h1
            className={heading({ variant: 'alpha' })}
            style={{
              position: 'relative',
              zIndex: 1,
            }}
          >
            Posts
          </h1>
        </HeadingLevel>
      </div>
      <Level>
        <div
          className={box({ mw: 1 })}
          style={{
            marginInline: 'auto',
            paddingInline: vars.space.medium,
          }}
        >
          <FeaturedSection>
            <div
              className={stack({ block: true })}
              style={{
                [stackBlockGapVar]: vars.space[4],
              }}
            >
              <header
                style={{
                  paddingInline: vars.space[4],
                  paddingBlockStart: vars.space[4],
                }}
              >
                <FeaturedSectionHeading>Recent</FeaturedSectionHeading>
              </header>
              <Level>
                <div
                  style={{
                    paddingInline: vars.space[4],
                    paddingBlockEnd: vars.space[4],
                  }}
                >
                  <div className={articles()}>
                    {posts.slice(0, featurePostLimit).map(post => (
                      <Article
                        key={post.slug}
                        column={post.column ?? post?.tags?.[0]}
                        date={post.date}
                        title={post.title}
                        description={post.description}
                        link={{
                          href: `/posts/${post.slug}`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </Level>
            </div>
          </FeaturedSection>
        </div>

        <div className={standardGrid()}>
          <div className={standardGridContent()}>
            <div
              className={stack({ block: true })}
              style={{
                [stackBlockGapVar]: vars.space.medium,
              }}
            >
              {sortedYears.map(year => (
                <article key={year}>
                  <div
                    className={stack({ block: true })}
                    style={{
                      [stackBlockGapVar]: vars.space.small,
                    }}
                  >
                    <HeadingLevel>
                      <span>{year}</span>
                    </HeadingLevel>
                    <Level>
                      <div>
                        {postsByYear[year].map(post => (
                          <article key={post.slug}>
                            <Link href={`/posts/${post.slug}`}>
                              <HeadingLevel>
                                <span>{post.title}</span>
                              </HeadingLevel>
                            </Link>
                          </article>
                        ))}
                      </div>
                    </Level>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Level>
    </Layout>
  )
}

export default Page
