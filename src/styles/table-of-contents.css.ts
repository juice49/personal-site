import { recipe } from '@vanilla-extract/recipes'
import { vars, inlineBreakpoints } from '../theme.css'

export const tableOfContents = recipe({
  base: {
    [`@media (min-width: ${inlineBreakpoints[1]})`]: {
      padding: vars.space.medium,
      border: `4px double ${vars.colors.accentA}`,
    },
  },
})
