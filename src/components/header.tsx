import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { CssValue, cssValueToString } from 'monstera'
import Text from './text'
import Navigation, { NavigationItem, NavigationLink } from './navigation'

const breakpoints: CssValue[] = [[36, 'em']]

interface Props {
  isLogoH1?: boolean
}

const Header: React.FC<Props> = ({ isLogoH1 }) => (
  <Container>
    <Link href='/' passHref>
      <LogoLink>
        <Logo as={isLogoH1 ? 'h1' : 'p'} />
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

interface LogoProps {
  as?: string | React.ComponentType<any>
}

const Logo: React.FC<LogoProps> = props => (
  <Text weight='bold' {...props}>
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
