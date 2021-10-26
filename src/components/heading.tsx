import { styled } from '../stitches.config'

const Heading = styled('h1', {
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
})

export default Heading
