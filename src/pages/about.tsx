import { NextPage } from 'next'
import Layout from '../components/layout'
import Box from '../components/box'
import Text from '../components/text'
import Stack from '../components/stack'
import Heading from '../components/heading'
import StandardGrid, { StandardGridContent } from '../components/standard-grid'

const Page: NextPage = () => (
  <Layout>
    <Box px={2}>
      <Heading variant='alpha'>
        Hello, I'm Ash.
      </Heading>
    </Box>
    <StandardGrid>
      <StandardGridContent>
        <Stack gap={2}>
          <Text as='p' weight='bold'>
            I like to make things&mdash;usually with web technologies, and usually <em>for</em> the web.
          </Text>
          <p>At the moment I'm most interested in design systems and frontend development with components. I also do backend development with things like node.js, GraphQL, and PHP. Although there are parts of the stack I'm super nerdy about, I am most passionate about <em>making stuff</em>.</p>
          <p>When I was a kid, I realised the web made it possible for almost anybody to publish content. I've been fascinated ever since. In the decade or so since then, I've not published very much&hellip; but I have made a lot of websites for other people.</p>
        </Stack>
      </StandardGridContent>
    </StandardGrid>
  </Layout>
)

export default Page
