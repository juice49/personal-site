import { recipe } from '@vanilla-extract/recipes'

export const imageBox = recipe({
  base: {
    position: 'relative',
    width: '100%',
    height: 'auto',
    overflow: 'hidden',
    aspectRatio: 'calc(var(--width) / var(--height))',
  },
})

export const imageContent = recipe({
  base: {
    position: 'absolute',
    insetInlineStart: 0,
    insetBlockStart: 0,
    transitionProperty: 'opacity',
    transitionDuration: 'var(--transition-duration, 500ms)',
    '&, img': {
      display: 'block',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
  variants: {
    isPreview: {
      true: {
        filter: 'blur(var(--blur, 20px))',
      },
    },
    hasLoaded: {
      false: {
        opacity: 0,
      },
    },
  },
})
