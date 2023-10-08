import type Feed from '@json-feed-types/1_1'
import { parse } from 'node-html-parser'
import * as postApi from '../../lib/post-api'

// TODO: Configure caching.
export async function GET() {
  const posts = await postApi.getAll()
  const response = await fetch('http://localhost:3000/feed/html')
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
