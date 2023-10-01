import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import groq from 'groq'
// import { Level } from 'react-accessible-headings'
import Jam from '../../types/jam'
import Layout from '../../components/layout'
import TrackComponent from '../../components/track'
import { heading } from '../../styles/heading.css'
import HeadingLevel from '../../components/heading-level'
import { list } from '../../styles/this-is-my-jam.css'
import sanity from '../../lib/sanity'
import {
  standardGrid,
  standardGridContent,
} from '../../styles/standard-grid.css'

// FIXME-APP-DIR
const Level = ({ children }) => <>{children}</>

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

// FIXME-APP-DIR
const Page: NextPage<Props> = ({ jamsByYear = [] }) => {
  return (
    <Layout as='main'>
      <Head>
        <title>This is My Jam - Ash</title>
      </Head>
      <div
        style={{
          paddingInline: '$medium',
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
              style={{
                stackBlock: '$5',
              }}
            >
              {jamsByYear.map(([year, jams]) => (
                <div
                  key={year}
                  style={{
                    stackBlock: '$medium',
                  }}
                >
                  <HeadingLevel>
                    <h1 className={heading()}>{year}</h1>
                  </HeadingLevel>
                  <Level>
                    <div className={list()}>
                      {jams.map(jam => (
                        <TrackComponent key={jam._id} jam={jam} />
                      ))}
                    </div>
                  </Level>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Level>
    </Layout>
  )
}

export default Page

// FIXME-APP-DIR
// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const jams: Jam[] = await sanity.fetch(groq`*[ _type ==  "jam"]{
//     _id,
//     date,
//     track->{
//       name,
//       album->{
//         name,
//         "appleMusicImageUrl": coalesce(
//           appleMusicImageUrl,
//           image.asset->url
//         ),
//         'color': image.asset->metadata.palette.dominant.background,
//       },
//       artists[]->{
//         name
//       },
//       'appleMusicUrl': dataByPlatform.appleMusic.url,
//       'spotifyUrl': dataByPlatform.spotify.url,
//       'youtubeUrl': dataByPlatform.youtube.url,
//     }
//   } | order(date desc)`)

//   const jamsByYear = jams.reduce<Record<string, Jam[]>>((reduced, jam) => {
//     const year = new Date(jam.date).getFullYear()

//     return {
//       ...reduced,
//       [year]: [...(reduced[year] ?? []), jam],
//     }
//   }, {})

//   return {
//     props: {
//       jamsByYear: Object.entries(jamsByYear).sort(sortDescending),
//     },
//     revalidate: 3600,
//   }
// }
