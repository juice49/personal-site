'use client'

import React, { useState, useCallback } from 'react'
import * as CSS from 'csstype'
import { imageBox, imageContent } from '../styles/image.css'

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

  const ref = useCallback<(image: HTMLImageElement) => void>(image => {
    if (image?.complete) {
      setHasLoaded(true)
    }
  }, [])

  return (
    <div className={imageBox()} style={style}>
      <img
        className={imageContent({ isPreview: true })}
        src={previewSrc}
        alt=''
        aria-hidden
      />
      <picture className={imageContent({ hasLoaded })}>
        {webpSrcSet && <source srcSet={webpSrcSet} type='image/webp' />}
        <source srcSet={srcSet} type='image/jpeg' />
        <img
          ref={ref}
          src={src}
          alt={alt}
          loading='lazy'
          onLoad={() => setHasLoaded(true)}
        />
      </picture>
    </div>
  )
}

export default Image
