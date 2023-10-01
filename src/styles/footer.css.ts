import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../theme.css'

export const footerBox = recipe({
  base: {
    display: 'grid',
    padding: vars.space[2],
    gap: vars.space[2],
    color: vars.colors.bodySubtle,
    gridTemplateAreas: `'main'
    'metaA'
    'metaB'
    'metaC'`,
    // FIXME
    // '@i1': {
    //   gridTemplateAreas: `'main main'
    //   'metaA metaB'
    //   'metaC metaC'`,
    //   gridTemplateColumns: '1fr 1fr',
    // },
    // '@i2': {
    //   gridTemplateAreas: `'main metaA metaB'
    //   'main metaA metaB'
    //   'metaC metaC metaC'`,
    //   gridTemplateColumns: '1fr repeat(2, max-content)',
    // },
  },
})

export const cell = recipe({
  variants: {
    cell: {
      main: {
        gridArea: 'main',
      },
      metaA: {
        gridArea: 'metaA',
      },
      metaB: {
        gridArea: 'metaB',
      },
      metaC: {
        gridArea: 'metaC',
      },
    },
  },
})

export const metaList = recipe({
  base: {
    listStyle: 'none',
  },
})
