import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Text from './text'
import Navigation, { NavigationItem, NavigationLink } from './navigation'

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
          <Link href='/' passHref>
            <NavigationLink>
              Home
            </NavigationLink>
          </Link>
        </NavigationItem>
        <NavigationItem>
          <Link href='/posts' passHref>
            <NavigationLink>
              Posts
            </NavigationLink>
          </Link>
        </NavigationItem>
        <NavigationItem>
          <Link href='/projects' passHref>
            <NavigationLink>
              Projects
            </NavigationLink>
          </Link>
        </NavigationItem>
        <NavigationItem>
          <Link href='/about' passHref>
            <NavigationLink>
              About
            </NavigationLink>
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

  @media (min-width: ${props => props.theme.breakpoints[0]}) {
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
