import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Layout from '../../components/layout'
import ArticleList, { ArticleListItem } from '../../components/article-list'
import Heading from '../../components/heading'
import Box from '../../components/box'
import sanity from '../../lib/sanity'

import StandardGrid, {
  StandardGridContent,
} from '../../components/standard-grid'

interface Props {
  jams: any[]
}

const Page: NextPage<Props> = ({ jams }) => (
  <Layout>
    <Head>
      <title>#ThisIsMyJam - Ash</title>
    </Head>
    <Box px={2}>
      <Heading as='h1' variant='alpha'>
        #ThisIsMyJam
      </Heading>
    </Box>
    <StandardGrid>
      <StandardGridContent>
        <ArticleList>
          {jams.map(({ track }) => (
            <ArticleListItem
              key={track._id}
              heading={track.name}
              description={track.artists.map(({ name }) => name).join(', ')}
            />
          ))}
        </ArticleList>
      </StandardGridContent>
    </StandardGrid>
  </Layout>
)

export default Page

export const getStaticProps: GetStaticProps<Props> = async () => {

  const jams = await sanity.fetch(`*[ _type ==  "jam"]{
    ...,
    track->{
      ...,
      album->,
      artists[]->
    }
  } | order(date desc)`)

  return {
    props: {
      jams,
    },
    revalidate: 3600,
  }
}
