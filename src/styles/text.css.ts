import { recipe } from '@vanilla-extract/recipes'

const text = recipe({
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
        fontFamily: `var(--font-jetbrains-mono), SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace`,
      },
    },
  },
})

export default text
