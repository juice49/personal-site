import { recipe } from '@vanilla-extract/recipes'
import text from './text.css'

export const tag = recipe({
  base: [
    text({ variant: 'mono', size: 'micro' }),
    {
      padding: '0.5em 0.75em',
      backgroundColor: '#000',
      color: '#fff',
    },
  ],
})
