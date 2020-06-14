import React, { useState, useCallback } from 'react'
import styled from 'styled-components'

interface Props {
  src: string,
  srcSet?: string,
  previewSrc: string,
  alt: string,
  style?: React.CSSProperties
}

const Image: React.FC<Props> = ({ src, srcSet, previewSrc, alt, style }) => {
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
      <ImageContent
        ref={ref}
        src={src}
        srcSet={srcSet}
        alt={alt}
        loading='lazy'
        hasLoaded={hasLoaded}
        onLoad={() => setHasLoaded(true)}
      />
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
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition-property: opacity;
  transition-duration: var(--transition-duration, 500ms);

  ${props => props.isPreview && `
    filter: blur(var(--blur, 20px));
  `}

  ${props => props.hasLoaded === false && `
    opacity: 0;
  `}
`
