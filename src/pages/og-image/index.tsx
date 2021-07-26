import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styled, { createGlobalStyle } from 'styled-components'
import { format } from 'date-fns'
import GlobalStyle from '../../components/global-style'
import Box from '../../components/box'
import Text from '../../components/text'
import Heading from '../../components/heading'

const CustomGlobalStyle = createGlobalStyle`
  :root {
    --document-border-width: 0;
  }
`

const Page: NextPage = () => {
  const { query } = useRouter()
  const [title] = [].concat(query.title)
  const [date] = [].concat(query.date)

  return (
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

            @font-face {
              font-family: Space Grotesk;
              font-display: swap;
              src: url('/fonts/space-grotesk-1.1.6/variable/SpaceGroteskVariable.ttf') format('truetype');
            }
          `,
          }}
        />
      </Head>
      <Container>
        <Box p={2} pb={0}>
          <LogoContainer>
            <LogoImage
              src='http://gravatar.com/avatar/baa7a8ec68ea6c13a1f0691098872575?s=200'
              alt='Photo of me'
              width={34}
              height={34}
            />
            <Text as='h2' weight='bold' size='milli'>
              Ash
            </Text>
          </LogoContainer>
        </Box>
        <Box px={2}>
          <Heading
            as='h1'
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />
          {date && (
            <Text variant='mono' size='micro' as='time' dateTime={date}>
              {format(new Date(date), 'd MMMM yyyy')}
            </Text>
          )}
        </Box>
        <Footer>
          <Box p={2}>
            <Text size='micro'>@juice49</Text>
          </Box>
          <Box p={2}>
            <Text size='micro'>https://ash.gd</Text>
          </Box>
        </Footer>
      </Container>
    </DocumentOuter>
  )
}

export default Page

/* export const config = {
  unstable_runtimeJS: false,
} */

const DocumentOuter = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: var(--background-color);
`

const Container = styled.div`
  display: grid;
  width: 100%;
  zoom: 3;
  grid-template-rows: auto 1fr auto;
  align-items: center;
`

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  color: var(--body-color-subtle);
`

const LogoContainer = styled.div`
  display: flex;
  gap: var(--space1);
  align-items: center;
`

const LogoImage = styled.img`
  display: block;
  border-radius: 50%;
`
