import { ImageResponse } from 'next/server'
import { format } from 'date-fns'
import loadSatoriFonts from '../../lib/load-satori-fonts'
import { colors, space, fontSizes } from '../../lib/og-image'

export const runtime = 'edge'

export async function GET(request: Request) {
  const url = new URL(request.url)
  const title = url.searchParams.get('title')
  const date = url.searchParams.get('date')

  const [ptRootUiRegular, ptRootUiBold, zangeziSansBlack, jetBrainsMono] =
    await loadSatoriFonts(
      'pt-root-ui/pt-root-ui_regular.ttf',
      'pt-root-ui/pt-root-ui_bold.ttf',
      'zangezi-sans-0.9/ZangeziSans09-Black.woff',
      'JetBrainsMono-1.0.3/ttf/JetBrainsMono-Regular.ttf',
    )

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
            padding: `0 ${space[2]}px`,
            paddingTop: space[2],
            gap: space[1],
            alignItems: 'center',
          }}
        >
          <img
            src='http://gravatar.com/avatar/baa7a8ec68ea6c13a1f0691098872575?s=200'
            alt='Photo of me'
            width={60}
            height={60}
            style={{
              display: 'block',
              borderRadius: '50%',
            }}
          />
          <h2
            style={{
              fontSize: fontSizes.medium,
              fontWeight: 800,
              margin: 0,
              lineHeight: 1,
            }}
          >
            Ash
          </h2>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: `0 ${space[2]}px`,
            flexGrow: 1,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
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
              {title}
            </h1>
            {date && (
              <time
                dateTime={date}
                style={{
                  fontSize: fontSizes.small,
                  fontFamily: 'JetBrains Mono',
                }}
              >
                {format(new Date(date), 'd MMMM yyyy')}
              </time>
            )}
          </div>
        </div>
        <footer
          style={{
            display: 'flex',
            padding: `${space[1]}px ${space[2]}px`,
            justifyContent: 'space-between',
            backgroundColor: colors.foreground,
            color: colors.bodySubtle,
          }}
        >
          <p>@juice49</p>
          <p>https://ash.gd</p>
        </footer>
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
