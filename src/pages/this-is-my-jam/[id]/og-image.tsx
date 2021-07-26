import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import styled, { createGlobalStyle } from 'styled-components'
import groq from 'groq'
import Jam from '../../../types/jam'
import GlobalStyle from '../../../components/global-style'
import Text from '../../../components/text'
import Heading from '../../../components/heading'
import sanity from '../../../lib/sanity'

interface Props {
  jam: Jam
}

const CustomGlobalStyle = createGlobalStyle`
  :root {
    --document-border-width: 0;
  }
`

const Page: NextPage<Props> = ({ jam }) => (
  <DocumentOuter>
    <GlobalStyle />
    <CustomGlobalStyle />
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
      <div
        css={`
          display: flex;
          grid-area: image;
          flex-direction: column;
          justify-content: center;
        `}
      >
        <ImageContainer>
          <Image
            src={getAppleMusicImageUrl(jam.track.album.appleMusicImageUrl, 600)}
            alt={`The album art for "${
              jam.track.album.name
            }" by ${jam.track.artists.map(({ name }) => name).join(', ')}`}
          />
        </ImageContainer>
      </div>
      <div
        css={`
          display: flex;
          flex-direction: column;
          justify-content: center;
          grid-area: info;
        `}
      >
        <div>
          <Heading as='h1'>{jam.track.name}</Heading>
          <Text size='micro' variant='mono'>
            {jam.track.artists.map(({ name }) => name).join(', ')}
          </Text>
        </div>
      </div>
    </Container>
  </DocumentOuter>
)

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
          appleMusicImageUrl,
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

const DocumentOuter = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: var(--background-color);
`

const Container = styled.div`
  display: grid;
  padding: var(--space2);
  grid-template-columns: 6rem 1fr;
  grid-template-areas: 'image info';
  gap: var(--space2);
  zoom: 1.75;
`

const ImageContainer = styled.div`
  background-color: currentColor;
  clip-path: polygon(
    0 0,
    calc(100% - 4px) 4px,
    100% 100%,
    4px calc(100% - 4px)
  );
`

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
`

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
  return `${baseUrl}/source/${dimensions}x${dimensions}bb.jpg`
}
