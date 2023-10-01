import { recipe } from '@vanilla-extract/recipes'

const button = recipe({
  base: {
    display: 'inline-block',
    boxSizing: 'border-box',
    textAlign: 'center',
    backgroundColor: '#000',
    color: '#fff',
    fontFamily: 'var(--font-zangezi-sans)',
    '&:hover, &:focus': {
      color: '#f8ce03',
    },
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

export default button
