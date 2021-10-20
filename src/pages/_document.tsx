import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '../stitches.config'

export default class Document extends NextDocument {
  render() {
    const css = getCssText()

    return (
      <Html lang='en'>
        <Head>
          <style id='stitches' dangerouslySetInnerHTML={{ __html: css }} />
        </Head>
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
