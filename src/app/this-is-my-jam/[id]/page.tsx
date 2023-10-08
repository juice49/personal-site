import { type PropsWithChildren, type ComponentType } from 'react'
import { notFound } from 'next/navigation'
import Head from 'next/head'
import Link from 'next/link'
import groq from 'groq'
// import { Level } from 'react-accessible-headings'
import Jam from '../../../types/jam'
import Layout from '../../../components/layout'
import { heading } from '../../../styles/heading.css'
import box from '../../../styles/box.css'
import TrackComponent from '../../../components/track'
import button from '../../../styles/button.css'
import HeadingLevel from '../../../components/heading-level'
import sanity from '../../../lib/sanity'
import {
  standardGrid,
  standardGridContent,
} from '../../../styles/standard-grid.css'
import { stack, stackBlockGapVar } from '../../../styles/stack.css'
import { vars } from '../../../theme.css'

// FIXME-APP-DIR
const Level: ComponentType<PropsWithChildren> = ({ children }) => (
  <>{children}</>
)

interface Props {
  params: {
    id: string
  }
}

const Page: ComponentType<Props> = async ({ params }) => {
  // FIXME revalidation
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

  if (!jam) {
    notFound()
  }

  const title = `${jam.track.name} by ${jam.track.artists
    .map(({ name }) => name)
    .join(', ')}`

  return (
    <Layout as='main'>
      {/* FIXME migrate metadata */}
      {/*<Head>
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
      </Head> */}
      <div
        style={{
          paddingInline: vars.space.medium,
        }}
      >
        <HeadingLevel>
          <h1 className={heading({ variant: 'alpha' })}>This is My Jam</h1>
        </HeadingLevel>
      </div>
      <Level>
        <div className={standardGrid()}>
          <div className={standardGridContent()}>
            <div
              className={stack({ block: true })}
              style={{
                [stackBlockGapVar]: vars.space[4],
              }}
            >
              <TrackComponent jam={jam} />
            </div>
          </div>
        </div>
      </Level>
      <div className={standardGrid()}>
        <div className={standardGridContent()}>
          <Link href='/this-is-my-jam' className={button({ variant: 'large' })}>
            View all jams
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Page
