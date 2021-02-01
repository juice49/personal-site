import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { CssValue, cssValueToString } from 'monstera'
import Text from './text'
import Navigation, { NavigationItem, NavigationLink } from './navigation'

const breakpoints: CssValue[] = [[36, 'em']]

const Header = () => (
  <Container>
    <Link href='/' passHref>
      <LogoLink>
        <Logo />
      </LogoLink>
    </Link>
    <NavigationContainer>
      <Navigation>
        <NavigationItem>
          <Link href='/posts' passHref>
            <NavigationLink>Posts</NavigationLink>
          </Link>
        </NavigationItem>
        <NavigationItem>
          <Link href='/projects' passHref>
            <NavigationLink>Projects</NavigationLink>
          </Link>
        </NavigationItem>
        <NavigationItem>
          <Link href='/this-is-my-jam' passHref>
            <NavigationLink>This is My Jam</NavigationLink>
          </Link>
        </NavigationItem>
        <NavigationItem>
          <Link href='/about' passHref>
            <NavigationLink>About</NavigationLink>
          </Link>
        </NavigationItem>
      </Navigation>
    </NavigationContainer>
  </Container>
)

export default Header

const Container = styled.div`
  display: flex;
  padding: var(--space3);

  @media (min-width: ${cssValueToString(breakpoints[0])}) {
    align-items: center;
  }
`

const NavigationContainer = styled.div`
  margin-left: auto;
`

const Logo: React.FC = () => (
  <Text as='p' weight='bold'>
    Ash
  </Text>
)

const LogoLink = styled.a`
  text-decoration: none;
  /* color: var(--accent-color); */
  color: var(--body-color);

  &:hover,
  &:focus {
    color: var(--accent-color);
    background-color: initial;
  }
`
