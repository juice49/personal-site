import { merge } from 'webpack-merge'
import mdx from '@next/mdx'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeToc from '@stefanprobst/rehype-extract-toc'
import rehypeTocExport from '@stefanprobst/rehype-extract-toc/mdx'
import { getHighlighter, BUNDLED_LANGUAGES } from 'shiki'
import { parse } from 'acorn'
import { h } from 'hastscript'
import stackWrapper from './src/lib/stack-wrapper.mjs'

const withMdx = mdx({
  options: {
    providerImportSource: '@mdx-js/react',
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
      [
        createNextStaticProps,
        `{
          meta,
          tableOfContents,
        }`,
      ],
      [
        rehypePrettyCode,
        {
          theme: 'material-palenight',
          getHighlighter: options =>
            getHighlighter({
              ...options,
              langs: [
                ...BUNDLED_LANGUAGES,
                {
                  id: 'groq',
                  scopeName: 'source.groq',
                  path: '../../vscode-sanity/grammars/groq.json',
                },
              ],
            }),
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow
            // empty lines to be copy/pasted.
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }]
            }
          },
        },
      ],
      rehypeToc,
      rehypeTocExport,
    ],
  },
})

function createNextStaticProps(map) {
  return function transformer(tree) {
    tree.children.push({
      type: 'mdxjsEsm',
      data: {
        estree: parse(
          `
          export const getStaticProps = () => ({
            props: ${map},
          })
          `,
          {
            sourceType: 'module',
          },
        ),
      },
    })
  }
}

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
  webpack: (config, options) =>
    merge(config, {
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
    }),
})
