import { NextPage, GetStaticProps } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { Level } from 'react-accessible-headings'
import { PostMeta } from '../types/post'
import projects from '../data/projects'
import misc from '../data/misc'
import work from '../data/work'
import * as postApi from '../lib/post-api'
import Layout from '../components/layout'
import Box from '../components/box'
import Text from '../components/text'
import Heading from '../components/heading'
import Image from '../components/image'
import Button from '../components/button'
import Note from '../components/note'
import FeaturedSection, {
  FeaturedSectionHeading,
} from '../components/featured-section'
import Articles, { Article } from '../components/articles'
import ArticleList, { ArticleListItem } from '../components/article-list'
import HeadingLevel from '../components/heading-level'

import StandardGrid, {
  StandardGridContent,
  StandardGridContentSlightlyWide,
  StandardGridMeta,
} from '../components/standard-grid'

interface Props {
  posts: PostMeta[]
}

const Page: NextPage<Props> = ({ posts }) => (
  <Layout as='main' isLogoH1>
    <Level>
      <Head>
        <link
          rel='preload'
          as='image'
          href='/img/me@1000x1494.jpg'
          // @ts-ignore
          imagesrcset={`
          /img/me@600x897.webp 600w,
          /img/me@800x1196.webp 800w,
          /img/me@1000x1494.webp 1000w
        `}
        />
      </Head>
      <Box>
        <Box
          css={{
            stackBlock: '10vmin',
          }}
        >
          <div>
            <Box
              mw='1'
              css={{
                position: 'relative',
                zIndex: 1,
                marginInline: 'auto',
                paddingInline: '$medium',
              }}
            >
              <Heading
                as='p'
                variant='alpha'
                css={{
                  marginBlockEnd: '-0.42em',
                }}
              >
                The Web and Stuff.
              </Heading>
            </Box>
            <StandardGrid>
              <StandardGridContentSlightlyWide>
                <Image
                  src='/img/me@1000x1494.jpg'
                  previewSrc={
                    require('url-loader!../../public/img/me-preview.jpg')
                      .default
                  }
                  srcSet={`
                  /img/me@600x897.jpg 600w,
                  /img/me@800x1196.jpg 800w,
                  /img/me@1000x1494.jpg 1000w
                `}
                  webpSrcSet={`
                  /img/me@600x897.webp 600w,
                  /img/me@800x1196.webp 800w,
                  /img/me@1000x1494.webp 1000w
                `}
                  alt='Me'
                  style={{
                    '--width': 2698,
                    '--height': 4032,
                  }}
                />
              </StandardGridContentSlightlyWide>
            </StandardGrid>
          </div>
          <StandardGrid>
            <StandardGridContent>
              <Box
                css={{
                  stackBlock: '$medium',
                }}
              >
                <Text as='p' weight='bold'>
                  I like to make things&mdash;usually with web technologies, and
                  usually <em>for</em> the web.
                </Text>
                <p>
                  At the moment I&apos;m most interested in jamstack and design
                  systems. I work with things like React, Next.js, node.js, and
                  GraphQL. Although there are parts of the stack I&apos;m very
                  focused on, I am most passionate about <em>making stuff</em>.
                </p>
              </Box>
            </StandardGridContent>
            <StandardGridMeta position={2}>
              <Note as='p'>Blah blah blah I make websites.</Note>
            </StandardGridMeta>
          </StandardGrid>
        </Box>
      </Box>
      <Box
        mw='1'
        as='section'
        css={{
          paddingInline: '$medium',
        }}
        center
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
              <FeaturedSectionHeading>Blog posts</FeaturedSectionHeading>
            </Box>
            <Level>
              <Box
                css={{
                  paddingInline: '$4',
                }}
              >
                <Articles>
                  {posts.map(post => (
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
              <Box
                css={{
                  paddingInline: '$4',
                  paddingBlockEnd: '$4',
                }}
              >
                <Link href='/posts' passHref>
                  <Button as='a' variant='large'>
                    View more posts
                  </Button>
                </Link>
              </Box>
            </Level>
          </Box>
        </FeaturedSection>
      </Box>
      <Box
        mw='1'
        css={{
          marginInline: 'auto',
          paddingInline: '$medium',
        }}
      >
        <Articles>
          <ListBox>
            <HeadingLevel>
              <Heading>Projects</Heading>
            </HeadingLevel>
            <Level>
              <ArticleList>
                {projects.map(project => (
                  <ArticleListItem
                    key={project.slug}
                    heading={project.name}
                    description={project.description}
                    link={
                      project.slug &&
                      !project.externalUrl && {
                        href: `/projects/${project.slug}`,
                      }
                    }
                    externalUrl={project.externalUrl}
                  />
                ))}
              </ArticleList>
            </Level>
          </ListBox>
          <ListBox>
            <HeadingLevel>
              <Heading>Misc</Heading>
            </HeadingLevel>
            <ArticleList>
              {misc.map(misc => (
                <ArticleListItem
                  key={misc.slug}
                  heading={misc.name}
                  description={misc.description}
                  link={
                    misc.slug &&
                    !misc.externalUrl && {
                      href: `/projects/${misc.slug}`,
                    }
                  }
                  externalUrl={misc.externalUrl}
                />
              ))}
            </ArticleList>
          </ListBox>
          <ListBox>
            <HeadingLevel>
              <Heading>Recent work</Heading>
            </HeadingLevel>
            <ArticleList>
              {work.map((item, index) => (
                <ArticleListItem key={index} description={item.description} />
              ))}
            </ArticleList>
          </ListBox>
        </Articles>
      </Box>
    </Level>
  </Layout>
)

export default Page

const ListBox: React.FC = ({ children }) => (
  <Box
    css={{
      stackBlock: '$medium',
    }}
  >
    {children}
  </Box>
)

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await postApi.getAll()

  return {
    props: {
      posts: posts.slice(0, 6).map(post => post.meta),
    },
  }
}
