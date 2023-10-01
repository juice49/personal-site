import { recipe } from '@vanilla-extract/recipes'

const box = recipe({
  variants: {
    center: {
      true: {
        marginInline: 'auto',
      },
    },
    mw: {
      0: {
        maxWidth: '44ch',
      },
      1: {
        maxWidth: '75rem',
      },
    },
  },
})

export default box
