'use client'

import React from 'react'
import Link from 'next/link'
import text from '../styles/text.css'
import Navigation, { NavigationItem, NavigationLink } from './navigation'

import {
  headerContainer,
  navigationContainer,
  logoLink,
} from '../styles/header.css'

interface Props {
  isLogoH1?: boolean
}

const Header: React.FC<Props> = ({ isLogoH1 }) => (
  <div className={headerContainer()}>
    <Link className={logoLink()} href='/'>
      <Logo as={isLogoH1 ? 'h1' : 'p'} />
    </Link>
    <div className={navigationContainer()}>
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
    </div>
  </div>
)

export default Header

interface LogoProps {
  as?: string | React.ComponentType<any>
}

const Logo: React.FC<LogoProps> = props => (
  <span className={text({ weight: 'bold' })} {...props}>
    Ash
  </span>
)
