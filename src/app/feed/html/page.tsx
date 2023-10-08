import { type ComponentType } from 'react'
import { type Metadata } from 'next'
import * as postApi from '../../../lib/post-api'

// TODO: Configure caching.
const Page: ComponentType = async () => {
  const posts = await postApi.getAll()
  return posts.map(post => {
    return (
      <article id={post.meta.slug}>
        <post.default />
      </article>
    )
  })
}

export default Page

export const metadata: Metadata = {
  robots: {
    index: false,
  },
}
