const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

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
    renderer: mdxRenderer
  }
})

module.exports = withPlugins([
  [optimizedImages, {
    imagesFolder: 'img'
  }],
], withMdx({
  pageExtensions: ['tsx', 'mdx'],
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module.
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    return config
  }
}))
