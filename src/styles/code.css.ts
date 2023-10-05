import { recipe } from '@vanilla-extract/recipes'
import { vars } from '../theme.css'

export const pre = recipe({
  base: {
    '&:focus': {
      outline: ['2px auto Highlight', '0 auto -webkit-focus-ring-color'],
    },
    marginInline: `calc(${vars.space.medium} * -1)`,
    padding: vars.space[2],
    backgroundColor: '#131313',
    color: '#fff',
    overflow: 'auto',
    code: {
      display: 'grid',
      whiteSpace: 'pre',
      wordSpacing: 'normal',
      wordBreak: 'normal',
      wordWrap: 'normal',
      hyphens: 'none',
      tabSize: 2,
      '&[data-language]': {
        backgroundColor: 'transparent',
      },
      fontSize: '0.8rem',
    },
  },
})

export const code = recipe({
  base: {
    padding: '0.18em 0.48em',
    backgroundColor: 'rgb(255 255 255 / 0.6)',
    font: 'inherit',
    fontSize: '0.7rem',
    color: vars.colors.bodySubtle,
    borderRadius: '0.25em',
    fontFamily: 'var(--font-jetbrains-mono)',

    '&[data-language]': {
      backgroundColor: 'rgba(154, 1, 148, 0.84)',
    },
  },
})
