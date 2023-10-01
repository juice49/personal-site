import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../theme.css'

const breakpoints = ['36em']

export const navigationList = recipe({
  base: {
    margin: `calc(${vars.space[1]} * -1)`,
    listStyle: 'none',
    [`@media (max-width: calc(${breakpoints[0]} - 0.001em))`]: {
      textAlign: 'right',
    },
    [`@media (min-width: calc(${breakpoints[0]}))`]: {
      display: 'flex',
    },
  },
})

export const navigationLink = recipe({
  base: {
    display: 'inline-block',
    position: 'relative',
    padding: `calc(${vars.space[1]} / 2) ${vars.space[1]}`,
    color: 'inherit',
    textDecoration: 'none',
    ':hover': {
      backgroundColor: 'initial',
      color: vars.colors.accentA,
    },
  },
  variants: {
    isActive: {
      true: {
        '::after': {
          display: 'block',
          position: 'absolute',
          height: '2px',
          backgroundColor: vars.colors.accentA,
          content: '',
        },
        [`@media (max-width: calc(${breakpoints[0]} - 0.001em))`]: {
          '&::after': {
            width: vars.space[2],
            insetInlineStart: 0,
            insetBlockStart: 'calc(50% - 1px)',
            transform: 'translate(-100%, -50%)',
          },
        },
        [`@media (min-width: ${breakpoints[0]})`]: {
          '&::after': {
            insetInline: vars.space[1],
            insetBlockEnd: `calc((${vars.space[1]} * 0.5) + 1px)`,
          },
        },
      },
    },
  },
})
