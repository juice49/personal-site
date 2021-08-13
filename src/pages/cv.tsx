import styled from 'styled-components'
import { NextPage } from 'next'
import Head from 'next/head'
import { cssValueToString } from 'monstera'
import { Level } from 'react-accessible-headings'
import work from '../data/work'
import Layout from '../components/layout'
import Box from '../components/box'
import Text from '../components/text'
import Stack from '../components/stack'
import Heading from '../components/heading'
import StandardGrid, { StandardGridContent } from '../components/standard-grid'
import ArticleList, { ArticleListItem } from '../components/article-list'
import FeaturedSection from '../components/featured-section'

const Page: NextPage = () => (
  <Layout as='main'>
    <Head>
      <meta name='robots' content='noindex' />
    </Head>
    <StandardGrid>
      <StandardGridContent>
        <Stack gap={4}>
          <Stack as='header' gap={1}>
            <Heading>Ash Stevens</Heading>
            <Text as='p' variant='mono' size='micro'>
              Full stack web developer.
            </Text>
          </Stack>
          <LoveList>
            {[
              'I love making stuff for the web',
              'JavaScript',
              'React',
              'Jamstack',
              'Responsive Web Design',
            ].map((item, index) => (
              <LoveListItem key={index}>{item}</LoveListItem>
            ))}
          </LoveList>
          <Contact />
        </Stack>
      </StandardGridContent>
    </StandardGrid>
    <StandardGrid>
      <Level>
        <StandardGridContent>
          <Stack gap={2}>
            <Stack gap={2}>
              <Heading>Skills</Heading>
              <Level>
                <ArticleList columns>
                  <ArticleListItem
                    heading='Writing'
                    description='I enjoy writing, and care about concise and engaging written communication.'
                  />
                  <ArticleListItem
                    heading='Mentoring'
                    description='Helping teammates, mentoring, and teaching are some of my favourite aspects of my job.'
                  />
                  <ArticleListItem
                    heading='Responsive Web Design'
                    description='Mobile first, fast, and accessible responsive websites.'
                  />
                  <ArticleListItem
                    heading='JavaScript'
                    description='I love JS! It has become an integral part of frontend and backend development. I closely follow the most recent developments in the JS ecosystem and figure out how to use them responsibly.'
                  >
                    <SkillList>
                      <li>node.js</li>
                      <li>React</li>
                      <li>Next.js</li>
                      <li>TypeScript</li>
                    </SkillList>
                  </ArticleListItem>
                  <ArticleListItem
                    heading='React'
                    description='I have been a huge advocate of React since 2014. I am very happy it has blossomed into a respected and widely used tool.'
                  />
                  <ArticleListItem
                    heading='Jamstack'
                    description='Static websites, APIs, and serverless functions are my jam. My preferred tool is Next.js, but I have completed projects using Gatsby too.'
                  >
                    <SkillList>
                      <li>Next.js</li>
                      <li>Gatsby</li>
                      <li>Vercel Platform</li>
                    </SkillList>
                  </ArticleListItem>
                  <ArticleListItem
                    heading='HTML'
                    description='Accessible and semantic HTML markup. Experienced with JSX and Pug.'
                  />
                  <ArticleListItem
                    heading='CSS'
                    description={`I care deeply about well structured CSS. CSS-in-JS (mostly Styled Components) is my tool of choice, but I'm experienced with Stylus too.`}
                  >
                    <SkillList>
                      <li>Styled Components</li>
                      <li>Stylus</li>
                      <li>BEM</li>
                    </SkillList>
                  </ArticleListItem>
                  <ArticleListItem
                    heading='PHP'
                    description='I have completed many projects using WordPress and Zend Framework.'
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
                  <ArticleListItem
                    heading='Design'
                    description={`I'm a fan of clean design and good typography. Experienced with Figma and Adobe CC.`}
                  />
                </ArticleList>
              </Level>
            </Stack>
          </Stack>
        </StandardGridContent>
      </Level>
    </StandardGrid>
    <StandardGrid>
      <Level>
        <StandardGridContent>
          <Stack gap={2}>
            <Heading>Experience</Heading>
            <Level>
              <ArticleList>
                <ArticleListItem
                  heading='Si digital&thinsp;&mdash;&thinsp;Web developer'
                  description='2014&thinsp;&ndash;&thinsp;Present'
                >
                  <Stack gap={1}>
                    <Text as='p' size='milli'>
                      At Si digital I have led and delivered many full stack
                      projects including basic marketing sites, PWAs, and APIs
                      (REST and GraphQL).
                    </Text>
                    <Text as='p' size='milli'>
                      Since 2014 I have driven the adoption of React and
                      Jamstack frameworks such as Next.js and Gatsby. We now use
                      these tools for most projects.
                    </Text>
                    <Text as='p' size='milli'>
                      In 2019 I mentored an apprentice developer. During their
                      time at the company they developed a great understanding
                      of React and Next.js, and created some fantastic projects
                      using these tools.
                    </Text>
                  </Stack>
                </ArticleListItem>
                <ArticleListItem
                  heading='Chichester Design&thinsp;&mdash;&thinsp;Web developer'
                  description='2009&thinsp;&ndash;&thinsp;2014'
                >
                  <Stack gap={1}>
                    <Text as='p' size='milli'>
                      At Chichester Design I led and completed multiple full
                      stack web development projects.
                    </Text>
                    <Text as='p' size='milli'>
                      I worked on a range of projects varying from simple
                      marketing websites to web apps and realtime data
                      visualisation. These projects presented fantastic
                      opportunities to use tools and technologies such as
                      node.js, web sockets, Backbone.js and AngularJS.
                    </Text>
                    <Text as='p' size='milli'>
                      I regularly created responsive variations from an original
                      design as part of my frontend development work, and
                      occasionally had the opportunity to undertake wider design
                      work.
                    </Text>
                  </Stack>
                </ArticleListItem>
                <ArticleListItem
                  heading='Strawberrysoup&thinsp;&mdash;&thinsp;Freelance copywriter'
                  description='2006&thinsp;&ndash;&thinsp;2007'
                >
                  <Text as='p' size='milli'>
                    Following a short period of work experience with web agency
                    Strawberry Soup, I was hired to write technical articles for
                    their blog.
                  </Text>
                </ArticleListItem>
                <ArticleListItem
                  heading='Freelance web designer and developer'
                  description='2005&thinsp;&ndash;&thinsp;2008'
                >
                  <Text as='p' size='milli'>
                    As a teenager I freelanced remotely with companies open to
                    working with somebody so young, including the (surprisingly
                    SFW) Furry Friends Web Design.
                  </Text>
                </ArticleListItem>
              </ArticleList>
            </Level>
          </Stack>
        </StandardGridContent>
      </Level>
    </StandardGrid>
    <StandardGrid>
      <Level>
        <StandardGridContent>
          <Stack gap={2}>
            <Heading>Recent work</Heading>
            <Level>
              <ArticleList columns>
                {work.map((work, index) => (
                  <ArticleListItem key={index} description={work.description} />
                ))}
              </ArticleList>
            </Level>
          </Stack>
        </StandardGridContent>
      </Level>
    </StandardGrid>
    <StandardGrid>
      <Level>
        <StandardGridContent>
          <Stack gap={2}>
            <Heading>Education</Heading>
            <Level>
              <ArticleList>
                <ArticleListItem
                  heading='Bishop Luffa school'
                  description='2003&thinsp;&ndash;&thinsp;2009'
                >
                  <Text as='p' size='milli'>
                    Nine GCSEs A&thinsp;&ndash;&thinsp;C including ICT, English,
                    Maths, Science, Graphics and Media Studies.
                  </Text>
                </ArticleListItem>
              </ArticleList>
            </Level>
          </Stack>
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

const SkillList = styled(Text).attrs(() => ({
  size: 'micro',
  variant: 'mono',
  as: 'ul',
}))`
  margin-left: var(--space2);
  list-style: square;
  color: var(--body-color-subtle);
`

const Contact: React.FC = () => (
  <Box mx={-2}>
    <FeaturedSection>
      <Box p={2}>
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

const ContactList = styled.ul`
  display: grid;
  grid-gap: var(--space1);
  list-style: none;
  color: #fff;

  @media (min-width: ${props => cssValueToString(props.theme.breakpoints[1])}) {
    grid-template-columns: repeat(3, auto);
  }
`

const ContactListItem = styled(Text).attrs(() => ({
  as: 'li',
  size: 'milli',
}))`
  a {
    display: inline-block;
    color: var(--accent-color-b);
    border-bottom: 1px dashed currentColor;

    &:hover,
    &:focus {
      background-color: var(--accent-color-b);
      color: var(--accent-color);
    }
  }
`

const LoveList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`

const LoveListItem = styled.li`
  &:first-of-type::before,
  &::after {
    margin-left: var(--space1);
    margin-right: var(--space1);
    color: #f81de6;
    content: '\u2665';
  }

  &:first-of-type::before {
    margin-left: 0;
  }
`
