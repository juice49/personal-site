import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../theme.css'

export const blockquoteText = recipe({
  base: {
    fontSize: '1.4rem',
    fontFamily: 'var(--font-zangezi-sans)',
    lineHeight: 1.2,
    color: vars.colors.accentA,
  },
})
