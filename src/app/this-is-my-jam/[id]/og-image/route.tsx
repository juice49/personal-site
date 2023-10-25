import { ImageResponse } from 'next/server'
import { notFound } from 'next/navigation'
import groq from 'groq'
import loadSatoriFonts from '../../../../lib/load-satori-fonts'
import { colors, space, fontSizes } from '../../../../lib/og-image'
import sanity from '../../../../lib/sanity'
import type Jam from '../../../../types/jam'

export const runtime = 'edge'

interface Props {
  params: {
    id: string
  }
}

export async function GET(_request: Request, { params }: Props) {
  const [ptRootUiRegular, ptRootUiBold, zangeziSansBlack, jetBrainsMono] =
    await loadSatoriFonts(
      'pt-root-ui/pt-root-ui_regular.ttf',
      'pt-root-ui/pt-root-ui_bold.ttf',
      'zangezi-sans-0.9/ZangeziSans09-Black.woff',
      'JetBrainsMono-1.0.3/ttf/JetBrainsMono-Regular.ttf',
    )

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
      id: params?.id,
    },
  )

  if (!jam) {
    notFound()
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: colors.background,
          width: '100%',
          height: '100%',
          fontSize: fontSizes.regular,
        }}
      >
        <div
          style={{
            display: 'flex',
            padding: space[2],
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 1,
          }}
        >
          <div
            style={{
              display: 'flex',
              maxWidth: '100%',
              flexDirection: 'row',
              gap: space[2],
            }}
          >
            <img
              src={getAppleMusicImageUrl(
                jam.track.album.appleMusicImageUrl,
                600,
              )}
              width={200}
              height={200}
              alt={`The album art for "${
                jam.track.album.name
              }" by ${jam.track.artists.map(({ name }) => name).join(', ')}`}
              style={{
                display: 'block',
                // Satori doesn't like `calc` or line breaks here.
                clipPath: `polygon(0 0, ${200 - 4}px 4px, 100% 100%, 4px ${
                  200 - 4
                }px)`,
              }}
            />
            <div
              style={{
                display: 'flex',
                flexShrink: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                gap: space[1],
              }}
            >
              <h1
                style={{
                  margin: 0,
                  fontFamily: 'Zangezi Sans',
                  fontSize: fontSizes.large,
                  fontWeight: 900,
                  color: colors.accentA,
                }}
              >
                {jam.track.name}
              </h1>
              <span
                style={{
                  fontSize: fontSizes.small,
                  fontFamily: 'JetBrains Mono',
                }}
              >
                {jam.track.artists.map(({ name }) => name).join(', ')}
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
      fonts: [
        {
          name: 'PTRootUI',
          data: ptRootUiRegular,
          weight: 400,
        },
        {
          name: 'PTRootUI',
          data: ptRootUiBold,
          weight: 800,
        },
        {
          name: 'Zangezi Sans',
          data: zangeziSansBlack,
          weight: 900,
        },
        {
          name: 'JetBrains Mono',
          data: jetBrainsMono,
          weight: 400,
        },
      ],
    },
  )
}

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
