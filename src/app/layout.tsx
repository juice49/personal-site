import { type Metadata } from 'next'
import localFont from 'next/font/local'
import { theme } from '../theme.css'

const title = 'Ash - full stack web developer'

export const metadata: Metadata = {
  title,
  twitter: {
    site: '@juice49',
  },
  openGraph: {
    title,
  },
  alternates: {
    types: {
      'application/feed+json': '/feed',
    },
  },
}

const ptRootUi = localFont({
  variable: '--font-pt-root-ui',
  display: 'swap',
  src: '../../public/fonts/pt-root-ui-vf/fonts/pt-root-ui-vf.woff2',
})

const zangeziSans = localFont({
  variable: '--font-zangezi-sans',
  display: 'swap',
  src: [
    {
      path: '../../public/fonts/zangezi-sans-0.9/ZangeziSans09-Black.woff2',
      weight: '700',
    },
  ],
})

const jetbrainsMono = localFont({
  variable: '--font-jetbrains-mono',
  display: 'swap',
  src: '../../public/fonts/JetBrainsMono-1.0.3/web/woff2/JetBrainsMono-Regular.woff2',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      className={[
        theme,
        ptRootUi.variable,
        zangeziSans.variable,
        jetbrainsMono.variable,
      ].join(' ')}
      lang='en'
    >
      <body>
        <a
          rel='me'
          href='https://mastodon.social/@juice49'
          style={{ display: 'none' }}
        >
          Mastodon
        </a>
        {children}
      </body>
    </html>
  )
}
