import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../theme.css'

export const container = recipe({
  base: {
    textAlign: 'center',
  },
})

export const postHeading = recipe({
  base: {
    fontFamily: 'var(--font-zangezi-sans)',
    fontWeight: 700,
    color: vars.colors.accentA,
    lineHeight: 1.06,
    fontSize: 'clamp(2.6rem, 7.2vw, 5.6rem)',
    textAlign: 'center',
  },
})
