import { styled } from '../stitches.config'

const Heading = styled('h1', {
  position: 'relative',
  fontSize: '1.4rem',
  fontFamily: 'Zangezi Sans',
  lineHeight: 1.2,
  color: '$accentA',
  variants: {
    variant: {
      alpha: {
        fontSize: 'clamp(2.6rem, 7.2vw, 5.6rem)',
        lineHeight: '1.08',
        textAlign: 'center',
      },
    },
  },
  '&::before': {
    position: 'absolute',
    inset: 'calc($small * -1) calc($medium * -1)',
    content: '',
  },
  '.heading-anchor-link': {
    position: 'absolute',
    transform: 'translateX(calc((100% + $space$small) * -1))',
    opacity: 0,
    transition: 'opacity 180ms',
    '&::before': {
      position: 'absolute',
      zIndex: -1,
      inset: '-0.1em -0.3em',
      backgroundColor: 'rgb(255 255 255 / 0.6)',
      borderRadius: '0.25em',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      content: '',
    },
  },
  '&:hover .heading-anchor-link': {
    opacity: 1,
  },
})

export default Heading
