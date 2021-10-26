import { promises as fs } from 'fs'
import path from 'path'
import Post from '../types/post'

export async function getAll(): Promise<Post[]> {
  if (typeof process.env.POSTS_PATH === 'undefined') {
    throw new Error('`POSTS_PATH` is not defined.')
  }

  const postFiles = await fs.readdir(`./src/pages/${process.env.POSTS_PATH}`)

  const postImports = postFiles.filter(filterExtname('mdx')).map(importPost)

  const allPosts = await Promise.all(postImports)

  return allPosts.sort(sortChronologically)
}

function sortChronologically(a: Post, b: Post) {
  return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
}

function filterExtname(extname) {
  return function (filename: string): boolean {
    return path.extname(filename) === '.' + extname
  }
}

async function importPost(filename: string): Promise<Post> {
  const module = await import(`../pages/${process.env.POSTS_PATH}/${filename}`)

  return {
    ...module,
    meta: {
      ...module.meta,
      slug: path.basename(filename, path.extname(filename)),
    },
    source: module.default,
  }
}
