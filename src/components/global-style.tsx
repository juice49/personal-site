import { globalCss, theme } from '../stitches.config'

export default globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },
  ':root': {
    '@i1': {
      [theme.space[1].variable]: '0.625rem',
      [theme.space[2].variable]: '1.25rem',
      [theme.space[3].variable]: '1.5625rem',
      [theme.space[4].variable]: '2.34375rem',
      [theme.space[5].variable]: '3.515625rem',
    },
    '@i2': {
      [theme.space[1].variable]: '0.78125rem',
      [theme.space[2].variable]: '1.5625rem',
      [theme.space[3].variable]: '1.953125rem',
      [theme.space[4].variable]: '2.9296875rem',
      [theme.space[5].variable]: '4.39453125rem',
    },
    fontFamily: '$body',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    fontSize: 'clamp(1.26rem, 1.8vw, 1.48rem)',
    lineHeight: 1.44,
    textSizeAdjust: '100%',
    backgroundColor: '$documentBorder',
    color: '$body',
    margin: '$documentBorderWidth',
  },
  'h1, h2, h3, h4, h5, h6': {
    fontSize: '1rem',
    fontWeight: 'normal',
  },
  a: {
    color: '$accentA',
    textDecoration: 'none',
  },
})
