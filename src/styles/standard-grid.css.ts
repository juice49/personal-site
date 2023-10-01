import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../theme.css'

export const standardGrid = recipe({
  base: {
    display: 'grid',
    gridTemplateAreas: `
    'gutter1 content gutter2'
    'gutter1 meta1 gutter2'
    'gutter1 meta2 gutter2'`,
    gridTemplateColumns: `
    minmax(${vars.space[2]}, auto)
    minmax(0, 42ch)
    minmax(${vars.space[2]}, auto)`,
    // FIXME
    // '--gutterAb': '$space$2',
    // '@belowI2': {
    //   '& > * + *': {
    //     marginBlockStart: '$2',
    //   },
    // },
    // '@i3': {
    //   gridTemplateAreas: `'gutter1 meta1 gutterA content gutterB meta2 gutter2'`,
    //   gridTemplateColumns: `
    //   1fr
    //   minmax(auto, 15ch)
    //   var(--gutterAb)
    //   minmax(auto, 46ch)
    //   var(--gutterAb)
    //   minmax(auto, 15ch)
    //   1fr`,
    // },
    // '@i4': {
    //   '--gutterAb': '$space$4',
    // },
  },
})

export const standardGridContent = recipe({
  base: {
    gridArea: 'content',
  },
})

export const standardGridContentSlightlyWide = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gridArea: 'content',
    // FIXME
    // '@i3': {
    //   gridArea: '1 / gutterA / 1 / gutterB',
    // },
  },
})

export const standardGridContentWide = recipe({
  base: {
    gridArea: 'content',
    // FIXME
    // '@i3': {
    //   gridArea: '1 / meta1 / 1 / meta2',
    // },
  },
})

export const standardGridMeta = recipe({
  variants: {
    position: {
      1: {
        gridArea: 'meta1',
      },
      2: {
        gridArea: 'meta2',
      },
    },
  },
  defaultVariants: {
    position: 1,
  },
})
