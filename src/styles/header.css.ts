import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../theme.css'

const breakpoints = ['36em']

export const headerContainer = recipe({
  base: {
    display: 'flex',
    padding: vars.space[3],
    [`@media (min-width: ${breakpoints[0]})`]: {
      alignItems: 'center',
    },
  },
})

export const navigationContainer = recipe({
  base: {
    marginInlineStart: 'auto',
  },
})

export const logoLink = recipe({
  base: {
    textDecoration: 'none',
    color: '$body',
    '&:hover, &:focus': {
      color: vars.colors.accentA,
      backgroundColor: 'initial',
    },
  },
})
