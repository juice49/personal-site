// TODO: FIle is unused.
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <Main />
          <NextScript />
          {process.env.NODE_ENV === 'production' &&
            process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN && (
              <script
                defer
                src='https://static.cloudflareinsights.com/beacon.min.js'
                data-cf-beacon={`{"token": "${process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN}"}`}
              />
            )}
        </body>
      </Html>
    )
  }
}
