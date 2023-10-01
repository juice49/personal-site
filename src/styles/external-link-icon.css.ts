import { recipe } from '@vanilla-extract/recipes'

export const container = recipe({
  base: {
    width: '0.5rem',
    height: 'auto',
  },
})

export const path = recipe({
  base: {
    fill: 'currentColor',
  },
})
