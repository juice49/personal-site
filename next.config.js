const mdxRenderer = `
  import React from 'react'
  import { mdx } from '@mdx-js/react'
  import getCodeBlockStaticProps from '../../lib/code'

  export async function getStaticProps () {
    const props = await getCodeBlockStaticProps(MDXContent)

    return {
      props
    }
  }
`

const withMdx = require('@next/mdx')({
  options: {
    renderer: mdxRenderer,
  },
})

module.exports = withMdx({
  pageExtensions: ['tsx', 'mdx'],
  images: {
    domains: [
      'is1-ssl.mzstatic.com',
      'is2-ssl.mzstatic.com',
      'is3-ssl.mzstatic.com',
      'is4-ssl.mzstatic.com',
      'is5-ssl.mzstatic.com',
    ],
  },
})
