import { styled } from '../stitches.config'

const Text = styled('span', {
  variants: {
    size: {
      micro: {
        fontSize: '0.6rem',
      },
      milli: {
        fontSize: '0.8rem',
      },
    },
    weight: {
      bold: {
        fontVariationSettings: `'wght' 680`,
      },
    },
    variant: {
      mono: {
        fontFamily: `'JetBrains Mono', SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace`,
      },
    },
  },
})

export default Text
