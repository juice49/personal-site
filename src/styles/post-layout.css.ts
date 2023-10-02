import { recipe } from '@vanilla-extract/recipes'
import { vars, inlineBreakpoints } from '../theme.css'

export const tableOfContentsContainer = recipe({
  base: {
    [`@media (min-width: ${inlineBreakpoints[1]})`]: {
      marginInline: `calc(${vars.space.medium} * -1)`,
    },
  },
})
