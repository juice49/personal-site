import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../theme.css'
import text from './text.css'

export const note = recipe({
  base: [
    text({
      size: 'micro',
      variant: 'mono',
    }),
    {
      color: vars.colors.bodySubtle,
    },
  ],
})
