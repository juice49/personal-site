import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Box from './box'
import Text from './text'
import Stack from './stack'
// import Wave from '../components/wave'

const Footer: React.FC = () => (
  <Text as='div' size='milli'>
    <FooterBox>
      <Main>
        <Stack gap={1}>
          <p
            css={`
              font-variation-settings: 'wght' 700;
            `}
          >
            Made by Ash.
          </p>
          <p>The Web and Stuff 2008&thinsp;&ndash;&thinsp;??</p>
        </Stack>
      </Main>
      <MetaA>
        <Stack gap={1}>
          <p
            css={`
              font-variation-settings: 'wght' 700;
            `}
          >
            Etc.
          </p>
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
        </Stack>
      </MetaA>
      <MetaB>
        <Stack gap={1}>
          <p
            css={`
              font-variation-settings: 'wght' 700;
            `}
          >
            Networks and stuff:
          </p>
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
        </Stack>
      </MetaB>
      <MetaC>
        <Box mw={0}>
          <Stack gap={1}>
            {/* <Wave
              size={[24, 6]}
              strokeWidth={2}
              color='rgb(253, 206, 245)'
            /> */}
            <p>
              Feel free to use and remix anything you find on this site. It
              would be cool to hear what you do with it ✌️.
            </p>
          </Stack>
        </Box>
      </MetaC>
    </FooterBox>
  </Text>
)

const FooterBox = styled.footer`
  display: grid;
  padding: var(--space2);
  grid-gap: var(--space2);
  color: var(--body-color-subtle);

  grid-template-areas:
    'main'
    'metaA'
    'metaB'
    'metaC';

  @media (min-width: ${props => props.theme.breakpoints[0]}) {
    grid-template-areas:
      'main main'
      'metaA metaB'
      'metaC metaC';

    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    grid-template-areas:
      'main metaA metaB'
      'main metaA metaB'
      'metaC metaC metaC';

    grid-template-columns: 1fr repeat(2, max-content);
  }
`

export default Footer

const Main = styled.div`
  grid-area: main;
`

const MetaA = styled.div`
  grid-area: metaA;
`

const MetaB = styled.div`
  grid-area: metaB;
`

const MetaC = styled.div`
  grid-area: metaC;
`

const MetaList = styled.ul`
  list-style: none;
`
