import { merge } from 'webpack-merge'
import mdx from '@next/mdx'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { h } from 'hastscript'
import stackWrapper from './src/lib/stack-wrapper.mjs'

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

const withMdx = mdx({
  options: {
    renderer: mdxRenderer,
    remarkPlugins: [stackWrapper],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          content: h('span', '#'),
          properties: {
            ariaHidden: true,
            tabIndex: -1,
            class: 'heading-anchor-link',
          },
        },
      ],
    ],
  },
})

export default withMdx({
  pageExtensions: ['ts', 'tsx', 'mdx'],
  images: {
    domains: [
      'is1-ssl.mzstatic.com',
      'is2-ssl.mzstatic.com',
      'is3-ssl.mzstatic.com',
      'is4-ssl.mzstatic.com',
      'is5-ssl.mzstatic.com',
    ],
    formats: ['image/avif', 'image/webp'],
  },
  async rewrites() {
    return [
      {
        source: '/feed',
        destination: '/feed.json',
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/feed',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/feed+json; charset=utf-8',
          },
        ],
      },
    ]
  },
  webpack: (config, options) => {
    return merge(config, {
      async entry() {
        if (!options.isServer) {
          return config.entry
        }

        const entry = await config.entry()

        return {
          ...entry,
          'render-json-feed': './src/scripts/render-json-feed.tsx',
        }
      },
    })
  },
})
