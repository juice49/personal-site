import React, { FC, PropsWithChildren } from 'react'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Box from './box'
import globalStyle from '../components/global-style'
import { styled } from '../stitches.config'

interface Props {
  as?: string | React.ComponentType<any>
  isLogoH1?: boolean
}

const Layout: FC<PropsWithChildren<Props>> = ({
  children,
  isLogoH1,
  ...props
}) => {
  globalStyle()

  return (
    <>
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
        <DocumentInner
          css={{
            stackBlock: '$page',
          }}
        >
          <Header isLogoH1={isLogoH1} />
          <Box
            css={{
              stackBlock: '$page',
            }}
            {...props}
          >
            {children}
          </Box>
        </DocumentInner>
        <Footer />
      </DocumentOuter>
    </>
  )
}

export default Layout

const DocumentOuter = styled('div', {
  display: 'flex',
  minHeight: 'calc(100vh - var(--document-border-width))',
  flexDirection: 'column',
})

const DocumentInner = styled('div', {
  flex: 1,
  paddingBlockEnd: '$page',
  backgroundColor: '$background',
})
