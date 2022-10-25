import React from 'react'
import Link from 'next/link'
import { styled } from '../stitches.config'
import Text from './text'
import Navigation, { NavigationItem, NavigationLink } from './navigation'

const breakpoints = ['36em']

interface Props {
  isLogoH1?: boolean
}

const Header: React.FC<Props> = ({ isLogoH1 }) => (
  <Container>
    <LogoLink href='/'>
      <Logo as={isLogoH1 ? 'h1' : 'p'} />
    </LogoLink>
    <NavigationContainer>
      <Navigation>
        <NavigationItem>
          <NavigationLink href='/posts'>Posts</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink href='/projects'>Projects</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink href='/this-is-my-jam'>This is My Jam</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink href='/about'>About</NavigationLink>
        </NavigationItem>
      </Navigation>
    </NavigationContainer>
  </Container>
)

export default Header

const Container = styled('header', {
  display: 'flex',
  padding: '$3',
  [`@media (min-width: ${breakpoints[0]})`]: {
    alignItems: 'center',
  },
})

const NavigationContainer = styled('div', {
  marginInlineStart: 'auto',
})

interface LogoProps {
  as?: string | React.ComponentType<any>
}

const Logo: React.FC<LogoProps> = props => (
  <Text weight='bold' {...props}>
    Ash
  </Text>
)

const LogoLink = styled(Link, {
  textDecoration: 'none',
  /* color: var(--accent-color); */
  color: '$body',
  '&:hover, &:focus': {
    color: '$accentA',
    backgroundColor: 'initial',
  },
})
