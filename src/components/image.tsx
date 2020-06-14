import React, { useState, useCallback } from 'react'
import styled from 'styled-components'

interface ResponsiveImage {
  srcSet: string,
  images: {
    width: number,
    height: number,
    path: string
  }[]
}

interface Props {
  src: ResponsiveImage,
  webpSrc?: ResponsiveImage,
  previewSrc: string,
  alt: string,
  style?: React.CSSProperties
}

const Image: React.FC<Props> = ({
  src,
  webpSrc,
  previewSrc,
  alt,
  style
}) => {
  const [hasLoaded, setHasLoaded] = useState<boolean>(false)

  const ref = useCallback(image => {
    if (image?.complete) {
      setHasLoaded(true)
    }
  }, [])

  return (
    <ImageBox style={style}>
      <ImageContent
        src={previewSrc}
        alt=''
        aria-hidden
        isPreview
      />
      <ImageContent as='picture' hasLoaded={hasLoaded}>
        {webpSrc && (
          <source srcSet={webpSrc.srcSet} type='image/webp' />
        )}
        <source srcSet={src.srcSet} type='image/jpeg' />
        <img
          ref={ref}
          src={src.images[0].path}
          alt={alt}
          loading='lazy'
          onLoad={() => setHasLoaded(true)}
        />
      </ImageContent>
    </ImageBox>
  )
}

export default Image

const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;

  &:before {
    display: block;
    padding-top: calc((var(--height) / var(--width)) * 100%);
    content: '';
  }
`

interface ImageContentProps {
  isPreview?: boolean,
  hasLoaded?: boolean
}

const ImageContent = styled.img<ImageContentProps>`
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  transition-property: opacity;
  transition-duration: var(--transition-duration, 500ms);

  &, img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${props => props.isPreview && `
    filter: blur(var(--blur, 20px));
  `}

  ${props => props.hasLoaded === false && `
    opacity: 0;
  `}
`
