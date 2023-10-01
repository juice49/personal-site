import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../theme.css'

const border = {
  borderBlockStart: `1px dashed ${vars.colors.bodySubtle}`,
  marginBlockStart: `calc(${vars.space[2]} * 0.5)`,
  paddingBlockStart: `calc(${vars.space[2]} * 0.5)`,
}

export const container = recipe({
  base: {
    listStyle: 'circle',
    marginInlineStart: vars.space[2],
  },
  variants: {
    columns: {
      true: {
        display: 'grid',
        gap: vars.space[2],
        gridTemplateColumns: '1fr 1fr',
        // xxx test me
        '& > *': border,
      },
      false: {
        // xxx test me
        '& > * + *': border,
      },
    },
  },
  defaultVariants: {
    columns: false,
  },
})

export const articleLinkInner = recipe({
  base: {
    position: 'relative',
  },
})

export const articleLinkOuter = recipe({
  base: {
    display: 'block',
    position: 'relative',
    '&:hover': {
      '--color': '#fff',
    },
    selectors: {
      '&:hover::before': {
        position: 'absolute',
        zIndex: 0,
        inset: `0 calc(${vars.space[1]} * -1) calc(${vars.space[1]} * -1) 0`,
        backgroundColor: vars.colors.accentA,
        transform: 'skew(0.7deg, 0.7deg)',
        content: '',
      },
    },
  },
})
