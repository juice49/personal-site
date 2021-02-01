import React, { forwardRef } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { CssValue, cssValueToString } from 'monstera'
import Text from './text'

const Navigation: React.FC = ({ children }) => (
  <Text as='nav' size='milli'>
    <NavigationList>{children}</NavigationList>
  </Text>
)

export default Navigation

const breakpoints: CssValue[] = [[36, 'em']]

const NavigationList = styled.ul`
  margin: calc(var(--space1) * -1);
  list-style: none;

  @media (max-width: calc(${cssValueToString(breakpoints[0])} - 0.001em)) {
    text-align: right;
  }

  @media (min-width: ${cssValueToString(breakpoints[0])}) {
    display: flex;
  }
`

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
      weight={isActive && 'bold'}
      css={`
        display: inline-block;
        position: relative;
        padding: calc(var(--space1) / 2) var(--space1);
        color: inherit;
        text-decoration: none;

        &:hover {
          background-color: initial;
          color: var(--accent-color);
        }

        &.is-active::after {
          display: block;
          position: absolute;
          height: 2px;
          background-color: var(--accent-color);

          @media (max-width: calc(${cssValueToString(
              breakpoints[0],
            )} - 0.001em)) {
            width: var(--space2);
            left: 0;
            top: calc(50% - 1px);
            transform: translate(-100%, -50%);
          }

          @media (min-width: ${cssValueToString(breakpoints[0])}) {
            left: var(--space1);
            right: var(--space1);
            bottom: calc((var(--space1) * 0.5) + 1px);
          }

          content: '';
        }
      `}
    />
  )
})
