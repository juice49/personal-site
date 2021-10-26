import { styled } from '../stitches.config'

const Box = styled('div', {
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

export default Box
