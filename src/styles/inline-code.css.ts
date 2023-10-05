import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../theme.css'

export const inlineCode = recipe({
  base: {
    backgroundColor: 'rgb(255 255 255 / 0.6)',
    padding: '0.18em 0.48em',
    fontSize: '0.7rem',
    color: vars.colors.bodySubtle,
    fontFamily: 'var(--font-jetbrains-mono)',
    borderRadius: '0.25em',
  },
})
