import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import groq from 'groq'
import { Level } from 'react-accessible-headings'
import { styled } from '../../stitches.config'
import Jam from '../../types/jam'
import Layout from '../../components/layout'
import TrackComponent from '../../components/track'
import Heading from '../../components/heading'
import Box from '../../components/box'
import HeadingLevel from '../../components/heading-level'
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
    <Layout as='main'>
      <Head>
        <title>This is My Jam - Ash</title>
      </Head>
      <Box
        css={{
          paddingInline: '$medium',
        }}
      >
        <HeadingLevel>
          <Heading variant='alpha'>This is My Jam</Heading>
        </HeadingLevel>
      </Box>
      <Level>
        <StandardGrid>
          <StandardGridContent>
            <Box
              css={{
                stackBlock: '$5',
              }}
            >
              {jamsByYear.map(([year, jams]) => (
                <Box
                  key={year}
                  css={{
                    stackBlock: '$medium',
                  }}
                >
                  <HeadingLevel>
                    <Heading>{year}</Heading>
                  </HeadingLevel>
                  <Level>
                    <List>
                      {jams.map(jam => (
                        <TrackComponent key={jam._id} jam={jam} />
                      ))}
                    </List>
                  </Level>
                </Box>
              ))}
            </Box>
          </StandardGridContent>
        </StandardGrid>
      </Level>
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
        "appleMusicImageUrl": coalesce(
          appleMusicImageUrl,
          image.asset->url
        ),
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

const List = styled('div', {
  '& > * + *': {
    marginBlockStart: 'calc($4 * 0.5)',
    paddingBlockStart: 'calc($4 * 0.5)',
    borderBlockStart: '1px dashed $bodySubtle',
  },
})
