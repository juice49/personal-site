import React, { useState, useCallback } from 'react'
import * as CSS from 'csstype'
import { styled } from '../stitches.config'

interface Props {
  src: string
  srcSet?: string
  webpSrcSet?: string
  previewSrc: string
  alt: string
  style?: CSS.Properties
}

const Image: React.FC<Props> = ({
  src,
  srcSet,
  webpSrcSet,
  previewSrc,
  alt,
  style,
}) => {
  const [hasLoaded, setHasLoaded] = useState<boolean>(false)

  const ref = useCallback(image => {
    if (image?.complete) {
      setHasLoaded(true)
    }
  }, [])

  return (
    <ImageBox style={style}>
      <ImageContent src={previewSrc} alt='' aria-hidden isPreview />
      <ImageContent as='picture' hasLoaded={hasLoaded}>
        {webpSrcSet && <source srcSet={webpSrcSet} type='image/webp' />}
        <source srcSet={srcSet} type='image/jpeg' />
        <img
          ref={ref}
          src={src}
          alt={alt}
          loading='lazy'
          onLoad={() => setHasLoaded(true)}
        />
      </ImageContent>
    </ImageBox>
  )
}

export default Image

const ImageBox = styled('div', {
  position: 'relative',
  width: '100%',
  height: 'auto',
  overflow: 'hidden',
  '&:before': {
    display: 'block',
    paddingBlockStart: 'calc((var(--height) / var(--width)) * 100%)',
    content: '',
  },
})

const ImageContent = styled('img', {
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
