import React, { FC, PropsWithChildren } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { styled } from '../stitches.config'
import Text from './text'

const Navigation: FC<PropsWithChildren> = ({ children }) => (
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

export const NavigationLink: React.ComponentType<
  React.ComponentProps<typeof Link>
> = props => {
  const router = useRouter()

  const [currentPath, targetPath] = [router?.asPath, props?.href].map(
    path =>
      (typeof path == 'string' ? path ?? '' : path.href ?? '').split('/')[1],
  )

  const isActive = currentPath === targetPath

  const activeClassName = isActive ? 'is-active' : null

  return (
    <Text
      as={Link}
      {...props}
      className={activeClassName}
      weight={isActive ? 'bold' : undefined}
      css={{
        display: 'inline-block',
        position: 'relative',
        padding: 'calc($1 / 2) $1 ',
        color: 'inherit',
        textDecoration: 'none',
        '&:hover': {
          backgroundColor: 'initial',
          color: '$accentA',
        },
        '&.is-active::after': {
          display: 'block',
          position: 'absolute',
          height: '2px',
          backgroundColor: '$accentA',
          content: '',
          [`@media (max-width: calc(${breakpoints[0]} - 0.001em))`]: {
            width: '$space$2',
            insetInlineStart: 0,
            insetBlockStart: 'calc(50% - 1px)',
            transform: 'translate(-100%, -50%)',
          },
          [`@media (min-width: calc(${breakpoints[0]}))`]: {
            insetInline: '$1',
            insetBlockEnd: 'calc(($1 * 0.5) + 1px)',
          },
        },
      }}
    />
  )
}
