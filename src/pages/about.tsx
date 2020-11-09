import { NextPage } from 'next'
import work from '../data/work'
import Layout from '../components/layout'
import Box from '../components/box'
import Text from '../components/text'
import Stack from '../components/stack'
import Heading from '../components/heading'
import StandardGrid, { StandardGridContent } from '../components/standard-grid'
import ArticleList, { ArticleListItem } from '../components/article-list'

const Page: NextPage = () => (
  <Layout>
    <Box px={2}>
      <Heading variant='alpha'>Hello, I'm Ash.</Heading>
    </Box>
    <StandardGrid>
      <StandardGridContent>
        <Stack gap={2}>
          <Text as='p' weight='bold'>
            I like to make things&mdash;usually with web technologies, and
            usually <em>for</em> the web.
          </Text>
          <p>
            At the moment I'm most interested in jamstack and design systems. I
            work with things like React, Next.js, node.js, and GraphQL. Although
            there are parts of the stack I'm very focused on, I am most
            passionate about <em>making stuff</em>.
          </p>
          <p>
            When I was younger, I was fortunate to discover how simple it can be
            to publish content online. In the decade or so since, I haven't
            published very much myself&hellip; but I have made a lot of websites
            for other people.
          </p>
        </Stack>
      </StandardGridContent>
    </StandardGrid>
    <StandardGrid>
      <StandardGridContent>
        <Stack gap={2}>
          <Heading as='h2'>Recent work</Heading>
          <ArticleList columns>
            {work.map((work, index) => (
              <ArticleListItem key={index} description={work.description} />
            ))}
          </ArticleList>
        </Stack>
      </StandardGridContent>
    </StandardGrid>
  </Layout>
)

export default Page
