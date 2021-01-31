import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import groq from 'groq'
import Jam from '../../types/jam'
import Layout from '../../components/layout'
import TrackComponent from '../../components/track'
import Heading from '../../components/heading'
import Box from '../../components/box'
import Stack from '../../components/stack'
import sanity from '../../lib/sanity'

import StandardGrid, {
  StandardGridContent,
} from '../../components/standard-grid'

type JamsByYear = [year: string, jams: Jam[]][]

interface Props {
  jamsByYear: JamsByYear
}

function sortDescending([a]: any, [b]: any) {
  if (a < b) {
    return 1
  }

  if (a > b) {
    return -1
  }

  return 0
}

const Page: NextPage<Props> = ({ jamsByYear }) => {
  return (
    <Layout>
      <Head>
        <title>This is My Jam - Ash</title>
      </Head>
      <Box px={2}>
        <Heading as='h1' variant='alpha'>
          This is My Jam
        </Heading>
      </Box>
      <StandardGrid>
        <StandardGridContent>
          <Stack gap={5}>
            {jamsByYear.map(([year, jams]) => (
              <Stack key={year} gap={2}>
                <Heading as='h2'>{year}</Heading>
                <List>
                  {jams.map(jam => (
                    <TrackComponent key={jam._id} jam={jam} />
                  ))}
                </List>
              </Stack>
            ))}
          </Stack>
        </StandardGridContent>
      </StandardGrid>
    </Layout>
  )
}

export default Page

export const getStaticProps: GetStaticProps<Props> = async () => {
  const jams: Jam[] = await sanity.fetch(groq`*[ _type ==  "jam"]{
    _id,
    date,
    track->{
      name,
      album->{
        name,
        appleMusicImageUrl,
        'color': image.asset->metadata.palette.dominant.background,
      },
      artists[]->{
        name
      },
      'appleMusicUrl': dataByPlatform.appleMusic.url,
      'spotifyUrl': dataByPlatform.spotify.url,
      'youtubeUrl': dataByPlatform.youtube.url,
    }
  } | order(date desc)`)

  const jamsByYear = jams.reduce<Record<string, Jam[]>>((reduced, jam) => {
    const year = new Date(jam.date).getFullYear()

    return {
      ...reduced,
      [year]: [...(reduced[year] ?? []), jam],
    }
  }, {})

  return {
    props: {
      jamsByYear: Object.entries(jamsByYear).sort(sortDescending),
    },
    revalidate: 3600,
  }
}

const List = styled.div`
  & > * + * {
    margin-top: calc(var(--space4) * 0.5);
    padding-top: calc(var(--space4) * 0.5);
    border-top: 1px dashed var(--body-color-subtle);
  }
`
