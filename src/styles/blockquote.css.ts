import { recipe } from '@vanilla-extract/recipes'
import { vars, inlineBreakpoints } from '../theme.css'

export const container = recipe({
  base: {
    [`@media (min-width: ${inlineBreakpoints[2]})`]: {
      marginInline: `calc(${vars.space.medium} * -1)`,
    },
  },
})

export const blockquoteText = recipe({
  base: {
    fontSize: '1.4rem',
    fontFamily: 'var(--font-zangezi-sans)',
    lineHeight: 1.2,
    color: vars.colors.accentA,
  },
})
