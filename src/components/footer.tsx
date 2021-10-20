import React from 'react'
import Link from 'next/link'
import { styled } from '../stitches.config'
import Box from './box'
import Text from './text'
// import Wave from '../components/wave'

const Footer: React.FC = () => (
  <Text as='div' size='milli'>
    <FooterBox>
      <Main
        css={{
          stackBlock: '$small',
        }}
      >
        <Text weight='bold'>Made by Ash.</Text>
        <p>The Web and Stuff 2008&thinsp;&ndash;&thinsp;??</p>
      </Main>
      <MetaA
        css={{
          stackBlock: '$small',
        }}
      >
        <Text weight='bold'>Etc.</Text>
        <MetaList>
          <li>
            <a href='/feed'>Subscribe with JSON Feed</a>
          </li>
          <li>
            <a href='#'>
              <del>About this site</del>
            </a>
          </li>
          <li>
            <a href='#'>
              <del>Design system</del>
            </a>
          </li>
        </MetaList>
      </MetaA>
      <MetaB
        css={{
          stackBlock: '$small',
        }}
      >
        <Text weight='bold'>Networks and stuff:</Text>
        <MetaList>
          <li>
            <a href='mailto:ashley@juice49.com'>ashley@juice49.com</a>
          </li>
          <li>
            <a
              href='https://twitter.com/juice49'
              target='_blank'
              rel='noopener noreferrer'
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href='https://github.com/juice49'
              target='_blank'
              rel='noopener noreferrer'
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href='https://instagram.com/juice49'
              target='_blank'
              rel='noopener noreferrer'
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href='https://codepen.com/ash'
              target='_blank'
              rel='noopener noreferrer'
            >
              Codepen
            </a>
          </li>
          <li>
            <a
              href='https://dribbble.com/ash'
              target='_blank'
              rel='noopener noreferrer'
            >
              Dribbble
            </a>
          </li>
        </MetaList>
      </MetaB>
      <MetaC>
        <Box
          mw='0'
          css={{
            stackBlock: '$small',
          }}
        >
          {/* <Wave
              size={[24, 6]}
              strokeWidth={2}
              color='rgb(253, 206, 245)'
            /> */}
          <p>
            Feel free to use and remix anything you find on this site. It would
            be cool to hear what you do with it ✌️.
          </p>
        </Box>
      </MetaC>
    </FooterBox>
  </Text>
)

const FooterBox = styled('footer', {
  display: 'grid',
  padding: '$2',
  gap: '$2',
  color: '$bodySubtle',
  gridTemplateAreas: `'main'
    'metaA'
    'metaB'
    'metaC'`,
  '@i1': {
    gridTemplateAreas: `'main main'
      'metaA metaB'
      'metaC metaC'`,
    gridTemplateColumns: '1fr 1fr',
  },
  '@i2': {
    gridTemplateAreas: `'main metaA metaB'
      'main metaA metaB'
      'metaC metaC metaC'`,
    gridTemplateColumns: '1fr repeat(2, max-content)',
  },
})

export default Footer

const Main = styled('div', {
  gridArea: 'main',
})

const MetaA = styled('div', {
  gridArea: 'metaA',
})

const MetaB = styled('div', {
  gridArea: 'metaB',
})

const MetaC = styled('div', {
  gridArea: 'metaC',
})

const MetaList = styled('ul', {
  listStyle: 'none',
})
