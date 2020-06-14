import { NextPage } from 'next'
import Head from 'next/head'
import projects from '../../data/projects'
import misc from '../../data/misc'
import Box from '../../components/box'
import Stack from '../../components/stack'
import Layout from '../../components/layout'
import Heading from '../../components/heading'
import ArticleList, { ArticleListItem } from '../../components/article-list'

const Page: NextPage = () => (
  <Layout>
    <Head>
      <title>Projects - Ash</title>
    </Head>
    <Box
      px={2}
      mw={0}
      css={`
        margin-left: auto;
        margin-right: auto;
      `}
    >
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
              link={{
                href: `/projects/${project.slug}`
              }}
            />
          ))}
        </ArticleList>
      </ListBox>
    </Box>
    <Box
      px={2}
      mw={0}
      css={`
        margin-left: auto;
        margin-right: auto;
      `}
    >
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
              link={{
                href: `/projects/${misc.slug}`
              }}
            />
          ))}
        </ArticleList>
      </ListBox>
    </Box>
  </Layout>
)

export default Page

const ListBox: React.FC = ({ children }) => (
  <Stack gap={2}>
    {children}
  </Stack>
)
