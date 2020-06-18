import { NextPage } from 'next'
import Providers from '../components/providers'

// So, how does this work?
//
// 1. Render the page on the server.
// 2. During a server render, each code block is pushed to a `global`.
// 3. When Next.js renders the page, each code block is processed by Lowlight.
// 4. The Lowlight tree is converted to HTML and passed to the Next.js page props.
// 5. During a client render, React context is created based on the code block page props.
// 6. During a client render, the code block component grabs the code block HTML from the context.

export default async function getCodeBlockStaticProps (Page: NextPage) {
  // const low = require('lowlight')
  // const rehype = require('rehype')
  const { getHighlighter, loadTheme } = require('shiki')

  // @ts-ignore
  const { renderToStaticMarkup } = require('react-dom/server')
  
  // @ts-ignore
  global.__nextSsgCodeBlocks = []

  const props = {
    __nextSsgCodeBlocks: {}
  }

  // Calling the render function collects all of our code blocks.
  // suspect code block hasn't been switched for <Code /> yet
  // OR that our prerender has no context!!
  //
  // yay fixed it!
  renderToStaticMarkup(
    <Providers>
      <Page />
    </Providers>
  )

  const highlighter = await getHighlighter({
    theme: 'Material-Theme-Palenight-High-Contrast'
  })

  // @ts-ignore
  global.__nextSsgCodeBlocks.forEach(({ code, language }) => {
    /* const tree = low.highlight('js', code).value

    var html = rehype()
      .stringify({type: 'root', children: tree})
      .toString() */

    props.__nextSsgCodeBlocks[code] = highlighter.codeToHtml(code, language)
  })

  return props
}
