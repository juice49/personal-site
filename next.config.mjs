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
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'
import stackWrapper from './src/lib/stack-wrapper.mjs'

const withVanillaExtract = createVanillaExtractPlugin()

const withMdx = mdx() //{
// options: {
//   providerImportSource: '@mdx-js/react',
//   remarkPlugins: [stackWrapper],
//   rehypePlugins: [
//     rehypeSlug,
//     [
//       rehypeAutolinkHeadings,
//       {
//         content: h('span', '#'),
//         properties: {
//           ariaHidden: true,
//           tabIndex: -1,
//           class: 'heading-anchor-link',
//         },
//       },
//     ],
//     [
//       createNextStaticProps,
//       `{
//         meta,
//         tableOfContents,
//       }`,
//     ],
//     [
//       rehypePrettyCode,
//       {
//         theme: 'material-palenight',
//         getHighlighter: options =>
//           getHighlighter({
//             ...options,
//             langs: [
//               ...BUNDLED_LANGUAGES,
//               {
//                 id: 'groq',
//                 scopeName: 'source.groq',
//                 path: '../../vscode-sanity/grammars/groq.json',
//               },
//             ],
//           }),
//         onVisitLine(node) {
//           // Prevent lines from collapsing in `display: grid` mode, and allow
//           // empty lines to be copy/pasted.
//           if (node.children.length === 0) {
//             node.children = [{ type: 'text', value: ' ' }]
//           }
//         },
//       },
//     ],
//     rehypeToc,
//     rehypeTocExport,
//   ],
// },
//}

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

export default withVanillaExtract(
  withMdx({
    pageExtensions: ['ts', 'tsx', 'mdx'],
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
        },
        {
          protocol: 'https',
          hostname: '*.mzstatic.com',
        },
      ],
      formats: ['image/avif', 'image/webp'],
    },
    experimental: {
      mdxRs: true,
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
          if (!options.isServer || options.nextRuntime !== 'nodejs') {
            return config.entry
          }

          const entry = await config.entry()

          return {
            ...entry,
            'render-json-feed': './src/scripts/render-json-feed.tsx',
          }
        },
      }),
  }),
)
