import { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
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

interface Props {
  title: string
  date?: string
}

const Page: NextPage<Props> = ({ title, date }) => (
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
        <Box px={2} py={1}>
          <Text size='micro'>@juice49</Text>
        </Box>
        <Box px={2} py={1}>
          <Text size='micro'>https://ash.gd</Text>
        </Box>
      </Footer>
    </Container>
  </DocumentOuter>
)

export default Page

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const props: Props = {
    title: [].concat(query.title)[0],
  }

  if (query.date) {
    props.date = [].concat(query.date)[0]
  }

  return { props }
}

export const config = {
  unstable_runtimeJS: false,
}

const DocumentOuter = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: var(--background-color);
`

const Container = styled.div`
  display: grid;
  width: 100%;
  zoom: 1.75;
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
