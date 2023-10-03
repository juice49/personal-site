import { globalStyle } from '@vanilla-extract/css'
import { vars } from '../theme.css'

globalStyle('*', {
  margin: 0,
  padding: 0,
})

globalStyle(':root', {
  fontFamily: vars.fonts.body,
  '-webkit-font-smoothing': 'antialiased',
  '-moz-osx-font-smoothing': 'grayscale',
  fontSize: 'clamp(1.26rem, 1.8vw, 1.48rem)',
  lineHeight: 1.44,
  // FIXME
  textSizeAdjust: '100%',
  backgroundColor: vars.colors.documentBorder,
  color: vars.colors.body,
  margin: vars.space.documentBorderWidth,
})

globalStyle('h1, h2, h3, h4, h5, h6', {
  fontSize: '1rem',
  fontWeight: 'normal',
})

globalStyle('a', {
  color: vars.colors.accentA,
  textDecoration: 'none',
})
