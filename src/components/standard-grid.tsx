import { styled } from '../stitches.config'

const StandardGrid = styled('div', {
  display: 'grid',
  gridTemplateAreas: `
    'gutter1 content gutter2'
    'gutter1 meta1 gutter2'
    'gutter1 meta2 gutter2'`,
  gridTemplateColumns: `
    minmax($space$2, auto)
    minmax(0, 42ch)
    minmax($space$2, auto)`,
  '--gutterAb': '$space$2',
  '@belowI2': {
    '& > * + *': {
      marginTop: '$2',
    },
  },
  '@i3': {
    gridTemplateAreas: `'gutter1 meta1 gutterA content gutterB meta2 gutter2'`,
    gridTemplateColumns: `
      1fr
      minmax(auto, 15ch)
      var(--gutterAb)
      minmax(auto, 46ch)
      var(--gutterAb)
      minmax(auto, 15ch)
      1fr`,
  },
  '@i4': {
    '--gutterAb': '$space$4',
  },
})

export default StandardGrid

export const StandardGridContent = styled('div', {
  gridArea: 'content',
})

export const StandardGridContentSlightlyWide = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gridArea: 'content',
  '@i3': {
    gridArea: '1 / gutterA / 1 / gutterB',
  },
})

export const StandardGridContentWide = styled('div', {
  gridArea: 'content',
  '@i3': {
    gridArea: '1 / meta1 / 1 / meta2',
  },
})

export const StandardGridMeta = styled('div', {
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
