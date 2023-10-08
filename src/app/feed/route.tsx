import type Feed from '@json-feed-types/1_1'
import { parse } from 'node-html-parser'
import * as postApi from '../../lib/post-api'

// TODO: Configure caching.
export async function GET() {
  const posts = await postApi.getAll()

  // TODO: Dynamically switch protocol.
  const response = await fetch(
    `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/feed/html`,
    // FIXME: Feed generation at build time requires that `feed/html` is ready.
    {
      cache: 'no-store',
    },
  )

  const responseHtml = await response.text()
  const renderedPosts = parse(responseHtml)

  const feed: Feed = {
    version: 'https://jsonfeed.org/version/1.1',
    title: 'Ash',
    home_page_url: 'https://ash.gd',
    feed_url: 'https://ash.gd/feed',
    language: 'en-GB',
    authors: [
      {
        name: 'Ash',
        url: 'https://ash.gd',
        avatar:
          'https://gravatar.com/avatar/baa7a8ec68ea6c13a1f0691098872575?s=200',
      },
    ],
    // @ts-expect-error add `content_text`
    items: posts.map(post => ({
      id: post.meta.slug,
      url: `https://ash.gd/posts/${post.meta.slug}`,
      title: post.meta.title,
      summary: post.meta.description,
      date_published: post.meta.date,
      tags: post.meta.tags,
      content_html: renderedPosts
        .querySelector(`#${post.meta.slug}`)
        ?.toString(),
    })),
  }

  return Response.json(feed)
}

export const dynamic = 'force-dynamic'
