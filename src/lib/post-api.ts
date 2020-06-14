import { promises as fs } from 'fs'
import path from 'path'
import Post, { PostMeta } from '../types/post'

export async function getAll (): Promise<PostMeta[]> {
  if (typeof process.env.POSTS_PATH === 'undefined') {
    throw new Error('`POSTS_PATH` is not defined.')
  }

  const postFiles = await fs.readdir(`./src/pages/${process.env.POSTS_PATH}`)

  const postImports = postFiles
    .filter(filterExtname('mdx'))
    .map(importPost)

  const allPosts = await Promise.all(postImports)

  return allPosts
    .map<PostMeta>((post: Post) => post.meta)
    .sort(sortChronologically)
}

function sortChronologically (a: PostMeta, b: PostMeta) {
  if (a.date < b.date) {
    return 1
  }

  if (a.date > b.date) {
    return -1
  }

  return 0
}

function filterExtname (extname) {
  return function (filename: string): boolean {
    return path.extname(filename) === '.' + extname
  }
}

async function importPost (filename: string): Promise<Post> {
  const module = await import(`../pages/${process.env.POSTS_PATH}/${filename}`)

  return {
    ...module,
    meta: {
      ...module.meta,
      slug: path.basename(filename, path.extname(filename))
    }
  }
}
