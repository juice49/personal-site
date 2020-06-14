import { NextPage } from 'next'
import Head from 'next/head'
import projects from '../../data/projects'
import misc from '../../data/misc'
import Box from '../../components/box'
import Stack from '../../components/stack'
import Layout from '../../components/layout'
import Heading from '../../components/heading'
import StandardGrid, { StandardGridContent } from '../../components/standard-grid'
import ArticleList, { ArticleListItem } from '../../components/article-list'

const Page: NextPage = () => (
  <Layout>
    <Head>
      <title>Projects - Ash</title>
    </Head>
    <StandardGrid>
      <StandardGridContent>
        <ListBox>
          <Heading as='h1'>
            Projects
          </Heading>
          <ArticleList columns>
            {projects.map(project => (
              <ArticleListItem
                key={project.slug}
                heading={project.name}
                description={project.description}
                link={project.slug && !project.externalUrl && {
                  href: `/projects/${project.slug}`
                }}
                externalUrl={project.externalUrl}
              />
            ))}
          </ArticleList>
        </ListBox>
      </StandardGridContent>
    </StandardGrid>
    <StandardGrid>
      <StandardGridContent>
        <ListBox>
          <Heading as='h1'>
            Misc
          </Heading>
          <ArticleList columns>
            {misc.map(misc => (
              <ArticleListItem
                key={misc.slug}
                heading={misc.name}
                description={misc.description}
                link={misc.slug && !misc.externalUrl && {
                  href: `/projects/${misc.slug}`
                }}
                externalUrl={misc.externalUrl}
              />
            ))}
          </ArticleList>
        </ListBox>
      </StandardGridContent>
    </StandardGrid>
  </Layout>
)

export default Page

const ListBox: React.FC = ({ children }) => (
  <Stack gap={2}>
    {children}
  </Stack>
)
