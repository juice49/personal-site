export interface PostMeta {
  title: string
  slug: string
  date: string
  description?: string
  column?: string
  tags?: string[]
}

interface Post {
  meta: PostMeta
  default: string
  source: string
}

export default Post
