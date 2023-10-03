import { recipe } from '@vanilla-extract/recipes'

export const stackInlineGapVar = '--stack-inline-gap'
export const stackBlockGapVar = '--stack-block-gap'

export const stack = recipe({
  variants: {
    inline: {
      true: {
        '& > * + *': {
          marginInlineStart: `var(${stackInlineGapVar})`,
        },
      },
    },
    block: {
      true: {
        '& > * + *': {
          marginBlockStart: `var(${stackBlockGapVar})`,
        },
      },
    },
  },
})
