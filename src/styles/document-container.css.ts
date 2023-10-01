import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../theme.css'

export const documentOuter = recipe({
  base: {
    display: 'flex',
    minHeight: `calc(100vh - var(${vars.space.documentBorderWidth}))`,
    flexDirection: 'column',
  },
})

export const documentInner = recipe({
  base: {
    flex: 1,
    paddingBlockEnd: vars.space.page,
    backgroundColor: vars.colors.background,
  },
})
