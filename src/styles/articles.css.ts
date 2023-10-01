import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../theme.css'
import { heading } from './heading.css'

export const articles = recipe({
  base: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(14rem, 100%), 1fr))',
    gap: vars.space[4],
  },
})

export const articleLink = recipe({
  base: {
    [`& ${heading()}`]: {
      color: vars.colors.accentC,
    },
    '&:hover, &:focus': {
      [`& ${heading()}`]: {
        color: vars.colors.accentB,
      },
    },
  },
})

export const meta = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
  },
})
