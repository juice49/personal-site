import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../theme.css'

export const container = recipe({
  base: {
    display: 'grid',
    gridTemplateColumns: 'minmax(3rem, 0.18fr) 1fr',
    gridTemplateAreas: `'image info'`,
    gap: vars.space[2],
  },
})

export const actionList = recipe({
  base: {
    listStyle: 'none',
    // FIXME
    // '@belowI1': {
    //   stackBlock: '0.25rem',
    // },
    // '@i1': {
    //   display: 'flex',
    //   flexWrap: 'wrap',
    //   stackInline: '$2',
    // },
    'a:hover, a:focus': {
      backgroundColor: '$accentA',
      color: '#fff',
    },
  },
})

export const albumArtwork = recipe({
  base: {
    display: 'block',
    width: '100%',
    height: 'auto',
    backgroundColor: 'currentColor',
    clipPath: `polygon(
    0 0,
    calc(100% - 4px) 4px,
    100% 100%,
    4px calc(100% - 4px)
  )`,
  },
})
