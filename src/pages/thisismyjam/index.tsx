import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import sanityClient from '@sanity/client'
import Layout from '../../components/layout'
import ArticleList, { ArticleListItem } from '../../components/article-list'
import Heading from '../../components/heading'
import Box from '../../components/box'

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
  const sanity = sanityClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    token: process.env.SANITY_API_TOKEN,
    useCdn: true,
  })

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
