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

const LogoLink = styled('a', {
  textDecoration: 'none',
  /* color: var(--accent-color); */
  color: '$body',
  '&:hover, &:focus': {
    color: '$accentA',
    backgroundColor: 'initial',
  },
})
