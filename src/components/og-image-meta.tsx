import React from 'react'
import Head from 'next/head'

interface Props {
  title: string
  date?: Date | string
}

const OgImageMeta: React.FC<Props> = ({ title, date }) => {
  const params = new URLSearchParams({ title })

  if (date) {
    params.set('date', typeof date === 'string' ? date : date.toISOString())
  }

  const url = `${process.env.NEXT_PUBLIC_OG_IMAGE_SERVICE_URL}/og-image.png?${params}`

  return (
    <Head>
      <meta key='og:image' property='og:image' content={url} />
      <meta key='og:image:width' property='og:image:width' content='1200' />
      <meta key='og:image:height' property='og:image:height' content='600' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:image' content={url} />
    </Head>
  )
}

export default OgImageMeta
