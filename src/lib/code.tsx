import { NextPage } from 'next'
import { MDXProvider } from '@mdx-js/react'
import djb2a from 'djb2a'
import Providers from '../components/providers'
import Code from '../components/code'

// So, how does this work?
//
// 1. Render the page on the server.
// 2. During a server render, each code block is pushed to a `global`.
// 3. When Next.js renders the page, each code block is rendered by Shiki.
// 4. The Shiki output is passed to the Next.js page props.
// 5. During a client render, React context is created based on the code block page props.
// 6. During a client render, the code block component grabs the code block HTML from the context.

export default async function getCodeBlockStaticProps(Page: NextPage) {
  const { getHighlighter, BUNDLED_LANGUAGES } = require('shiki')

  // @ts-ignore
  const { renderToStaticMarkup } = require('react-dom/server')

  global.__nextSsgCodeBlocks = []

  const props = {
    __nextSsgCodeBlocks: {},
  }

  renderToStaticMarkup(
    <Providers>
      <MDXProvider
        components={{
          code: function CodeComponent({ className, children }) {
            return (
              <Code
                code={children}
                language={className.replace(/language-/, '')}
              />
            )
          },
        }}
      >
        <Page />
      </MDXProvider>
    </Providers>,
  )

  const highlighter = await getHighlighter({
    theme: 'material-palenight',
    langs: [
      ...BUNDLED_LANGUAGES,
      {
        id: 'groq',
        scopeName: 'source.groq',
        path: '../../vscode-sanity/grammars/groq.json',
      },
    ],
  })

  global.__nextSsgCodeBlocks.forEach(({ code, language }) => {
    const hash = djb2a(code)
    props.__nextSsgCodeBlocks[hash] = highlighter.codeToHtml(code, language)
  })

  return props
}
