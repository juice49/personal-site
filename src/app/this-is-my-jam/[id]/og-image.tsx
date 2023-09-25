import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import groq from 'groq'
import { styled, theme, globalCss } from '../../../stitches.config'
import globalStyle from '../../../components/global-style'
import Jam from '../../../types/jam'
import Box from '../../../components/box'
import Text from '../../../components/text'
import Heading from '../../../components/heading'
import sanity from '../../../lib/sanity'

interface Props {
  jam: Jam
}

const customGlobalStyle = globalCss({
  ':root': {
    [theme.space.documentBorderWidth.variable]: 0,
  },
})

const Page: NextPage<Props> = ({ jam }) => {
  globalStyle()
  customGlobalStyle()

  return (
    <DocumentOuter>
      <Head>
        <meta name='robots' content='noindex' />
        <style
          type='text/css'
          dangerouslySetInnerHTML={{
            __html: `
            @font-face {
              font-family: 'Zangezi Sans';
              font-weight: 700;
              font-display: swap;
              src: url('/fonts/zangezi-sans-0.9/ZangeziSans09-Black.woff2') format('woff2');
            }

            @font-face {
              font-family: 'JetBrains Mono';
              font-display: swap;
              src: url('/fonts/JetBrainsMono-1.0.3/web/woff2/JetBrainsMono-Regular.woff2') format('woff2');
            }
          `,
          }}
        />
      </Head>
      <Container>
        <Box
          css={{
            display: 'flex',
            gridArea: 'image',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <ImageContainer>
            <Image
              src={getAppleMusicImageUrl(
                jam.track.album.appleMusicImageUrl,
                600,
              )}
              alt={`The album art for "${
                jam.track.album.name
              }" by ${jam.track.artists.map(({ name }) => name).join(', ')}`}
            />
          </ImageContainer>
        </Box>
        <Box
          css={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gridArea: 'info',
          }}
        >
          <div>
            <Heading as='h1'>{jam.track.name}</Heading>
            <Text size='micro' variant='mono'>
              {jam.track.artists.map(({ name }) => name).join(', ')}
            </Text>
          </div>
        </Box>
      </Container>
    </DocumentOuter>
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
          name,
        },
      }
    }`,
    {
      id: params.id,
    },
  )

  return {
    notFound: typeof jam._id === 'undefined',
    props: {
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

export const config = {
  unstable_runtimeJS: false,
}

const DocumentOuter = styled('div', {
  display: 'flex',
  minHeight: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$background',
})

const Container = styled('div', {
  display: 'grid',
  padding: '$2',
  gridTemplateColumns: '6rem 1fr',
  gridTemplateAreas: `'image info'`,
  gap: '$2',
  zoom: 1.75,
})

const ImageContainer = styled('div', {
  backgroundColor: 'currentColor',
  clipPath: `polygon(
    0 0,
    calc(100% - 4px) 4px,
    100% 100%,
    4px calc(100% - 4px)
  )`,
})

const Image = styled('img', {
  display: 'block',
  width: '100%',
  height: 'auto',
})

type AppleMusicImageDimensions =
  | 30
  | 40
  | 100
  | 110
  | 130
  | 150
  | 160
  | 170
  | 190
  | 200
  | 220
  | 230
  | 240
  | 250
  | 340
  | 400
  | 440
  | 450
  | 460
  | 480
  | 600
  | 1200
  | 1400

function getAppleMusicImageUrl(
  baseUrl: string,
  dimensions: AppleMusicImageDimensions,
): string {
  const APPLE_MUSIC_DOMAIN = 'mzstatic.com'

  if (!baseUrl.includes(APPLE_MUSIC_DOMAIN)) {
    const params = new URLSearchParams({
      w: '160',
    })

    return `${baseUrl}?${params}`
  }

  return `${baseUrl}/${dimensions}x${dimensions}bb.jpg`
}
