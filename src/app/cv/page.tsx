import { NextPage } from 'next'
import Head from 'next/head'
// import { Level } from 'react-accessible-headings'
import work from '../../data/work'
import Layout from '../../components/layout'
import text from '../../styles/text.css'
import { heading } from '../../styles/heading.css'
import { standardGridContent } from '../../styles/standard-grid.css'
import { standardGrid } from '../../styles/standard-grid.css'
import ArticleList, { ArticleListItem } from '../../components/article-list'
import FeaturedSection from '../../components/featured-section'
import HeadingLevel from '../../components/heading-level'
import { skillList, contactList, contactListItem } from '../../styles/cv.css'
import { stack, stackBlockGapVar } from '../../styles/stack.css'
import { vars } from '../../theme.css'

// FIXME-APP-DIR
const Level = ({ children }) => <>{children}</>

const Page: NextPage = () => (
  <Layout as='main'>
    <Head>
      <meta name='robots' content='noindex' />
    </Head>
    <div className={standardGrid()}>
      <div className={standardGridContent()}>
        <div
          className={stack({ block: true })}
          style={{
            [stackBlockGapVar]: vars.space[4],
          }}
        >
          <header
            className={stack({ block: true })}
            style={{
              [stackBlockGapVar]: vars.space[1],
            }}
          >
            <HeadingLevel>
              <h1 className={heading()}>Ash Stevens</h1>
            </HeadingLevel>
            <p className={text({ variant: 'mono', size: 'micro' })}>
              Full stack web developer.
            </p>
          </header>
          <p className={text({ weight: 'bold' })}>
            I{' '}
            <span
              style={{
                color: '#f81de6',
              }}
              role='img'
              aria-label='love'
            >
              &hearts;
            </span>{' '}
            making things for the web. TypeScript, React, node.js, and
            Responsive Web Design are some of my favourite tools and techniques.
          </p>
          <Contact />
        </div>
      </div>
    </div>
    <div className={standardGrid()}>
      <Level>
        <div className={standardGridContent()}>
          <div
            className={stack({ block: true })}
            style={{
              [stackBlockGapVar]: vars.space.medium,
            }}
          >
            <div
              className={stack({ block: true })}
              style={{
                [stackBlockGapVar]: vars.space.medium,
              }}
            >
              <HeadingLevel>
                <h1 className={heading()}>Skills</h1>
              </HeadingLevel>
              <Level>
                <ArticleList columns>
                  <ArticleListItem
                    heading='JavaScript and TypeScript'
                    description='I love JS!'
                  >
                    <ul className={skillList()}>
                      <li>React</li>
                      <li>TypeScript</li>
                      <li>node.js</li>
                      <li>Next.js</li>
                    </ul>
                  </ArticleListItem>
                  <ArticleListItem
                    heading='React'
                    description='I started working with React in 2014. Now I use it every day to make products for the web and mobile.'
                  >
                    <ul className={skillList()}>
                      <li>React and React Native</li>
                      <li>
                        Global state management (Redux, Zustand, MobX State
                        Tree, and others)
                      </li>
                      <li>Component API design with TypeScript</li>
                    </ul>
                  </ArticleListItem>
                  <ArticleListItem
                    heading='Jamstack'
                    description='Static websites, APIs, and serverless functions are my jam. My preferred tool is Next.js, but I have developed projects using Gatsby too.'
                  >
                    <ul className={skillList()}>
                      <li>Next.js</li>
                      <li>Gatsby</li>
                      <li>Vercel Platform</li>
                    </ul>
                  </ArticleListItem>
                  <ArticleListItem
                    heading='Sanity CMS'
                    description={`I've created custom editor experiences, API integrations, and content managed websites with Sanity.`}
                  />
                  <ArticleListItem
                    heading='HTML'
                    description='Accessible and semantic HTML markup. Experienced with JSX and Pug.'
                  />
                  <ArticleListItem
                    heading='CSS'
                    description={`I care deeply about well structured CSS. CSS-in-JS is my technique of choice, but I'm experienced with Stylus too.`}
                  >
                    <ul className={skillList()}>
                      <li>Styled Components</li>
                      <li>Styled System</li>
                      <li>Stitches</li>
                      <li>Stylus</li>
                      <li>BEM</li>
                    </ul>
                  </ArticleListItem>
                  <ArticleListItem
                    heading='Responsive Web Design'
                    description='Mobile first, fast, and accessible responsive websites.'
                  />
                  <ArticleListItem
                    heading='Design Systems'
                    description={`I like to approach the development of UIs as a design system. I'm fascinated about better ways to bind the language of design to the language of components.`}
                  />
                  <ArticleListItem
                    heading='PHP'
                    description='I have developed many projects using WordPress and Zend Framework.'
                  />
                  <ArticleListItem
                    heading='MySQL'
                    description='Good knowledge of MySQL and relational database design.'
                  />
                  <ArticleListItem
                    heading='Git'
                    description={`I use Git every day, and I'm a huge fan of Git based deployment flows.`}
                  />
                  <ArticleListItem
                    heading='Unix'
                    description='I know my way around the terminal and have created a couple of small CLI tools myself.'
                  />
                </ArticleList>
              </Level>
            </div>
          </div>
        </div>
      </Level>
    </div>
    <div className={standardGrid()}>
      <Level>
        <div className={standardGridContent()}>
          <div
            className={stack({ block: true })}
            style={{
              [stackBlockGapVar]: vars.space.medium,
            }}
          >
            <HeadingLevel>
              <h1 className={heading()}>Experience</h1>
            </HeadingLevel>
            <Level>
              <ArticleList>
                <ArticleListItem
                  heading='Sanity: Full Stack Engineer'
                  headingGap={false}
                  description='2022&thinsp;-&thinsp;Present'
                >
                  <div
                    className={stack({ block: true })}
                    style={{
                      [stackBlockGapVar]: vars.space.small,
                    }}
                  >
                    <p className={text({ size: 'milli' })}>
                      Developed tooling for the support team.
                    </p>
                    <p className={text({ size: 'milli' })}>
                      Provided support to developers using the Sanity platform.
                    </p>
                  </div>
                </ArticleListItem>
                <ArticleListItem
                  heading='Si digital: Web Developer'
                  headingGap={false}
                  description='2014&thinsp;-&thinsp;2022'
                >
                  <div
                    className={stack({ block: true })}
                    style={{
                      [stackBlockGapVar]: vars.space.small,
                    }}
                  >
                    <p className={text({ size: 'milli' })}>
                      Led multiple full stack projects including PWAs, React
                      Native apps, APIs (REST and GraphQL), and CMS
                      integrations.
                    </p>
                    <p className={text({ size: 'milli' })}>
                      Driven the adoption of React and Jamstack frameworks such
                      as Next.js and Gatsby.
                    </p>
                    <p className={text({ size: 'milli' })}>
                      Created normalisation layers for our clients&apos; APIs.
                    </p>
                    <p className={text({ size: 'milli' })}>
                      Created backends in node.js.
                    </p>
                    <p className={text({ size: 'milli' })}>
                      Developed design systems.
                    </p>
                    <p className={text({ size: 'milli' })}>
                      Mentored teammates and written blog posts.
                    </p>
                  </div>
                </ArticleListItem>
                <ArticleListItem
                  heading='Chichester Design: Web Developer'
                  headingGap={false}
                  description='2009&thinsp;&ndash;&thinsp;2014'
                >
                  <div
                    className={stack({ block: true })}
                    style={{
                      [stackBlockGapVar]: vars.space.small,
                    }}
                  >
                    <p className={text({ size: 'milli' })}>
                      Led and completed multiple full stack web development
                      projects.
                    </p>
                    <p className={text({ size: 'milli' })}>
                      Worked on a range of projects varying from simple
                      marketing websites to web apps and realtime data
                      visualisations.
                    </p>
                  </div>
                </ArticleListItem>
                <ArticleListItem
                  heading='Strawberrysoup: Freelance Copywriter'
                  headingGap={false}
                  description='2006&thinsp;&ndash;&thinsp;2007'
                >
                  <p className={text({ size: 'milli' })}>
                    Wrote technical blog posts on topics such as web standards.
                  </p>
                </ArticleListItem>
                <ArticleListItem
                  heading='Freelance Web Designer and Developer'
                  headingGap={false}
                  description='2005&thinsp;&ndash;&thinsp;2008'
                >
                  <p className={text({ size: 'milli' })}>
                    Assorted frontend development and design work when I was a
                    teenager.
                  </p>
                </ArticleListItem>
              </ArticleList>
            </Level>
          </div>
        </div>
      </Level>
    </div>
    <div className={standardGrid()}>
      <Level>
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
            <Level>
              <ArticleList columns>
                {work.map((work, index) => (
                  <ArticleListItem key={index} description={work.description} />
                ))}
              </ArticleList>
            </Level>
          </div>
        </div>
      </Level>
    </div>
    <div className={standardGrid()}>
      <Level>
        <div className={standardGridContent()}>
          <div
            className={stack({ block: true })}
            style={{
              [stackBlockGapVar]: vars.space.medium,
            }}
          >
            <HeadingLevel>
              <h1 className={heading()}>Education</h1>
            </HeadingLevel>
            <Level>
              <ArticleList>
                <ArticleListItem
                  heading='Bishop Luffa school'
                  headingGap={false}
                  description='2003&thinsp;&ndash;&thinsp;2009'
                >
                  <p className={text({ size: 'milli' })}>
                    Nine GCSEs A&thinsp;&ndash;&thinsp;C including ICT, English,
                    Maths, Science, Graphics and Media Studies.
                  </p>
                </ArticleListItem>
              </ArticleList>
            </Level>
          </div>
        </div>
      </Level>
    </div>
    <div className={standardGrid()}>
      <div className={standardGridContent()}>
        <Contact />
      </div>
    </div>
  </Layout>
)

export default Page

const Contact: React.FC = () => (
  <div
    style={{
      marginInline: 'calc($medium * -1)',
    }}
  >
    <FeaturedSection>
      <div
        style={{
          padding: '$medium',
        }}
      >
        <ul className={contactList()}>
          <li className={contactListItem()}>
            <span className={text({ weight: 'bold' })}>Email:</span>
            &nbsp;
            <a href='mailto:ashley@juice49.com'>ashley@juice49.com</a>
          </li>
          <li className={contactListItem()}>
            <span className={text({ weight: 'bold' })}>GitHub:</span>
            &nbsp;
            <a
              href='https://github.com/juice49'
              target='_blank'
              rel='noopener noreferrer'
            >
              juice49
            </a>
          </li>
          <li className={contactListItem()}>
            <span className={text({ weight: 'bold' })}>Twitter:</span>
            &nbsp;
            <a
              href='https://twitter.com/juice49'
              target='_blank'
              rel='noopener noreferrer'
            >
              @juice49
            </a>
          </li>
        </ul>
      </div>
    </FeaturedSection>
  </div>
)
