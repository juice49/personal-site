import { NextPage } from 'next'
// import { Level } from 'react-accessible-headings'
import work from '../../data/work'
import Layout from '../../components/layout'
import Box from '../../components/box'
import Text from '../../components/text'
import Heading from '../../components/heading'
import StandardGrid, {
  StandardGridContent,
} from '../../components/standard-grid'
import ArticleList, { ArticleListItem } from '../../components/article-list'
import HeadingLevel from '../../components/heading-level'

// FIXME-APP-DIR
const Level = ({ children }) => <>{children}</>

const Page: NextPage = () => (
  <Layout as='main'>
    <Box
      css={{
        paddingInline: '$medium',
      }}
    >
      <HeadingLevel>
        <Heading variant='alpha'>Hello, I&apos;m Ash.</Heading>
      </HeadingLevel>
    </Box>
    <StandardGrid>
      <StandardGridContent>
        <Box
          css={{
            stackBlock: '$medium',
          }}
        >
          <Text as='p' weight='bold'>
            I like to make things&mdash;usually with web technologies, and
            usually <em>for</em> the web.
          </Text>
          <p>
            At the moment I&apos;m most interested in jamstack and design
            systems. I work with things like React, Next.js, node.js, and
            GraphQL. Although there are parts of the stack I&apos;m very focused
            on, I am most passionate about <em>making stuff</em>.
          </p>
        </Box>
      </StandardGridContent>
    </StandardGrid>
    <Level>
      <StandardGrid>
        <StandardGridContent>
          <Box
            css={{
              stackBlock: '$medium',
            }}
          >
            <HeadingLevel>
              <Heading>Recent work</Heading>
            </HeadingLevel>
            <ArticleList columns>
              {work.map((work, index) => (
                <ArticleListItem key={index} description={work.description} />
              ))}
            </ArticleList>
          </Box>
        </StandardGridContent>
      </StandardGrid>
    </Level>
  </Layout>
)

export default Page
