import { recipe } from '@vanilla-extract/recipes'
import { vars, inlineBreakpoints } from '../theme.css'
import text from './text.css'

export const skillList = recipe({
  base: [
    text({
      size: 'micro',
      variant: 'mono',
    }),
    {
      marginInlineStart: vars.space[2],
      listStyle: 'square',
      color: vars.colors.bodySubtle,
    },
  ],
})

export const contactList = recipe({
  base: {
    display: 'grid',
    gap: vars.space[1],
    listStyle: 'none',
    color: '#fff',
    [`@media (min-width: ${inlineBreakpoints[1]})`]: {
      gridTemplateColumns: 'repeat(3, auto)',
    },
  },
})

export const contactListItem = recipe({
  base: [
    text({
      size: 'milli',
    }),
    {
      '& a': {
        display: 'inline-block',
        color: vars.colors.accentB,
        borderBlockEnd: '1px dashed currentColor',
        '&:hover, &:focus': {
          backgroundColor: vars.colors.accentB,
          color: vars.colors.accentA,
        },
      },
    },
  ],
})
