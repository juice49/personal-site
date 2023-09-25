import { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import { format } from 'date-fns'
import { styled, globalCss, theme } from '../../stitches.config'
import globalStyle from '../../components/global-style'
import Box from '../../components/box'
import Text from '../../components/text'
import Heading from '../../components/heading'

const customGlobalStyle = globalCss({
  ':root': {
    [theme.space.documentBorderWidth.variable]: 0,
  },
})

interface Props {
  title: string
  date?: string
}

const Page: NextPage<Props> = ({ title, date }) => {
  globalStyle()
  customGlobalStyle()

  return (
    <DocumentOuter>
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
        <Box
          css={{
            padding: '$2',
            paddingBlockEnd: 0,
          }}
        >
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
        <Box
          css={{
            paddingInline: '$2',
          }}
        >
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
          <Box
            css={{
              paddingInline: '$2',
              paddingBlock: '$1',
            }}
          >
            <Text size='micro'>@juice49</Text>
          </Box>
          <Box
            css={{
              paddingInline: '$2',
              paddingBlock: '$1',
            }}
          >
            <Text size='micro'>https://ash.gd</Text>
          </Box>
        </Footer>
      </Container>
    </DocumentOuter>
  )
}

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

const DocumentOuter = styled('div', {
  display: 'flex',
  minHeight: '100vh',
  backgroundColor: '$background',
})

const Container = styled('div', {
  display: 'grid',
  width: '100%',
  zoom: 1.75,
  gridTemplateRows: 'auto 1fr auto',
  alignItems: 'center',
})

const Footer = styled('footer', {
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#fff',
  color: '$bodySubtle',
})

const LogoContainer = styled('div', {
  display: 'flex',
  gap: '$1',
  alignItems: 'center',
})

const LogoImage = styled('img', {
  display: 'block',
  borderRadius: '50%',
})
