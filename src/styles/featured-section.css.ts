import { recipe } from '@vanilla-extract/recipes'

export const featuredSectionBox = recipe({
  base: {
    position: 'relative',
    '::before': {
      content: '',
      position: 'absolute',
      inset: 0,
      transform: 'skew(0.7deg, 0.7deg)',
      backgroundColor: '#1e58fa',
    },
  },
})

export const inner = recipe({
  base: {
    position: 'relative',
  },
})
