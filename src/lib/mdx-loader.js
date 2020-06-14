const { getOptions } = require('loader-utils')
const mdx = require('@mdx-js/mdx')

const DEFAULT_RENDERER = `
import React from 'react'
import { mdx } from '@mdx-js/react'
`

const loader = async function (content) {
  const callback = this.async()

  const options = {
    ...getOptions(this),
    filepath: this.resourcePath
  }

  let result

  try {
    result = await mdx(content, options)
  } catch (err) {
    return callback(err)
  }

  const { renderer = DEFAULT_RENDERER } = options
  let code = `${renderer}\n${result}`
  // let code = `${renderer}\n${result}`.replace('export default', 'const Page =')
  // code += `\n export default Page`

  console.log('[CODE]', code)

  return callback(null, code)

  /* const compiler = mdx.createCompiler()
  const fileOpts = { contents: content }
  const result = await compiler.process(fileOpts)

  console.log('[RESULT]', result) */

}

module.exports = loader
