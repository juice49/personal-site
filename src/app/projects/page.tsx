import { FC, PropsWithChildren } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
// import { Level } from 'react-accessible-headings'
import projects from '../../data/projects'
import misc from '../../data/misc'
import box from '../../styles/box.css'
import Layout from '../../components/layout'
import { heading } from '../../styles/heading.css'
import {
  standardGrid,
  standardGridContent,
} from '../../styles/standard-grid.css'
import ArticleList, { ArticleListItem } from '../../components/article-list'
import HeadingLevel from '../../components/heading-level'
import { stack, stackBlockGapVar } from '../../styles/stack.css'
import { vars } from '../../theme.css'

// FIXME-APP-DIR
const Level = ({ children }) => <>{children}</>

const Page: NextPage = () => (
  <Layout as='main'>
    <Head>
      <title>Projects - Ash</title>
    </Head>
    <div className={standardGrid()}>
      <div className={standardGridContent()}>
        <ListBox>
          <HeadingLevel>
            <h1 className={heading()}>Projects</h1>
          </HeadingLevel>
          <Level>
            <ArticleList columns>
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
      </div>
    </div>
    <div className={standardGrid()}>
      <div className={standardGridContent()}>
        <Level>
          <ListBox>
            <HeadingLevel>
              <h1 className={heading()}>Misc</h1>
            </HeadingLevel>
            <Level>
              <ArticleList columns>
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
            </Level>
          </ListBox>
        </Level>
      </div>
    </div>
  </Layout>
)

export default Page

const ListBox: FC<PropsWithChildren> = ({ children }) => (
  <div
    className={stack({ block: true })}
    style={{
      [stackBlockGapVar]: vars.space.medium,
    }}
  >
    {children}
  </div>
)
