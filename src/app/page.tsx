import { FC, PropsWithChildren } from 'react'
import { NextPage, GetStaticProps } from 'next'
import Link from 'next/link'
import Head from 'next/head'
// import { Level } from 'react-accessible-headings'
import { PostMeta } from '../types/post'
import projects from '../data/projects'
import misc from '../data/misc'
import work from '../data/work'
import * as postApi from '../lib/post-api'
import Layout from '../components/layout'
import box from '../styles/box.css'
import text from '../styles/text.css'
import { heading } from '../styles/heading.css'
import Image from '../components/image'
import button from '../styles/button.css'
import { note } from '../styles/note.css'
import FeaturedSection, {
  FeaturedSectionHeading,
} from '../components/featured-section'
import { Article } from '../components/articles'
import { articles } from '../styles/articles.css'
import ArticleList, { ArticleListItem } from '../components/article-list'
import HeadingLevel from '../components/heading-level'
import {
  standardGrid,
  standardGridContent,
  standardGridContentSlightlyWide,
  standardGridMeta,
} from '../styles/standard-grid.css'

// FIXME-APP-DIR
const Level = ({ children }) => <>{children}</>

interface Props {
  posts: PostMeta[]
}

// FIXME-APP-DIR
const Page: NextPage<Props> = ({ posts = [] }) => (
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
      <div>
        <div
          style={{
            stackBlock: '10vmin',
          }}
        >
          <div>
            <div
              className={box({ mw: 1 })}
              style={{
                position: 'relative',
                zIndex: 1,
                marginInline: 'auto',
                paddingInline: '$medium',
              }}
            >
              <p
                className={heading({ variant: 'alpha' })}
                style={{
                  marginBlockEnd: '-0.42em',
                }}
              >
                The Web and Stuff.
              </p>
            </div>
            <div className={standardGrid()}>
              <div className={standardGridContentSlightlyWide()}>
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
              </div>
            </div>
          </div>
          <div className={standardGrid()}>
            <div className={standardGridContent()}>
              <div
                style={{
                  stackBlock: '$medium',
                }}
              >
                <p className={text({ weight: 'bold' })}>
                  I like to make things&mdash;usually with web technologies, and
                  usually <em>for</em> the web.
                </p>
                <p>
                  At the moment I&apos;m most interested in jamstack and design
                  systems. I work with things like React, Next.js, node.js, and
                  GraphQL. Although there are parts of the stack I&apos;m very
                  focused on, I am most passionate about <em>making stuff</em>.
                </p>
              </div>
            </div>
            <div className={standardGridMeta({ position: 2 })}>
              <p className={note()}>Blah blah blah I make websites.</p>
            </div>
          </div>
        </div>
      </div>
      <section
        className={box({ mw: 1, center: true })}
        style={{
          paddingInline: '$medium',
        }}
      >
        <FeaturedSection>
          <div
            style={{
              stackBlock: '$4',
            }}
          >
            <header
              style={{
                paddingInline: '$4',
                paddingBlockStart: '$4',
              }}
            >
              <FeaturedSectionHeading>Blog posts</FeaturedSectionHeading>
            </header>
            <Level>
              <div
                style={{
                  paddingInline: '$4',
                }}
              >
                <div className={articles()}>
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
                </div>
              </div>
              <div
                style={{
                  paddingInline: '$4',
                  paddingBlockEnd: '$4',
                }}
              >
                <Link className={button({ variant: 'large' })} href='/posts'>
                  View more posts
                </Link>
              </div>
            </Level>
          </div>
        </FeaturedSection>
      </section>
      <div
        className={box({ mw: 1 })}
        style={{
          marginInline: 'auto',
          paddingInline: '$medium',
        }}
      >
        <div className={articles()}>
          <ListBox>
            <HeadingLevel>
              <h1 className={heading()}>Projects</h1>
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
              <h1 className={heading()}>Misc</h1>
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
              <h1 className={heading()}>Recent work</h1>
            </HeadingLevel>
            <ArticleList>
              {work.map((item, index) => (
                <ArticleListItem key={index} description={item.description} />
              ))}
            </ArticleList>
          </ListBox>
        </div>
      </div>
    </Level>
  </Layout>
)

export default Page

const ListBox: FC<PropsWithChildren> = ({ children }) => (
  <div
    style={{
      stackBlock: '$medium',
    }}
  >
    {children}
  </div>
)

// FIXME-APP-DIR
// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const posts = await postApi.getAll()

//   return {
//     props: {
//       posts: posts.slice(0, 6).map(post => post.meta),
//     },
//   }
// }
