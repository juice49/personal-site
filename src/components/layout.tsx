import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { CssValue, cssValueToString } from 'monstera'
import GlobalStyle from './global-style'
import Header from '../components/header'
import Footer from '../components/footer'
import Stack from './stack'

interface Props {
  as?: string | React.ComponentType<any>
  isLogoH1?: boolean
}

const blockGap: CssValue = [15, 'vmin']

const Layout: React.FC<Props> = ({ children, isLogoH1, ...props }) => (
  <>
    <GlobalStyle />
    <Head>
      <link
        rel='preload'
        href='/fonts/zangezi-sans-0.9/ZangeziSans09-Black.woff2'
        as='font'
        type='font/woff2'
        crossOrigin='anonymous'
      />
      <style
        type='text/css'
        dangerouslySetInnerHTML={{
          __html: `
            @font-face {
              font-family: 'PT Root UI';
              font-display: swap;
              src: url('/fonts/pt-root-ui-vf/fonts/pt-root-ui-vf.woff2') format('woff2');
            }
            
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
    <DocumentOuter>
      <DocumentInner>
        <Stack gap={blockGap}>
          <Header isLogoH1={isLogoH1} />
          <Stack gap={blockGap} {...props}>
            {children}
          </Stack>
        </Stack>
      </DocumentInner>
      <Footer />
    </DocumentOuter>
  </>
)

export default Layout

const DocumentOuter = styled.div`
  display: flex;
  min-height: calc(100vh - var(--document-border-width));
  flex-direction: column;
`

const DocumentInner = styled.div`
  flex: 1;
  padding-bottom: ${cssValueToString(blockGap)};
  background-color: var(--background-color);
`
