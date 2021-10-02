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
import Stack from '../components/stack'
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
        <Stack gap={[10, 'vmin']}>
          <div>
            <Box
              px={2}
              mw={1}
              css={`
                position: relative;
                z-index: 1;
                margin-left: auto;
                margin-right: auto;
              `}
            >
              <Heading
                as='p'
                variant='alpha'
                css={`
                  margin-bottom: -0.42em;
                `}
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
              <Stack gap={2}>
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
              </Stack>
            </StandardGridContent>
            <StandardGridMeta position={2}>
              <Note as='p'>Blah blah blah I make websites.</Note>
            </StandardGridMeta>
          </StandardGrid>
        </Stack>
      </Box>
      <Box mw={1} px={2} as='section' center>
        <FeaturedSection>
          <Stack gap={4}>
            <Box as='header' px={4} pt={4}>
              <FeaturedSectionHeading>Blog posts</FeaturedSectionHeading>
            </Box>
            <Level>
              <Box px={4}>
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
              <Box px={4} pb={4}>
                <Link href='/posts' passHref>
                  <Button as='a' variant='large'>
                    View more posts
                  </Button>
                </Link>
              </Box>
            </Level>
          </Stack>
        </FeaturedSection>
      </Box>
      <Box
        px={2}
        mw={1}
        css={`
          margin-left: auto;
          margin-right: auto;
        `}
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

const ListBox: React.FC = ({ children }) => <Stack gap={2}>{children}</Stack>

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await postApi.getAll()

  return {
    props: {
      posts: posts.slice(0, 6).map(post => post.meta),
    },
  }
}
