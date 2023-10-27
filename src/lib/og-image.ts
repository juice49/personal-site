export const colors = {
  background: 'rgb(253, 206, 245)',
  foreground: '#fff',
  bodySubtle: 'rgb(69, 68, 68)',
  accentA: '#090efe',
}

export const space = {
  1: 24,
  2: 58,
}

export const fontSizes = {
  small: 21,
  regular: 23,
  medium: 30,
  large: 53,
}

interface OgImageProps {
  title: string
  date?: string
}

export function ogImage(props: OgImageProps): {
  url: string
  width: number
  height: number
} {
  const searchParams = new URLSearchParams({
    ...props,
  })

  return {
    url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/og-image?${searchParams}`,
    width: 1200,
    height: 600,
  }
}
