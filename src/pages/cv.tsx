import { NextPage } from 'next'
import Head from 'next/head'
import { Level } from 'react-accessible-headings'
import { styled } from '../stitches.config'
import work from '../data/work'
import Layout from '../components/layout'
import Box from '../components/box'
import Text from '../components/text'
import Heading from '../components/heading'
import StandardGrid, { StandardGridContent } from '../components/standard-grid'
import ArticleList, { ArticleListItem } from '../components/article-list'
import FeaturedSection from '../components/featured-section'
import HeadingLevel from '../components/heading-level'

const Page: NextPage = () => (
  <Layout as='main'>
    <Head>
      <meta name='robots' content='noindex' />
    </Head>
    <StandardGrid>
      <StandardGridContent>
        <Box
          css={{
            stackBlock: '$4',
          }}
        >
          <Box
            as='header'
            css={{
              stackBlock: '$1',
            }}
          >
            <HeadingLevel>
              <Heading>Ash Stevens</Heading>
            </HeadingLevel>
            <Text as='p' variant='mono' size='micro'>
              Full stack web developer.
            </Text>
          </Box>
          <Text as='p' weight='bold'>
            I{' '}
            <Text
              css={{
                color: '#f81de6',
              }}
              role='img'
              aria-label='love'
            >
              &hearts;
            </Text>{' '}
            making things for the web. TypeScript, React, node.js, and
            Responsive Web Design are some of my favourite tools and techniques.
          </Text>
          <Contact />
        </Box>
      </StandardGridContent>
    </StandardGrid>
    <StandardGrid>
      <Level>
        <StandardGridContent>
          <Box
            css={{
              stackBlock: '$medium',
            }}
          >
            <Box
              css={{
                stackBlock: '$medium',
              }}
            >
              <HeadingLevel>
                <Heading>Skills</Heading>
              </HeadingLevel>
              <Level>
                <ArticleList columns>
                  <ArticleListItem
                    heading='JavaScript and TypeScript'
                    description='I love JS!'
                  >
                    <SkillList>
                      <li>React</li>
                      <li>TypeScript</li>
                      <li>node.js</li>
                      <li>Next.js</li>
                    </SkillList>
                  </ArticleListItem>
                  <ArticleListItem
                    heading='React'
                    description='I started working with React in 2014. Now I use it every day to make products for the web and mobile.'
                  >
                    <SkillList>
                      <li>React and React Native</li>
                      <li>
                        Global state management (Redux, Zustand, MobX State
                        Tree, and others)
                      </li>
                      <li>Component API design with TypeScript</li>
                    </SkillList>
                  </ArticleListItem>
                  <ArticleListItem
                    heading='Jamstack'
                    description='Static websites, APIs, and serverless functions are my jam. My preferred tool is Next.js, but I have developed projects using Gatsby too.'
                  >
                    <SkillList>
                      <li>Next.js</li>
                      <li>Gatsby</li>
                      <li>Vercel Platform</li>
                    </SkillList>
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
                    <SkillList>
                      <li>Styled Components</li>
                      <li>Styled System</li>
                      <li>Stitches</li>
                      <li>Stylus</li>
                      <li>BEM</li>
                    </SkillList>
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
            </Box>
          </Box>
        </StandardGridContent>
      </Level>
    </StandardGrid>
    <StandardGrid>
      <Level>
        <StandardGridContent>
          <Box
            css={{
              stackBlock: '$medium',
            }}
          >
            <HeadingLevel>
              <Heading>Experience</Heading>
            </HeadingLevel>
            <Level>
              <ArticleList>
                <ArticleListItem
                  heading='Sanity: Full Stack Engineer'
                  headingGap={false}
                  description='2022&thinsp;-&thinsp;Present'
                >
                  <Box
                    css={{
                      stackBlock: '$small',
                    }}
                  >
                    <Text as='p' size='milli'>
                      Developed tooling for the support team.
                    </Text>
                    <Text as='p' size='milli'>
                      Provided support to developers using the Sanity platform.
                    </Text>
                  </Box>
                </ArticleListItem>
                <ArticleListItem
                  heading='Si digital: Web Developer'
                  headingGap={false}
                  description='2014&thinsp;-&thinsp;2022'
                >
                  <Box
                    css={{
                      stackBlock: '$small',
                    }}
                  >
                    <Text as='p' size='milli'>
                      Led multiple full stack projects including PWAs, React
                      Native apps, APIs (REST and GraphQL), and CMS
                      integrations.
                    </Text>
                    <Text as='p' size='milli'>
                      Driven the adoption of React and Jamstack frameworks such
                      as Next.js and Gatsby.
                    </Text>
                    <Text as='p' size='milli'>
                      Created normalisation layers for our clients&apos; APIs.
                    </Text>
                    <Text as='p' size='milli'>
                      Created backends in node.js.
                    </Text>
                    <Text as='p' size='milli'>
                      Developed design systems.
                    </Text>
                    <Text as='p' size='milli'>
                      Mentored teammates and written blog posts.
                    </Text>
                  </Box>
                </ArticleListItem>
                <ArticleListItem
                  heading='Chichester Design: Web Developer'
                  headingGap={false}
                  description='2009&thinsp;&ndash;&thinsp;2014'
                >
                  <Box
                    css={{
                      stackBlock: '$small',
                    }}
                  >
                    <Text as='p' size='milli'>
                      Led and completed multiple full stack web development
                      projects.
                    </Text>
                    <Text as='p' size='milli'>
                      Worked on a range of projects varying from simple
                      marketing websites to web apps and realtime data
                      visualisations.
                    </Text>
                  </Box>
                </ArticleListItem>
                <ArticleListItem
                  heading='Strawberrysoup: Freelance Copywriter'
                  headingGap={false}
                  description='2006&thinsp;&ndash;&thinsp;2007'
                >
                  <Text as='p' size='milli'>
                    Wrote technical blog posts on topics such as web standards.
                  </Text>
                </ArticleListItem>
                <ArticleListItem
                  heading='Freelance Web Designer and Developer'
                  headingGap={false}
                  description='2005&thinsp;&ndash;&thinsp;2008'
                >
                  <Text as='p' size='milli'>
                    Assorted frontend development and design work when I was a
                    teenager.
                  </Text>
                </ArticleListItem>
              </ArticleList>
            </Level>
          </Box>
        </StandardGridContent>
      </Level>
    </StandardGrid>
    <StandardGrid>
      <Level>
        <StandardGridContent>
          <Box
            css={{
              stackBlock: '$medium',
            }}
          >
            <HeadingLevel>
              <Heading>Recent work</Heading>
            </HeadingLevel>
            <Level>
              <ArticleList columns>
                {work.map((work, index) => (
                  <ArticleListItem key={index} description={work.description} />
                ))}
              </ArticleList>
            </Level>
          </Box>
        </StandardGridContent>
      </Level>
    </StandardGrid>
    <StandardGrid>
      <Level>
        <StandardGridContent>
          <Box
            css={{
              stackBlock: '$medium',
            }}
          >
            <HeadingLevel>
              <Heading>Education</Heading>
            </HeadingLevel>
            <Level>
              <ArticleList>
                <ArticleListItem
                  heading='Bishop Luffa school'
                  headingGap={false}
                  description='2003&thinsp;&ndash;&thinsp;2009'
                >
                  <Text as='p' size='milli'>
                    Nine GCSEs A&thinsp;&ndash;&thinsp;C including ICT, English,
                    Maths, Science, Graphics and Media Studies.
                  </Text>
                </ArticleListItem>
              </ArticleList>
            </Level>
          </Box>
        </StandardGridContent>
      </Level>
    </StandardGrid>
    <StandardGrid>
      <StandardGridContent>
        <Contact />
      </StandardGridContent>
    </StandardGrid>
  </Layout>
)

export default Page

const SkillList = styled('ul', Text, {
  marginInlineStart: '$2',
  listStyle: 'square',
  color: '$bodySubtle',
  defaultVariants: {
    size: 'micro',
    variant: 'mono',
  },
})

const Contact: React.FC = () => (
  <Box
    css={{
      marginInline: 'calc($medium * -1)',
    }}
  >
    <FeaturedSection>
      <Box
        css={{
          padding: '$medium',
        }}
      >
        <ContactList>
          <ContactListItem>
            <Text weight='bold'>Email:</Text>
            &nbsp;
            <a href='mailto:ashley@juice49.com'>ashley@juice49.com</a>
          </ContactListItem>
          <ContactListItem>
            <Text weight='bold'>GitHub:</Text>
            &nbsp;
            <a
              href='https://github.com/juice49'
              target='_blank'
              rel='noopener noreferrer'
            >
              juice49
            </a>
          </ContactListItem>
          <ContactListItem>
            <Text weight='bold'>Twitter:</Text>
            &nbsp;
            <a
              href='https://twitter.com/juice49'
              target='_blank'
              rel='noopener noreferrer'
            >
              @juice49
            </a>
          </ContactListItem>
        </ContactList>
      </Box>
    </FeaturedSection>
  </Box>
)

const ContactList = styled('ul', {
  display: 'grid',
  gap: '$1',
  listStyle: 'none',
  color: '#fff',
  '@i2': {
    gridTemplateColumns: 'repeat(3, auto)',
  },
})

const ContactListItem = styled('li', Text, {
  '& a': {
    display: 'inline-block',
    color: '$accentB',
    borderBlockEnd: '1px dashed currentColor',
    '&:hover, &:focus': {
      backgroundColor: '$accentB',
      color: '$accentA',
    },
  },
  defaultVariants: {
    size: 'milli',
  },
})
