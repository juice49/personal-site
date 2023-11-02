import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../theme.css'

export const tagList = recipe({
  base: {
    display: 'flex',
    gap: vars.space.small,
    justifyContent: 'center',
    listStyle: 'none',
  },
})
