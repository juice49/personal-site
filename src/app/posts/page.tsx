import React from 'react'
import Link from 'next/link'
import { NextPage, GetStaticProps } from 'next'
// import { Level } from 'react-accessible-headings'
import { PostMeta } from '../../types/post'
import * as postApi from '../../lib/post-api'
import usePostsByYear from '../../lib/use-posts-by-year'
import Heading from '../../components/heading'
import Text from '../../components/text'
import Layout from '../../components/layout'
import StandardGrid, {
  StandardGridContent,
} from '../../components/standard-grid'
import Box from '../../components/box'
import FeaturedSection, {
  FeaturedSectionHeading,
} from '../../components/featured-section'
import Articles, { Article } from '../../components/articles'
import HeadingLevel from '../../components/heading-level'

interface Props {
  posts: PostMeta[]
}

// FIXME-APP-DIR
const Level = ({ children }) => <>{children}</>

// FIXME-APP-DIR
const Page: NextPage<Props> = ({ posts = [] }) => {
  const featurePostLimit = 6

  const { sortedYears, postsByYear } = usePostsByYear(
    posts.slice(featurePostLimit),
  )

  return (
    <Layout as='main'>
      <Box
        css={{
          paddingInline: '$medium',
        }}
      >
        <HeadingLevel>
          <Heading
            css={{
              position: 'relative',
              zIndex: 1,
            }}
            variant='alpha'
          >
            Posts
          </Heading>
        </HeadingLevel>
      </Box>
      <Level>
        <Box
          mw='1'
          css={{
            marginInline: 'auto',
            paddingInline: '$medium',
          }}
        >
          <FeaturedSection>
            <Box
              css={{
                stackBlock: '$4',
              }}
            >
              <Box
                as='header'
                css={{
                  paddingInline: '$4',
                  paddingBlockStart: '$4',
                }}
              >
                <FeaturedSectionHeading>Recent</FeaturedSectionHeading>
              </Box>
              <Level>
                <Box
                  css={{
                    paddingInline: '$4',
                    paddingBlockEnd: '$4',
                  }}
                >
                  <Articles>
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
                  </Articles>
                </Box>
              </Level>
            </Box>
          </FeaturedSection>
        </Box>

        <StandardGrid>
          <StandardGridContent>
            <Box
              css={{
                stackBlock: '$medium',
              }}
            >
              {sortedYears.map(year => (
                <article key={year}>
                  <Box
                    css={{
                      stackBlock: '$small',
                    }}
                  >
                    <HeadingLevel>
                      <Text>{year}</Text>
                    </HeadingLevel>
                    <Level>
                      <div>
                        {postsByYear[year].map(post => (
                          <article key={post.slug}>
                            <Link href={`/posts/${post.slug}`}>
                              <HeadingLevel>
                                <Text>{post.title}</Text>
                              </HeadingLevel>
                            </Link>
                          </article>
                        ))}
                      </div>
                    </Level>
                  </Box>
                </article>
              ))}
            </Box>
          </StandardGridContent>
        </StandardGrid>
      </Level>
    </Layout>
  )
}

export default Page

// FIXME-APP-DIR
// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const posts = await postApi.getAll()

//   return {
//     props: {
//       posts: posts.map(post => post.meta),
//     },
//   }
// }
