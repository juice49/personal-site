import { type ComponentType } from 'react'
import { type PostMeta } from '../../../types/post'
import PostLayout from '../../../components/post-layout'

interface Props {
  params: {
    slug: string
    meta: PostMeta
  }
}

const Page: ComponentType<Props> = async ({ params }) => {
  const { default: Content, meta } = await import(`../${params.slug}.mdx`)

  // FIXME toc
  return (
    <PostLayout meta={meta} tableOfContents={[]}>
      <Content />
    </PostLayout>
  )
}

export default Page
