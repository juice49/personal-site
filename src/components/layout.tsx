import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import GlobalStyle from './global-style'
import Header from '../components/header'
import Footer from '../components/footer'
import Box from './box'
import Stack from './stack'

const Layout: React.FC = ({ children }) => (
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
        <Box pb={[15, 'vmin']}>
          <Stack gap={[15, 'vmin']}>
            <Header />
            {children}
          </Stack>
        </Box>
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
  background-color: var(--background-color);
`
