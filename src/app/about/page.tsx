import { NextPage } from 'next'
// import { Level } from 'react-accessible-headings'
import work from '../../data/work'
import Layout from '../../components/layout'
import box from '../../styles/box.css'
import text from '../../styles/text.css'
import { heading } from '../../styles/heading.css'
import { standardGridContent } from '../../styles/standard-grid.css'
import { standardGrid } from '../../styles/standard-grid.css'
import ArticleList, { ArticleListItem } from '../../components/article-list'
import HeadingLevel from '../../components/heading-level'
import { stack, stackBlockGapVar } from '../../styles/stack.css'
import { vars } from '../../theme.css'

// FIXME-APP-DIR
const Level = ({ children }) => <>{children}</>

const Page: NextPage = () => (
  <Layout as='main'>
    <div
      style={{
        paddingInline: vars.space.medium,
      }}
    >
      <HeadingLevel>
        <h1 className={heading({ variant: 'alpha' })}>Hello, I&apos;m Ash.</h1>
      </HeadingLevel>
    </div>
    <div className={standardGrid()}>
      <div className={standardGridContent()}>
        <div
          className={stack({ block: true })}
          style={{
            [stackBlockGapVar]: vars.space.medium,
          }}
        >
          <p className={text({ weight: 'bold' })}>
            I like to make things&mdash;usually with web technologies, and
            usually <em>for</em> the web.
          </p>
          <p>
            At the moment I&apos;m most interested in jamstack and design
            systems. I work with things like React, Next.js, node.js, and
            GraphQL. Although there are parts of the stack I&apos;m very focused
            on, I am most passionate about <em>making stuff</em>.
          </p>
        </div>
      </div>
    </div>
    <Level>
      <div className={standardGrid()}>
        <div className={standardGridContent()}>
          <div
            className={stack({ block: true })}
            style={{
              [stackBlockGapVar]: vars.space.medium,
            }}
          >
            <HeadingLevel>
              <h1 className={heading()}>Recent work</h1>
            </HeadingLevel>
            <ArticleList columns>
              {work.map((work, index) => (
                <ArticleListItem key={index} description={work.description} />
              ))}
            </ArticleList>
          </div>
        </div>
      </div>
    </Level>
  </Layout>
)

export default Page
