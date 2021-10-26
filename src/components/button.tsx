import { styled } from '../stitches.config'

const Button = styled('button', {
  display: 'inline-block',
  boxSizing: 'border-box',
  textAlign: 'center',
  backgroundColor: '#000',
  color: '#fff',
  fontFamily: 'Zangezi Sans',
  '&:hover, &:focus': {
    color: '#f8ce03',
  },
  variants: {
    variant: {
      large: {
        width: '100%',
        padding: '$2',
        fontSize: '1.3rem',
      },
    },
  },
})

export default Button
