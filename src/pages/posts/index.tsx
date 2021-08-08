import React from 'react'
import Link from 'next/link'
import { NextPage } from 'next'
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
import Stack from '../../components/stack'
import FeaturedSection, {
  FeaturedSectionHeading,
} from '../../components/featured-section'
import Articles, { Article } from '../../components/articles'

interface Props {
  posts: PostMeta[]
}

const Page: NextPage<Props> = ({ posts }) => {
  const featurePostLimit = 6

  const { sortedYears, postsByYear } = usePostsByYear(
    posts.slice(featurePostLimit),
  )

  return (
    <Layout as='main'>
      <Box px={2}>
        <Heading
          css={`
            position: relative;
            z-index: 1;
          `}
          variant='alpha'
        >
          Posts
        </Heading>
      </Box>
      <Box
        mw={1}
        px={2}
        css={`
          margin-left: auto;
          margin-right: auto;
        `}
      >
        <FeaturedSection>
          <Stack gap={4}>
            <Box as='header' px={4} pt={4}>
              <FeaturedSectionHeading>Recent</FeaturedSectionHeading>
            </Box>
            <Box px={4} pb={4}>
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
          </Stack>
        </FeaturedSection>
      </Box>
      <StandardGrid>
        <StandardGridContent>
          <Stack gap={2}>
            {sortedYears.map(year => (
              <article key={year}>
                <Stack gap={1}>
                  <Text as='h2'>{year}</Text>
                  <div>
                    {postsByYear[year].map(post => (
                      <article key={post.slug}>
                        <Link href='/posts/[slug]' as={`/posts/${post.slug}`}>
                          <a>
                            <Text as='h3'>{post.title}</Text>
                          </a>
                        </Link>
                      </article>
                    ))}
                  </div>
                </Stack>
              </article>
            ))}
          </Stack>
        </StandardGridContent>
      </StandardGrid>
    </Layout>
  )
}

export default Page

export async function getStaticProps() {
  const posts = await postApi.getAll()

  return {
    props: {
      posts,
    },
  }
}
