import { type ComponentType } from 'react'
import { type Metadata } from 'next'
import PostLayout from '../../../components/post-layout'

interface Props {
  params: {
    slug: string
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { meta } = await import(`../${params.slug}.mdx`)
  const title = `${meta.title} - Ash`

  return {
    title,
    openGraph: {
      title,
    },
  }
}
