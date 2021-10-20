import React, { forwardRef } from 'react'
import { useRouter } from 'next/router'
import { styled } from '../stitches.config'
import Text from './text'

const Navigation: React.FC = ({ children }) => (
  <Text as='nav' size='milli'>
    <NavigationList>{children}</NavigationList>
  </Text>
)

export default Navigation

const breakpoints = ['36em']

const NavigationList = styled('ul', {
  margin: 'calc($1 * -1)',
  listStyle: 'none',
  [`@media (max-width: calc(${breakpoints[0]} - 0.001em))`]: {
    textAlign: 'right',
  },
  [`@media (min-width: calc(${breakpoints[0]}))`]: {
    display: 'flex',
  },
})

export const NavigationItem = 'li'

export const NavigationLink = forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>((props, ref) => {
  const router = useRouter()

  const [currentPath, targetPath] = [router?.asPath, props?.href].map(
    path => (path ?? '').split('/')[1],
  )

  const isActive = currentPath === targetPath

  const activeClassName = isActive ? 'is-active' : null

  return (
    <Text
      as='a'
      {...props}
      ref={ref}
      className={activeClassName}
      weight={isActive ? 'bold' : undefined}
      css={{
        display: 'inline-block',
        position: 'relative',
        padding: 'calc($1 / 2) $1 ',
        color: 'inherit',
        texDdecoration: 'none',
        '&:hover': {
          backgroundColor: 'initial',
          color: '$accentA',
        },
        '&.is-active::after': {
          display: 'block',
          position: 'absolute',
          height: '2px',
          backgroundColor: '$accentA',
          [`@media (max-width: calc(${breakpoints[0]} - 0.001em))`]: {
            width: '$2',
            left: 0,
            top: 'calc(50% - 1px)',
            transform: 'translate(-100%, -50%)',
          },
          [`@media (min-width: calc(${breakpoints[0]}))`]: {
            left: '$1',
            right: '$1',
            bottom: 'calc(($1 * 0.5) + 1px)',
          },
          content: '',
        },
      }}
    />
  )
})

NavigationLink.displayName = 'NavigationLink'
