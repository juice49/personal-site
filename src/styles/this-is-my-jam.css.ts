import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../theme.css'

export const list = recipe({
  base: {
    // xxx test me
    '& > * + *': {
      marginBlockStart: `calc(${vars.space[4]} * 0.5)`,
      paddingBlockStart: `calc(${vars.space[4]} * 0.5)`,
      borderBlockStart: `1px dashed ${vars.colors.bodySubtle}`,
    },
  },
})
