import { recipe } from '@vanilla-extract/recipes'
import { vars, inlineBreakpoints } from '../theme.css'
import text from './text.css'

export const tableOfContents = recipe({
  base: {
    [`@media (min-width: ${inlineBreakpoints[1]})`]: {
      padding: vars.space.medium,
      border: `4px double ${vars.colors.accentA}`,
    },
  },
})

export const list = recipe({
  base: {
    marginInlineStart: vars.space.medium,
    '--gap': '0.5em',
    listStyle: 'square',
    '& > * + *': {
      marginBlockStart: 'var(--gap)',
    },
    ol: {
      listStyle: 'circle',
    },
  },
})

export const item = recipe({
  base: [
    text({
      size: 'micro',
      variant: 'mono',
    }),
    {
      '& > * + *': {
        marginBlockStart: 'var(--gap)',
      },
    },
  ],
})
