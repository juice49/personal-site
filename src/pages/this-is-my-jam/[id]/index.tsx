import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import groq from 'groq'
import { Level } from 'react-accessible-headings'
import Jam from '../../../types/jam'
import Layout from '../../../components/layout'
import Heading from '../../../components/heading'
import Box from '../../../components/box'
import TrackComponent from '../../../components/track'
import Button from '../../../components/button'
import HeadingLevel from '../../../components/heading-level'
import sanity from '../../../lib/sanity'

import StandardGrid, {
  StandardGridContent,
} from '../../../components/standard-grid'

interface Props {
  jam: Jam
  ogImageUrl: string
}

const Page: NextPage<Props> = ({ jam, ogImageUrl }) => {
  const title = `${jam.track.name} by ${jam.track.artists
    .map(({ name }) => name)
    .join(', ')}`

  return (
    <Layout as='main'>
      <Head>
        <title>{title} - This is My Jam - Ash</title>
        <meta key='og:image' property='og:image' content={ogImageUrl} />
        <meta key='og:image:width' property='og:image:width' content='1200' />
        <meta key='og:image:height' property='og:image:height' content='600' />
        <meta
          key='og:title'
          property='og:title'
          content={`This is My Jam: ${title}`}
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:image' content={ogImageUrl} />
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
                stackBlock: '$4',
              }}
            >
              <TrackComponent jam={jam} />
            </Box>
          </StandardGridContent>
        </StandardGrid>
      </Level>
      <StandardGrid>
        <StandardGridContent>
          <Button as={Link} href='/this-is-my-jam' variant='large'>
            View all jams
          </Button>
        </StandardGridContent>
      </StandardGrid>
    </Layout>
  )
}

export default Page

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const jam = await sanity.fetch<Jam>(
    groq`*[_type == "jam" && _id == $id][0]{
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
    }`,
    {
      id: params.id,
    },
  )

  return {
    notFound: typeof jam._id === 'undefined',
    props: {
      ogImageUrl: `${process.env.NEXT_PUBLIC_OG_IMAGE_SERVICE_URL}/this-is-my-jam/${params.id}/og-image.png`,
      jam,
    },
    revalidate: 3600,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}
